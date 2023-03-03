import { PureComponent } from "react";

function computeInterval(Component) {
    return class extends PureComponent {
        componentWillMount() {
            this.begin = Date.now();
        }

        componentDidMount() {
            this.over = Date.now();
            let interval = this.over - this.begin;
            console.log(`${Component.name}组件渲染时间为${interval}ms`)
        }

        render() {
            return <Component {...this.props}/>
        }
    }
}

export default computeInterval;