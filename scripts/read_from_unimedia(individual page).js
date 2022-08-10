function display_latest(amount) {
  fetch("https://moldovan-content-aggregator-json-api.mixarium.repl.co/unimedia_json")
  .then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error("NETWORK RESPONSE ERROR")
    }
  })
  .then(data => {
    let list = document.getElementById('latest_unimedia_news')
    let length
  if (amount !== undefined) {
    length = amount
  } else {
    length = Object.keys(data).length
    if (length == 0) {
      let no_articles_posted = document.createElement('p')
      no_articles_posted.innerHTML = "Niciun articol nu a fost postat pe ziua de astăzi."
      list.appendChild(no_articles_posted)
    } else if (length == 1) {
      let one_article_posted = document.createAttribute('p')
      one_article_posted.innerHTML = "Un articol a fost postat pe ziua de astăzi."
      list.appendChild(one_article_posted)
    } else {
      let number_of_articles = document.createElement('p')
      // length -= 1 (unsure)
      number_of_articles.innerHTML = length + " (de) articole prezente în listă."
      list.appendChild(number_of_articles)
    }
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

display_latest()