import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import purchase_book from './BookAction';

const mapState = (state) => {
    return {
        myBook:state.BookReducer,
        myStudent:state.studentReducer
    }
}

const mapDispatch = (dispatch) => {
    return {
        const bookDispatch = useDispatch();
    }
}

const BookContainer = () => {
    // const noOfBooks = useSelector(state => state.counter)
    // const studentDetails = useSelector(state => state.studentId)
    // const dispatch = useDispatch()
  return (
    <>
    <div>
    <br />
      Book Container
    </div>
    <h2>No. of Books - {noOfBooks} </h2>
    {/* <button onClick={()=>{dispatch(purchase_book())}}>Buy Book</button> */}
    <button onClick={()=>{dispatch(purchase_book())}}>Buy Book</button>
    <br />
    <br />
    <br />
    <div>Student</div>
    <h2>Student details - {studentDetails}</h2>
    </>
  )
}

export default BookContainer
