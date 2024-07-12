import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import ReturnList from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const commentArray = []

// Write your code here
class Comments extends Component {
  state = {
    nameValue: '',
    commentValue: '',
    givenArray: commentArray,
    profileColorValue: '',
  }

  deleteValue = id => {
    const {givenArray} = this.state
    const filterValue = givenArray.filter(eachValue => eachValue.id !== id)
    this.setState({givenArray: filterValue})
  }

  likeValue = id => {
    this.setState(prevState => ({
      givenArray: prevState.givenArray.map(eachValue => {
        if (eachValue.id === id) {
          return {...eachValue, isLiked: !eachValue.isLiked}
        }
        return eachValue
      }),
    }))
  }

  changeName = event => {
    this.setState({nameValue: event.target.value})
  }

  changeComment = event => {
    this.setState({commentValue: event.target.value})
  }

  createValue = event => {
    event.preventDefault()
    const random = Math.floor(
      Math.random() * initialContainerBackgroundClassNames.length,
    )
    const {nameValue, commentValue} = this.state
    const obj = {
      id: uuidv4(),
      name: nameValue,
      comment: commentValue,
      isLiked: false,
      profileColorValue: initialContainerBackgroundClassNames[random],
    }
    this.setState(prevState => ({
      givenArray: [...prevState.givenArray, obj],
      nameValue: '',
      commentValue: '',
      profileColorValue: '',
    }))
  }

  render() {
    const {nameValue, commentValue, givenArray, profileColorValue} = this.state
    console.log(givenArray)
    return (
      <div className="bg-container">
        <div className="main-container">
          <div className="inner-container">
            <h1 className="main-heading">Comments</h1>
            <p className="para">Say Something about 4.0 Technologies</p>
            <form className="form-container" acceptCharset="utf-8">
              <input
                className="name-el"
                type="text"
                value={nameValue}
                placeholder="Your Name"
                onChange={this.changeName}
              />
              <textarea
                className="comment-el"
                rows="8"
                placeholder="Your Comment"
                value={commentValue}
                onChange={this.changeComment}
              />
            </form>
            <div>
              <button
                className="custom-btn"
                type="submit"
                data-testid="delete"
                onClick={this.createValue}
              >
                Add Comment
              </button>
            </div>
          </div>
          <div>
            <img
              className="logo"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <hr />
        <div>
          <div className="comment-container">
            <p className="count-el">{givenArray.length}</p>
            <p className="comment-name">Comments</p>
          </div>
          <ul className="list-prop">
            {givenArray.map(eachValue => (
              <ReturnList
                key={eachValue.id}
                sendValue={eachValue}
                like={this.likeValue}
                profileColor={profileColorValue}
                deleteGivenValue={this.deleteValue}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
