import {RootState} from '../store';

const selectState = (state: RootState) => state.RepositoryReducer;

export {selectState};
