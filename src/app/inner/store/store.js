import {combineSlices, configureStore} from '@reduxjs/toolkit';
import todoListSlice from './slices/todoListSlice/slice';

const rootReducer = combineSlices(todoListSlice);

const store = configureStore({
    reducer: rootReducer
});

export default store;