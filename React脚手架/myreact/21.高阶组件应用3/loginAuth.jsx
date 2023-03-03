
function loginAuth(Component) {
    return (props) => {
        if(localStorage.getItem('token')) {
            return <Component {...props}/>
        }else {
            return <h2>没有登录，{Component.name}不展示，请先登录！</h2>
        }
    }
}

export default loginAuth;