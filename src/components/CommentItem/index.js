// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const ReturnList = props => {
  let likeValue
  let classPara
  const {sendValue, like, deleteGivenValue} = props
  const {id, name, comment, isLiked, profileColorValue} = sendValue
  const deleteId = () => {
    deleteGivenValue(id)
  }
  const clickLike = () => {
    like(id)
  }
  if (isLiked === true) {
    likeValue =
      'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    classPara = 'liked'
  } else {
    likeValue =
      'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    classPara = ''
  }
  return (
    <li>
      <div className="list-container">
        <div className="pic-container">
          <p className={`${profileColorValue} "profile-el"`}>{name[0]}</p>
        </div>
        <div>
          <div className="profile-container">
            <h2 className="inner-heading">{name}</h2>
            <p className="para">{formatDistanceToNow(new Date())}</p>
          </div>
          <p className="description-el">{comment}</p>
        </div>
      </div>
      <div className="like-del-container">
        <div className="like-container">
          <button
            className="like-btn"
            type="submit"
            id="like"
            onClick={clickLike}
          >
            <img src={likeValue} alt="like" />
          </button>
          <p className={classPara} htmlFor="like">
            Like
          </p>
        </div>
        <div>
          <button
            className="delete-img"
            type="button"
            testid="delete"
            onClick={deleteId}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
      <hr />
    </li>
  )
}

export default ReturnList
