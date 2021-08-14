async function fetchProducts(url) {
  const response = await fetch(url);
  const jsonBody = await response.json();
  return jsonBody;
}

const request = fetchProducts("https://ranekapi.origamid.dev/json/api/usuario");

// //Display a promise
// console.log(request);

//Display the response itselft
request.then(response => {
  console.log(response);
})