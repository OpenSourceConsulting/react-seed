import { useSelector } from 'react-redux';
import { RootState } from 'modules/reducers';
import { Version } from '..';

export default function useVersion(): Version {
  const version = useSelector((state: RootState) => state.version);
  return version;
}
