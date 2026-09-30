// 1. 데이터


// 2. DOM 가져오기

const mTitle = document.querySelector("#m-title");
const mRating = document.querySelector("#m-rating")
const mPoster = document.querySelector("#m-poster")
const passBtn = document.querySelector("#pass-btn")
const likeBtn = document.querySelector("#like-btn")
const myListLength = document.querySelector("#my-list-length")

// 3. 상태
let movieList = [];
let currentIndex = 0;
let myList = [];

// 4. 함수
const getMovie = async () => {
  try {
    const response = await fetch("https://ghibliapi.dev/films");

    if(!response.ok) {
      throw new Error("요청실패")
    }

    const data = await response.json();
    return data
    } 
    
  catch (error) {
      console.log(error.message);
    }
};

const loadMovies = async () => {
  movieList = await getMovie();
};

const renderMovie = () => {
  const movie = movieList[currentIndex];

  mTitle.textContent = movie.title;
  mRating.textContent = movie.rt_score;
  mPoster.src = movie.image;
};

const init = async () => {
  await loadMovies();
  renderMovie();
};

// 5. 이벤트

passBtn.addEventListener("click", () => {
  currentIndex += 1;

  if (currentIndex >= movieList.length) {
    currentIndex = 0;
  }

  renderMovie();
});

likeBtn.addEventListener("click", () => {
  myList.push(movieList[currentIndex]);
  myListLength.textContent = myList.length;

  currentIndex += 1;

  if (currentIndex >= movieList.length) {
    currentIndex = 0;
  }

  renderMovie();
};

// 6. 최초 실행

init();
