import ContactForm from "./ContactForm";

const ContactRegister = () => {
  return (
    <section className="bg-gray-900 h-screen">
      <div className="mx-auto py-10 px-2">
        <div className="text-center pb-5">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Get in Touch
          </h1>
        </div>
        <div className="w-1/2 mx-auto justify-center items-center space-y-5">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactRegister;
