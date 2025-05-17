// import React from "react";
const Contact = () => {
  return (
    <footer className="bg-[#1C1000]/95 text-white py-10 px-4" id="contact">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
          <p className="mb-2">Email: <a href="mailto:prakharsingh130303@example.com" className="underline">prakharsingh130303@example.com</a></p>
          <p className="mb-2">Phone: <a href="tel:+917800900550" className="underline">+91 7800900550</a></p>
          <p className="mb-2">Location: Kanpur, India</p>
        </div>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/xblowqpb"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-2 rounded bg-[#1c1208] border border-gray-600"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-2 rounded bg-[#1c1208] border border-gray-600"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="w-full p-2 rounded bg-[#1c1208] border border-gray-600"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-4 py-2 rounded"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="text-center mt-10 text-sm text-gray-400">
        © {new Date().getFullYear()} Prakhar Singh Parihar — All rights reserved.
      </div>
    </footer>
  );
};

export default Contact;
