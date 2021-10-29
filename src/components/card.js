import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  //create elements
  const parentCardDiv = document.createElement('div');
  const headlineDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const imgDiv = document.createElement('div');
  const authorImage = document.createElement('img');
  const authorNameSpan = document.createElement('span');
  
  //classes
  parentCardDiv.classList.add('card');
  headlineDiv.classList.add('headline');
  authorDiv.classList.add('author');
  imgDiv.classList.add('img-container');
  
  //textContent
  headlineDiv.textContent = article.headline;
  authorImage.setAttribute('src', article.authorPhoto);
  authorNameSpan.textContent = `By ${article.authorName}`;
  
  //eventListener
  parentCardDiv.addEventListener('click', () => {
    console.log(article.headline);
  })

  //hierarchy
  parentCardDiv.appendChild(headlineDiv);
  imgDiv.appendChild(authorImage);
  authorDiv.appendChild(imgDiv);
  authorDiv.appendChild(authorNameSpan);
  parentCardDiv.appendChild(authorDiv);
  
  return parentCardDiv;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  // const entryPoint = document.querySelector(selector);

  const parent = document.querySelector(selector);
  axios.get(`http://localhost:5000/api/articles`)
  .then (resp => {
    const articleTopics = Object.keys(resp.data.articles); //an array of strings where each element is a key of the articles object
    for(let i=0; i < articleTopics.length; i++) {
      const topicName = articleTopics[i]; //key in a string, i is just a pointer. i is always changing.
      const topicsArticlesArray = resp.data.articles[topicName]; //value to the topic key in the articles object
      topicsArticlesArray.forEach((article) => {
          parent.appendChild(Card(article)); //using the parent from (70) we want to append items to it, in this case we use Card function
      })
    }
  })
  .catch(err => {
    console.log(err);
  })
}

export { Card, cardAppender }
