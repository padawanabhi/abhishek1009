import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    setIsSubmitted(false);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }

    // **Backend Integration Needed Here**
    // Normally, you would send formData to a backend endpoint here using axios or fetch.
    // Example: axios.post('/api/contact', formData).then(...).catch(...);
    console.log('Form data submitted (frontend only):', formData);
    
    // Simulate successful submission for now
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' }); // Clear form
    
    // Remove success message after some time
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md dark:bg-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Contact Me</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Have a question or want to discuss a project? Send me a message using the form below.
      </p>
      
      {isSubmitted && (
        <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-md dark:bg-green-900 dark:text-green-200">
          Thank you for your message! I'll get back to you soon.
        </div>
      )}

      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-800 rounded-md dark:bg-red-900 dark:text-red-200">
          Error: {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-offset-gray-800"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-offset-gray-800"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
          <textarea 
            name="message" 
            id="message" 
            rows="4" 
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-offset-gray-800"
          ></textarea>
        </div>
        <div>
          <button 
            type="submit" 
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800 transition duration-150 ease-in-out"
          >
            Send Message
          </button>
        </div>
      </form>
      <p className="mt-4 text-xs text-center text-gray-500 dark:text-gray-400">
        Note: This form is for demonstration purposes only and does not currently send emails.
      </p>
    </div>
  );
};

export default ContactPage; 