import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-2xl bg-gray-900 p-4 md:p-10 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-2xl font-bold text-[#007BFF] mb-6 text-center">Send a Message</h3>
        <form
          action="https://formspree.io/f/xleqqowq"
          method="POST"
          id="myForm"
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4"
        >
          <div>
            <label htmlFor="name" className="text-gray-300 font-semibold">Name:</label>
            <input
              className="border border-gray-600 bg-gray-800 p-3 rounded-md focus:ring-2 focus:ring-[#007BFF] w-full text-white"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="off"
              placeholder="Enter your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="text-gray-300 font-semibold">Email:</label>
            <input
              className="border border-gray-600 bg-gray-800 p-3 rounded-md focus:ring-2 focus:ring-[#007BFF] w-full text-white"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="off"
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="text-gray-300 font-semibold">Message:</label>
            <textarea
              className="border border-gray-600 bg-gray-800 p-3 rounded-md focus:ring-2 focus:ring-[#007BFF] w-full h-28 text-white"
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              autoComplete="off"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <button
            className="p-3 bg-[#007BFF] text-white rounded-md hover:bg-[#0056b3] transition text-lg font-semibold"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
