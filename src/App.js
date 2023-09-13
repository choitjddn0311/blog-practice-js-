import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, b] = useState(['남자 코트 추천','여자 코트 추천' , '감자맛집', '2023.09.13 코딩애플 리엑트 4강부터','CSW blog'])

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>{글제목[4]}</h4>
      </div>
      <div className='list'>
        <h4>{글제목[0]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <h4>{ 글제목[3]}</h4>
    </div>
  );
}

export default App;
