export const createProject = (project) => {
  return (dispatch, getState) => {
    // make async call to database
    dispatch({ type: 'CREATE_PROJECT', project });

    // same as ES6
    // dispatch({ type: 'CREATE_PROJECT', project: project });
  }
};