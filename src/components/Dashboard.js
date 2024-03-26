import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar'; // Import your TopBar component
import TopNotificationBar from './Notification';
import Card from './Card';

function Dashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column',marginLeft:"260px" }}>
        <TopBar />  {/* Place TopBar here */}
<TopNotificationBar />   
<Card />   </div>
    </div>
  );
}

export default Dashboard;
