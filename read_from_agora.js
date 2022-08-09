fetch('https://moldovan-content-aggregator-json-api.mixarium.repl.co/agora_json')
  .then(function (response) {
    let li = document.createElement('li')
    li.innerText = response;
    list.appendChild(li);
  })
  .catch(function (err) {
  });
