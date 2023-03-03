import { PureComponent } from 'react';
import myContext from './context'
function enhanceContext(Component) {
    class NewComponent extends PureComponent {
        render() {
            return (
                <div>
                    <myContext.Consumer>
                        {
                            value => {
                                return <Component {...value} />
                            }
                        }
                    </myContext.Consumer>
                </div>
            )
        }
    }
    return NewComponent;
}

export default enhanceContext;