import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { logout } from 'modules/auth';

export default function useLogout() {
  const dispatch = useDispatch();

  const useLogout = useCallback(() => dispatch(logout.request()), [dispatch]);

  return useLogout;
}
