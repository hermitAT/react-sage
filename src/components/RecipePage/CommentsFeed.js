import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { timeAgo } from "helpers/timeAgo";

import "./CommentsFeed.scss"


export default function CommentsFeed(props) {

  const [newForm, setNewForm] = useState(false);
  const [newComment, setNewComment] = useState('');

  const submitNewComment = function(text) {
    const user_id = props.user.user.id;
    const data = { text, user_id}
    axios.post(`/api/recipes/${props.recipe_id}/comments`, data)
    .then(res => {
      console.log(res)
      props.updateComments({comment: res.data.comment, user: props.user.user })
      setNewComment('')
      setNewForm(false)
    })
    .catch(err => console.error(err))
  }



  return (
    <div id="comments-feed">
      <div className="comments-feed__top">
        <h2 className="comments-feed__top__header">Comments</h2>
        <button
          className="comments-feed__button"
          onClick={() => setNewForm(!newForm)}
        >New
          </button>
      </div>
      {newForm && (
      <form 
        className="comments-feed__new-comment"
        onSubmit={event => event.preventDefault()}
        autoComplete='off'
      >
        <input
          className="comments-feed__new-comment__input"
          name="comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></input>
        <button
          className="comments-feed__button"
          onClick={() => submitNewComment(newComment)}
          >Submit</button>
      </form>
      )}
      {props.comments[0] && props.comments.map((element, index) => {
        const { text, created_at } = element.comment;
        const { name, user_avatar, id } = element.user;

        return (
          <div key={index} id="comment" className="row-group">
            <div id="name-avatar">
              <mark id="username">{name}</mark>
              <Link to={`/users/${id}`}><img id="avatar" src={user_avatar} alt={name}></img></Link>
            </div>
            <div id="comment-container" className="text-container">
              <div id="comment-text">{text}</div>
              <footer id="commenttime">{timeAgo(created_at)}</footer>
            </div>
          </div>
        );
      })}
    </div>
  )
}