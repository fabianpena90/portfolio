window.addEventListener('load', getData)

function getData(){
  axios.get('https://ironrest.herokuapp.com/mia-aug2020-webdevs').then(res =>{
    //  console.log(res.data);
          const data = res.data;
          for(let i = 0; i < data.length; i++) {
            // console.log(data[i].last_name)
            document.querySelector('.studentsList').innerHTML += `
            <li>${data[i].first_name} ${data[i].last_name}</li>
            <li><a href="${data[i].website}" >Portfolio</a></li>
            `
          
            }
          })
}


window.addEventListener('load', giphy);

function giphy() {
  axios.get('https://api.giphy.com/v1/gifs/search?api_key=2ICucThirLQrhOZGPbsFaOYZYSEwdggQ&q=silicon valley&limit=25&offset=0&rating=g&lang=en').then((res) => {
    // console.log(res.data.data)
    const data = res.data.data;
    const randomGif = Math.floor(Math.random() * data.length);
    const url = data[randomGif].embed_url;

    document.querySelector('.content').innerHTML += `<iframe src="${url}" width="480" height="338" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><a href="https://giphy.com/gifs/silicon-valley-rrj7FpUH9BlK0"></a>`
  })
}