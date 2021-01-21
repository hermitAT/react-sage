import React from "react";
import "./CommentsFeed.scss"

/**
 * Calculate the time difference between the current moment and a given one.
 * Returns result as n minutes/hours/days/months/years ago,
 * supports singular form of units.
 * If difference is less than a minute - returns 'now'
 * @param {*} date - a Date (in ms) to calculate a difference with
 */
const timeAgo = function(date) {

  const datemil = new Date(date);
  const timeMap = {
    'year' : 24 * 60 * 60 * 1000 * 365,
    'month' : 24 * 60 * 60 * 1000 * 30.42,
    'day' : 24 * 60 * 60 * 1000,
    'hour' : 60 * 60 * 1000,
    'minute' : 60 * 1000,
    'order': ['year', 'month', 'day', 'hour', 'minute']
  };

  const delta = Math.floor((Date.now() - datemil));
  for (const unit of timeMap.order) {
    const num = Math.floor(delta / timeMap[unit]);
    if (num >= 1) return `${num} ${unit}${(num === 1) ? '' : 's'} ago`;
  }
  return 'now';

};

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
              <img src={user_avatar} alt={name}></img>
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