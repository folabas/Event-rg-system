import { useState } from 'react';
import Header from '../components/Header';
import EventCard from '../components/EventCard';
import SearchSection from '../components/SearchSection';
import SuccessMessage from '../components/modals/SuccessMessage';
import CancelModal from '../components/modals/CancelModal';
import event1 from '../assets/image/event1.png';
import event2 from '../assets/image/event2.png';
import event3 from '../assets/image/event3.png';
import event4 from '../assets/image/event4.png';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('available'); // 'available' or 'registered'
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);

  const events = [
    {
      id: 1,
      title: "Event Title",
      description: "Join us for an immersive session on the latest trends in technology and innovation. Network with industry leaders and gain insights into future advancements.",
      image: event1,
      location: "Tech Innovation Center, 123 Main Street, Cityville",
      date: "June 10, 2024",
      time: "3:00 PM - 5:00 PM",
      deadline: "May 10, 2024",
      spotsLeft: 20
    },
    {
      id: 2,
      title: "Event Title",
      description: "Join us for an immersive session on the latest trends in technology and innovation. Network with industry leaders and gain insights into future advancements.",
      image: event2,
      location: "Tech Innovation Center, 123 Main Street, Cityville",
      date: "June 10, 2024",
      time: "3:00 PM - 5:00 PM",
      deadline: "May 10, 2024",
      spotsLeft: 20
    },
    {
      id: 3,
      title: "Event Title",
      description: "Join us for an immersive session on the latest trends in technology and innovation. Network with industry leaders and gain insights into future advancements.",
      image: event3,
      location: "Tech Innovation Center, 123 Main Street, Cityville",
      date: "June 10, 2024",
      time: "3:00 PM - 5:00 PM",
      deadline: "May 10, 2024",
      spotsLeft: 20
    },
    {
      id: 4,
      title: "Event Title",
      description: "Join us for an immersive session on the latest trends in technology and innovation. Network with industry leaders and gain insights into future advancements.",
      image: event4,
      location: "Tech Innovation Center, 123 Main Street, Cityville",
      date: "June 10, 2024",
      time: "3:00 PM - 5:00 PM",
      deadline: "May 10, 2024",
      spotsLeft: 20
    }
  ];

  const handleRegister = () => {
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const handleCancelClick = () => {
    setShowCancelModal(true);
  };

  const handleCancelConfirm = () => {
    // Add your cancel registration logic here
    setShowCancelModal(false);
  };

  return (
    <div className="h-screen flex flex-col bg-white">
      {showSuccessMessage && <SuccessMessage onClose={() => setShowSuccessMessage(false)} />}
      {showCancelModal && <CancelModal onClose={() => setShowCancelModal(false)} onConfirm={handleCancelConfirm} />}
      
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 overflow-y-auto hide-scrollbar px-8 py-6">
        <SearchSection activeTab={activeTab} />
        
        <div className="space-y-6">
          {events.map(event => (
            <EventCard 
              key={event.id}
              event={event}
              activeTab={activeTab}
              onRegister={handleRegister}
              onCancel={handleCancelClick}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Dashboard; 