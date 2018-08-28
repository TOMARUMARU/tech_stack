export const selectLibrary = (libraryId) => {
  return {
    type: 'select_libarary',
    payload: libraryId
  };
};
