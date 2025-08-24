import React from 'react';
import ChatBox from './ChatBox';
import Notes from './Notes';
import Todo from './Todo';
import Reminders from './Reminders';
import StudyTimer from './StudyTimer';
import DailySummary from './DailySummary';

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Daily Summary Card */}
        <div className="col-span-full">
          <DailySummary />
        </div>
        
        {/* Quick Access Tiles */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <Notes />
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <Todo />
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <Reminders />
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <StudyTimer />
        </div>
        
        {/* AI Chat Section */}
        <div className="col-span-full">
          <ChatBox />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;