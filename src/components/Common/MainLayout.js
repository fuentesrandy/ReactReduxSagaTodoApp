import React, { Fragment } from "react"




const MainLayout = ({ children }) => {

    return <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Todo App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                      
                    </li>
                </ul>
            </div>
        </nav>
        <div className="container-fluid">
            <div className="row">
                {children}
            </div>
        </div>
    </Fragment >
}

export default MainLayout;

