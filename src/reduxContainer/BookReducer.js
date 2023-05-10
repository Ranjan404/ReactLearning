import { buy_Book } from "./BookTypes";

const initialState = {
    counter : 20,
    data:[]
}

const BookReducer = (state = initialState, action) => {
    // console.log("ppppp=>",action.payload)
    switch(action.type) {
        case buy_Book: 
        return {
            ...state, counter: state.counter - action.payload 
        }
        default : return state
    }
}
export default BookReducer;