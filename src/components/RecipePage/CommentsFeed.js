import React from "react";
import "./CommentsFeed.scss"
const { timeAgo } = require('helpers/timeAgo');

export default function CommentsFeed(props) {
  return (
    <div id="comments-feed">
      <h2>Comments</h2>
      {props.comments.map((element, index) => {
        const { text, created_at } = element.comment;
        const { name, user_avatar } = element.user;

        return (
          <div key={index} id="comment" className="row-group">
            <div id="name-avatar">
              <mark id="username">{name}</mark>
              <img id="avatar" src={user_avatar} alt={name}></img>
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