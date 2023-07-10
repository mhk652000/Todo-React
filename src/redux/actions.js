
export const ADD_DATA = 'ADD_DATA';
export const DELETE_DATA = 'DELETE_DATA';
export const UPDATE_STATUS = 'UPDATE_STATUS';








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
    payload:dataId,
  };
};




export const updateStatus = (id, newStatus) => {
  return {
    type: UPDATE_STATUS,
    payload: { id, newStatus },
  };
};