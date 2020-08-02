'use strict';

let arr = [];
let arrComment = [];
let color = ['c0', 'c1', 'c2', 'c3', 'c4', 'c5'];
let blockColor = 0;
let paginationAmountPosts = 6;
let pageStartPost = 0;
let pageEndPost = 0;
let posts = 13;

let response;
async function getPosts() {
  for (let i = 1; i <= posts; i++) {
    response = await fetch(`https://jsonplaceholder.typicode.com/posts/${i}`);
    arr.push(await response.json());
  }
  appendPosts(arr);
  pagination(arr);
}

//First amount posts
function appendPosts(arr) {
  let currentPage = arr.slice(0, paginationAmountPosts);
  currentPage.map(function(item) {
    if (blockColor >= (color.length - 1)) {
      blockColor = 0;
    } else {
      blockColor++;
    }
    news.insertAdjacentHTML('beforeEnd', `
    <div class="news__item ${color[blockColor]}" id="${item.id}">
        <h2>${item.title}</h2>
        <p>${item.body}</p>
    </div>
    `);
  });
}

let str = 'active';

// Paginations
function pagination(arr) {
  let pagesCurrent = Math.ceil(arr.length / paginationAmountPosts);
  for (let i = 1; i <= pagesCurrent; i++) {
    pages.insertAdjacentHTML('beforeEnd', `<div class="pages__item" id="p${i}">${i}</div>`);
  }

  p1.classList.add('active');
}

pages.onclick = function(e) { //Click pagination
  if (e.target.className == 'pages__item') {
    //delete active pagination
    document.querySelectorAll('.pages .active').forEach(n => n.classList.remove('active'));

    //add new active
    e.target.classList.add('active');

    let id = e.target.id.slice(1);
    pageEndPost = id * paginationAmountPosts;
    pageStartPost = pageEndPost - paginationAmountPosts; // Current of first showing post
    news.innerHTML = "";
    let currentPage = arr.slice(pageStartPost, pageEndPost);
    currentPage.map(function(item) {
      if (blockColor >= (color.length - 1)) {
        blockColor = 0;
      } else {
        blockColor++;
      }
      news.insertAdjacentHTML('beforeEnd', `
      <div class="news__item ${color[blockColor]}" id="${item.id}">
          <h2>${item.title}</h2>
          <p>${item.body}</p>
      </div>
      `);
    });
  }
};
// Paginations end

async function getComments() {
  for (let i = 0; i <= posts; i++) {
    response = await fetch(`https://jsonplaceholder.typicode.com/posts/${i}/comments`).then(response => response.json()).then(result => arrComment[i] = result);
  }
}

//Check comments
news.onclick = async function(e) {
  //getPost id
  let postId = 0;
  if (e.target.className.includes('news__item')) {
    postId = e.target.id;
  } else if (e.target.parentNode.className.includes('news__item')) {
    postId = e.target.parentNode.id;
  }

  comments.innerHTML = "";
  post.innerHTML = "";

  //show post
  post.insertAdjacentHTML('beforeEnd', `
  <h2 class="post__title">${arr[postId - 1].title}</h2>
  <p class="post__body">${arr[postId - 1].body}</p>
  `);

  //show comments
  arrComment[postId].map(function(item) {
    comments.insertAdjacentHTML('beforeEnd', `
          <div class="comments__item" id="${item.id}">
              <h2 class="comments__title">${item.name}</h2>
              <a href="mailto:${item.email}" class="comments__mail">${item.email}</a>
              <p class="comments__body">${item.body}</p>
          </div>
          `);
  });

  modal.style.cssText = "display: flex";


}

//Close modal func
modal.onclick = function(e) {
  if (e.target.className == 'modal__close' || e.target.className == 'modal') {
    modal.style.cssText = "display: none";
  }
}

getPosts();
getComments();