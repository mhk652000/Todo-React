export default function cardData(data = [], action) {
  switch (action.type) {
    case "ADD_DATA":
      console.log("ADD_DATA condition", action);
      return [action.data, ...data];

    case "UPDATE_STATUS":
      const { id, newStatus } = action.payload;
      const updatedCardData = data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            status: newStatus,
          };
        }
        return item;
      });
      return updatedCardData;

    case "DELETE_DATA":
      const itemId = action.payload;
      const updatedData = data.filter((item) => {
        return item.id !== itemId;
      });
      return updatedData;

    case "UPDATE_DATA":
      const { newid, newType, newHeading, newText } = action.payload;
      console.log("rdueddd", newid);
      var editedDataa = data.map((item) => {
        if (item.id === newid) {
          return {
            ...item,
            type: newType,
            heading: newHeading,
            text: newText,
          };
        }
        return item;
      });
      console.log("EDITED DATA: ", editedDataa);
      return editedDataa;
    default:
      return data;
  }
}
