// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Calendar, Clock, Users } from "lucide-react";

// const Reservations = () => {
//   return (
//     <div className="min-h-screen">
//       <Header />
      
//       {/* Hero Section */}
//       <section className="pt-24 pb-16 bg-restaurant-cream/30">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h1 className="font-serif text-5xl font-bold mb-6 text-primary">
//               REQUEST A RESERVATION
//             </h1>
//             <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//               Share some details to make your request. Please select time to see the available slots.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Reservation Form */}
//       <section className="py-16">
//         <div className="container mx-auto px-4 max-w-2xl">
//           <Card className="p-8 shadow-xl">
//             <form className="space-y-6">
//               {/* Party Size */}
//               <div>
//                 <Label htmlFor="party-size" className="text-lg font-semibold text-primary flex items-center">
//                   <Users className="w-5 h-5 mr-2" />
//                   Party size
//                 </Label>
//                 <Select>
//                   <SelectTrigger className="mt-2">
//                     <SelectValue placeholder="2 guests" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="1">1 guest</SelectItem>
//                     <SelectItem value="2">2 guests</SelectItem>
//                     <SelectItem value="3">3 guests</SelectItem>
//                     <SelectItem value="4">4 guests</SelectItem>
//                     <SelectItem value="5">5 guests</SelectItem>
//                     <SelectItem value="6">6 guests</SelectItem>
//                     <SelectItem value="7">7 guests</SelectItem>
//                     <SelectItem value="8">8+ guests</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               {/* Date */}
//               <div>
//                 <Label htmlFor="date" className="text-lg font-semibold text-primary flex items-center">
//                   <Calendar className="w-5 h-5 mr-2" />
//                   Date
//                 </Label>
//                 <Input type="date" id="date" className="mt-2" />
//               </div>

//               {/* Time */}
//               <div>
//                 <Label htmlFor="time" className="text-lg font-semibold text-primary flex items-center">
//                   <Clock className="w-5 h-5 mr-2" />
//                   Time
//                 </Label>
//                 <Select>
//                   <SelectTrigger className="mt-2">
//                     <SelectValue placeholder="Select time" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="11:30">11:30</SelectItem>
//                     <SelectItem value="11:45">11:45</SelectItem>
//                     <SelectItem value="12:00">12:00</SelectItem>
//                     <SelectItem value="12:15">12:15</SelectItem>
//                     <SelectItem value="12:30">12:30</SelectItem>
//                     <SelectItem value="13:00">13:00</SelectItem>
//                     <SelectItem value="13:30">13:30</SelectItem>
//                     <SelectItem value="18:00">18:00</SelectItem>
//                     <SelectItem value="18:30">18:30</SelectItem>
//                     <SelectItem value="19:00">19:00</SelectItem>
//                     <SelectItem value="19:30">19:30</SelectItem>
//                     <SelectItem value="20:00">20:00</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               {/* Contact Information */}
//               <div className="grid md:grid-cols-2 gap-4">
//                 <div>
//                   <Label htmlFor="name" className="text-lg font-semibold text-primary">
//                     Name
//                   </Label>
//                   <Input type="text" id="name" placeholder="Your name" className="mt-2" />
//                 </div>
//                 <div>
//                   <Label htmlFor="phone" className="text-lg font-semibold text-primary">
//                     Phone
//                   </Label>
//                   <Input type="tel" id="phone" placeholder="Your phone number" className="mt-2" />
//                 </div>
//               </div>

//               <div>
//                 <Label htmlFor="email" className="text-lg font-semibold text-primary">
//                   Email
//                 </Label>
//                 <Input type="email" id="email" placeholder="Your email" className="mt-2" />
//               </div>

//               {/* Special Requests */}
//               <div>
//                 <Label htmlFor="requests" className="text-lg font-semibold text-primary">
//                   Special Requests (Optional)
//                 </Label>
//                 <Input 
//                   type="text" 
//                   id="requests" 
//                   placeholder="Any special dietary requirements or requests" 
//                   className="mt-2" 
//                 />
//               </div>

//               {/* Submit Button */}
//               <Button 
//                 type="submit" 
//                 size="lg" 
//                 className="w-full bg-restaurant-orange hover:bg-restaurant-orange/90 text-white"
//               >
//                 RESERVE NOW
//               </Button>
//             </form>
//           </Card>

//           {/* Alternative Times */}
//           <div className="mt-12 text-center">
//             <h3 className="font-serif text-2xl font-bold mb-6 text-primary">
//               Other Available Times
//             </h3>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               {['11:30', '11:45', '12:00', '12:15', '12:30', '13:00', '19:00', '19:30'].map((time) => (
//                 <Button 
//                   key={time}
//                   variant="outline" 
//                   className="border-primary text-primary hover:bg-primary hover:text-white"
//                 >
//                   {time}
//                 </Button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Reservations;




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
      <div className=" px-20 mt-36">
        {/* Breadcrumb */}
        <div className="text-md text-black mb-5">
          <span className='text-black hover:text-gray-700 hover:cursor-pointer'>Home</span> &gt; <span className="font-normal">RESERVATION</span>
        </div>

        {/* Header */}
        <h1 className="text-7xl text-[#0a2006] font-sans font-normal leading-tight mb-1">
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
