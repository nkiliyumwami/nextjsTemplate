import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Header = ({ handleOpen, handleRemove, openClass, addClass }) => {
  const [scroll, setScroll] = useState(0);
  const [isSearchToggled, setSearchToggled] = useState(false);
  const [isLanguageToggled, setLanguageToggled] = useState(false);
  const toggleSearchTrueFalse = () => setSearchToggled(!isSearchToggled);
  const toggleLanguageTrueFalse = () => setLanguageToggled(!isLanguageToggled);
  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <>
      <header
        className={`${
          scroll ? 'header sticky-bar stick' : 'header sticky-bar'
        } ${addClass}`}
      >
        <div className='container'>
          <div className='main-header'>
            <div className='header-left'>
              <div className='header-logo'>
                <Link
                  className='d-flex'
                  href='#'
                >
                  <img
                    alt='Ecom'
                    src='assets/imgs/template/logo.svg'
                  />
                </Link>
              </div>
              <div className='header-nav'>
                <nav className='nav-main-menu d-none d-xl-block'>
                  <ul className='main-menu'>
                    <li className='has-children'>
                      <Link
                        className='active'
                        href='#'
                      >
                        Home
                      </Link>
                      <div className='sub-menu two-col'>
                        <Link
                          className='btn-homepage'
                          href='#'
                        >
                          <span>
                            <svg
                              className='w-6 h-6 icon-16'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                              />
                            </svg>
                          </span>
                          AnchorEco
                        </Link>
                        <p className='font-xs color-grey-300'>
                          Think. Creative. Solve
                        </p>
                      </div>
                    </li>
                    <li className='has-children'>
                      <Link href='#'>Company</Link>
                      <ul className='sub-menu'>
                        <li>
                          <Link href='/about'>About Us</Link>
                        </li>
                        <li>
                          <Link href='/service'>Our Services</Link>
                        </li>

                        <li>
                          <Link href='/team'>Meet Our Team</Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link href='/contact'>Contact</Link>
                    </li>
                  </ul>
                </nav>
                <div
                  className={`burger-icon burger-icon-white ${
                    openClass && 'burger-close'
                  }`}
                  onClick={() => {
                    handleOpen();
                    handleRemove();
                  }}
                >
                  <span className='burger-icon-top' />
                  <span className='burger-icon-mid' />
                  <span className='burger-icon-bottom' />
                </div>
              </div>
              <div className='header-right'>
                <div className='d-none d-sm-inline-block'>
                  <Link
                    className='btn btn-brand-1 hover-up'
                    href='register'
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
