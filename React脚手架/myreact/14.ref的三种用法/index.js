//重写react代码，并且通过react渲染出来对应的内容
import ReactDOM from 'react-dom/client';
import App from './App';
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App/>);