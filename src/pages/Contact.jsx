import Hero from '../components/HeroSection';
import "../styles/Contact.css"

const Contact = () => {
  return (
    <>
      <Hero 
        title="Contact"
        subtitle="Got questions about the event, registrations, sponsorships, or wild Freestyle ideas? Contact us!"
        backgroundImage="/images/hero-home.jpg"
        cosas={
            <form class="contact-form">
                <div class="form-group">
                    <label for="exampleInputPassword1">Name</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter name"/>
                </div>
                <div class="form-group">
                    <label class="required-label" for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group msg">
                    <label class="required-label" htmlFor="messageTextarea">Message</label>
                    <textarea
                    className="form-control"
                    id="messageTextarea"
                    rows="5"
                    placeholder="Write your message here..."
                    required
                    ></textarea>
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Send</button>
            </form>
        }
      />
    </>
  );
};

export default Contact;