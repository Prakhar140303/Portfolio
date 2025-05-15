
const Contact = () => {
    return (
      <section id="contact" >
        <h2>Contact Me</h2>
        <p>Feel free to reach out for collaborations or just a friendly hello.</p>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </section>
    );
  };
  
  export default Contact;