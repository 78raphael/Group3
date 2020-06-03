import Hikes from './hikes.js';
//on load grab the array and insert it into the page
const myHikes = new Hikes('hikes');
window.addEventListener('load', () => {
  myHikes.showHikeList();

});
/*
Comments system

HTML:
1) Text input box
2) a place to show/display the comments

JS:
- read in the comment when "submit" button clicked
- Save comment to localStorage

    Comments need 
      Name
      Date
      Text of comment
      comment type - use as key for storing to local storage
          Type Flag
Methods needed
type
getAllComments
renderCommentList
filterCommentsByName 
showCommentsList (class)

*/