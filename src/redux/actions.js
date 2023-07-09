
export const ADD_DATA = 'ADD_DATA';
export const DELETE_DATA = 'DELETE_DATA';








export const addData = (data) => {
  console.log("Action is called", data);
  return {
    type: ADD_DATA,
    data
  };
};

export const deleteData = (dataId) => {
  return {
    type: DELETE_DATA,
    dataId:dataId
  };
};