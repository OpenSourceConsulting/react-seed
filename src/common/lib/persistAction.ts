import { createAction } from 'typesafe-actions';

/**
 * Persist Action Creator
 * @param actionName string
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function persistAction<TType>(actionName: string) {
  return createAction(actionName)<TType>();
}

export default persistAction;
