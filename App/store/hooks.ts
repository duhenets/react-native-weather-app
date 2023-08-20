import { TypedUseSelectorHook, createDispatchHook, createSelectorHook } from 'react-redux';
import { TApplicationDispatch, TApplicationState } from 'store/index';

export const useApplicationDispatch: () => TApplicationDispatch = createDispatchHook();

export const useApplicationSelector: TypedUseSelectorHook<TApplicationState> = createSelectorHook();
