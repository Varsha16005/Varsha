import React from 'react';
import { Link } from "react-router-dom";
const Mainpage = () => {
    return (<>
        <div>
            <h1>This is Mainpage</h1>
            <center><Link to="/Returnpage">Next Page</Link></center>
        </div>
    </>
    );
};
export default Mainpage;