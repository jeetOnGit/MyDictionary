let btn = document.getElementById("btn")
let mainWord = document.getElementById("mainWord")
let wordType = document.getElementById("wordType")
let synonims = document.getElementById("synonims")
let example = document.getElementById("example")
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"

btn.addEventListener('click', () =>{
let inpWord = document.getElementById("inp").value


  fetch(`${url}${inpWord}`)
  .then(data => data.json())
  .then(item => {
    mainWord.textContent = `${item[0].word}`
    wordType.textContent = `${item[0].phonetic}`
    synonims.textContent = `${item[0].meanings[0].synonyms.slice(0,1,2,3)}`
    example.textContent = `${item[0].meanings[0].definitions[0].definition}`

    
  })


  
})
