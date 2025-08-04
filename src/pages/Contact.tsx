import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-restaurant-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-serif text-5xl font-bold mb-6 text-primary">
              CONTACT US
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get in touch with us for reservations, inquiries, or just to say hello!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-3xl font-bold mb-8 text-primary">
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-restaurant-orange mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg text-primary mb-2">Address</h3>
                      <p className="text-muted-foreground">
                        South Indian Restaurant<br />
                        Hamburg, Germany<br />
                        21073 Hamburg
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-restaurant-orange mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg text-primary mb-2">Phone</h3>
                      <p className="text-muted-foreground">
                        +49 (0) 123 456 789<br />
                        For reservations and inquiries
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-restaurant-orange mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg text-primary mb-2">Email</h3>
                      <p className="text-muted-foreground">
                        info@dosaworld.de<br />
                        reservations@dosaworld.de
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-restaurant-orange mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg text-primary mb-2">Opening Hours</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Thursday: 11:30 AM - 10:00 PM</p>
                        <p>Friday - Saturday: 11:30 AM - 11:00 PM</p>
                        <p>Sunday: 12:00 PM - 10:00 PM</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl font-bold mb-8 text-primary">
                Send us a Message
              </h2>
              
              <Card className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-primary font-semibold">
                        First Name
                      </Label>
                      <Input type="text" id="firstName" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-primary font-semibold">
                        Last Name
                      </Label>
                      <Input type="text" id="lastName" className="mt-2" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-primary font-semibold">
                      Email
                    </Label>
                    <Input type="email" id="email" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-primary font-semibold">
                      Phone Number
                    </Label>
                    <Input type="tel" id="phone" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-primary font-semibold">
                      Subject
                    </Label>
                    <Input type="text" id="subject" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-primary font-semibold">
                      Message
                    </Label>
                    <Textarea 
                      id="message" 
                      rows={5} 
                      className="mt-2"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-restaurant-orange hover:bg-restaurant-orange/90 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;