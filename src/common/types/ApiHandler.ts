import Handler from './Handler';
import ApiFailure from './ApiFailure';

type ApiHandler<T> = {
  success?: Handler<T>;
  failure?: Handler<ApiFailure>;
};

export default ApiHandler;
