import React from "react";
import experiences from '../config/experiences.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faPhone, faCalendarDays, faEnvelope, faLocationDot, faLanguage } from '@fortawesome/free-solid-svg-icons'
import certifications from '../config/certifications.json';
import educations from '../config/education.json';
import skills from '../config/skills.json';
import Reveal from "../components/Reveal";

function About() {
    return (
        <div>
            <div className="container-fluid section">
                <Reveal delay={ 0.1 }>
                    <h2 className="section-heading">Personal Info</h2>
                </Reveal>
                <div className="row" style={{ rowGap: '30px' }}>
                    <div className="col-md-6 col-lg-4">
                        <Reveal delay={ 0.3 }>
                            <div className="info-item">
                                <FontAwesomeIcon icon={ faUser } className="info-icon"/>
                                <h6>Sai Htet Aung</h6>
                            </div>
                        </Reveal>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <Reveal delay={ 0.4 }>
                            <div className="info-item">
                                <FontAwesomeIcon icon={ faCalendarDays } className="info-icon"/>
                                <h6>June 27, 2000</h6>
                            </div>
                        </Reveal>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <Reveal delay={ 0.5 }>
                            <div className="info-item">
                                <FontAwesomeIcon icon={ faPhone } className="info-icon"/>
                                <h6>+959 267030245</h6>
                            </div>
                        </Reveal>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <Reveal delay={ 0.6 }>
                            <div className="info-item">
                                <FontAwesomeIcon icon={ faEnvelope } className="info-icon"/>
                                <h6>saihtetaung276@gmail.com</h6>
                            </div>
                        </Reveal>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <Reveal delay={ 0.7 }>
                            <div className="info-item">
                                <FontAwesomeIcon icon={ faLocationDot } className="info-icon"/>
                                <h6>Yangon</h6>
                            </div>
                        </Reveal>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <Reveal delay={ 0.8 }>
                            <div className="info-item">
                                <FontAwesomeIcon icon={ faLanguage } className="info-icon"/>
                                <h6>English</h6>
                            </div>
                        </Reveal>
                    </div>
                </div>
                <hr className="section-separator"/>
            </div>

            <div className="container-fluid section">
                <Reveal delay={ 0.2 }>
                    <h2 className="section-heading">Education</h2>
                </Reveal>
                <div className="row" style={{ rowGap: '50px' }}>
                    {
                        educations.map((item, index) => {
                            return (
                                <div className="col-sm-12 col-md-6 col-lg-4" key={`${item.id}-${item.organization}`}>
                                    <Reveal delay={ 0.2+Number(`0.${index}`) }>
                                        <div className="edu-card">
                                            <img src={ require(`../assets/image/${item.logo}`) } className="img edu-card-img"/>
                                            <div className="edu-card-info">
                                                <a href={ item.link } target="_blank">
                                                    <h6 className="card-title">{ item.organization }</h6>
                                                </a>
                                                <div className="card-text">
                                                    <p>{ item.role }</p>
                                                    <p>{ `${item.from} ${item.to ? '- '+item.to : ''}` }</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Reveal>
                                </div>
                            )
                        })
                    }
                </div>
                <hr className="section-separator"/>
            </div>

            <div className="container-fluid section">
                <Reveal delay={ 0.2 }>
                    <h2 className="section-heading">Working Experiences</h2>
                </Reveal>
                <div className="row" style={{ rowGap: '50px' }}>
                    {
                        experiences.map((item, index) => {
                            return (
                                <div className="col-sm-12 col-md-6 col-lg-4" key={`${item.id}-${item.organization}`}>
                                    <Reveal delay={ 0.2+Number(`0.${index}`) }>
                                        <div className="edu-card">
                                            <img src={ require(`../assets/image/${item.logo}`) } className="img edu-card-img"/>
                                            <div className="edu-card-info">
                                                <a href={ item.link } target="_blank">
                                                    <h6 className="card-title">{ item.organization }</h6>
                                                </a>
                                                <div className="card-text">
                                                    <p>{ item.role }</p>
                                                    <p>{ `${item.from} ${item.to ? '- '+item.to : ''}` }</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Reveal>
                                </div>
                            )
                        })
                    }
                </div>
                <hr className="section-separator"/>
            </div>

            <div className="container-fluid section">
                <Reveal delay={ 0.2 } >
                    <h2 className="section-heading">Certifications</h2>
                </Reveal>
                <div className="row" style={{ rowGap: '50px' }}>
                    {
                        certifications.map((item, index) => {
                            return (
                                <div className="col-sm-12 col-md-6 col-lg-4" key={`${item.id}-${item.title}`}>
                                    <Reveal delay={ 0.2+Number(`0.${index}`) }>
                                        <a href={item.link} target="_blank" className="cert-card">
                                            <img src={ require(`../assets/image/${item.image}`) } className="img cert-card-img"/>
                                            <h6 className="card-title">{ item.title }</h6>
                                            <div className="card-text">
                                                <p>{ item.issuer }</p>
                                            </div>
                                        </a>
                                    </Reveal>
                                </div>
                            )
                        })
                    }
                </div>
                <hr className="section-separator"/>
            </div>

            <div className="container-fluid section">
                <Reveal delay={ 0.2 }>
                    <h2 className="section-heading">My Skills</h2>
                </Reveal>
                <div className="row" style={{ rowGap: '50px' }}>
                    {
                        skills.map((item, index) => {
                            return (
                                <div className="col-sm-12 col-md-6 col-lg-4" key={`${item.id}-${item.name}`}>
                                    <Reveal delay={ 0.2+Number((index+1)/10) }>
                                        <div className="skill-wrapper">
                                            <div className="d-flex justify-content-between">
                                                <p>{ item.name }</p>
                                                <p>{ `${item.percent}%` }</p>
                                            </div>
                                            <div className="skill-indicator">
                                                <div className="skill-percent" style={{ width: `${item.percent}%` }}></div>
                                            </div>
                                        </div>
                                    </Reveal>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default About;