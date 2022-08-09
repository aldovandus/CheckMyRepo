import {createSelector} from '@reduxjs/toolkit';
import {selectState} from './get-state';

const selectIsConnected = createSelector(
  selectState,
  state => state.isConnected,
);

export {selectIsConnected};
