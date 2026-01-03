import React, { useState, useMemo } from 'react';
import { RAW_DATA } from './constants';
import RoomSelector from './components/RoomSelector';
import TimetableGrid from './components/TimetableGrid';

const App: React.FC = () => {
  // Extract all available rooms. 
  // We skip index 0 because it contains the 'TIME' definitions, not a room schedule.
  const rooms = useMemo(() => {
    return RAW_DATA.slice(1).map(entry => entry['DAY']).filter(Boolean);
  }, []);

  const [selectedRoom, setSelectedRoom] = useState<string>(rooms[0] || '');

  // Find the data object corresponding to the selected room
  const selectedRoomData = useMemo(() => {
    return RAW_DATA.find(entry => entry['DAY'] === selectedRoom);
  }, [selectedRoom]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pb-12">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="bg-indigo-600 p-2 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
             </div>
             <h1 className="text-xl font-bold tracking-tight text-gray-900">
              Campus Timetable
            </h1>
          </div>
          <div className="hidden md:block text-sm text-gray-500">
            Current Session: 2023/2024
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Intro / Instructions */}
        <div className="mb-8 text-center sm:text-left">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Class Schedules
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Select a room below to view its weekly class distribution.
          </p>
        </div>

        {/* Controls */}
        <div className="mb-8">
          <RoomSelector 
            rooms={rooms} 
            selectedRoom={selectedRoom} 
            onSelectRoom={setSelectedRoom} 
          />
        </div>

        {/* Data Display */}
        {selectedRoomData ? (
          <TimetableGrid data={selectedRoomData} />
        ) : (
          <div className="bg-white p-12 rounded-lg border border-dashed border-gray-300 text-center text-gray-500">
            <p>No data available for the selected room.</p>
          </div>
        )}
      </main>
      
       <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} University Timetable System. All rights reserved.
       </footer>
    </div>
  );
};

export default App;