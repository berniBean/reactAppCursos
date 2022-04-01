const initialState = {
    open: false,
    mensaje : ""
};

const openSanckBarReducer = {state = initialState, action} =>{
    switch(action.type){
        case "OPEN_SNACKBAR" :
            return {
                ...state,
                open : action.openMansaje.open,
                mensaje :action.openMansaje.mensaje
            };
            default:
                return state;
    }
}

export default openSanckBarReducer