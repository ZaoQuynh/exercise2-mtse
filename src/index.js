import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './Counter.js';
import TodoList from './TodoList.js';

const arrCongViec = [
  { id: 1, ten: "Viết bài", mota: "Viết bài tiếng Hàn", thoigian: "8:00 a.m - 8:30 a.m", trangthai: true },
  { id: 2, ten: "Đọc sách", mota: "Đọc sách tiếng Anh", thoigian: "9:00 a.m - 10:00 a.m", trangthai: true },
  { id: 3, ten: "Ngủ", mota: "None", thoigian: "11:00 p.m - 6:00 a.m", trangthai: false }
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <p>Bài 1: Tạo Component với State</p>
    <Counter/>
    <p>Bài 2: Tạo Component danh sách</p>
    <TodoList congviec={arrCongViec}/>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
