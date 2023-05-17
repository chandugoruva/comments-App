import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

// const initialContainerBackgroundClassNames = [
//   'amber',
//   'blue',
//   'orange',
//   'emerald',
//   'teal',
//   'red',
//   'light-blue',
// ]

class Comments extends Component {
  state = {
    nameInput: '',
    commentInput: '',
    commentList: [],
  }

  commentButton = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const newComment = {
      id: uuidv4(),
      name: nameInput,
      comment: commentInput,
      date: new Date(),
      isLike: false,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  onChangeName = event => {
    this.setState({nameInput: event.target.value})
  }

  onChangeComment = event => {
    this.setState({commentInput: event.target.value})
  }

  colorChange = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachContact => {
        if (id === eachContact.id) {
          return {...eachContact, isLike: !eachContact.isLike}
        }
        return eachContact
      }),
    }))
  }

  deletedComment = id => {
    const {commentList} = this.state
    const updatedList = commentList.filter(each => each.id !== id)
    this.setState({commentList: updatedList})
  }

  render() {
    const {commentList, nameInput, commentInput} = this.state
    return (
      <div className="bg-color">
        <h1 className="heading">Comments</h1>
        <div className="for-subFlex">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="comments-image"
          />
          <div>
            <p className="paragraph">Say something about 4.0 Technologies</p>
            <form>
              <input
                type="text"
                placeholder="Your Name"
                className="name-input"
                onChange={this.onChangeName}
                value={nameInput}
              />
              <br />
              <textarea
                cols="40"
                rows="6"
                placeholder="Your Comment"
                className="comment-input"
                onChange={this.onChangeComment}
                value={commentInput}
              />
              <br />
              <button
                className="button"
                onClick={this.commentButton}
                type="submit"
              >
                Add Comment
              </button>
            </form>
          </div>
        </div>
        <hr />
        <p>
          <span className="for-span">{commentList.length}</span> comments
        </p>
        <ul>
          {commentList.map(each => (
            <CommentItem
              each={each}
              colorChange={this.colorChange}
              deletedComment={this.deletedComment}
              key={each.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
