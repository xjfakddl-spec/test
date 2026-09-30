// 1. 데이터
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

// 2. DOM 가져오기

const mTitle = document.querySelector("#m-title");
const mRating = document.querySelector("#m-rating")

// 3. 상태

// 4. 함수

const renderMovie = async () => {
  const movies = await getMovie();
  const nthMovie = movies[0];
  mTitle.textContent = nthMovie.title;
  mRating.textContent = nthMovie.rt_score;
};

// 5. 이벤트

// 6. 최초 실행
renderMovie()
