import React from 'react';
import { Outlet } from 'react-router-dom';

const PagesRoot = () => {
    return (
        <div>
            <Outlet ></Outlet>
        </div>
    )
}

export default PagesRoot