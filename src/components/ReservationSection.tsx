import { Link } from 'react-router-dom';
import bgImage from '../assets/11062b_909c4c1a78e54f998e22ac4141a1505c~mv2.avif';
import reservationimg from '../assets/reservation-img.avif';
import { Button } from './ui/button';

const ReservationSection = () => {
  return (
    <section className="bg-cover bg-center w-full" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="">
        <div className=" text-white p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center">
              <svg className="h-8" preserveAspectRatio="xMidYMid meet" data-bbox="21 20 159.3 160" viewBox="21 20 159.3 160" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label=""><defs></defs>
                <g>
                  <path fill="white" d="M180.3 99.4c0 1.3-43 2.7-43 2.7-18.7 0-34.1 15.3-34.1 34.1 0 0-1.3 43.8-2.7 43.8s-2.7-43.8-2.7-43.8c0-18.7-15.3-34.1-34.1-34.1 0 0-42.7-1.3-42.7-2.7s42.7-2.7 42.7-2.7c18.7 0 34.1-15.3 34.1-34.1 0 0 1.4-42.7 2.8-42.6 1.3 0 2.6 42.6 2.6 42.6 0 18.7 15.3 34.1 34.1 34.1 0 0 42.9 1.3 43 2.7Z" data-color="1"></path>
                </g>
              </svg>
              <h2 className="font-serif text-[60px] font-bold mb-6 ">
                RESERVATIONS
              </h2>
              <p className="text-lg mb-6 text-muted-foreground leading-relaxed text-white px-16">
                Reserve your table at Dosa World with ease using our online reservation feature. Book in advance and enjoy a seamless dining experience at Hamburg’s top South Indian restaurant.
              </p>
              <Link to="/reservations">
                <Button
                  size="lg"
                  className="border-white border uppercase bg-transparent text-white rounded-full text-xl hover:bg-[#0A2006] hover:border-[#0A2006] hover:text-white"
                >
                  Reserve your table
                </Button>
              </Link>
            </div>

            <div className="flex justify-center">
              <img
                src={reservationimg}
                alt="Biryani Bucket"
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;