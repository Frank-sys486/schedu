import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RawPageText } from '../../types/curriculum';

interface CurriculumState {
  rawText: RawPageText[] | null;
}

const initialState: CurriculumState = {
  rawText: null,
};

export const curriculumSlice = createSlice({
  name: 'curriculum',
  initialState,
  reducers: {
    setRawText: (state, action: PayloadAction<RawPageText[]>) => {
      state.rawText = action.payload;
    },
  },
});

export const { setRawText } = curriculumSlice.actions;
export default curriculumSlice.reducer;