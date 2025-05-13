import React, { useState } from 'react';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Send form data to email service
      const response = await fetch('https://formsubmit.co/snehinternetactivities@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      // Form submitted successfully
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reset success message after a few seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setError('Failed to send message. Please try again later.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center px-4 md:px-16">
      <div className="container mx-auto py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Let's Connect
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-4xl mx-auto">
          <div className="glass-effect p-8 rounded-glass">
            {submitted ? (
              <div className="py-10 text-center">
                <div className="text-6xl mb-4">✨</div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-300">Thanks for reaching out. I'll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block mb-2">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="glow-input"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="glow-input"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="glow-input resize-none"
                  ></textarea>
                </div>
                
                {error && (
                  <div className="mb-4 p-3 bg-red-500 bg-opacity-20 text-red-300 rounded">
                    {error}
                  </div>
                )}
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="neon-button w-full"
                >
                  <span>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                </button>
              </form>
            )}
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <p className="text-xl mb-10 text-center">
              Connect with me on social media or send me an email.
            </p>
            
            <div className="flex justify-center space-x-6">
              <a 
                href="https://www.linkedin.com/in/sneh-brahmbhatt-17155b2ab/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transform transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-full glass-effect flex items-center justify-center group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-neon-cyan transition-colors">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
              </a>
              
              <a 
                href="https://github.com/Sneh9110" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transform transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-full glass-effect flex items-center justify-center group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-neon-cyan transition-colors">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </div>
              </a>
              
              <a 
                href="https://www.instagram.com/snehbrahmbhatt_?igsh=MTFpc2p2Z3NuOTdudg==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transform transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-full glass-effect flex items-center justify-center group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-neon-cyan transition-colors">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;