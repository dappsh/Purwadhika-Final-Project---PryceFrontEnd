const initial_state = null

export default (state = initial_state, action) => {
    switch(action.type){
        case 'invoiceRed':
            return action.payload

            default:
            return  state;
    }

}