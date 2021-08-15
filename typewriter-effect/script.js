function typeWriter(element) {
  //selecting all the html in the element and dividing the characters with split
  const textArray = element.innerHTML.split('');
  element.innerHTML = '';
  textArray.forEach((character, i) => {
    setTimeout(() =>  element.innerHTML += character, 80 * i)
  });
}

const title = document.querySelector("h1");

typeWriter(title);