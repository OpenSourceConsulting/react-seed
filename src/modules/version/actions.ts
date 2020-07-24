import asyncAction from 'common/lib/asyncAction';
import ApiFailure from 'common/types/ApiFailure';
import { Version } from './types';

const PREFIX = 'version/';

export const getVersion = asyncAction<void, Version, ApiFailure>(`${PREFIX}GET_VERSION`);
