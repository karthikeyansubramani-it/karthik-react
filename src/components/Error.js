import { useRouteError } from 'react-router'

const Error = () => {

    const err = useRouteError();
    console.log(err);

    return (
            <div>
                <h2>OOPS!!!</h2>
                <h3>Something went wrong !</h3>
                <h4>{err.status} : {err.statusText }</h4>
            </div>
        )
}

export default Error