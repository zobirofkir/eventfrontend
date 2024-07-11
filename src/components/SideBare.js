import React, { useState } from 'react';

const SideBare = ({ isSidebarOpen, toggleSidebar }) => {
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isMailBoxOpen, setIsMailBoxOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const toggleAccount = () => {
    setIsAccountOpen(!isAccountOpen);
  };

  const toggleMailBox = () => {
    setIsMailBoxOpen(!isMailBoxOpen);
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  return (
    <div
      className={`bg-bg-sidebare bg-norepeat bg-cover w-full md:w-64 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:block fixed top-0 left-0 h-full z-50 transition-transform duration-300 ease-in-out transform-gpu`}
    >
      <header className="flex justify-between items-center border-b border-transparent py-4 px-6">
        <div className="text-white text-2xl font-bold flex items-center justify-center align-center">
          kissTheme
        </div>
        <button
          className="text-white border border-white p-2 rounded"
          onClick={toggleSidebar}
        >
          <i className="fa fa-bars" aria-hidden="true"></i>
        </button>
      </header>
      <div className="border-b border-transparent px-8 py-6">
        <span className="text-center whitespace-nowrap text-white font-bold">
          Fabian Olivares
        </span>
      </div>
      <ul className="flex flex-col list-none md:block">
        <li className="border-b border-transparent">
          <a href="#" className="text-white block px-8 py-4 hover:text-orange">
            <i className="fa fa-tachometer mr-2" aria-hidden="true"></i>
            Dashboard
          </a>
        </li>
        <li className="border-b border-transparent">
          <button
            className="text-white flex justify-between items-center w-full px-8 py-4 hover:text-orange"
            onClick={toggleAccount}
          >
            <span>
              <i className="fa fa-user mr-2" aria-hidden="true"></i>
              Account
            </span>
            <i className={`fa ${isAccountOpen ? 'fa-angle-down' : 'fa-angle-right'}`} aria-hidden="true"></i>
          </button>
          <ul className={`bg-sidebare ${isAccountOpen ? 'block' : 'hidden'}`}>
            <li className="border-b border-transparent">
              <a href="#" className="text-white block px-8 py-4 hover:text-orange">
                <i className="fa fa-envelope-o mr-2" aria-hidden="true"></i>
                Inbox
              </a>
            </li>
            <li className="border-b border-transparent">
              <a href="#" className="text-white block px-8 py-4 hover:text-orange">
                <i className="fa fa-envelope-o mr-2" aria-hidden="true"></i>
                Notifications
              </a>
            </li>
          </ul>
        </li>
        <li className="border-b border-transparent">
          <button
            className="text-white flex justify-between items-center w-full px-8 py-4 hover:text-orange"
            onClick={toggleMailBox}
          >
            <span>
              <i className="fa fa-envelope mr-2" aria-hidden="true"></i>
              MailBox
            </span>
            <i
              className={`fa ${isMailBoxOpen ? 'fa-angle-down' : 'fa-angle-right'}`}
              aria-hidden="true"
            ></i>
          </button>
          <ul className={`bg-sidebare ${isMailBoxOpen ? 'block' : 'hidden'}`}>
            <li className="border-b border-transparent">
              <button
                className="text-white flex justify-between items-center w-full px-8 py-4 hover:text-orange"
                onClick={toggleCategories}
              >
                <span>
                  <i className="fa fa-envelope-o mr-2" aria-hidden="true"></i>
                  Categories
                </span>
                <i
                  className={`fa ${isCategoriesOpen ? 'fa-angle-down' : 'fa-angle-right'}`}
                  aria-hidden="true"
                ></i>
              </button>
              <ul className={`bg-sidebare ${isCategoriesOpen ? 'block' : 'hidden'}`}>
                <li className="border-b border-transparent">
                  <a href="#" className="text-white block px-8 py-4 hover:text-orange">
                    <i className="fa fa-envelope-o mr-2" aria-hidden="true"></i>
                    Social
                  </a>
                </li>
                <li className="border-b border-transparent">
                  <a href="#" className="text-white block px-8 py-4 hover:text-orange">
                    <i className="fa fa-envelope-o mr-2" aria-hidden="true"></i>
                    Notifications
                  </a>
                </li>
              </ul>
            </li>
            <li className="border-b border-transparent">
              <a href="#" className="text-white block px-8 py-4 hover:text-orange">
                <i className="fa fa-envelope-o mr-2" aria-hidden="true"></i>
                Inbox
              </a>
            </li>
          </ul>
          <div className="border-b border-transparent">
              <a href="#" className="text-white block px-8 py-4 hover:text-orange">
                <i class="fa-solid fa-right-from-bracket mr-2"></i>
                  Logout
              </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SideBare;
