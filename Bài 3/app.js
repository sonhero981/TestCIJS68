
let getUrl = document.getElementById("get-url");
let inlineCheckbox1 = document.getElementById("inlineCheckbox1");
let inlineCheckbox2 = document.getElementById("inlineCheckbox2");
let inlineCheckbox3 = document.getElementById("inlineCheckbox3");

function getShortenUrl(){
let url = document.getElementById("input-url").value;

fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
.then(function(res) {
    return res.json()
})
.then(function(posts) {
    showShortUrl(posts.result)
})
}

function showShortUrl(posts){
    console.log(inlineCheckbox1)
    console.log(inlineCheckbox2)

    if(inlineCheckbox1.checked == true){
        document.getElementById("short-link1").innerText = posts.short_link
    }
    
    if(inlineCheckbox2.checked == true){
       document.getElementById("short-link2").innerText = posts.short_link2
    }

    if(inlineCheckbox3.checked == true){
      document.getElementById("short-link3").innerText = posts.short_link3
    }
}

getUrl.onclick = function (e){
    e.preventDefault()
    getShortenUrl()
}
