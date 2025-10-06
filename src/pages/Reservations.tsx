"use client";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import { api } from "@/hooks/axios";

// Loader Component
const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-600 border-solid"></div>
    </div>
  );
};

const Reservations = () => {
  const { t } = useTranslation();

  // form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const [partySize, setPartySize] = useState(2);
  const [date, setDate] = useState("2025-08-05");
  const [time, setTime] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  // Step management
  const [currentStep, setCurrentStep] = useState(1);

  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);

  const API_URL = "/reservations";
  const TIMESLOT_URL = "/timeslots";

  // Fetch all timeslots
  const fetchAvailableTimeSlots = async () => {
    try {
      const res = await api.get(TIMESLOT_URL);
      setAvailableTimeSlots(res.data.map((slot: any) => slot.start_time));
    } catch (err) {
      console.error("Error fetching timeslots:", err);
    }
  };

  // Fetch booked slots for selected date
  const fetchBookedSlots = async (selectedDate: string) => {
    try {
      const res = await api.get(`${API_URL}?date=${selectedDate}`);
      const reservedTimes = res.data.map((r: any) => r.time);
      setBookedSlots(reservedTimes);
    } catch (err) {
      console.error("Error fetching booked slots:", err);
    }
  };

  useEffect(() => {
    const initializeData = async () => {
      try {
        setInitialLoading(true);
        await Promise.all([
          fetchAvailableTimeSlots(),
          fetchBookedSlots(date)
        ]);
      } catch (error) {
        console.error("Error initializing data:", error);
      } finally {
        setInitialLoading(false);
      }
    };

    initializeData();
  }, []);

  useEffect(() => {
    if (date) {
      fetchBookedSlots(date);
      setSelectedSlot("");
      setTime("");
    }
  }, [date]);

  // Step 1: Reserve time slot
  const handleReserveTimeSlot = async () => {
    if (!selectedSlot) {
      Swal.fire({
        icon: "warning",
        title: t("reservationsPage.alerts.noTimeSelected.title"),
        text: t("reservationsPage.alerts.noTimeSelected.text"),
      });
      return;
    }

    // Move to step 2
    setCurrentStep(2);
  };

  // Step 2: Complete reservation with personal info
  const handleCompleteReservation = async () => {
    if (!firstName || !lastName || !phone || !email) {
      Swal.fire({
        icon: "warning",
        title: "Missing Information",
        text: "Please fill in all required fields",
      });
      return;
    }

    if (!agreeToTerms) {
      Swal.fire({
        icon: "warning",
        title: "Agreement Required",
        text: "Please agree to the terms and conditions to complete your reservation",
      });
      return;
    }

    try {
      setLoading(true);
      const payload = {
        first_name: firstName,
        last_name: lastName,
        phone,
        email,
        party_size: partySize,
        date,
        time: selectedSlot,
      };

      await api.post(API_URL, payload);

      Swal.fire({
        icon: "success",
        title: t("reservationsPage.alerts.reservationConfirmed"),
        html: `<b>${partySize}</b> ${
          partySize === 1
            ? t("reservationsPage.form.guest")
            : t("reservationsPage.form.guests")
        } ${t("reservationsPage.header.on")} <b>${date}</b> ${t(
          "reservationsPage.header.at"
        )} <b>${selectedSlot}</b>`,
        confirmButtonColor: "#0a2006",
      });

      fetchBookedSlots(date);
      
      // Reset form and go back to step 1
      setCurrentStep(1);
      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setAgreeToTerms(false);
      setSelectedSlot("");
    } catch (error) {
      console.error("Error creating reservation:", error);
      Swal.fire({
        icon: "error",
        title: t("reservationsPage.alerts.reservationErrorTitle"),
        text: t("reservationsPage.alerts.reservationErrorText"),
      });
    } finally {
      setLoading(false);
    }
  };

  const handleBackToTimeSelection = () => {
    setCurrentStep(1);
  };

  // Show loader while initial data is loading
  if (initialLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-white font-sans text-green-900">
      <Header />
      <div className="md:px-20 px-12 mt-36">
        {/* Breadcrumb */}
        <div className="text-md text-black mb-5">
          <span className="text-black hover:text-gray-700 hover:cursor-pointer">
            {t("reservationsPage.breadcrumb.home")}
          </span>{" "}
          &gt;{" "}
          <span className="font-normal">
            {t("reservationsPage.breadcrumb.reservation")}
          </span>
        </div>

        {/* Header */}
        <h1 className="md:text-7xl text-2xl text-[#0a2006] font-sans font-normal leading-tight mb-1">
          {t("reservationsPage.header.title")}
        </h1>

        {/* Subtitle */}
        <p className="text-md text-[#ed0000] mb-8">
          {t("reservationsPage.header.subtitle")}
        </p>

        {/* Progress Steps */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center space-x-4">
            <div className={`flex flex-col items-center ${currentStep >= 1 ? 'text-green-900' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${currentStep >= 1 ? 'bg-green-900 text-white border-green-900' : 'bg-gray-100 border-gray-300'}`}>
                1
              </div>
              <span className="text-sm mt-2">Select Time</span>
            </div>
            <div className={`w-16 h-1 ${currentStep >= 2 ? 'bg-green-900' : 'bg-gray-300'}`}></div>
            <div className={`flex flex-col items-center ${currentStep >= 2 ? 'text-green-900' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${currentStep >= 2 ? 'bg-green-900 text-white border-green-900' : 'bg-gray-100 border-gray-300'}`}>
                2
              </div>
              <span className="text-sm mt-2">Personal Info</span>
            </div>
          </div>
        </div>

        {/* Step 1: Time Slot Selection */}
        {currentStep === 1 && (
          <>
            {/* Reservation Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {/* Party size */}
              <div>
                <Label text={t("reservationsPage.form.members")} />
                <div className="relative">
                  <select
                    value={partySize}
                    onChange={(e) => setPartySize(Number(e.target.value))}
                    className="w-full appearance-none border-2 border-[#6c6d48] hover:border-[#0a2006] rounded-md px-4 py-2 pr-10 text-sm text-green-900 bg-[#ffe0ab]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num}{" "}
                        {num === 1
                          ? t("reservationsPage.form.guest")
                          : t("reservationsPage.form.guests")}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-800 h-4 w-4 pointer-events-none" />
                </div>
              </div>

              {/* Date */}
              <div>
                <Label text={t("reservationsPage.form.date")} />
                <input
                  type="date"
                  value={date}
                  onChange={(e) => {
                    const newDate = e.target.value;
                    const day = new Date(newDate).getDay();
                    if (day === 1) {
                      Swal.fire({
                        icon: "info",
                        title: t("reservationsPage.alerts.closedOnMonday.title"),
                        text: t("reservationsPage.alerts.closedOnMonday.text"),
                      });
                      return;
                    }
                    setDate(newDate);
                  }}
                  className="w-full border-2 border-[#6c6d48] hover:border-[#0a2006] rounded-md px-4 py-2 text-sm bg-[#ffe0ab] text-green-900"
                />
              </div>

              {/* Time Display */}
              <div>
                <Label text={t("reservationsPage.form.time")} />
                <input
                  type="text"
                  value={selectedSlot || t("reservationsPage.form.selectTimeBelow")}
                  readOnly
                  className="w-full border-2 border-gray-300 rounded-md px-4 py-2 text-sm bg-gray-100 text-green-900"
                />
              </div>
            </div>

            <div className="border-t border-gray-300 my-14"></div>

            {/* Time Slot Selection */}
            <div>
              <h3 className="text-lg font-medium text-black font-sans mb-4">
                {t("reservationsPage.timeslot.choose")}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {availableTimeSlots.map((slot) => {
                  const isBooked = bookedSlots.includes(slot);
                  return (
                    <button
                      key={slot}
                      disabled={isBooked}
                      onClick={() => setSelectedSlot(slot)}
                      className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-200 border-2 focus:outline-none
                        ${
                          isBooked
                            ? "bg-red-300 text-red-700 border-red-400 cursor-not-allowed"
                            : selectedSlot === slot
                            ? "bg-[#ffa304] text-black border-[#0a2006]"
                            : "bg-green-900 text-white border-green-900 hover:bg-[#ffa304] hover:border-[#0a2006] hover:text-black"
                        }`}
                    >
                      {slot}{" "}
                      {isBooked ? `(${t("reservationsPage.timeslot.booked")})` : ""}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Reserve Button - Step 1 */}
            <div className="mt-10 mb-40 flex justify-center">
              <button
                onClick={handleReserveTimeSlot}
                disabled={!selectedSlot}
                className="rounded-full border-2 border-yellow-600 text-black font-sans hover:bg-yellow-600 hover:text-black font-semibold px-6 py-2 transition disabled:opacity-50"
              >
                {t("reservationsPage.form.reserveNow")}
              </button>
            </div>
          </>
        )}

        {/* Step 2: Personal Information */}
        {currentStep === 2 && (
          <>
            {/* Reservation Summary */}
            <div className="bg-[#ffe0ab] border-2 border-[#6c6d48] rounded-lg p-6 mb-10">
              <h3 className="text-lg font-semibold text-green-900 mb-4">Reservation Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Party Size</p>
                  <p className="font-semibold">
                    {partySize} {partySize === 1 ? t("reservationsPage.form.guest") : t("reservationsPage.form.guests")}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Date</p>
                  <p className="font-semibold">{date}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Time</p>
                  <p className="font-semibold">{selectedSlot}</p>
                </div>
              </div>
            </div>

            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div>
                <Label text="First Name *" />
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full border-2 border-[#6c6d48] rounded-md px-4 py-2 text-sm bg-[#ffe0ab] text-green-900"
                  required
                />
              </div>
              <div>
                <Label text="Last Name *" />
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full border-2 border-[#6c6d48] rounded-md px-4 py-2 text-sm bg-[#ffe0ab] text-green-900"
                  required
                />
              </div>
              <div>
                <Label text="Phone *" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border-2 border-[#6c6d48] rounded-md px-4 py-2 text-sm bg-[#ffe0ab] text-green-900"
                  required
                />
              </div>
              <div>
                <Label text="Email *" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-2 border-[#6c6d48] rounded-md px-4 py-2 text-sm bg-[#ffe0ab] text-green-900"
                  required
                />
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="mb-10">
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  checked={agreeToTerms}
                  onChange={(e) => setAgreeToTerms(e.target.checked)}
                  className="mt-1 w-4 h-4 text-green-900 bg-gray-100 border-gray-300 rounded focus:ring-green-900 focus:ring-2"
                />
                <label htmlFor="agreeToTerms" className="text-sm text-green-900">
                  I agree to the terms and conditions and understand that this reservation is subject to confirmation. 
                  I acknowledge that I may be contacted regarding my reservation details.
                </label>
              </div>
            </div>

            {/* Action Buttons - Step 2 */}
            <div className="mt-10 mb-40 flex justify-center space-x-4">
              <button
                onClick={handleBackToTimeSelection}
                className="rounded-full border-2 border-gray-600 text-gray-700 font-sans hover:bg-gray-600 hover:text-white font-semibold px-6 py-2 transition"
              >
                Back to Time Selection
              </button>
              <button
                onClick={handleCompleteReservation}
                disabled={loading || !agreeToTerms || !firstName || !lastName || !phone || !email}
                className="rounded-full border-2 border-yellow-600 text-black font-sans hover:bg-yellow-600 hover:text-black font-semibold px-6 py-2 transition disabled:opacity-50"
              >
                {loading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-black border-solid mr-2"></div>
                    {t("reservationsPage.form.reserving")}
                  </div>
                ) : (
                  "Complete Reservation"
                )}
              </button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

// Label Component
const Label = ({ text }: { text: string }) => (
  <label className="block text-sm font-medium text-green-900 mb-1">
    {text}
  </label>
);

export default Reservations;