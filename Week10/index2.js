import { getJSON, getLocation } from './utilities.js';
import QuakesController  from './QuakesController.js';

let quakers = new QuakesController('ul#quakeList');
quakers.init();

console.log(quakers);

// const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

// let lat, long;
// let km = 100;
// let url;

// let location = getLocation();


// location.then(val => {
//   lat = val.coords.latitude.toString();
//   long = val.coords.longitude.toString();
 

//   url = baseUrl + '&latitude=' + lat + '&longitude=' + long + '&maxradiuskm=' + km;

//   console.log(url);

//   getJSON(url);

// console.log(location);
// });


 // console.log(typeof val.coords.latitude.toString());
  // console.log(typeof val.coords.longitude.toString());

// SOULTION FILE 
// https://github.com/byui-cit/cit261/blob/gh-pages/examples/quakes/finished/js/index.js