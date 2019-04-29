import React from 'react';
import './css/mainStyle.scss'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            topStories:[]
        }
    }
    componentDidMount() {
        let self = this;
        var url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=8587bd9c0f864ad2b046563d2362dc1a';
        var req = new Request(url);
        fetch(req)
            .then(response => response.json())
            .then(jsonBody => { console.log(jsonBody); return jsonBody; })
            .then(result => {
                console.log(result.articles);
                self.setState({topStories: result.articles},()=>{
                    console.log(self.state.topStories)
                })
            });
    }

    render() {
        return (
            <div className="app-layout">
                <header className="app-header">
                    <div className="container clear">
                        <div className="site-branding">
                            <h1 id="logo" className="image-logo">
                                News
                            </h1>
                        </div>
                    </div>
                    <nav className="navbar navbar-expand-lg nav-color">
                        <div className="container clear p-0">
                            <a className="d-block d-sm-none navbar-menu" href="#">MENU</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
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
                                            <a className="dropdown-item" href="#">Australia</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Hong Kong</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">India</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Indonesia</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Malaysia</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Philippines</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Saudi Arabia</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Singapore</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Thailand</a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">About</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>

                <div className="container mb-5">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            {
                                ((self)=>{
                                    let indicatorsArry = [];
                                    if(self.state.topStories.length > 0){
                                        let count = (self.state.topStories.length < 5)? self.state.topStories.length : 5;
                                        let data = self.state.topStories;
                                        for (let i=0; i<count; i++){
                                            indicatorsArry.push(
                                                <li data-target="#carouselExampleIndicators" data-slide-to={i} className={(i===0)?"active":null}></li>
                                            )
                                        }
                                        return indicatorsArry;
                                    }
                                })(this)
                            }
                        </ol>
                        <div className="carousel-inner">
                            {
                                ((self)=>{
                                    let topStoriesArry = [];
                                    if(self.state.topStories.length > 0){
                                        let count = (self.state.topStories.length < 5)? self.state.topStories.length : 5;
                                        let data = self.state.topStories;
                                        for (let i=0; i<count; i++){
                                            topStoriesArry.push(
                                                <div className={(i===0)?'carousel-item active':'carousel-item'} key={i}>
                                                    <img className="d-block w-100" src={data[i].urlToImage} alt="First slide"/>
                                                </div>
                                            )
                                        }
                                        return topStoriesArry;
                                    }else {
                                        //    TODO
                                    }
                                })(this)
                            }
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                           data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                           data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>

                <div className="container">
                    <div className="page-heading">
                        <h3>LATEST NEWS</h3>
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="card-columns">
                        {
                            ((self)=>{
                                let cardArry = [];
                                if(self.state.topStories.length > 0){
                                    self.state.topStories.map((data,i)=>{
                                        cardArry.push(
                                            <div className="card" key={i}>
                                                <img className="card-img-top" src={data.urlToImage} alt={data.urlToImage}/>
                                                <div className="card-body">
                                                    <h5 className="card-title">{data.title}</h5>
                                                    <p className="card-text">{data.description}</p>
                                                    <p className="card-text">
                                                        <small className="text-muted">Published at: {data.publishedAt}</small>
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })
                                    return cardArry;
                                }else {
                                    // TODO
                                }
                            })(this)
                        }
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
