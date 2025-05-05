import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExperienceCard from '../components/ExperienceCard';
import CompetencyPill from '../components/CompetencyPill';

const API_BASE_URL = 'http://localhost:5001/api'; // Adjust if your backend runs elsewhere

const HomePage = () => {
  const [profile, setProfile] = useState(null);
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        // Fetch all data in one go for simplicity now
        const response = await axios.get(`${API_BASE_URL}/data`);
        setProfile(response.data.profile);
        setExperience(response.data.experience);
        // You could also fetch education and extracurricular here if needed on homepage
      } catch (err) {
        console.error("Error fetching data:", err);
        setError('Failed to load portfolio data. Please ensure the backend is running and accessible.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center p-10 text-light">Loading portfolio...</div>;
  }

  if (error) {
    return <div className="text-center p-10 text-red-400">Error: {error}</div>;
  }

  if (!profile) {
     return <div className="text-center p-10 text-light">Profile data could not be loaded.</div>;
  }

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="text-center pt-16 pb-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-light">{profile.name}</h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto">{profile.summary}</p>
        {/* Optional: Add contact buttons/links here */}
        <div className="space-x-4">
             <a href={`mailto:${profile.contact?.email}`} className="bg-primary text-white px-6 py-2 rounded-md hover:opacity-90 transition-opacity duration-150">Contact Me</a>
             {/* Add link to a downloadable CV if you have one */}
             {/* <a href="/path/to/your/cv.pdf" target="_blank" rel="noopener noreferrer" className="bg-secondary text-white px-6 py-2 rounded-md hover:opacity-90 transition-opacity duration-150">Download CV</a> */}
        </div>
      </section>

      {/* Competencies Section (Can be integrated into Hero or kept separate) */}
      <section className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6 text-light text-center">Core Competencies</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {profile.competencies?.map((comp, index) => (
            <CompetencyPill key={index} competency={comp} />
          ))}
        </div>
      </section>

      {/* Experience Section - Using dark-card background */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 text-light text-center">Professional Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experience.length > 0 ? (
             experience.map(exp => (
                <ExperienceCard key={exp.id} experience={exp} />
             ))
          ) : (
            <p className="text-gray-400 col-span-full text-center">No experience data available.</p>
          )}
        </div>
      </section>

      {/* Removed the extra margin div as spacing is handled by space-y on the main div */}

    </div>
  );
};

export default HomePage; 