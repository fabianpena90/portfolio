document.querySelector('.get-joke').onclick = getJoke


function getJoke(){
    axios.get('http://api.icndb.com/jokes/random/').then((res)=>{
          document.querySelector('.get-joke-list').innerHTML += `<li class="list">${res.data.value.joke}</li>`  
        })
}
