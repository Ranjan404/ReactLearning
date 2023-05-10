import {buy_Book} from './BookTypes'

const purchase_book =()=> {
    return {
        type : buy_Book,
        payload: 2
    }
}

export default purchase_book