export const ADD_DATA = "ADD_DATA";
export const DELETE_DATA = "DELETE_DATA";
export const UPDATE_STATUS = "UPDATE_STATUS";

export const UPDATE_DATA = "UPDATE_DATA";

export const addData = (data) => {
  console.log("Action is called", data);
  return {
    type: ADD_DATA,
    data,
  };
};

export const deleteData = (dataId) => {
  return {
    type: DELETE_DATA,
    payload: dataId,
  };
};

export const updateStatus = (id, newStatus) => {
  return {
    type: UPDATE_STATUS,
    payload: { id, newStatus },
  };
};

export const editData = (newid, newType, newHeading, newText) => {
  console.log("i am acton", newid);
  return {
    type: UPDATE_DATA,
    payload: { newid, newType, newHeading, newText },
  };
};
