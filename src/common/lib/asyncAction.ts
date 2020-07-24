import { createCustomAction } from 'typesafe-actions';
import ApiHandler from 'common/types/ApiHandler';

/**
 * Async Action Creator
 * @param asyncActionName string
 */
function asyncAction<TRequest, TSuccess, TFailure, THandler = ApiHandler<TSuccess>>(asyncActionName: string) {
  return {
    request: createCustomAction(asyncActionName + '_REQUEST', (payload: TRequest, handler?: THandler) => ({
      payload,
      handler,
    })),
    success: createCustomAction(asyncActionName + '_SUCCESS', (payload: TSuccess, handler?: THandler) => ({
      payload,
      handler,
    })),
    failure: createCustomAction(asyncActionName + '_FAILURE', (payload: TFailure, handler?: THandler) => ({
      payload,
      handler,
    })),
  };
}

export default asyncAction;
