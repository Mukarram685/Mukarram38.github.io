import React from "react";
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import ContactForm from "./ContactForm";

function Contact() {
  const whatsappNumber = "923098183945";
  const whatsappMessage = "Hi! How may I help you?";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const emailAddress = "muka654r@gmail.com";
  const emailSubject = "Contact from Portfolio";
  const emailBody = "Hello Mukarram, I came across your portfolio and would like to connect.";
  const emailLink = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <section id="contact" className="bg-[#1A1A1A] text-white px-4 py-12">
      <h2 className="text-4xl text-center font-bold text-[#007BFF] mb-4">
        Let's Work Together <span className="text-white font-semibold">– Contact Me</span>
      </h2>
      <p className="text-lg text-center max-w-3xl m-auto text-gray-400">
        Have a project in mind? Let’s talk! I’d love to hear from you and bring your ideas to life.
      </p>

      <div className="max-w-6xl mx-auto mt-10 flex flex-col md:flex-row gap-10">

        {/* Left side - Contact Links */}
        <div className="flex-1 md:max-w-md bg-gray-900 bg-opacity-80 border border-gray-700 rounded-2xl shadow-xl p-8 backdrop-blur-lg">
          <h2 className="text-[#007BFF] text-2xl font-bold mb-8 text-center">Get in Touch</h2>

          <div className="space-y-6">

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="p-3 rounded-full bg-green-500 group-hover:bg-[#007BFF] transition">
                <FaWhatsapp size={24} className="text-white" />
              </div>
              <span className="md:text-lg font-medium text-white group-hover:text-[#007BFF] transition">
                WhatsApp: +92 309 8183945
              </span>
            </a>

            <a
              href={emailLink}
              className="flex items-center gap-4 group"
            >
              <div className="p-3 rounded-full bg-red-500 group-hover:bg-[#007BFF] transition">
                <FaEnvelope size={24} className="text-white" />
              </div>
              <span className="md:text-lg font-medium text-white group-hover:text-[#007BFF] transition">
                Email: muka654r@gmail.com
              </span>
            </a>

            <a
              href="https://github.com/Mukarram685"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="p-3 rounded-full bg-gray-700 group-hover:bg-[#007BFF] transition">
                <FaGithub size={24} className="text-white" />
              </div>
              <span className="md:text-lg font-medium text-white group-hover:text-[#007BFF] transition">
                GitHub: Mukarram685
              </span>
            </a>

            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="p-3 rounded-full bg-blue-500 group-hover:bg-[#007BFF] transition">
                <FaLinkedinIn size={24} className="text-white" />
              </div>
              <span className="md:text-lg  font-medium text-white group-hover:text-[#007BFF] transition">
                LinkedIn: Your Profile
              </span>
            </a>

          </div>
        </div>

        {/* Right side - Contact Form */}
        <div className="flex-1 bg-gray-900 border border-gray-700 rounded-2xl shadow-xl p-6 backdrop-blur-lg">
          <ContactForm />
        </div>

      </div>
    </section>
  );
}

export default Contact;
