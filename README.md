# It's me

HTML, CSS, JavaScript를 공부하며 만드는 개인 포트폴리오입니다. 자기소개 페이지와 JavaScript로 구현한 예약 관리 실습 페이지로 구성되어 있습니다.

## 페이지 및 주요 기능

### 포트폴리오 (`index.html`)

- About, Skills, Projects, Contact 섹션과 페이지 내부 이동 메뉴
- 스크롤 시 상단에 유지되는 Sticky Header
- Flexbox와 CSS Grid를 활용한 레이아웃
- `clamp()`, `min()`, Media Query를 활용한 반응형 스타일
- 모바일 화면에서 메뉴 배치 및 프로젝트 카드 열 수 변경
- 이미지 등장·이동 애니메이션과 카드 hover 효과
- 링크의 키보드 포커스 스타일 (`:focus-visible`)
- Project 1 카드에서 예약 관리 페이지로 이동

### 예약 관리 (`project1.html`)

- 예약자 이름, 객실 타입, 가격을 입력해 예약 추가
- 기존 예약 수정 및 수정 취소
- 확인창에서 동의한 예약 삭제
- 예약자 이름 실시간 검색 (영문 대소문자 구분 없음)
- 전체·확정·취소 상태별 필터
- 가격 낮은순·높은순 정렬
- 검색, 상태 필터, 정렬을 함께 적용하고 결과가 없으면 안내 표시
- 이름·객실 타입의 공백 입력과 0 이하 또는 유효하지 않은 가격 검증
- 추가·수정·삭제 결과를 `localStorage`에 저장하고 다시 불러오기

저장된 데이터가 없으면 예시 예약 4건을 표시합니다. 새 예약은 확정 상태로 추가되며, 예약 상태를 변경하는 기능은 아직 없습니다. 데이터는 사용하는 브라우저에 저장되며 서버나 다른 기기와 동기화되지 않습니다.

## 사용 기술

- **HTML5**: 페이지 구조, 폼, 내비게이션
- **CSS3**: Flexbox, Grid, Media Query, CSS 변수, 애니메이션
- **JavaScript (Vanilla JS)**: DOM 조작, 이벤트 처리, 배열 메서드, 상태 관리
- **Web Storage API**: `localStorage`와 JSON을 활용한 데이터 저장

별도의 프레임워크, 패키지 설치, 빌드 과정 없이 동작하는 정적 웹 프로젝트입니다.

## 파일 구성

```text
.
├── index.html      # 포트폴리오 메인 페이지
├── project1.html   # 예약 관리 화면
├── script.js       # 예약 관리 로직과 localStorage 저장
├── test.css        # 공통 스타일 및 반응형 레이아웃
└── README.md       # 프로젝트 소개
```

## 실행 방법

1. 저장소를 클론하거나 ZIP으로 내려받습니다.
   ```bash
   git clone https://github.com/xjfakddl-spec/test.git
   ```
2. VS Code에서 프로젝트 폴더를 엽니다.
3. Live Server 등의 로컬 정적 서버로 `index.html`을 실행합니다.
4. Projects 섹션의 **Project 1**을 선택하거나 `project1.html`에 직접 접속합니다.

예약을 추가·수정·삭제한 뒤 같은 브라우저의 같은 주소에서 새로고침하면 저장 결과를 확인할 수 있습니다.

## 배운 점

- Flexbox와 Grid의 역할을 구분해 레이아웃을 구성했습니다.
- CSS 단위와 반응형 함수를 사용하고 Media Query로 모바일 배치를 조정했습니다.
- 시맨틱 태그, 이미지 대체 텍스트, 키보드 포커스 스타일을 적용했습니다.
- `filter()`, `sort()`, `map()`으로 예약 데이터를 가공하고 화면에 출력했습니다.
- 이벤트 위임과 `data-id`로 동적으로 생성한 예약의 수정·삭제를 처리했습니다.
- 검색·필터·정렬 상태와 수정 중인 예약 ID를 관리했습니다.
- 폼 입력 검증, 기본 제출 동작 방지, 오류 메시지 표시를 구현했습니다.
- `JSON.stringify()`와 `JSON.parse()`로 브라우저 저장소에 데이터를 저장하고 복원했습니다.

## 현재 미완성 항목

- 메인 페이지에서 참조하는 `SSM00048-1.jpg`, `html.html`, `flex.html`, `css.html`은 현재 저장소에 없습니다.
- Project 2·3과 프로젝트 설명, 연락처 이메일은 예시 콘텐츠입니다.
- 예약 상태 변경과 예약 관리 화면의 세부 디자인은 추가 구현이 필요합니다.

## GitHub Pages 주소

- [포트폴리오](https://xjfakddl-spec.github.io/test/)
- [예약 관리](https://xjfakddl-spec.github.io/test/project1.html)
