// console.log('fetch_script.js loaded')

// let url_posts = 'https://jsonplaceholder.typicode.com/posts';
// let url_comments = 'https://jsonplaceholder.typicode.com/comments';
// let url_albums = 'https://jsonplaceholder.typicode.com/albums';
// let url_photos = 'https://jsonplaceholder.typicode.com/photos';
// let url_todos = 'https://jsonplaceholder.typicode.com/todos';
// let url_users = 'https://jsonplaceholder.typicode.com/users';

// // create the fetch function

// // for each url variable above, call the fetch function in a console.log

// // from the photos url, put 2 random photos into the img elements in the html

// // to see the results, right click on the page and click inspect, and click the console tab



console.log('fetch_script.js loaded')

let url_posts = 'https://jsonplaceholder.typicode.com/posts';
let url_comments = 'https://jsonplaceholder.typicode.com/comments';
let url_albums = 'https://jsonplaceholder.typicode.com/albums';
let url_photos = 'https://jsonplaceholder.typicode.com/photos';
let url_todos = 'https://jsonplaceholder.typicode.com/todos';
let url_users = 'https://jsonplaceholder.typicode.com/users';

// create the fetch function
function fetchData(url) {
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

// for each url variable above, call the fetch function in a console.log
fetchData(url_posts);
fetchData(url_comments);
fetchData(url_albums);
fetchData(url_photos);
fetchData(url_todos);
fetchData(url_users);

// from the photos url, put 2 random photos into the img elements in the html
fetch(url_photos)
.then(response => response.json())
.then(data => {
    // Assuming the data is an array of objects with a 'url' property
    document.getElementById('photo1').src = data[0].url; // Change index as needed
    document.getElementById('photo2').src = data[1].url; // Change index as needed
})
.catch(error => console.error('Error:', error));
