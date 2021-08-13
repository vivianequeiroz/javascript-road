const request = fetch("https://ranekapi.origamid.dev/json/api/produto")
  .then((response) => response.json())
  .then((jsonBody) => {
    document.querySelector("#app").innerHTML = jsonBody[0].nome;
    console.log(document.querySelector("#app"));
    console.log(jsonBody);
  });

console.log(request);

const data = {
  id: "john",
  nome: "João",
  email: "joaozinho@joazinho.com",
  senha: "123456",
  cep: "123456",
  rua: "Ali Perto",
  numero: "230",
  bairro: "Botafogo",
  cidade: "Rio de Janeiro",
  estado: "Rio de Janeiro"
}

fetch("https://ranekapi.origamid.dev/json/api/usuario", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
})