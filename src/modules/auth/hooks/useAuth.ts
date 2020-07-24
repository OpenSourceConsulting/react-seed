import { useSelector } from 'react-redux';
import { RootState } from 'modules/reducers';
import { Auth } from '../types';

export default function useAuth(): Auth {
  const auth = useSelector((state: RootState) => state.auth);
  return auth;
}
