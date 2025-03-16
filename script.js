let url="https://meme-api.com/gimme/wholesomememes"
let btn=document.querySelector("button");
let info=document.querySelector("h3");
let img=document.querySelector("img");
let author=document.querySelector("span")

async function getMame() {
    let obj= await axios.get(url);
    console.log(obj.data);
    img.setAttribute("src",obj.data.url)
    console.log(obj.data.author);   
    author.innerText=obj.data.author;
    info.innerText=obj.data.title
}
btn.addEventListener("click",getMame);