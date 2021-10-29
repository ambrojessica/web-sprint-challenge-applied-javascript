import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  //creating elements
  const topicsDiv = document.createElement('div');
  const div = document.createElement('div');
  const div1 =document.createElement('div');
  const div2 =document.createElement('div');
  const div3 =document.createElement('div');
  const div4 =document.createElement('div');

  //hierarchy 
  topicsDiv.appendChild(div);
  topicsDiv.appendChild(div1);
  topicsDiv.appendChild(div2);
  topicsDiv.appendChild(div3);
  topicsDiv.appendChild(div4);


  //classes
  topicsDiv.classList.add('topics');
  div.classList.add('tab');
  div1.classList.add('tab');
  div2.classList.add('tab');
  div3.classList.add('tab');
  div4.classList.add('tab');

  //textContent
  div.textContent = `${topics}`;
  div1.textContent = `${topics}`;
  div2.textContent = `${topics}`;
  div3.textContent = `${topics}`;
  div4.textContent = `${topics}`;

  return topicsDiv;
}


const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  const entry = document.querySelector(selector);

  axios.get(`http://localhost:5000/api/topics`)
  .then(resp => {
    for(let i = 0; i < resp.data.topics.length; i++){
      const tabObj = {
        topics: resp.data.topics[i=5],
      }
      const tabCard = Tabs(tabObj);
      entry.appendChild(tabCard);
    }
    
  })
  .catch (err => {
    console.log(err);
  })
}


export { Tabs, tabsAppender }
