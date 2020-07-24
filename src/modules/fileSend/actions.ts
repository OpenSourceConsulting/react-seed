import asyncAction from 'common/lib/asyncAction';
import ApiFailure from 'common/types/ApiFailure';
import { FilePayload } from './types';

const PREFIX = 'fileSend/';

export const send = asyncAction<FilePayload, void, ApiFailure>(`${PREFIX}SEND`);
