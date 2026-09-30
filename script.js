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

getMovie();

// 2. DOM 가져오기

const mTitle = document.querySelector("#m-title");
const mRating = document.querySelector("#m-rating")

// 3. 상태

// 4. 함수

const titles = async () => {
  const movies = await getMovie();
  const title = movies[0].title;
  mTitle.textContent = title;
};
  
const ratings = async () => {
  const movies = await getMovie();
  const rating = movies[0].rt_score;
  mRating.textContent = rating;
};
// 5. 이벤트

// 6. 최초 실행

titles();
