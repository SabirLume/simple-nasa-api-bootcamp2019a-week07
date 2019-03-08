document.querySelector('form').addEventListener('submit', nasa)  

function nasa(e){
  e.preventDefault()
  //
  let date = document.querySelector('input').value

  console.log(date)
  fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=PX6KQodjwM0QXhS5JSHPYRAp7WyPGe8J2ui06hFi`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
        console.log(response)
        if(response.media_type == "image"){
          document.querySelector('img').src = response.hdurl;
          //Selecting the the input and changing what is inside of it
          document.querySelector('p').textContent = response.explanation;
        }else if{
          document.querySelector('iframe').src = response.url;
        }
        
    })

    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    })
};