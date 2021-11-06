const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";



var movies = document.querySelector(".movies");
var input = document.querySelector(".input")
var search = document.querySelector(".search")
var uno = document.querySelector(".uno");
var dos = document.querySelector(".dos");
var tres = document.querySelector(".tres");
var cuatro = document.querySelector(".cuatro");
var cinco = document.querySelector(".cinco");
var seis = document.querySelector(".seis");
var siete = document.querySelector(".siete");


var listArray = [];




for(var i=0;i<10;i++){
    getData(APIURL+i);

}


input.addEventListener("input", (e)=> filterData(e.target.value));





async function getData(url){

    const res = await fetch(url);
    const data = await res.json(); 
    var results = data.results;
    console.log(results);

    results.forEach(element => {
        
        var div = document.createElement("div");


        div.innerHTML = `<div class="movie-el">
                        <img src="${IMGPATH+element.poster_path}" alt="">
                        <div class="attributes">
                            <h3>${element.title}</h3>
                            <span>${element.vote_average} <i class="fas fa-star" id= "star"></i></span>
                        
                        </div>
                        <div class="overview">
                            ${element.overview}
                        </div>
                    </div>`

        listArray.push(div);
        movies.appendChild(div);

       
    });
   

}


 function filterData(movie_filter) {





    listArray.forEach(element => {
        if(element.innerText.toLowerCase().includes(movie_filter.toLowerCase())) {
            element.classList.remove("hide");
        }
        else {
            element.classList.add("hide");
        }
    })


}




