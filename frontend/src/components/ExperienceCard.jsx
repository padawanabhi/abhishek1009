import React from 'react';
import { Link } from 'react-router-dom';

// Simple placeholder SVG icon (e.g., gears)
const EngineeringIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-500 dark:text-gray-400 absolute bottom-3 right-3 opacity-15 group-hover:opacity-25 transition-opacity duration-150">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.004.827c-.292.24-.437.613-.43.992a6.759 6.759 0 0 1 0 1.257c.007.378.138.75.43.99l1.005.828c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.333.184-.582.496-.645.87l-.213 1.28c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.759 6.759 0 0 1 0-1.257c-.007-.378-.138.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.184.582-.496.644-.87l.213-1.28Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
);

const ExperienceCard = ({ experience }) => {
  if (!experience) {
    return null; // Or a loading/placeholder state
  }

  return (
    <Link
      to={`/experience/${experience.id}`}
      className="group relative block p-6 bg-dark-card border border-gray-700 rounded-lg shadow hover:bg-gray-700 transition duration-200 ease-in-out overflow-hidden min-h-[150px] flex flex-col justify-between"
    >
      <div>
        <h5 className="mb-1 text-xl font-bold tracking-tight text-light group-hover:text-primary transition-colors duration-150">{experience.role}</h5>
        <p className="font-normal text-gray-300 mb-1">{experience.company}</p>
        <p className="text-xs text-gray-400">{experience.duration} | {experience.location}</p>
      </div>
      <EngineeringIcon />
    </Link>
  );
};

export default ExperienceCard; 