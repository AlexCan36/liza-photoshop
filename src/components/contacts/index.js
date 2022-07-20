const [formState, setFormState] = useState();
const [formState, setFormState] = useState({ name: '', email: '', message: '' });
const { name, email, message } = formState;

function ContactForm() {

    // JSX
}

return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
    <main>
    <ContactForm></ContactForm>
    <Gallery currentCategory={currentCategory}></Gallery>
    <About></About>
  </main>
  <input type="text" defaultValue={name} name="name" />
  <input type="email" defaultValue={email} name="email" />
  <textarea name="message" defaultValue={message} rows="5"  />
    );

    function handleChange(e) {
        setFormState({...formState, name: e.target.value })
      }
      
      console.log(formState);

  

export default ContactForm;