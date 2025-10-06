// src/pages/Impressum.tsx
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { Link } from "react-router-dom";

const Impressum: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Header />

      {/* Main Content */}
      <main className="text-center px-6 py-28">
        <div className="text-6xl font-bold mb-8">IMPRESSUM</div>

        <div className="space-y-6 max-w-2xl mx-auto text-sm leading-relaxed">
          <div>
            <p className="font-bold text-xl">DOSA WORLD</p>
            <p>Raja RamaSwamy Karthikayan</p>
            <p>Lämmertwiete 2</p>
            <p>21073 Hamburg</p>
          </div>

          <div>
            <p className="font-bold text-xl">CONTACT</p>
            <p>
              Phone : <a href="tel:04032527895" className="text-green-700 hover:underline">040 32527895</a>
            </p>
            <p>
              E-mail :{" "}
              <a href="mailto:info@dosaworld.de" className="text-green-700 hover:underline">
                info@dosaworld.de
              </a>
            </p>
            <p>Registration in the commercial register.</p>
          </div>

          <div>
            <p className="font-bold text-xl">REGISTRATION COURT</p>
            <p>District Court Hamburg</p>
          </div>

          <div>
            <p className="font-bold text-xl">REGISTRATION NUMBER</p>
            <p>HRB 184384</p>
          </div>

          <div>
            <p className="font-bold text-xl">SALES TAX IDENTIFICATION NUMBER</p>
            <p>according to §27 a sales tax law:</p>
            <p>St.Nr. 47/715/01503/</p>
          </div>

          <div>
            <p className="font-bold text-xl">VAT NUMBER</p>
            <p>DE365419852</p>
          </div>

          <div>
            <p className="font-bold text-xl">SUPERVISORY AUTHORITY</p>
            <p>District Office South, Public Order Office</p>
            <p>
              We are not willing or obliged to participate in dispute resolution
              proceedings before a consumer arbitration board.
            </p>
          </div>

          <div>
            <p className="font-bold text-xl">INFORMATION ACCORDING TO §5 TMG:</p>
            <p>Raja RamaSwamy Karthikayan</p>
            <p>Lämmertwiete 2</p>
            <p>21073 Hamburg</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Impressum;
