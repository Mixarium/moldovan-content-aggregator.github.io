function display_latest(amount) {
  fetch("https://moldovan-content-aggregator-json-api.mixarium.repl.co/stirimd_json")
  .then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error("NETWORK RESPONSE ERROR")
    }
  })
  .then(data => {
    let list = document.getElementById('latest_stirimd_news')
    let length
  if (amount !== undefined) {
    length = amount
  } else {
    length = Object.keys(data).length
  }
  for (let i = 0; i < length; i++) {
      let li = document.createElement('li')
      let a = document.createElement('a')
      a.className = "news_link"
      a.href = data[i]['link']
      a.text = data[i]['title']
      li.appendChild(a)
      list.appendChild(li)
  }
  })
  .catch((error) => console.error("FETCH ERROR:", error))
}

display_latest(10)