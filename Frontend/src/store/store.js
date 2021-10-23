import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './booksSlice';
import memberSlice from './memberSlice';

export default configureStore({
  reducer: {
    books: booksSlice,
    members : memberSlice,
  },
})