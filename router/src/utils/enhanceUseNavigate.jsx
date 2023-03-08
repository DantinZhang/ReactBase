import { useNavigate } from "react-router-dom";

export default function enhanceUseNavigate(Component) {
    //这里要通过函数式组件注入，因为类组件里不能用噢
    return function(props) {
        let navigate = useNavigate();
        return <Component {...props} navigate={navigate}/>
    }
}