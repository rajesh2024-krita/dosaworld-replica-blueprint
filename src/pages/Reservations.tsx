import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Reservations = () => {
  const [partySize, setPartySize] = useState(2);
  const [date, setDate] = useState('2025-08-05');
  const [time, setTime] = useState('14:30');
  const [selectedSlot, setSelectedSlot] = useState('');

  const availableTimeSlots = [
    '13:45', '14:00',
    '14:15', '14:30', '17:00', '17:15', '17:30',
    '17:45', '18:00', '18:15', '18:30', '18:45', '19:00', '19:15', '19:30'
  ];

  const handleReserveNow = () => {
    if (!selectedSlot) {
      alert('Please select a time slot');
      return;
    }
    alert(`Reservation confirmed for ${partySize} guests on ${date} at ${selectedSlot}`);
  };

  return (
    <div className="min-h-screen bg-white  font-sans text-green-900">
      <Header />
      <div className="md:px-20 px-12 mt-36">
        {/* Breadcrumb */}
        <div className="text-md text-black mb-5">
          <span className='text-black hover:text-gray-700 hover:cursor-pointer'>Home</span> &gt; <span className="font-normal">RESERVATION</span>
        </div>

        {/* Header */}
        <h1 className="md:text-7xl text-2xl text-[#0a2006] font-sans font-normal leading-tight mb-1">
          REQUEST A <br className="md:hidden" /> RESERVATION
        </h1>

        {/* Subtitle */}
        <p className="text-md text-[#ed0000] mb-8">
          Share some details to make your request. PLEASE SELECT TIME TO SEE THE AVAILABLE SLOTS.
        </p>

        {/* Reservation Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Party size */}
          <div>
            <Label text="Party size" />
            <div className="relative">
              <select
                value={partySize}
                onChange={(e) => setPartySize(e.target.value)}
                className="w-full appearance-none border-2 border-[#6c6d48] hover:border-[#0a2006] rounded-md px-4 py-2 pr-10 text-sm text-green-900 bg-[#ffe0ab]"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'guest' : 'guests'}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-800 h-4 w-4 pointer-events-none" />
            </div>
          </div>

          {/* Date */}
          <div>
            <Label text="Date" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border-2 border-[#6c6d48] hover:border-[#0a2006] rounded-md px-4 py-2 text-sm bg-[#ffe0ab] text-green-900"
            />
          </div>

          {/* Time */}
          <div>
            <Label text="Time" />
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full border-2 border-[#6c6d48] hover:border-[#0a2006] rounded-md px-4 py-2 text-sm bg-[#ffe0ab] text-green-900"
            />
          </div>
        </div>


        <div className="border-t border-gray-300 my-14"></div>


        {/* Time Slot Selection */}
        <div>
          <h3 className="text-lg font-medium text-black font-sans mb-4">
            Choose an available time slot:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {availableTimeSlots.map((slot) => (
              <button
                key={slot}
                onClick={() => setSelectedSlot(slot)}
                className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-200 
                  border-2 focus:outline-none
                  ${
                    selectedSlot === slot
                      ? 'bg-[#ffa304] text-white border-[#0a2006] text-black'
                      : 'bg-green-900 text-white border-green-900 hover:bg-[#ffa304] hover:border-[#0a2006] hover:text-black'
                  }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>


        {/* Reserve Button */}
        <div className="mt-10 mb-40 flex justify-center">
          <button
            onClick={handleReserveNow}
            className="rounded-full border-2 border-yellow-600 text-black font-sans hover:bg-yellow-600 hover:text-black font-semibold px-6 py-2 transition"
          >
            RESERVE NOW
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

// Label Component
const Label = ({ text }) => (
  <label className="block text-sm font-medium text-green-900 mb-1">{text}</label>
);

export default Reservations;
