import { createAsyncThunk as reduxCreateAsyncThunk } from '@reduxjs/toolkit';
import { TApplicationDispatch, TApplicationState } from 'store/index';
import { TError } from 'api/factory/types';

export const createAsyncThunk = reduxCreateAsyncThunk.withTypes<{
    state: TApplicationState;
    dispatch: TApplicationDispatch;
    rejectValue: TError;
    extra: undefined;
}>();
