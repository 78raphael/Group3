import { makeRequest } from './authHelpers.js';
import Auth from './auth.js';

// makeRequest('login', 'POST', {
//   password: 'user1',
//   email: 'user1@email.com'
//   });

const myStuff = new Auth();

const loginButton = document.getElementById('login');
loginButton.querySelector('button').addEventListener('click', () => {
  console.log("click");
  myStuff.login();
});