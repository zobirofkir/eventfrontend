import React, { useState } from 'react';
import SideBare from '../../components/SideBare';

const DashboardScreen = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };
  
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      <SideBare isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {/* Content */}
      <div className="flex-grow px-8 bg-transparent overflow-y-auto bg-bg-dashboard bg-norepeat bg-cover">
        <div className="border-b border-gray-300 h-24">
          <div className="flex justify-between items-center h-full">
            <div className="flex items-center">

              <ul className="flex">
                <li className="px-4 py-4">
                  <i className="fa fa-bars text-white" aria-hidden="true" onClick={toggleSidebar}></i>
                </li>

              </ul>
            </div>
          </div>
        </div>

        <div className="py-8 justify-center align-center w-full">
          <h2 className="text-xl font-bold mb-4 text-white">Users Management</h2>

          <ul className="divide-y divide-gray-200 dark:divide-gray-700 p-10">
            <li className="pb-3 sm:pb-4 ">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <img className="w-8 h-8 rounded-full" src="https://sourcedart.org/images/logo.png" alt="Neil image" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Neil Sims
                  </p>
                  <p className="text-sm text-white truncate dark:text-gray-400">
                    email@flowbite.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white bg-green-500 p-2 rounded-full">
                    admin
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <img className="w-8 h-8 rounded-full" src="https://sourcedart.org/images/logo.png" alt="Neil image" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Bonnie Green
                  </p>
                  <p className="text-sm text-white truncate dark:text-white">
                    email@flowbite.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white bg-red-500 p-2 rounded-full">
                  Client
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <img className="w-8 h-8 rounded-full" src="https://sourcedart.org/images/logo.png" alt="Neil image" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Michael Gough
                  </p>
                  <p className="text-sm text-white truncate dark:text-white">
                    email@flowbite.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white bg-green-500 p-2 rounded-full">
              admin
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <img className="w-8 h-8 rounded-full" src="https://sourcedart.org/images/logo.png" alt="Neil image" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Thomas Lean
                  </p>
                  <p className="text-sm text-white truncate dark:text-white">
                    email@flowbite.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white bg-red-500 p-2 rounded-full">
                  Client
                </div>
              </div>
            </li>
            <li className="pt-3 pb-0 sm:pt-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <img className="w-8 h-8 rounded-full" src="https://sourcedart.org/images/logo.png" alt="Neil image" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Lana Byrd
                  </p>
                  <p className="text-sm text-white truncate dark:text-white">
                    email@flowbite.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white bg-green-500 p-2 rounded-full">
                admin
                </div>
              </div>
            </li>
          </ul>
        </div>


        <div className="py-8">
          <h2 className="text-xl font-bold mb-4 text-white">Events Management</h2>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700 p-10">
            <li className="pb-3 sm:pb-4 ">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <img className="w-8 h-8 rounded-full" src="https://sourcedart.org/images/logo.png" alt="Neil image" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Neil Sims
                  </p>
                  <p className="text-sm text-white truncate dark:text-white">
                    email@flowbite.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  17/07/2024
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <img className="w-8 h-8 rounded-full" src="https://sourcedart.org/images/logo.png" alt="Neil image" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Bonnie Green
                  </p>
                  <p className="text-sm text-white truncate dark:text-white">
                    email@flowbite.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  17/07/2024
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <img className="w-8 h-8 rounded-full" src="https://sourcedart.org/images/logo.png" alt="Neil image" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Michael Gough
                  </p>
                  <p className="text-sm text-white truncate dark:text-white">
                    email@flowbite.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  17/07/2024
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <img className="w-8 h-8 rounded-full" src="https://sourcedart.org/images/logo.png" alt="Neil image" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Thomas Lean
                  </p>
                  <p className="text-sm text-white truncate dark:text-white">
                    email@flowbite.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  17/07/2024
                </div>
              </div>
            </li>
            <li className="pt-3 pb-0 sm:pt-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <img className="w-8 h-8 rounded-full" src="https://sourcedart.org/images/logo.png" alt="Neil image" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Lana Byrd
                  </p>
                  <p className="text-sm text-white truncate dark:text-white">
                    email@flowbite.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  17/07/2024
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default DashboardScreen;
