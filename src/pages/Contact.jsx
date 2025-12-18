import Hero from '../components/HeroSection';
import Form from '../components/Form';
import "../styles/Contact.css"

const Contact = () => {
  return (
    <>
      <Hero 
        title="Contact"
        subtitle="Got questions about the event, registrations, sponsorships, or wild Freestyle ideas? Contact us!"
        cosas={
            <Form fields={['name', 'email', 'message', 'terms']} />
        }
      />
    </>
  );
};

export default Contact;