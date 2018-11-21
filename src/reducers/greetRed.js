const initial_state = `CATS COFFEE MUG`

export default (state = initial_state, action) => {
    switch(action.type){
        case 'greetRed':
            return action.payload

            default:
            return  state;
    }

}