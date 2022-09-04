let inputTag = document.querySelector('.inputTag')
let moviesSearch = document.querySelector('.movie-search-one')
let moviesSection = document.querySelector('.movies-Section')
let moviesPageMain = document.querySelector('.moviespage-main')
let moviePageCont = document.querySelector('.movie-page-cont')
let countF = 0;
function myFunction(){
  let addressOfLink = `https://api.themoviedb.org/3/tv/on_the_air?api_key=ffd716e442cea750f989f65854a0cb89&language=en-US&page=1` 
  fetch(addressOfLink)
    .then((item) => item.json())
    .then((respons) => {
      console.log(respons)
      let resultOfRes = respons.results;
      let newResultOf = resultOfRes.filter((item) => item.name === inputTag.value)
      console.log(newResultOf)

      newResultOf.map((elem) => {
        let moviePageItem = document.createElement('div')
        moviePageItem.className = 'movie-page-item'
        let moviePageImage = document.createElement('div')
        moviePageImage.className = 'movie-page-image'
        let imgMovieDiv = document.createElement('img')
        imgMovieDiv.id = 'imgP1';
        imgMovieDiv.src = `https://image.tmdb.org/t/p/original/${elem.poster_path}`
        let imgOfMoviePage = document.createElement('img')
        imgOfMoviePage.id = "imgB1";
        imgOfMoviePage.src = `https://image.tmdb.org/t/p/original/${elem.backdrop_path}`
        let moviePageText = document.createElement('div')
        moviePageText.className = 'movie-page-text'
        let moviePageh2 = document.createElement('h2')
        moviePageh2.id = 'movName'
        moviePageh2.textContent = `Film name: ${elem.name}`
        let movieView = document.createElement('div')
        movieView.className = 'movieView'
        let movieSpan = document.createElement('span')
        movieSpan.textContent = "Overview :";
        let moviePageP = document.createElement('p')
        moviePageP.textContent = elem.overview.slice(0, 250);
        let moviePageSpan = document.createElement('h2')
        moviePageSpan.id = 'ratingMovie'
        moviePageSpan.textContent = `Rating: ${elem.vote_average}`
        let moviePagePopularity= document.createElement('h2')
        moviePagePopularity.textContent = `Popularity: ${elem.popularity}`
        let moviePageDate= document.createElement('h2')
        moviePageDate.textContent = `Air date: ${elem.first_air_date}`
        let line = document.createElement('div')
        line.className = 'textDiv'
        line.appendChild(moviePageDate)
        line.appendChild(moviePagePopularity)
        line.appendChild(moviePageSpan)
        movieView.appendChild(movieSpan)
        movieView.appendChild(moviePageP)
        moviePageText.appendChild(moviePageh2)
        moviePageText.appendChild(line)
        moviePageText.appendChild(movieView)
        moviePageImage.appendChild(imgMovieDiv)
        moviePageImage.appendChild(imgOfMoviePage)
        moviePageItem.appendChild(moviePageh2)
        moviePageItem.appendChild(moviePageImage)
        moviePageItem.appendChild(moviePageText)
        moviePageCont.appendChild(moviePageItem)
        moviesSection.appendChild(moviePageCont)
        moviesSearch.appendChild(moviesSection)
        
        document.querySelector(".movies-section").style.display = "block";
        document.querySelector(".movie-search-img").style.display = "none";
        // inputTag.value = '';


        if(countF === 0 ) {
          countF++
          document.querySelector(".movie-search-img").style.display = "none";
        } else {
          document.querySelector(".movie-search-img").style.display = "none";
          moviePageItem.style.display = "none";
          moviePageCont.firstElementChild.style.display = "block"
          // moviesSection.removeChild(moviePageCont);
          // moviesSection.appendChild(moviePageCont.firstChild);
        };

      });
    });
};

// space click display none

window.addEventListener('click', ()=> {
    document.querySelector(".movie-page-item").style.display = "none";
    document.querySelector(".movie-search-img").style.display = "inline-block";

    moviesSearch.removeChild(moviesSection);
    // moviesSection.removeChild(moviePageCont);
    // moviePageCont.removeChild(moviePageItem)
})




