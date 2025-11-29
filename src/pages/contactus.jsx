import ResortContactForm from "../components/contactus/contactus";
import HeroSection from "../components/contactus/contactbanner";
import ContactInfo from "../components/contactus/addresssection";

function ContactUs() {
  return (
    <div>
        <HeroSection/>
      <ResortContactForm />
      <ContactInfo/>
    </div>
  );
}

export default ContactUs;
