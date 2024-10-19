import React from 'react'
import dateFormat from 'dateformat'
import COMMENTS from '../../data/comments'
import { CardText } from 'reactstrap'
export default function LoadComments({commentId}) {
    let comments = COMMENTS.filter((comment=>comment.dishId==commentId))
  CardText
  return (
    <div>
      {
      comments.map((comment)=>{
        return (
            <div key={comment.id}>
                <CardText>
                    {comment.author}
                </CardText>
                
                    <CardText>
                    {comments.comment}
                    </CardText>
                    
                <CardText>
                    {dateFormat(comments.date, "dddd,mmmm, yyyy")}
                    </CardText>
               
            </div>
        )
      })
      }
    </div>
  )
}
