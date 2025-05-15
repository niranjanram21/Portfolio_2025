"use client";

import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1b2f1052-bf0b-4279-84ac-f84a369503a2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      alert("Form submitted successfully!");
      console.log(result);
    }
  }

  return (
    <>
      <div className="mx-auto px-4 md:px-0 md:w-1/2 mt-16">
        <span className="montserrat-unique-class text-xl text-stone-800 text-left border-b-4 border-teal-500">
          CONTACT
        </span>
        <div className="mt-12 flex flex-col md:flex-row justify-between gap-5">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="text-xl font-semibold">HAVE A PROJECT YOU&apos;D LIKE TO DISCUSS?</div>

            {/* ✅ Use form tag with onSubmit */}
            <form onSubmit={handleSubmit}>
              <div className="mt-6">
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full rounded border border-stone-300 px-3 py-2 text-stone-600 outline-none ring-teal-300 transition duration-100 focus:ring shadow-lg/10"
                />
              </div>
              <div className="mt-6">
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Your Email"
                  className="w-full rounded border border-stone-300 px-3 py-2 text-stone-600 outline-none ring-teal-300 transition duration-100 focus:ring shadow-lg/10"
                />
              </div>
              <div className="mt-6">
                <textarea
                  name="message"
                  required
                  placeholder="Your Message"
                  className="w-full rounded border border-stone-300 px-3 py-2 text-stone-600 outline-none ring-teal-300 transition duration-100 focus:ring shadow-lg/10"
                />
              </div>

              {/* ✅ Proper submit button */}
              <button
                type="submit"
                className="text-white poppins-medium mt-4 bg-teal-500 hover:bg-teal-700 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 shadow-lg/30"
              >
                SEND MESSAGE
              </button>
            </form>
          </motion.div>

          <motion.div
            className="md:w-1/2 py-4 md:py-0 bg-teal-500 px-12 text-stone-100 rounded-lg shadow-xl/30 flex flex-col items-start justify-center gap-3 text-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="font-bold">CONTACT INFORMATION</div>
            <div>
              <a href="mailto:niranjanram3657@gmail.com">Email: niranjanram3657@gmail.com</a>
            </div>
            <div>
              <a href="tel:+918356938354">Phone: +91 835-693-8354</a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
