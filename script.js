// 1. 데이터
const getMovie = async () => {
  try {
    const response = await fetch("https://ghibliapi.dev/films");

    if(!response.ok) {
      throw new Error("요청실패")
    }

    const data = await response.json();
    console.log(data[1]);
    } 
    
  catch (error) {
      console.log(error.message);
    }
};

getMovie();

// 2. DOM 가져오기

// 3. 상태

// 4. 함수
// 5. 이벤트

// 6. 최초 실행
