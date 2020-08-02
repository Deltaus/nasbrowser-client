import React from "react";
import requireAuth from "./requireAuth";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className='ui container'>
            <h3>Home Page</h3>
            <div className='ui primary button'>Photos</div>
            <div>
                <Link to='/media/v' className='ui primary button'>Movies/Videos</Link>
            </div>
        </div>
    )
}

export default requireAuth(Home);