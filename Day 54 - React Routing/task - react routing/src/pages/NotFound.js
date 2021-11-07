import React from 'react'
import { useHistory } from 'react-router'

function NotFound() {
    const history = useHistory();

    function goBack(){
        history.goBack();
    }
    return (
        <div id="notfound">
            <div class="notfound">
                <div class="notfound-404"></div>
                <h1>404</h1>
                <h2>Oops! Page Not Be Found</h2>
                <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
                <button onClick={goBack}>Back to homepage</button>
            </div>
        </div>
    )
}

export default NotFound
