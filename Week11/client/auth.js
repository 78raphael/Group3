//Auth class which provides basic JWT based authentication for our app.
// Requires: access to the makeRequest  functions
import { makeRequest } from './authHelpers.js';
export default class Auth {
  constructor() {
    this.jwtToken = '';
    this.user = {};
  }

  async login(callback) {
    // replace the ids below with whatever you used in your form.
    const password = document.getElementById('password');
    const username = document.getElementById('username');
    const postData = {
      email: username.value,
      password: password.value  
    };
    try {
      // 1. use the makeRequest function to pass our credentials to the server
      const data = await makeRequest('login', 'POST', postData);
      // 2. if we get a successful response...we have a token!  Store it since we will need to send it with every request to the API.
      this.jwtToken = data.accessToken;
      // console.log(this.jwtToken);
      // let's get the user details as well and store them locally in the class
      // you can pass a query to the API by appending it on the end of the url like this: 'users?email=' + email
      this.user = await this.getCurrentUser(username.value);
      // hide the login form.
      document.getElementById('login').classList.add('hidden');
      document.getElementById('content').classList.remove('hidden');
      // clear the password
      password.value = '';
      
      // since we have a token let's go grab some data from the API by executing the callback if one was passed in
      if(this.getPostContent) {
        // console.log('inside if');
        await this.getPostContent(this.jwtToken);
      }
    } catch (error) {
      // if there were any errors display them
      console.log(error);
    }
  }

  async getPostContent(token) {
    let text = '';
    const data = await makeRequest('posts', 'GET', '', token);
    // console.log('inside getPostContent', data, this.user['id']);
    data.forEach(lee => {
      // console.log(lee.userId, this.user['id']);
      if(lee.userId == this.user['id'] || lee.userId == this.user['email']){
        // console.log(true);
        text = `<li>Title: ${lee.title}</li>
        <li>Post: ${lee.content}</li>`;
        document.getElementById('list').innerHTML += text;
        
      }
    });
  }


  // uses the email of the currently logged in user to pull up the full user details for that user from the database
  async getCurrentUser(email) {
    try {
        const data = await makeRequest(
            'users?email=' + email,
            'GET',
            null,
            this.jwtToken
          );
    
          console.log('getCurrentUser', data[0]);
          return data[0];
        } catch (error) {
          // if there were any errors display them
          this.errors.handleError(error);
      // 3. add the code here to make a request for the user identified by email...don't forget to send the token!
      // if there were any errors display them
      console.log(error);
    }
  }


  async updateUser() {
    // after logging in we pulled down the user from the api...including the id...we can use that to do our update.

    this.user.age = 40;
    try {
      const result = await makeRequest(
        'users/' + this.user.id,
        'PUT',
        this.user,
        this.jwtToken
      );
      console.log('Update user:', result);
    } catch (error) {
      this.errors.handleError(error, showLogin);
    }
  }
  set token(value) {
    // we need this for the getter to work...but we don't want to allow setting the token through this.
  }
  get token() {
    return this.jwtToken;
  }
} // end auth class

let whatever = new Auth();

whatever.login();

function showLogin() {
  document.getElementById('login').classList.remove('hidden');
}

function hideLogin() {
  document.getElementById('login').classList.add('hidden');
}