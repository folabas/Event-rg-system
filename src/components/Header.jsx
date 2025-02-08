// Contains the logo, tabs, and profile picture 
import dots from '../assets/image/dots.png';

function Header({ activeTab, setActiveTab }) {
  return (
    <header className="px-8 py-4 flex items-center justify-between border-b">
      <img src={dots} alt="logo" className="w-6 h-6" />
      <div className="flex gap-2 bg-gray-100 rounded-full p-1">
        <button
          onClick={() => setActiveTab('available')}
          className={`px-4 py-2 rounded-full text-sm ${
            activeTab === 'available' ? 'bg-purple-900 text-white' : 'text-gray-600'
          }`}
        >
          Available Events
        </button>
        <button
          onClick={() => setActiveTab('registered')}
          className={`px-4 py-2 rounded-full text-sm ${
            activeTab === 'registered' ? 'bg-purple-900 text-white' : 'text-gray-600'
          }`}
        >
          Registered Events
        </button>
      </div>
      <div className="w-10 h-10 rounded-full bg-gray-200"></div>
    </header>
  );
}

export default Header; 