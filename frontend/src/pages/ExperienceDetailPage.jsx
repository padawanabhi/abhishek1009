import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001/api'; // Adjust if needed

const ExperienceDetailPage = () => {
  const { id } = useParams(); // Get the experience ID from the URL
  const [experience, setExperience] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExperienceDetail = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${API_BASE_URL}/experience/${id}`);
        setExperience(response.data);
      } catch (err) {
        console.error(`Error fetching experience detail for id ${id}:`, err);
        if (err.response && err.response.status === 404) {
             setError(`Experience with ID '${id}' not found.`);
        } else {
             setError('Failed to load experience details. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchExperienceDetail();
    }

  }, [id]); // Re-run effect if ID changes

  if (loading) {
    return <div className="text-center p-10">Loading experience details...</div>;
  }

  if (error) {
    return (
        <div className="text-center p-10 text-red-600">
            <p>Error: {error}</p>
            <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">Return to Home</Link>
        </div>
    );
  }

  if (!experience) {
    // This case might be redundant due to error handling but kept for safety
    return <div className="text-center p-10">Experience details could not be loaded.</div>;
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md dark:bg-gray-800">
      <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline mb-6 inline-block">{'<'} Back to Overview</Link>
      <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">{experience.role}</h1>
      <h2 className="text-2xl text-gray-700 dark:text-gray-300 mb-1">{experience.company}</h2>
      <p className="text-md text-gray-500 dark:text-gray-400 mb-6">{experience.duration} | {experience.location}</p>

      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Responsibilities & Achievements:</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
        {experience.description?.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
      {/* You can add more sections here if you expand the data.json, e.g., technologies used */}
    </div>
  );
};

export default ExperienceDetailPage; 