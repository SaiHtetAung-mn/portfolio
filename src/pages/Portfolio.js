import React from "react";
import Reveal from "../components/Reveal";

function Portfolio() {
    return (
        <div className="container-fluid section">
            <Reveal delay={ 0.2 }>
                <h2 className="section-heading">My Works</h2>
            </Reveal>
            <div className="row" style={{ columnGap: "50px" }}>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <Reveal delay={ 0.4 }>
                        <div className="cert-card">
                            <img src={ require(`../assets/image/chat.jpeg`) } className="img cert-card-img"/>
                            <h6 className="card-title">Dummy Chat</h6>
                            <div className="card-text">
                                <p>Real time chat application made with Node.js , Socket.io and Express.js backend and Html, Css and Vanilla JavaScript Frontend.</p>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4">
                    <Reveal delay={ 0.5 }>
                        <div className="cert-card">
                            <img src={ require(`../assets/image/calculator.jpeg`) } className="img cert-card-img"/>
                            <h6 className="card-title">Calculator</h6>
                            <div className="card-text">
                                <p>A simple basic Calculator manipulated and processed with Prefix and Postfix evaluation algorithm.</p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;