import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { FilePayload } from '../types';
import { send } from '../actions';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useFileSend() {
  const dispatch = useDispatch();
  return useCallback((data: FilePayload) => dispatch(send.request(data)), [dispatch]);
}
