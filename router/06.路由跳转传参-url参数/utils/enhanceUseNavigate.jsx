import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function enhanceUseNavigate(Component) {
    //这里要通过函数式组件注入，因为类组件里不能用噢
    return function (props) {
        // 1.导航
        const naviagte = useNavigate()

        // 2.动态路由的参数
        const params = useParams()

        // 3.查询字符串的参数
        const [searchParams] = useSearchParams()
        // console.log(searchParams.get('name'))
        const query = Object.fromEntries(searchParams.entries())
        console.log(query);
        const router = { naviagte, params, query}

        return <Component {...props} router={router} />
    }
}