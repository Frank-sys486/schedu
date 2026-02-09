import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RawPageText, Curriculum } from '../../types/curriculum';

interface CurriculumState {
  rawText: RawPageText[] | null;
  parsedCurriculum: Curriculum | null;
}

const initialState: CurriculumState = {
  rawText: null,
  parsedCurriculum: null,
};

export const curriculumSlice = createSlice({
  name: 'curriculum',
  initialState,
  reducers: {
    setRawText: (state, action: PayloadAction<RawPageText[]>) => {
      state.rawText = action.payload;
    },
    setParsedCurriculum: (state, action: PayloadAction<Curriculum>) => {
      state.parsedCurriculum = action.payload;
    },
    resetCurriculum: (state) => {
      state.rawText = null;
      state.parsedCurriculum = null;
    },
  },
});

export const { setRawText, setParsedCurriculum, resetCurriculum } = curriculumSlice.actions;
export default curriculumSlice.reducer;