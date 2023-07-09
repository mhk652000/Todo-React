export default function cardData(data=[], action){

    switch(action.type){
        case "ADD_DATA":
            console.log("ADD_DATA condition", action);
            return [action.data,...data];

        case "DELETE_DATA":
            console.log("DELETE_DATA condition", action);
            return 1+4;
        default:
            return []

    }
    
    
}