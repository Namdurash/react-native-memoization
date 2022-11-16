import * as React from 'react';
import {rootStore} from './rootStore';
import {Provider} from 'react-redux';

export const RootProvider: React.FC<React.PropsWithChildren> = ({children}) => {
  return <Provider store={rootStore}>{children}</Provider>;
};
