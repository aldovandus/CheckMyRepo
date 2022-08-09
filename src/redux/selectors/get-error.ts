import {createSelector} from '@reduxjs/toolkit';
import {selectState} from './get-state';

const selectError = createSelector(selectState, state => state.error);

export {selectError};
