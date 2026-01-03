import React from 'react';

interface RoomSelectorProps {
  rooms: string[];
  selectedRoom: string;
  onSelectRoom: (room: string) => void;
}

const RoomSelector: React.FC<RoomSelectorProps> = ({ rooms, selectedRoom, onSelectRoom }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 p-4 bg-white rounded-lg shadow-md border border-gray-200">
      <label htmlFor="room-select" className="text-sm font-semibold text-gray-700 whitespace-nowrap">
        Select Room:
      </label>
      <div className="relative w-full sm:w-64">
        <select
          id="room-select"
          value={selectedRoom}
          onChange={(e) => onSelectRoom(e.target.value)}
          className="block w-full rounded-md border-gray-300 bg-gray-50 py-2 px-3 text-sm focus:border-indigo-500 focus:ring-indigo-500 shadow-sm border"
        >
          {rooms.map((room) => (
            <option key={room} value={room}>
              {room}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default RoomSelector;