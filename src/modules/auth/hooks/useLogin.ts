import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { login, LoginInfo } from '..';

export default function useLogin() {
  const dispatch = useDispatch();
  return useCallback((data: LoginInfo) => dispatch(login.request(data)), [dispatch]);
}
