import React from 'react';
const Carousel = (props) => {
    return(
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                {
                    ((self)=>{
                        let indicatorsArry = [];
                        if(props.topStories && props.topStories.length > 0){
                            let count = (props.topStories.length < 5)? self.props.topStories.length : 5;
                            let data = props.topStories;
                            for (let i=0; i<count; i++){
                                indicatorsArry.push(
                                    <li data-target="#carouselExampleIndicators" key={i} data-slide-to={i} className={(i===0)?"active":null}></li>
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
                        if(props.topStories && props.topStories.length > 0){
                            let count = (props.topStories.length < 5)? props.topStories.length : 5;
                            let data = props.topStories;
                            for (let i=0; i<count; i++){
                                topStoriesArry.push(
                                    <div className={(i===0)?'carousel-item active':'carousel-item'} key={i}>
                                        <img className="d-block w-100" src={data[i].urlToImage} alt="First slide"/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>{data[i].title}</h5>
                                            <p>{data[i].description}</p>
                                        </div>
                                    </div>
                                )
                            }
                            return topStoriesArry;
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
    )
};
export default Carousel;