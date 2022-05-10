import React from 'react';
import { AuthenticatedRoutesWrapper } from '@elrondnetwork/dapp-core';
import { useLocation } from 'react-router-dom';
import { logo } from 'assets/img';
import { Footer, GradientBtn } from 'components';
import routes, { routeNames } from 'routes';

function Layout({ children }: { children: React.ReactNode }) {
  const { search } = useLocation();
  return (
    <div className='bg-light d-flex flex-column flex-fill wrapper'>
      <header className='App-header'>
        <nav>
          <div className='nav_mobile'>
            <div className='brand_logo_wrapper_mob'>
              <img src={logo} alt='brand logo' />
              <span className='brand_name'>VITAL</span>
            </div>
          </div>
          <div className='nav_desktop'>
            <div className='brand_logo_wrapper'>
              <img src={logo} alt='brand logo' />
              <span className='brand_name'>VITAL</span>
            </div>
            <div className='nav_links'>
              <div className='links_wrapper'>
                <a
                  href='/'
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/';
                  }}
                >
                  Home
                </a>
                <a href='*'>About Us</a>
                <a
                  href='/projects'
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/projects';
                  }}
                >
                  Projects
                </a>
                <a href='*'>Contact</a>
              </div>
              <div className='connect_wrapper'>
                <GradientBtn text='Connect' />
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className='d-flex flex-column flex-grow-1'>
        <AuthenticatedRoutesWrapper
          routes={routes}
          unlockRoute={`${routeNames.unlock}${search}`}
        >
          {children}
        </AuthenticatedRoutesWrapper>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
