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

const m-title = querySelector("#m-title");

// 3. 상태

// 4. 함수

const titles = () => {
  getMovie[0]
    .map((movie)=> movie.title)
    .join
  

// 5. 이벤트

// 6. 최초 실행
