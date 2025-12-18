import Hero from '../components/HeroSection';
import "../styles/Contact.css"

const Register = () => {
  return (
    <>
      <Hero 
        title="Register"
        cosas={
            <form class="contact-form">
                <div class="form-group my-2">
                    <label class="required-label"  for="exampleInputPassword1">Name</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter name" required/>
                </div>
                <div class="form-group my-2">
                    <label class="required-label" for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                </div>
                <div class="form-group my-2">
                    <label class="required-label"  for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" placeholder="Enter password" required/>
                </div>
                <div class="regist">
                    <button type="submit" class="btn btn-primary">Send</button>
                </div>
            </form>
        }
      />
    </>
  );
};

export default Register;