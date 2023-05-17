import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {each, colorChange, deletedComment} = props
  const {name, comment, isLike, date, id} = each
  const newDate = formatDistanceToNow(date)
  const likeColor = () => {
    colorChange(id)
  }
  const deleteComment = () => {
    deletedComment(id)
  }
  const imageColor = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const likeColorText = isLike ? 'like-color' : ''
  return (
    <li className="li">
      <div className="for-flex">
        <p className="initial">{name[0]}</p>
        <div className="for-flex1">
          <p className="name">{name}</p>
          <p className="time">{newDate}</p>
        </div>
      </div>
      <p className="comment">{comment}</p>
      <div className="for-flex2">
        <div className="for-flex3">
          <img
            src={imageColor}
            alt="like"
            className="like-img"
            onClick={likeColor}
          />
          <button
            className={`for-likeText ${likeColorText}`}
            onClick={likeColor}
            type="button"
          >
            Like
          </button>
        </div>
        <button
          data-testId="delete"
          className="delete-button"
          onClick={deleteComment}
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}
export default CommentItem
