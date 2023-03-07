import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Link from 'next/link';
import { useState } from 'react';

const Sidebar = ({ openClass }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: '',
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <div
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}
      >
        <div className='mobile-header-wrapper-inner'>
          <div className='mobile-header-content-area'>
            <div className='mobile-logo'>
              <Link
                className='d-flex'
                href='/'
              >
                <img
                  alt='IORI'
                  src='assets/imgs/template/logo.svg'
                />
              </Link>
            </div>
            <div className='perfect-scroll'>
              <div className='mobile-menu-wrap mobile-header-border'>
                <Tabs
                  defaultActiveKey='menu'
                  id='fill-tab-example'
                  className='nav nav-tabs nav-tabs-mobile mt-25'
                  fill
                >
                  <Tab
                    eventKey='menu'
                    title='Menu'
                  >
                    <div className='tab-pane'>
                      <nav className='mt-15'>
                        <ul className='mobile-menu font-heading'>
                          <li
                            className={
                              isActive.key == 1
                                ? 'has-children active'
                                : 'has-children'
                            }
                            onClick={() => handleToggle(1)}
                          >
                            <span class='menu-expand'>
                              <svg
                                class='w-6 h-6 icon-16'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  stroke-linecap='round'
                                  stroke-linejoin='round'
                                  stroke-width='2'
                                  d='M19 9l-7 7-7-7'
                                ></path>
                              </svg>
                            </span>
                            <Link
                              className='active'
                              href='/index-6'
                            >
                              Home
                            </Link>
                            <ul
                              className={
                                isActive.key == 1
                                  ? 'sub-menu d-block'
                                  : 'sub-menu d-none'
                              }
                            ></ul>
                          </li>
                          <li
                            className={
                              isActive.key == 2
                                ? 'has-children active'
                                : 'has-children'
                            }
                            onClick={() => handleToggle(2)}
                          >
                            <span class='menu-expand'>
                              <svg
                                class='w-6 h-6 icon-16'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  stroke-linecap='round'
                                  stroke-linejoin='round'
                                  stroke-width='2'
                                  d='M19 9l-7 7-7-7'
                                ></path>
                              </svg>
                            </span>
                            <Link href='#'>Company</Link>
                            <ul
                              className={
                                isActive.key == 2
                                  ? 'sub-menu d-block'
                                  : 'sub-menu d-none'
                              }
                            >
                              <li>
                                <Link href='/about'>About Us</Link>
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
                    </div>
                  </Tab>

                  <Tab
                    eventKey='notification'
                    title='Testimonials'
                  >
                    <div className='notifications-item'>
                      <div className='item-notify'>
                        <div className='item-image'>
                          <img
                            src='assets/imgs/template/user1.png'
                            alt='iori'
                          />
                        </div>
                        <div className='item-info'>
                          <p className='color-grey-500 font-xs'>
                            <strong className='font-xs-bold'>
                              John Kabera <br />
                            </strong>
                            "I was impressed by AnchorEco's professional
                            employees who went above and beyond to ensure a
                            seamless experience. Highly recommended!"
                          </p>
                        </div>
                        <div className='item-time'></div>
                      </div>
                      <div className='item-notify'>
                        <div className='item-image'>
                          <img
                            src='assets/imgs/template/user2.png'
                            alt='iori'
                          />
                        </div>
                        <div className='item-info'>
                          <p className='color-grey-500 font-xs'>
                            <strong className='font-xs-bold'>
                              Agnes Uwimana <br />
                            </strong>
                            "I was impressed with AnchorEco's team of
                            professionals who exhibited exemplary work ethics,
                            expertise, and communication skills."
                          </p>
                        </div>
                        <div className='item-time'></div>
                      </div>
                    </div>

                    <div className='notifications-item'>
                      <div className='item-notify'>
                        <div className='item-image'>
                          <img
                            src='assets/imgs/template/user3.png'
                            alt='iori'
                          />
                        </div>
                        <div className='item-info'>
                          <p className='color-grey-500 font-xs'>
                            <strong className='font-xs-bold'>
                              Silvia Venture <br />
                            </strong>
                            "AnchorEco's team of professionals exude expertise
                            and efficiency, ensuring top-notch service and
                            satisfaction every time."
                          </p>
                        </div>
                        <div className='item-time'></div>
                      </div>

                      <div className='item-notify'>
                        <div className='item-image'>
                          <img
                            src='assets/imgs/template/user5.png'
                            alt='iori'
                          />
                        </div>
                        <div className='item-info'>
                          <p className='color-grey-500 font-xs'>
                            <strong className='font-xs-bold'>
                              Peter Karangwa <br />
                            </strong>
                            Clarisse is an exceptional professional who
                            consistently demonstrates a high level of expertise
                            and professionalism.
                          </p>
                        </div>
                        <div className='item-time'></div>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
              <div className='site-copyright color-grey-400 mt-0'>
                <div className='box-download-app'>
                  <p className='font-xs color-grey-400 mb-25'>
                    Download our Apps and get extra 15% Discount on your first
                    Order…!
                  </p>
                  <div className='mb-25'>
                    <Link
                      className='mr-10'
                      href='#'
                    >
                      <img
                        src='assets/imgs/template/appstore.png'
                        alt='iori'
                      />
                    </Link>
                    <Link href='#'>
                      <img
                        src='assets/imgs/template/google-play.png'
                        alt='iori'
                      />
                    </Link>
                  </div>
                  <p className='font-sm color-grey-400 mt-20 mb-10'>
                    Secured Payment Gateways
                  </p>
                  <img
                    src='assets/imgs/template/payment-method.png'
                    alt='iori'
                  />
                </div>
                <div className='mb-0'>
                  Copyright 2022 © IORI - Marketplace Template.
                  <br />
                  Designed by
                  <Link
                    href='/http:/alithemes.com'
                    target='_blank'
                  >
                    &nbsp; AliThemes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
