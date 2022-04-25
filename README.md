# React로 캘린더를 구현한 프로젝트

## 사용 기술

- React v18
- TypeScript v4+
- Styled-Components

## 구현 사항

### 1. 캘린더 화면

![calendar](https://user-images.githubusercontent.com/66506477/164746481-ca3f091e-2fa9-4164-8e9f-4692f35a4e9a.png)

- `grid`를 활용하여 전체화면에 꽉 차게 캘린더 구현
- 일요일은 붉은색으로 표기
- 캘린더는 5주를 기본으로 하여 현재 달의 일자를 채우고 남는 빈칸에는 이전 달 혹은 다음 달의 일자를 표기

### 2. 일정 입력용 모달창

![modal1](https://user-images.githubusercontent.com/66506477/164747475-ab4b30ac-e5fd-4ae1-bfc2-6781558bb54d.gif)

- 각 일자 칸을 클릭하면 일정을 입력할 수 있는 모달창이 나타나도록 구현
- 일정 입력시 `debounce`를 적용하여 500ms 이후에 입력한 사항이 저장되도록 구현

### 3. 일정 확인

![modal2](https://user-images.githubusercontent.com/66506477/164748016-e7f2d2e2-6622-456c-8ed3-53137e928c62.gif)

- 모달창에서 일정을 입력 후 확인 버튼을 누르면 입력한 내용이 해당 일자에 보이도록 구현
