import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Button, Form, Input } from 'reactstrap'

const mapDispatchToProps = (dispatch)=>{
return {
    addComment: (dishId, rating, author, comment) =>{
        dispatch({
            type: 'ADD_COMMENT',
            payload: {
                dishId: dishId,
                author: author,
                rating: rating,
                comment: comment,

            }
        })
    }
}
}
const CommentForm = ({dishId, addComment}) => { 
    const [comment, setComment] = useState({
        author: '',
        rating: '',
        comment: '',
    })
    function handleInputChange(e) {
        
        setComment({
            ...comment,
            [e.target.name]: e.target.value,
        })
    }
    function handleSubmit(e) {
        addComment(dishId, comment.rating, comment.author, comment.comment)
        setComment({
            author: '',
            rating: '',
            comment: '',
        })
        e.preventDefault()
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Input
                    type='text'
                    name='author'
                    placeholder='Your Name'
                    required
                    value={comment.author}
                    onChange={handleInputChange}
                />
                <br />
                <Input
                    type='select'
                    name='rating'
                    value={comment.rating}
                    onChange={handleInputChange}
                >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input><br />
                <Input
                    type='textarea'
                    name='comment'
                    placeholder='Your Comment'
                    value={comment.comment}
                    onChange={handleInputChange}
                >
                </Input>
                <br />
                <Button type='submit'>Submit Your Comment</Button>
            </Form>
        </div>
    )
}

export default connect(null, mapDispatchToProps) (CommentForm);
