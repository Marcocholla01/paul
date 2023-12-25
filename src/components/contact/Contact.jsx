import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (!form) {
      toast.error("Please fill all the required fields");
    }

    emailjs
      .sendForm(
        "service_44lnzcj",
        "template_972xb7w",
        form.current,
        "atvytavhQ8nWkveci"
      )
      .then(
        (result) => {
          // console.log(result.text);
          toast.success("Message Sent Successfully!!" || result.status);
        },
        (error) => {
          // console.log(error.text);
          toast.error("Oops!! Email not Sent ..Please try again", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-item" />
            <h4>Email</h4>
            <h5>marcocholla</h5>
            <a href="mailto:marcochollapaul01@gmail.com">Send a Message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-item" />
            <h4>Messanger</h4>
            <h5>marcocholla</h5>
            <a href="https://m.me/paul.ouma.545849/">Send a Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-item" />
            <h4>Whatsapp</h4>
            <h5>marcocholla</h5>
            <a href="https://api.whatsapp.com/send?phone=254742275513">
              Send a Message
            </a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <div className="form__names">
            <input
              type="text"
              required
              name="fname"
              id=""
              placeholder="Your first name"
            />
            <input
              type="text"
              required
              name="sname"
              id=""
              placeholder="Your second Name"
            />
          </div>

          <input
            type="email"
            name="email"
            required
            id=""
            placeholder="Your Email"
          />
          <input
            type="subject"
            required
            name="subject"
            id=""
            placeholder="Your subject"
          />

          <textarea
            name="message"
            required
            id=""
            rows="7"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
