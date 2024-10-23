import React from 'react'
import dateFormat from 'dateformat'
import { connect } from 'react-redux'
import { CardText } from 'reactstrap'


const mapStateToProps = state =>{
  return {
    comments: state.comments,
  }
}
const LoadComments = (props) => {
  
  let comments = props.comments.filter((comment=>comment.dishId==props.commentId))
  CardText
  return (
    <div>
      {
      comments.map((comment)=>{
        return (
            <div className='shadow px-4 py-3 mt-2 rounded' key={comment.id}>
            <CardText>
                <b>{comment.author}</b>: {comment.comment}
            </CardText>

                <CardText>
                <b>Rating: { "★".repeat(comment.rating) }</b>
                </CardText>
                    
                <CardText>
                     {dateFormat(comment.date, "dddd, mmmm, yyyy")} 
                </CardText>
               
            </div>
        )
      })
      }
    </div>
  )
}


export default connect(mapStateToProps) (LoadComments);