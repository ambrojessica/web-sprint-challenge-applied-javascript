const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  //create html
  const header = document.createElement('div');
  const spanDate = document.createElement('span');
  const h1 = document.createElement('h1');
  const spanTemp = document.createElement('span');

  //classes
  header.classList.add('header');
  spanDate.classList.add('date');
  spanTemp.classList.add('temp');

  //textContent
  spanDate.textContent = `${date}`;
  h1.textContent = `${title}`;
  spanTemp.textContent= `${temp}`;

//making the hierarchy 
  header.appendChild(spanDate);
  header.appendChild(h1);
  header.appendChild(spanTemp);
  
  return header;
}


// const headerContainer = document.querySelector('.header-container');
const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const entryPoint = document.querySelector(selector);
  const title = 'Lambda Times';
  const date= 'October 29, 2021';
  const temp = '64F';

  const info = Header(title, date, temp);
  entryPoint.appendChild(info);
  
}

export { Header, headerAppender }

