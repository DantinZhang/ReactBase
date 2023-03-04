//重写react代码，并且通过react渲染出来对应的内容
import ReactDOM from 'react-dom/client';
import App from './App';
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App/>);

// function fun(...arg) {
//     console.log(arg);
// }
// let name = 'zzy';
// let age = 18;
// fun`我叫${name}，我今年${age}岁`;