import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm({ isCareer = false }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    details: "",
    resume: null,
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("projectType", formData.projectType);
    data.append("details", formData.details);
    if (isCareer && formData.resume) {
      data.append("resume", formData.resume);
    }

    try {
      const response = await fetch(`/api/${isCareer ? "careers" : "contact"}`, {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          projectType: "",
          details: "",
          resume: null,
        });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="pixel-card p-6 sm:p-8 max-w-[600px] w-full mx-auto"
      variants={formVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-6">
          <label className="block text-pixel-green mb-2 font-press-start">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full pixel-input"
            placeholder="Mario Pixel"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-pixel-green mb-2 font-press-start">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full pixel-input"
            placeholder="hello@pixellate.dev"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-pixel-green mb-2 font-press-start">
            {isCareer ? "Position" : "Project Type"}
          </label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full pixel-input"
            required
          >
            <option value="">
              {isCareer ? "Select position" : "Select project type"}
            </option>
            {isCareer ? (
              <>
                <option>Pixel Artist</option>
                <option>Web Developer</option>
                <option>UI/UX Designer</option>
                <option>Project Manager</option>
              </>
            ) : (
              <>
                <option>Website Design</option>
                <option>Web Development</option>
                <option>E-Commerce</option>
                <option>Pixel Art</option>
                <option>Other</option>
              </>
            )}
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-pixel-green mb-2 font-press-start">
            {isCareer ? "Cover Letter" : "Project Details"}
          </label>
          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            className="w-full pixel-input h-32"
            placeholder={
              isCareer
                ? "Tell us why you’re a great fit..."
                : "Tell us about your pixel-perfect project..."
            }
            required
          ></textarea>
        </div>

        {isCareer && (
          <div className="mb-6">
            <label className="block text-pixel-green mb-2 font-press-start">
              Resume
            </label>
            <input
              type="file"
              name="resume"
              onChange={handleChange}
              className="w-full pixel-input"
              accept=".pdf,.doc,.docx"
            />
          </div>
        )}

        <button type="submit" className="pixel-btn bg-pixel-purple w-full">
          Send {isCareer ? "Application" : "Message"}{" "}
          <i className="fas fa-paper-plane ml-2"></i>
        </button>
      </form>
      {status && <p className="mt-4 text-center text-pixel-green">{status}</p>}
    </motion.div>
  );
}
