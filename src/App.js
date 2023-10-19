import './assets/css/bootstrap.min.css'
import './assets/css/index.css'
import React from 'react';
import Container from './components/Container';
import MenuItem from './components/MenuItem';
import { faHome, faUser, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import { AnimatePresence } from 'framer-motion'
import PageTransition from './components/PageTransition';

const menu = Object.freeze({
  HOME: 'home',
  ABOUT: 'about',
  PORTFOLIO: 'portfolio'
});

function App() {
  const [activeMenu, setActiveMenu] = React.useState(menu.HOME);

  const switchMenu = (menuName) => {
    Object.values(menu).includes(menuName) && setActiveMenu(menuName);
  }

  return (
      <AnimatePresence>
        <div className="menu-container">
          <Container>
            <div className='menubar'>
              <MenuItem 
                text='Home' 
                icon={ faHome } 
                isActive={ activeMenu == menu.HOME } 
                onClick={() => switchMenu(menu.HOME)}
              />
              <MenuItem 
                text='About' 
                icon={ faUser } 
                isActive={ activeMenu == menu.ABOUT } 
                onClick={() => switchMenu(menu.ABOUT)}
              />
              <MenuItem 
                text='Portfolio' 
                icon={ faAddressBook } 
                isActive={ activeMenu == menu.PORTFOLIO } 
                onClick={() => switchMenu(menu.PORTFOLIO)}
              />
            </div>
          </Container>
        </div>
        <Container className='h-100'>
          <div className='main'>
            { activeMenu == menu.HOME &&  <PageTransition><Home/></PageTransition> }
            { activeMenu == menu.ABOUT && <PageTransition><About/></PageTransition> }
            { activeMenu == menu.PORTFOLIO && <PageTransition><Portfolio/></PageTransition> }
          </div>
        </Container>
      </AnimatePresence>
  );
}

export default App;
