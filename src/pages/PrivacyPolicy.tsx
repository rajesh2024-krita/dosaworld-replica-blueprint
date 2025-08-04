import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-restaurant-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-serif text-5xl font-bold mb-6 text-primary">
              PRIVACY POLICY
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              
              <h2 className="font-serif text-2xl font-bold mb-4 text-primary">
                Information We Collect
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                When you visit Dosa World or make a reservation, we may collect personal information such as your name, 
                email address, phone number, and dining preferences. This information is collected only when you voluntarily 
                provide it to us through our reservation system, contact forms, or when dining with us.
              </p>

              <h2 className="font-serif text-2xl font-bold mb-4 text-primary">
                How We Use Your Information
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                We use your personal information to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Process your reservations and provide our services</li>
                <li>Communicate with you about your booking or inquiries</li>
                <li>Send you promotional offers and updates (only with your consent)</li>
                <li>Improve our services and customer experience</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="font-serif text-2xl font-bold mb-4 text-primary">
                Information Sharing
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                except as described in this policy. We may share your information with trusted service providers who assist 
                us in operating our restaurant, conducting our business, or serving you, as long as they agree to keep this 
                information confidential.
              </p>

              <h2 className="font-serif text-2xl font-bold mb-4 text-primary">
                Data Security
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction. However, please remember that no method of transmission over the 
                internet or electronic storage is 100% secure.
              </p>

              <h2 className="font-serif text-2xl font-bold mb-4 text-primary">
                Cookies
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Our website may use cookies to enhance your experience, analyze site usage, and assist in our marketing efforts. 
                You can choose to disable cookies through your browser settings, although this may affect the functionality 
                of our website.
              </p>

              <h2 className="font-serif text-2xl font-bold mb-4 text-primary">
                Your Rights
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Under GDPR and other applicable privacy laws, you have the right to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate personal data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Withdraw consent at any time</li>
              </ul>

              <h2 className="font-serif text-2xl font-bold mb-4 text-primary">
                Contact Information
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:
              </p>
              <div className="bg-restaurant-cream/50 p-4 rounded-lg mb-6">
                <p className="text-muted-foreground">
                  <strong>Dosa World</strong><br />
                  Email: privacy@dosaworld.de<br />
                  Phone: +49 (0) 123 456 789<br />
                  Address: Hamburg, Germany
                </p>
              </div>

              <h2 className="font-serif text-2xl font-bold mb-4 text-primary">
                Changes to This Policy
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an 
                updated revision date. We encourage you to review this policy periodically to stay informed about how 
                we protect your information.
              </p>

              <div className="bg-restaurant-green/10 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Last updated:</strong> August 4, 2024
                </p>
              </div>

            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;