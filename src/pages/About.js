import React from "react";
import eduAndExps from '../config/edu_and_exp.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faPhone, faCalendarDays, faEnvelope, faLocationDot, faLanguage } from '@fortawesome/free-solid-svg-icons'
import certifications from '../config/certifications.json';
import skills from '../config/skills.json';

function About() {
    return (
        <div>
            <div className="container-fluid section">
                <h2 className="section-heading">Personal Info</h2>
                <div className="row" style={{ rowGap: '30px' }}>
                    <div className="col-sm-6 col-md-4">
                        <div className="info-item">
                            <FontAwesomeIcon icon={ faUser } className="info-icon"/>
                            <h6>Sai Htet Aung</h6>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="info-item">
                            <FontAwesomeIcon icon={ faCalendarDays } className="info-icon"/>
                            <h6>June 27, 2000</h6>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="info-item">
                            <FontAwesomeIcon icon={ faPhone } className="info-icon"/>
                            <h6>+959 267030245</h6>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="info-item">
                            <FontAwesomeIcon icon={ faEnvelope } className="info-icon"/>
                            <h6>saihtetaung276@gmail.com</h6>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="info-item">
                            <FontAwesomeIcon icon={ faLocationDot } className="info-icon"/>
                            <h6>Yangon</h6>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="info-item">
                            <FontAwesomeIcon icon={ faLanguage } className="info-icon"/>
                            <h6>English</h6>
                        </div>
                    </div>
                </div>
                <hr className="section-separator"/>
            </div>

            <div className="container-fluid section">
                <h2 className="section-heading">Education & Working Experience</h2>
                <div className="row" style={{ rowGap: '50px' }}>
                    {
                        eduAndExps.map(item => {
                            return (
                                <div className="col-sm-12 col-md-6 col-lg-4" key={item.id}>
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
                                </div>
                            )
                        })
                    }
                </div>
                <hr className="section-separator"/>
            </div>

            <div className="container-fluid section">
                <h2 className="section-heading">Certifications</h2>
                <div className="row" style={{ rowGap: '50px' }}>
                    {
                        certifications.map(item => {
                            return (
                                <div className="col-sm-12 col-md-6 col-lg-4" key={item.id}>
                                    <a href={item.link} target="_blank" className="cert-card">
                                        <img src={ require(`../assets/image/${item.image}`) } className="img cert-card-img"/>
                                        <h6 className="card-title">{ item.title }</h6>
                                        <div className="card-text">
                                            <p>{ item.issuer }</p>
                                        </div>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
                <hr className="section-separator"/>
            </div>

            <div className="container-fluid section">
                <h2 className="section-heading">My Skills</h2>
                <div className="row" style={{ rowGap: '50px' }}>
                    {
                        skills.map(item => {
                            return (
                                <div className="col-sm-12 col-md-6 col-lg-4" key={item.id}>
                                    <div className="skill-wrapper">
                                        <div className="d-flex justify-content-between">
                                            <p>{ item.name }</p>
                                            <p>{ `${item.percent}%` }</p>
                                        </div>
                                        <div className="skill-indicator">
                                            <div className="skill-percent" style={{ width: `${item.percent}%` }}></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <hr className="section-separator"/>
            </div>
        </div>
    )
}

export default About;