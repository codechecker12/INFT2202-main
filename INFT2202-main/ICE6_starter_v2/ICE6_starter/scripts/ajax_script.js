// console.log('ajax_script.js loaded')

// let url_posts = 'https://jsonplaceholder.typicode.com/posts';
// let url_comments = 'https://jsonplaceholder.typicode.com/comments';
// let url_albums = 'https://jsonplaceholder.typicode.com/albums';
// let url_photos = 'https://jsonplaceholder.typicode.com/photos';
// let url_todos = 'https://jsonplaceholder.typicode.com/todos';
// let url_users = 'https://jsonplaceholder.typicode.com/users';

// // create the function that uses jquery get

// // for each url variable above, call the function in a console.log

// // from the photos url, put 2 random photos into the img elements in the html

// // to see the results, right click on the page and click inspect, and click the console tab

// // display the two random photos


console.log('ajax_script.js loaded')

let url_posts = 'https://jsonplaceholder.typicode.com/posts';
let url_comments = 'https://jsonplaceholder.typicode.com/comments';
let url_albums = 'https://jsonplaceholder.typicode.com/albums';
let url_photos = 'https://jsonplaceholder.typicode.com/photos';
let url_todos = 'https://jsonplaceholder.typicode.com/todos';
let url_users = 'https://jsonplaceholder.typicode.com/users';

// create the function that uses jquery get
function getData(url) {
    $.get(url, function(data) {
        console.log(data);
    });
}

// for each url variable above, call the function in a console.log
getData(url_posts);
getData(url_comments);
getData(url_albums);
getData(url_todos);
getData(url_users);

// from the photos url, put 2 random photos into the img elements in the html
$.get(url_photos, function(data) {
    let randomIndex1 = Math.floor(Math.random() * data.length);
    let randomIndex2 = Math.floor(Math.random() * data.length);
    $('#photo1').attr('src', data[randomIndex1].url);
    $('#photo2').attr('src', data[randomIndex2].url);
});
