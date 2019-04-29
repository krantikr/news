import React from 'react';
const Header = (props) => {
    return(
        <div className="app-header">
            <div className="container clear">
                <div className="site-branding">
                    <h1 id="logo" className="image-logo">
                        News9
                    </h1>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg nav-color">
                <div className="container clear p-0">
                    <a className="d-block d-sm-none navbar-menu" href="#">MENU</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span>&#9776;</span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Countries
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {
                                        ((self)=>{
                                            let listArray = [];
                                            props.countries.map((data,i)=>{
                                                listArray.push(
                                                    <div key={i}>
                                                        {
                                                            (i===0)
                                                                ?
                                                                null
                                                                :<div className="dropdown-divider"></div>
                                                        }
                                                        <a className="dropdown-item" onClick={()=>props.fetchData(data.key)}>{data.country}</a>
                                                    </div>
                                                )
                                            })
                                            return listArray;
                                        })(this)
                                    }
                                    {/*<a className="dropdown-item" href="#">Australia</a>*/}
                                    {/*<div className="dropdown-divider"></div>*/}
                                    {/*<a className="dropdown-item" href="#">Hong Kong</a>*/}
                                    {/*<div className="dropdown-divider"></div>*/}
                                    {/*<a className="dropdown-item" href="#">India</a>*/}
                                    {/*<div className="dropdown-divider"></div>*/}
                                    {/*<a className="dropdown-item" href="#">Indonesia</a>*/}
                                    {/*<div className="dropdown-divider"></div>*/}
                                    {/*<a className="dropdown-item" href="#">Malaysia</a>*/}
                                    {/*<div className="dropdown-divider"></div>*/}
                                    {/*<a className="dropdown-item" href="#">Philippines</a>*/}
                                    {/*<div className="dropdown-divider"></div>*/}
                                    {/*<a className="dropdown-item" href="#">Saudi Arabia</a>*/}
                                    {/*<div className="dropdown-divider"></div>*/}
                                    {/*<a className="dropdown-item" href="#">Singapore</a>*/}
                                    {/*<div className="dropdown-divider"></div>*/}
                                    {/*<a className="dropdown-item" href="#">Thailand</a>*/}
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
};
export default Header;