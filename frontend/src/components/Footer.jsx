import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-200 text-center py-4 mt-auto dark:bg-gray-700 dark:text-gray-300">
      <p>&copy; {currentYear} Abhishek Nair. All rights reserved.</p>
      {/* Add social links or other footer content here */}
      {/* Example: <p>Contact: abhishek.nair123@yahoo.com</p> */}
    </footer>
  );
};

export default Footer; 