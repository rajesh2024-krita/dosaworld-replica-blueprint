"use client"
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import axios from "axios";
import Swal from "sweetalert2";

const Reservations = () => {
  const [partySize, setPartySize] = useState(2);
  const [date, setDate] = useState("2025-08-05");
  const [time, setTime] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [loading, setLoading] = useState(false);

  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);

  const API_URL = "http://localhost:3000/api/reservations";
  const TIMESLOT_URL = "http://localhost:3000/api/timeslots";

  // ✅ Fetch all timeslots from backend
  const fetchAvailableTimeSlots = async () => {
    try {
      const res = await axios.get(TIMESLOT_URL);
      setAvailableTimeSlots(res.data.map((slot: any) => slot.start_time));
    } catch (err) {
      console.error("Error fetching timeslots:", err);
    }
  };

  // ✅ Fetch booked slots for selected date
  const fetchBookedSlots = async (selectedDate: string) => {
    try {
      const res = await axios.get(`${API_URL}?date=${selectedDate}`);
      const reservedTimes = res.data.map((r: any) => r.time);
      setBookedSlots(reservedTimes);
    } catch (err) {
      console.error("Error fetching booked slots:", err);
    }
  };

  useEffect(() => {
    fetchAvailableTimeSlots();
  }, []);

  useEffect(() => {
    if (date) {
      fetchBookedSlots(date);
      setSelectedSlot("");
      setTime("");
    }
  }, [date]);

  const handleReserveNow = async () => {
    if (!selectedSlot) {
      Swal.fire({
        icon: "warning",
        title: "No time selected",
        text: "Please select a time slot before reserving!",
      });
      return;
    }

    try {
      setLoading(true);
      const payload = {
        name: "Guest User",
        party_size: partySize,
        date,
        time: selectedSlot,
      };

      await axios.post(API_URL, payload);

      Swal.fire({
        icon: "success",
        title: "Reservation Confirmed!",
        html: `<b>${partySize}</b> guests on <b>${date}</b> at <b>${selectedSlot}</b>`,
        confirmButtonColor: "#0a2006",
      });

      fetchBookedSlots(date);
      setSelectedSlot("");
    } catch (error) {
      console.error("Error creating reservation:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-green-900">
      <Header />
      <div className="md:px-20 px-12 mt-36">

        {/* Breadcrumb */}
        <div className="text-md text-black mb-5">
          <span className="text-black hover:text-gray-700 hover:cursor-pointer">Home</span> &gt;
          <span className="font-normal"> RESERVATION</span>
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
            <Label text="Members" />
            <div className="relative">
              <select
                value={partySize}
                onChange={(e) => setPartySize(Number(e.target.value))}
                className="w-full appearance-none border-2 border-[#6c6d48] hover:border-[#0a2006] rounded-md px-4 py-2 pr-10 text-sm text-green-900 bg-[#ffe0ab]"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "guest" : "guests"}
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
              onChange={(e) => {
                const newDate = e.target.value;
                const day = new Date(newDate).getDay(); // 0=Sun, 1=Mon, ...6=Sat
                if (day === 1) {
                  Swal.fire({
                    icon: "info",
                    title: "Closed on Mondays",
                    text: "Reservations are not available on Mondays. Please choose another day.",
                  });
                  return;
                }
                setDate(newDate);
              }}
              className="w-full border-2 border-[#6c6d48] hover:border-[#0a2006] rounded-md px-4 py-2 text-sm bg-[#ffe0ab] text-green-900"
            />
          </div>

          {/* Time (auto-selected) */}
          <div>
            <Label text="Time (auto-set from slot)" />
            <input
              type="time"
              value={selectedSlot || time}
              readOnly
              className="w-full border-2 border-gray-300 rounded-md px-4 py-2 text-sm bg-gray-100 text-green-900"
            />
          </div>
        </div>

        <div className="border-t border-gray-300 my-14"></div>

        {/* Time Slot Selection */}
        <div>
          <h3 className="text-lg font-medium text-black font-sans mb-4">Choose an available time slot:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {availableTimeSlots.map((slot) => {
              const isBooked = bookedSlots.includes(slot);
              return (
                <button
                  key={slot}
                  disabled={isBooked}
                  onClick={() => setSelectedSlot(slot)}
                  className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-200 border-2 focus:outline-none
                    ${isBooked
                      ? "bg-red-300 text-red-700 border-red-400 cursor-not-allowed"
                      : selectedSlot === slot
                        ? "bg-[#ffa304] text-black border-[#0a2006]"
                        : "bg-green-900 text-white border-green-900 hover:bg-[#ffa304] hover:border-[#0a2006] hover:text-black"
                    }`}
                >
                  {slot} {isBooked ? "(Booked)" : ""}
                </button>
              );
            })}
          </div>
        </div>

        {/* Reserve Button */}
        <div className="mt-10 mb-40 flex justify-center">
          <button
            onClick={handleReserveNow}
            disabled={loading || !selectedSlot}
            className="rounded-full border-2 border-yellow-600 text-black font-sans hover:bg-yellow-600 hover:text-black font-semibold px-6 py-2 transition disabled:opacity-50"
          >
            {loading ? "Reserving..." : "RESERVE NOW"}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// Label Component
const Label = ({ text }: { text: string }) => (
  <label className="block text-sm font-medium text-green-900 mb-1">{text}</label>
);

export default Reservations;
