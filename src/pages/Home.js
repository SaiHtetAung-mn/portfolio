import React from 'react';
import MyPortraitPhoto from '../assets/image/me-dark.jpg'
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import TypeWriter from '../components/TypeWriter';

function Home() {

    return (
            <div className='h-100 home-container'>
                <img src={ MyPortraitPhoto } className='potrait-img'/>
                <div className='intro-text'>
                    <h2 className='intro-title'>
                        Hello, <strong className='title-bold'><TypeWriter delayInMS={100} text="I'm Sai Htet Aung"/></strong>
                    </h2>
                    <h3>
                        <span style={{ color: 'gray' }}>{"< "}</span>
                        <span style={{ color: '#059DC0' }}>Web Developer</span>
                        <span style={{ color: 'gray' }}>{" />"}</span>
                    </h3>
                    <p className='intro-description'>
                        A fullstack developer enthusiastic about finding excellent solutions to your problems.
                    </p>
                    <Button>
                        More About Me 
                        <FontAwesomeIcon icon={ faArrowRight } style={{ marginLeft: '10px' }}/> 
                    </Button>
                </div>
            </div>
    )
}

export default Home;

