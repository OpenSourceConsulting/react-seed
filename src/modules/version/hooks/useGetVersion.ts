import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { getVersion, Version } from '..';
import useHandlerHook, { HandlerHook } from 'common/hooks/useHandlerHook';

export default function useGetVersion(): [() => void, HandlerHook<Version>] {
  const dispatch = useDispatch();
  const [handler, useHandler] = useHandlerHook<Version>();

  const _getVersion = useCallback(() => dispatch(getVersion.request(undefined, handler)), [dispatch, handler]);

  return [_getVersion, useHandler];
}
