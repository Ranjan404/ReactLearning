const studentState = {
    studentId: 'CSS334',
    name: 'Ranjan',
    email: 'ranjan@gmail.com',
    subject: ['Math,English']
}

const studentReducer = (state=studentState,action) => {
    switch(action.type){
        case "SET_MAIL":
            state = {
                ...state,
                name:action.payload
            }
            return state
            break

            case "NEW_USER_ID":
                state = {
                    ...state,
                    userId:action.payload
                }
                return state
                break

                default:
                    return state
    }
}

export default studentReducer