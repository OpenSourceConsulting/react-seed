import Cookies from 'js-cookie';
import { refresh, setApiJwt } from './api';

enum Key {
  accessToken = 'accessToken',
  refreshToken = 'refreshToken',
  sessionStorage = 'react-seed-auth',
}

export function getAccessToken({ bearer } = { bearer: false }): string | undefined {
  const prefix = bearer ? 'Bearer ' : '';
  let cookieToken;
  try {
    cookieToken = Cookies.get(Key.accessToken);
  } catch {
    cookieToken = undefined;
  }
  const token: string | undefined = cookieToken;
  return token ? `${prefix}${token}` : token;
}

export function setAccessToken(accessToken: string): void {
  Cookies.set(Key.accessToken, accessToken);
}

export function getRefreshToken({ bearer } = { bearer: false }): string | undefined {
  const prefix = bearer ? 'Bearer ' : '';
  const token: string | undefined = Cookies.get(Key.refreshToken);
  return token ? `${prefix}${token}` : token;
}

export function setRefreshToken(refreshToken: string): void {
  Cookies.set(Key.refreshToken, refreshToken);
}

export function clearTokens({ accessToken, refreshToken } = { accessToken: true, refreshToken: true }): void {
  if (accessToken) Cookies.remove(Key.accessToken);
  if (refreshToken) Cookies.remove(Key.refreshToken);
}

/**
 * Refresh accessToken on initial auth check.
 *
 * If refreshToken is valid, the app get new accessToken from server.
 *
 * If not, the app logs out.
 */
export async function refreshTokenOnInitialAuthCheck(): Promise<void> {
  const { accessToken } = await refresh();
  setApiJwt(accessToken);
}
