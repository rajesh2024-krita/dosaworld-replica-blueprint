import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Users } from "lucide-react";

const Reservations = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-restaurant-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-serif text-5xl font-bold mb-6 text-primary">
              REQUEST A RESERVATION
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Share some details to make your request. Please select time to see the available slots.
            </p>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="p-8 shadow-xl">
            <form className="space-y-6">
              {/* Party Size */}
              <div>
                <Label htmlFor="party-size" className="text-lg font-semibold text-primary flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Party size
                </Label>
                <Select>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="2 guests" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 guest</SelectItem>
                    <SelectItem value="2">2 guests</SelectItem>
                    <SelectItem value="3">3 guests</SelectItem>
                    <SelectItem value="4">4 guests</SelectItem>
                    <SelectItem value="5">5 guests</SelectItem>
                    <SelectItem value="6">6 guests</SelectItem>
                    <SelectItem value="7">7 guests</SelectItem>
                    <SelectItem value="8">8+ guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date */}
              <div>
                <Label htmlFor="date" className="text-lg font-semibold text-primary flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Date
                </Label>
                <Input type="date" id="date" className="mt-2" />
              </div>

              {/* Time */}
              <div>
                <Label htmlFor="time" className="text-lg font-semibold text-primary flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Time
                </Label>
                <Select>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="11:30">11:30</SelectItem>
                    <SelectItem value="11:45">11:45</SelectItem>
                    <SelectItem value="12:00">12:00</SelectItem>
                    <SelectItem value="12:15">12:15</SelectItem>
                    <SelectItem value="12:30">12:30</SelectItem>
                    <SelectItem value="13:00">13:00</SelectItem>
                    <SelectItem value="13:30">13:30</SelectItem>
                    <SelectItem value="18:00">18:00</SelectItem>
                    <SelectItem value="18:30">18:30</SelectItem>
                    <SelectItem value="19:00">19:00</SelectItem>
                    <SelectItem value="19:30">19:30</SelectItem>
                    <SelectItem value="20:00">20:00</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-lg font-semibold text-primary">
                    Name
                  </Label>
                  <Input type="text" id="name" placeholder="Your name" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-lg font-semibold text-primary">
                    Phone
                  </Label>
                  <Input type="tel" id="phone" placeholder="Your phone number" className="mt-2" />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-lg font-semibold text-primary">
                  Email
                </Label>
                <Input type="email" id="email" placeholder="Your email" className="mt-2" />
              </div>

              {/* Special Requests */}
              <div>
                <Label htmlFor="requests" className="text-lg font-semibold text-primary">
                  Special Requests (Optional)
                </Label>
                <Input 
                  type="text" 
                  id="requests" 
                  placeholder="Any special dietary requirements or requests" 
                  className="mt-2" 
                />
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-restaurant-orange hover:bg-restaurant-orange/90 text-white"
              >
                RESERVE NOW
              </Button>
            </form>
          </Card>

          {/* Alternative Times */}
          <div className="mt-12 text-center">
            <h3 className="font-serif text-2xl font-bold mb-6 text-primary">
              Other Available Times
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['11:30', '11:45', '12:00', '12:15', '12:30', '13:00', '19:00', '19:30'].map((time) => (
                <Button 
                  key={time}
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  {time}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reservations;