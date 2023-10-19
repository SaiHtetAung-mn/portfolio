import React from 'react';
import MyPortraitPhoto from '../assets/image/me-dark.jpg'
import Reveal from '../components/Reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faDownload } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import TypeWriter from '../components/TypeWriter'
import MyCV from '../assets/file/cv.pdf';
import Button from '../components/Button';

function Home() {

    return (
        <div className='h-100 home-container'>
            <Reveal delay={ 0.2 } width='fit-content'>
                <img src={ MyPortraitPhoto } className='potrait-img'/>
            </Reveal>
            <div className='intro-text'>
                <Reveal delay={ 0.4 }>
                    <h4 style={{ margin: 0 }}>Hello,</h4>
                </Reveal>
                <Reveal delay={ 0.6 }>
                    <h3 className='intro-title title-bold'>
                        <TypeWriter delayInMS={100} text="I'm Sai Htet Aung"/>
                    </h3>
                </Reveal>
                <Reveal delay={ 2 }>
                    <h4>
                        <span style={{ color: 'gray' }}>{"< "}</span>
                        <span style={{ color: '#059DC0' }}>Web Developer</span>
                        <span style={{ color: 'gray' }}>{" />"}</span>
                    </h4>
                </Reveal>
                <Reveal delay={ 2.3 }>
                    <p className='intro-description'>
                        A fullstack developer enthusiastic about finding excellent solutions to your problems.
                    </p>
                </Reveal>
                <div className='home-btn-gp'>
                    <div className='d-flex align-items-center' style={{ columnGap: '15px' }}>
                        <Reveal delay={2.6} width='fit-content'>
                            <a href='https://github.com/SaiHtetAung-mn' target='_blank'>
                                <FontAwesomeIcon icon={ faGithub } className='contact-icon github-icon'/>
                            </a>
                        </Reveal>
                        <Reveal delay={2.7} width='fit-content'>
                            <a href='https://www.linkedin.com/in/sai-htet-aung' target='_blank'>
                                <FontAwesomeIcon icon={ faLinkedinIn } className='contact-icon linkedin-icon'/>
                            </a>
                        </Reveal>
                        <Reveal delay={2.8} width='fit-content'>
                            <a href='tel:+959267030245' target='_blank'>
                                <FontAwesomeIcon icon={ faPhone } className='contact-icon phone-icon'/>
                            </a>
                        </Reveal>
                    </div>
                    <Reveal delay={ 3.0 }>
                        <a href={ MyCV } download>
                            <Button>
                                <FontAwesomeIcon icon={ faDownload } style={{ marginRight: '10px' }}/> Download CV
                            </Button>
                        </a>
                    </Reveal>
                </div>
            </div>
        </div>
    )
}

export default Home;

