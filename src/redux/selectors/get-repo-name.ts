import {createSelector} from '@reduxjs/toolkit';
import {selectState} from './get-state';

const selectRepoName = createSelector(selectState, state =>
  state.error === 404
    ? 'orBadRepo'
    : !state.isConnected && state.isChecked
    ? 'rightRepo'
    : state.repoName
    ? state.repoName
    : 'repo',
);

export {selectRepoName};
