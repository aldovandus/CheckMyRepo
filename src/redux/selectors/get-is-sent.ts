import {createSelector} from '@reduxjs/toolkit';
import {selectState} from './get-state';

const selectIsSent = createSelector(selectState, state => state.isSent);

export {selectIsSent};
