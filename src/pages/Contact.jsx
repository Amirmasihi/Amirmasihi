import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rg56sec",
        "template_ipueyph",
        form.current,
        "izVaE2LjxglDjWG5e",
      )
      .then(
        () => {
          alert("Massage sent successfully!");
        },
        (error) => {
          alert(`Failed to send message, please try again, ${error.text}`);
        },
      );
  };
  return (
    <>
      <div className="flex justify-center items-center my-32 motion-preset-slide-right motion-duration-2000">
        <form
          ref={form}
          onSubmit={sendEmail}
          action=""
          className="w-80 h-auto p-8 bg-white/5 backdrop-blur-md shadow-lg bordrer border-white/10 rounded-2xl flex items-center justify-center flex-col gap-4 "
        >
          <div className="flex flex-col gap-2">
            <input
              type="text"
              name="user_name"
              id=""
              placeholder="name"
              className="border border-gray-300 mt-2 w-64 h-8 rounded-lg p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="email"
              name="user_email"
              id=""
              placeholder="email"
              className="border border-gray-300 mt-2 w-64 h-8 rounded-lg p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <textarea
              placeholder="message..."
              name="message"
              id=""
              className="border border-gray-300 mt-2 w-64 h-24 rounded-lg p-2"
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <button
              type="submit"
              className="w-48 h-12 border-2 border-primary text-lg select-none cursor-pointer hover:scale-105 rounded-tr-2xl rounded-bl-2xl mt-2"
            >
              send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
