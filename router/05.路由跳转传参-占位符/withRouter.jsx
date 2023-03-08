import {useParams} from 'react-router-dom';

function withRouter(component) {
    return () => {
        let params = useParams();

        return <component {...props} params={params}/>
    }
}