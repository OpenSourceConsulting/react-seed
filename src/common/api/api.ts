import axios from 'axios';
import { getAccessToken, getRefreshToken, setAccessToken, clearTokens } from './auth';
import { store } from 'modules';
import { login, logout } from 'modules/auth';

const API_BASE_URL: string = process.env.REACT_APP_API_BASE_URL || '';

const initialConfig = Object.freeze({
  baseURL: API_BASE_URL,
  timeout: 0,
});

/**
 * set base url for api
 * @param baseUrl string
 */
function setBaseUrl(baseUrl: string, contextPath = ''): void {
  api.defaults.baseURL = baseUrl;
}

/** The API */
const api = createApiInstance(getAccessToken({ bearer: true }));

api.interceptors.response.use(
  (result) => result?.data?.data,
  async (error) => {
    // Server does not response
    if (error === undefined) throw error;

    if (error.response?.status === 401) {
      // 401 Unauthorized
      try {
        // Get next access token
        const { accessToken } = await refresh();

        // Update access token in API and cookie to next access token
        setAccessToken(accessToken);

        setApiJwt(accessToken);

        // Retry failed request
        const retryConfig = { ...error.config, headers: { Authorization: `Bearer ${accessToken}` } };
        return api(retryConfig);
      } catch (error) {
        clearTokens();
        store.dispatch(logout.request());
      }
    }

    throw error;
  },
);

/**
 * Create an axios API instance based on default config.
 *
 * @param bearerJwt A bearer JWT. If the token is truthy, the instance has the Authorization header.
 */
function createApiInstance(bearerJwt: string | undefined) {
  return axios.create({ ...initialConfig, ...(bearerJwt && { headers: { common: { Authorization: bearerJwt } } }) });
}

/**
 * Refresh the `accessToken` and update the API's header.
 */
async function refresh(): Promise<{ accessToken: string; refreshToken: string }> {
  /** The API instance for refreshing; Refresh token fetched from cookies. */
  const refreshApi = createApiInstance(getRefreshToken({ bearer: true }));

  try {
    const result = await refreshApi({
      url: '/api/users/refresh',
      method: 'post',
    });

    if (result.data.status === 'success' && result.data.data !== null) {
      store.dispatch(login.success(result.data.data));
      return result.data.data;
    } else {
      throw result;
    }
  } catch (error) {
    store.dispatch(logout.request());
    throw error;
  }
}

/**
 * Set bearer token to the API.
 * @param token A JWT. Not bearer.
 */
function setApiJwt(token: string): void {
  const bearerToken = `Bearer ${token}`;
  api.defaults.headers.common.Authorization = bearerToken;
}

export { API_BASE_URL, setBaseUrl, refresh, setApiJwt };

export default api;
