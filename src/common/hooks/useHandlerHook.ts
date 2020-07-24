import { useCallback } from 'react';
import ApiHandler from 'common/types/ApiHandler';
import Handler from 'common/types/Handler';
import ApiFailure from 'common/types/ApiFailure';

export type HandlerHook<T> = {
  onSuccess: (callback: Handler<T>) => void;
  onFailure: (callback: Handler<ApiFailure>) => void;
};

export default function useHandlerHook<T>(): [ApiHandler<T>, HandlerHook<T>] {
  const handler: ApiHandler<T> = {};
  const onSuccess = useCallback((callback: Handler<T>) => {
    handler.success = callback;
  }, []);
  const onFailure = useCallback((callback: Handler<ApiFailure>) => {
    handler.failure = callback;
  }, []);

  return [handler, { onSuccess, onFailure }];
}
