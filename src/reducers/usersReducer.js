const initialState = {
    users : []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case "ADD_USER":
            console.log(action.payload)
            return { ...state, users: [...state.users, action.payload]};
            //break;

            default:
                return state;

    }
}

export default usersReducer;