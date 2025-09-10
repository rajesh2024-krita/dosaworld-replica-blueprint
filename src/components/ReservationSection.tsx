import { Link } from "react-router-dom";
import bgImage from "../assets/11062b_909c4c1a78e54f998e22ac4141a1505c~mv2.avif";
import reservationimg from "../assets/reservation-img.avif";
import { Button } from "./ui/button";

const ReservationSection = () => {
  return (
    <section
      className="bg-cover bg-center w-full"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black/40 w-full h-full">
        <div className="text-white px-4 sm:px-8 md:px-12 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            {/* LEFT SECTION */}
            <div className="text-center md:text-left">
              <svg
                className="h-8 mx-auto md:mx-0 mb-4"
                preserveAspectRatio="xMidYMid meet"
                viewBox="21 20 159.3 160"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  fill="white"
                  d="M180.3 99.4c0 1.3-43 2.7-43 2.7-18.7 0-34.1 15.3-34.1 34.1 0 0-1.3 43.8-2.7 43.8s-2.7-43.8-2.7-43.8c0-18.7-15.3-34.1-34.1-34.1 0 0-42.7-1.3-42.7-2.7s42.7-2.7 42.7-2.7c18.7 0 34.1-15.3 34.1-34.1 0 0 1.4-42.7 2.8-42.6 1.3 0 2.6 42.6 2.6 42.6 0 18.7 15.3 34.1 34.1 34.1 0 0 42.9 1.3 43 2.7Z"
                />
              </svg>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-[60px] font-bold mb-6">
                RESERVATIONS
              </h2>

              <p className="text-base sm:text-lg mb-6 leading-relaxed text-white max-w-xl mx-auto md:mx-0">
                Reserve your table at Dosa World with ease using our online
                reservation feature. Book in advance and enjoy a seamless
                dining experience at Hamburg’s top South Indian restaurant.
              </p>

              <Link to="/reservations">
                <Button
                  size="lg"
                  className="border-white border uppercase bg-transparent text-white rounded-full text-base sm:text-lg hover:bg-[#0A2006] hover:border-[#0A2006]"
                >
                  Reserve your table
                </Button>
              </Link>
            </div>

            {/* RIGHT SECTION - IMAGE */}
            <div className="flex justify-center md:justify-end">
              <img
                src={reservationimg}
                alt="Biryani Bucket"
                className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
