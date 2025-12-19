import Hero from '../components/HeroSection';
import "../styles/Contact.css"
import Form from '../components/Form';

const Login = () => {
  return (
    <>
      <Hero 
        title="Log in"
        subtitle="Log in as user to bet, sign up as blower... and much more!"
        cosas={
            <Form 
              fields={['username', 'password']} 
              secondaryButton={{ href: '/register', text: 'Register' }}
            />
        }
      />
    </>
  );
};

export default Login;