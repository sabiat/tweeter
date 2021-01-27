/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = function(tweetObj) {
  const timeSince = moment(tweetObj.created_at).fromNow();
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
    <p>${timeSince}</p>
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
    const $newTweet = createTweetElement(tweet);
    $('#all-tweets').append($newTweet);
  }
};

$(document).ready(function() {

  $('form').on('submit', function(event) {
    event.preventDefault();
    const tweet = $(this).serialize();

    $.ajax({
      url: "/tweets/",
      method: 'POST',
      data: tweet
    })
      .done(function(data) {
        console.log('Success:', data);
      })
  });

  //makes Ajax GET request and receive array of tweets then call renderTweets to load tweets on success
  const loadTweets = function() {
    $.ajax("/tweets/", {method: 'GET'})
      .done(function(data) {
        renderTweets(data);
      })
      .fail(function () {
        alert('error');
      })
  };

  loadTweets();

});

