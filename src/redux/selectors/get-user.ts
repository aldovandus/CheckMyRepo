import {createSelector} from '@reduxjs/toolkit';
import {selectState} from './get-state';

const selectUser = createSelector(selectState, state =>
  state.error === 404
    ? 'badUser'
    : !state.isConnected && state.isChecked
    ? 'rightUser'
    : state.user
    ? state.user
    : 'user',
);

export {selectUser};
