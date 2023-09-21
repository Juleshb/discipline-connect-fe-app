import { useState } from 'react';
import { Icon } from '@iconify/react';
import NewPermission from './NewPermission';
import PermissionHistory from './PermissionHistory';
function TopNavigation() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="p-4 relative flex flex-col min-w-0 break-words w-full mb-6    border-0">
      <div className="flex justify-center bg-white w-full h-auto space-x-4 rounded-lg">

        <button
          className={`px-4 items-center mt-2 mb-2 rounded-lg text-xs flex  py-3 block ${
            activeTab === 1
              ? 'bg-sky-100 text-primary'
              : 'text-primary'
          }`}
          onClick={() => handleTabClick(1)}
        >
            <i className='mr-2'><Icon icon="gala:add" /></i>
          New Permission
        </button>
        <button
          className={`px-4 items-center mt-2 mb-2 rounded-lg text-xs flex  py-3 block ${
            activeTab === 2
            ? 'bg-sky-100 text-primary'
            : 'text-primary'
          }`}
          onClick={() => handleTabClick(2)}
        >
            
        <i className='mr-2'><Icon icon="el:list-alt" /></i>
          Permission History
        </button>
      </div>
      <div className="mt-4">
        {activeTab === 1 && (
          <div className="bg-white p-4 rounded-lg shadow">
           <NewPermission/>
          </div>
        )}
        {activeTab === 2 && (
          <div className="bg-white p-4 rounded-lg shadow">
            <PermissionHistory/>
          </div>
        )}
      </div>
    </div>
  );
}

export default TopNavigation;
