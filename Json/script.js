const image = document.querySelector("img");
const button = document.querySelector("button");


button.addEventListener("click", ()=>{
    button.textContent = "change the image"
    fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => response.json())
  .then((json) => {
    console.log('Got hte data');
    console.log(json.message)
    image.src = json.message
});
});
