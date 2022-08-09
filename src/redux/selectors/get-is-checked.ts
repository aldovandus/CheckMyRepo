import {createSelector} from '@reduxjs/toolkit';
import {selectState} from './get-state';

const selectIsChecked = createSelector(selectState, state => state.isChecked);

export {selectIsChecked};
