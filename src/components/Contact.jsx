import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import emailjs from "emailjs-com";
import ClickSpark from "./ClickSpark";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const contactInfo = [
  {
    icon: <FiMail className="text-primary-500" />,
    title: "Email",
    value: "somsahoo0703@gmail.com",
    link: "mailto:somsahoo0703@gmail.com",
  },
  {
    icon: <FiPhone className="text-primary-500" />,
    title: "Phone",
    value: "+91 95569 27156",
    link: "tel:+919556927156",
  },
  {
    icon: <FiMapPin className="text-primary-500" />,
    title: "Location",
    value: "Hyderabad, India",
    link: null,
  },
];

const socialLinks = [
  { icon: <FiGithub />, url: "https://github.com/somnathsahoo07" },
  {
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/somnath-sahoo-814774238/",
  },
  // { icon: <FiTwitter />, url: 'https://twitter.com/' }
];

const Contact = () => {
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        to_name: "Somnath", 
        from_name: formData.name,
        reply_to: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Email error:", error);
      setSubmitStatus("error");
      
      alert(
        `Error: ${error.message || "Failed to send message. Please try again."}`
      );
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  return (
    <ClickSpark
      sparkColor="#4C1D95"
      sparkSize={12}
      sparkRadius={18}
      sparkCount={10}
      duration={450}
    >
      <section id="contact" className="bg-dark-300 py-20">
        <div className="section-container" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title mx-auto inline-block after:left-1/2 after:-translate-x-1/2">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto mt-4">
              Have a project in mind or want to discuss potential opportunities?
              Feel free to reach out through any of the channels below.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-dark-200 p-3 rounded-full">
                      <div className="text-xl">{item.icon}</div>
                    </div>
                    <div>
                      <h4 className="text-gray-400">{item.title}</h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-white hover:text-primary-400 transition-colors duration-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{ duration: 0.4, delay: 0.5 + 0.1 * index }}
                      className="bg-dark-200 hover:bg-primary-600 p-3 rounded-full transition-all duration-300 text-white hover:shadow-glow"
                    >
                      <div className="text-xl">{social.icon}</div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-dark-200 rounded-xl p-6 md:p-8">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm text-gray-400 mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm text-gray-400 mb-2"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="YourName@example.com"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="subject"
                      className="block text-sm text-gray-400 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm text-gray-400 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="input-field resize-none"
                      placeholder="Hello, I'd like to discuss a project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn btn-primary w-full flex items-center justify-center gap-2 ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        Sending... <span className="animate-spin">⟳</span>
                      </>
                    ) : (
                      <>
                        Send Message <FiSend />
                      </>
                    )}
                  </button>

                  {submitStatus && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mt-4 text-center ${
                        submitStatus === "success"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {submitStatus === "success"
                        ? "Message sent successfully!"
                        : "Error sending message. Please try again."}
                    </motion.p>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </ClickSpark>
  );
};

export default Contact;
