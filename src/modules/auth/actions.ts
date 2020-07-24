import asyncAction from 'common/lib/asyncAction';
import ApiFailure from 'common/types/ApiFailure';
import { Auth, LoginInfo } from './types';

const PREFIX = 'auth/';

export const login = asyncAction<LoginInfo, Auth, ApiFailure>(`${PREFIX}LOGIN`);
export const logout = asyncAction<void, void, void>(`${PREFIX}LOGOUT`);
