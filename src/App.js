import React from 'react';
import './css/mainStyle.scss';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Card from './components/Card';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            activeScreen:'loading',
            topStories:[],
            countries:[
                {country:'Australia', key:'au'},
                {country:'Canada', key:'ca'},
                {country:'China', key:'cn'},
                {country:'Egypt', key:'eg'},
                {country:'Hong Kong', key:'hk'},
                {country:'India', key:'in'},
                {country:'Indonesia', key:'id'},
                {country:'Japan', key:'jp'},
                {country:'Philippines', key:'ph'},
                {country:'Saudi Arabia', key:'sg'},
                {country:'United States', key:'us'},
            ]

        };
        this.fetchData = this.fetchData.bind(this);
    }
    componentDidMount() {
        this.fetchData('in')
    }

    fetchData(country){
        let self = this;
        var url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=8587bd9c0f864ad2b046563d2362dc1a`;
        var req = new Request(url);
        self.setState({
            activeScreen: "loading",
        });
        fetch(req)
            .then(response => response.json())
            .then(jsonBody => {return jsonBody; })
            .then(result => {
                console.log(result.articles);
                self.setState({
                    topStories: result.articles,
                    activeScreen: "latestNews",
                })
            });
    }

    render() {
        return (
            <div className="app-layout">
                <Header countries={this.state.countries} fetchData={this.fetchData}/>
                {
                    ((self)=>{
                        let currentScreen = [];
                        switch (self.state.activeScreen) {
                            case "loading":
                                currentScreen.push(
                                    <div className="loading-block">
                                        <img src="./img/loader.gif"/>
                                        <p>Loading...</p>
                                    </div>
                                );
                                break;
                            case "latestNews":
                                currentScreen.push(
                                    <div>
                                        <div className="container mb-5">
                                            {
                                                (this.state.topStories && this.state.topStories.length > 0)
                                                    ?
                                                    <Carousel topStories={this.state.topStories}/>
                                                    :null

                                            }
                                        </div>
                                        <div className="container">
                                            <div className="page-heading">
                                                <h3>
                                                    <span>LATEST NEWS</span>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="container mt-3">
                                            <div className="card-columns">
                                                {
                                                    ((self)=>{
                                                        let cardArry = [];
                                                        if(self.state.topStories && self.state.topStories.length > 0){
                                                            self.state.topStories.map((data,i)=>{
                                                                cardArry.push(
                                                                    <Card story={data} key={i}/>
                                                                )
                                                            });
                                                            return cardArry;
                                                        }else {
                                                            return(
                                                                <div className="text-center mt-5">
                                                                    <p className="text-danger">Sorry! New not found :(</p>
                                                                </div>
                                                            )
                                                        }
                                                    })(this)
                                                }
                                            </div>
                                        </div>
                                    </div>
                                );
                                break;
                            default:
                                currentScreen.push(
                                    <div className="error-block">
                                        <p>Somethis went wrong :(</p>
                                    </div>
                                );
                                break;
                        }
                        return currentScreen;
                    })(this)
                }

            </div>
        );
    }
}

export default App;
