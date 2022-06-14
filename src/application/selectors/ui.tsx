import { RootState } from '../store'

export const getLoading = (state: RootState): boolean => state.ui.loading
