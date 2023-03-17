import { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const submitContactForm = async (event) => {
    console.log(name, email, message)
    event.preventDefault();

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs
      .send("service_doagblx", "template_7mqtam8", templateParams, "Vs7cS58EEaJaCc0Uz")
      .then(
        () => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
          console.error("Error sending email:", error);
        }
      );
  };

  return (
    <form className="space-y-4" onSubmit={submitContactForm}>
      <div>
        <label className="block mb-2 text-sm font-medium text-white" htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-2.5 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
          id="name"
          placeholder="Name"
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-white" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2.5 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
          id="email"
          placeholder="Email"
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-white" htmlFor="message">
          Message:
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full p-2.5 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
          id="message"
          placeholder="Message"
        />
      </div>
      <button
        type="submit"
        className="w-full text-white bg-gray-600 hover:bg-gray-300 hover:text-black duration-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
      >
        Submit
      </button>
      {success && (
        <p className="text-green-400 text-xs italic">Thank you for contacting us!</p>
      )}
      {error && (
        <p className="text-red-400 text-xs italic">
          Something went wrong. Please try again later.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
