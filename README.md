# ☕️ Lunch



**Lunch**는 자동으로 점심식사 인원을 원하는 대로 그룹핑 해주는 미니 웹 어플리케이션입니다.

![https://media.giphy.com/media/QnVqjOvxPQMXplYgCO/giphy.gif](https://media.giphy.com/media/QnVqjOvxPQMXplYgCO/giphy.gif)

![https://media.giphy.com/media/2AjvQvEIp7bedY7drC/giphy.gif](https://media.giphy.com/media/2AjvQvEIp7bedY7drC/giphy.gif)

# 🔍Table Contents
- [Features](#💡-Features)
- [Tech Stack](#🛠-Tech-Stack)
- [Installation](#📀-Installation)
- [Challenge & Focus point](#🥊-Challenge-&-Focus-point)
- [Things to do](#🚀-Things-to-do)

# 💡 Features

- **점심식사를 함께할 인원을 추가**할 수 있습니다.
- **새로고침을 하여도 함께할 인원의 데이터는 유지**됩니다.
- **점심식사를 함께할 인원을 삭제**할 수 있습니다.
- **중복된 이름을 방지**할 수 있습니다.
- **원하는 조건(그룹 숫자, 그룹별 최소 인원)으로 그룹 랜덤 분할**이 가능합니다.
- **불가능한 그룹 분할에 대하여 알림기능**이 가능합니다.

# 🛠 Tech Stack
### Frontend
- ES2015+
- React for component-based-architecture
- Redux for state management(Redux-toolkit)
- Redux Thunk for managing asynchronous operation
- Styled Component
- Jest, Enzyme for component-test

### Backend
- Node.js
- Express
- MongoDB / MongoDB Atlas for data persistence
- Mongoose

# 📀 Installation
Local 환경에서 실행을 위해 환경 변수 설정이 필요합니다.

Root 디렉토리에 .env파일을 생성 후 아래와 같이 환경변수 값을 입력합니다.
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
```
// in .env in Root directory
MONGO_DB_URL=<YOUR_MONGODB_URL>
```

```
git clone https://github.com/maxlchan/PandaMarket-backend.git
cd lunch
npm install
npm run start:server
npm start
```

# 🥊 Challenge & Focus point

### 사용자 입장에서의 UI, UX에 대한 고민

해당 결과물을 구현하면서 가장 중점적으로 생각했던 부분은 어떻게 'UI, UX를 구현해야 사용자 입장에서 불편함을 느끼지 않을까?'였습니다. 점심 인원이나, 그룹 수에 대한 제한을 두지 않았기에 처음에는 `GroupBox`와 `NameItemBox`의 고정값을 두어 `overflow: auto` css 속성을 부여하였습니다. 하지만 데이터가 고정값을 초과했을 경우 생기는 스크롤로 인해 UI자체가 자연스럽지도 않았을 뿐더러 인원 이름이나 그룹을 찾기 위해 좁은 박스 안에서 스크롤을 조정해야한다는 것이 매우 불편했습니다. 따라서 고정값을 주지 않고 점심 인원이나, 그룹 수가 증가하면 `GroupingContainer`의 세로 높이도 유동적으로 증가하게 변경하도록하여 이러한 점을 개선하였습니다. 그런데, `GroupingContainer`의 세로 높이가 증가함에 따라 만약 그룹이 30개가 생겼을 경우 다시 옵션을 설정하기 위해서는 다시 스크롤을 최상단 까지 올라가야한다는 불편한 점도 생겼습니다. 사용자 입장에서는 해당 뷰포트에서 바로 옵션을 변경하고 싶어할 수도 있다는 생각이 들어, `ControllerBox`의 `position: sticky`을 부여하여 아무리 새로 길이가 길어져도 어디서나 옵션을 다시 설정할 수 있도록 개선하였습니다. 마지막으로 그룹이 생성될 수 없는 상황에서 그룹 나누기 버튼을 눌렀을 경우, 단지 그룹 나누기가 불가하다는 단순한 메세지를 보여주기보다 그룹을 나눌 수 없는 이유에 대해 세세하게 분기처리하여 Alert처리함으로써 왜 생성이 안되는 지에 대한 내용을 정확하게 전달하고자 하였습니다.

### 랜덤 그룹핑 알고리즘


### 다양한 Edge case에 대한 처리

처음 새로이 생성하는 이름으로 인원 추가하기 버튼을 연달아 빠르게 눌렸을 경우, 같은 이름이어도 생성이 되는 버그가 발생하는 케이스가 있었습니다. fetch 요청이 전송되고 값을 다시 받아오기 전에 다시 똑같은 요청을 보내 validation이 처리되기 되지 않아 발생한 현상이 었습니다. 이를 해결하기 위해 인원 추가하기 버튼을 누르면 즉시 `name input`의 `value`가 바로 공백으로 되도록 만들고 공백일 경우에는 fetch를 보내지 않게 로직을 변경하였습니다. 위와 비슷한 케이스로 인원을 삭제하는 경우에도 ❌버튼을 연달아 눌렀을 경우 해당 이름이 삭제 될 때까지 연달아서 `delete` 요청이 보내지는 오류가 있었습니다. 유저 입장에서는 view의 변화 자체는 없었기 떄문에 크게 문제가 되지 않을 수도 있지만, 똑같은 `delete` 요청이 보내진다는 것 자체가 서버 입장에서는 명백히 비정상적인 케이스이었습니다. 이를 해결하기 위해 처음에는 optimistic update를 통해 삭제요청 처리를 기다리지 않고 바로 먼저 view(이름)를 삭제하게 하는 방법이 있었지만, 비슷하게 delete를 수행하는 하나의 action을 또 만드는 것이 부자연스럽다고 판단되어, `CloseButton`의 `isClicked`라는 로컬 상태를 만들고 처음 클릭되는 즉시, 다음 클릭에서는 action을 dispatch시키지 않는 방법으로 해결하였습니다.


# 🚀 Things to do

- 원하는 이름 태그를 원하는 그룹에 draggable하게 옮기고 조정할 수 있는 기능 추가하기.
- create-react-app에 의존하지 않고 typescript build 과정부터 적용하기.
- 랜덤 그룹 배정시 다채로운 animation효과, 반응형 등 더욱 Interactive 한 UI 구현하기.