import './assets/css/bootstrap.min.css'
import './assets/css/index.css'
import React from 'react';
import Container from './components/Container';
import MenuItem from './components/MenuItem';
import { faHome, faUser, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const menu = Object.freeze({
  HOME: 'home',
  ABOUT: 'about',
  CONTACT: 'contact'
});

function App() {
  const [activeMenu, setActiveMenu] = React.useState(menu.HOME);

  const switchMenu = (menuName) => {
    Object.values(menu).includes(menuName) && setActiveMenu(menuName);
  }

  return (
      <>
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
                text='Contact' 
                icon={ faAddressBook } 
                isActive={ activeMenu == menu.CONTACT } 
                onClick={() => switchMenu(menu.CONTACT)}
              />
            </div>
          </Container>
        </div>
        <Container className='h-100'>
          <div className='main'>
            { activeMenu == menu.HOME && <Home/> }
            { activeMenu == menu.ABOUT && <About/> }
            { activeMenu == menu.CONTACT && <Contact/> }
          </div>
        </Container>
      </>
  );
}

export default App;
