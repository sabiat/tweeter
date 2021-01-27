/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  // Fake data taken from initial-tweets.json
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  const createTweetElement = function(tweetObj) {
    let $tweet = `
    <article class="tweet">
    <header>
      <div class="left-side">
        <img src=${tweetObj.user.avatars} alt="usericon">
        <span>${tweetObj.user.name}</span>
      </div>
      <p class="hidden-username">${tweetObj.user.handle}</p>
    </header>
    <div class="tweet-feed">${tweetObj.content.text}</div>
    <footer>
      <p>${tweetObj["created_at"]}</p>
      <div class="icons">
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="far fa-heart"></i>
      </div>
    </footer>
    </article>
  `;
    return $tweet;
  };


  const renderTweets = function(tweetsArr) {
    for (let tweet of tweetsArr) {
      const newTweet = createTweetElement(tweet);
      console.log(newTweet)
      $('#all-tweets').append(newTweet);
    }
  };

  renderTweets(data);


});

