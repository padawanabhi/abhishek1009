import cvData from './data.json';
import cvFoto from './images/profilefoto.png'; // Assuming data.json is renamed/moved to cvData.json
import projectBearcover from './images/bearcover.png';
import projectBertrandt from './images/bertrandt.jpg';
import projectQasimodo from './images/quasimodo.png';
import projectEnway from './images/enway.png';
import projectVoltvogel from './images/voltvogel.jpg';
//import projectCarbonfreed from './images/carbonfreed.png';
import projectMan from './images/manenergy.jpg';

const logotext = cvData.profile.name;
const meta = {
    title: cvData.profile.name,
    description: cvData.profile.summary, // Using your summary for the meta description
};

const introdata = {
    title: `I'm ${cvData.profile.name}`,
    animated: {
        first: "I build HW and SW prototypes",
        second: "I train, build and deploy ML models and AI services",
        third: "I develop robots, agents and control systems",
    },
    description: cvData.profile.summary.substring(0, 182) + "...", // Shortened summary for intro
    your_img_url: cvFoto, // Ensure this image exists in public/images/
};

const dataabout = {
    title: "A bit about myself",
    aboutme: cvData.profile.summary,
};

// Using your experience for the worktimeline
const worktimeline = cvData.experience.map(exp => ({
    jobtitle: exp.role,
    where: exp.company,
    date: exp.duration,
}));

// Using your competencies for skills
const skills = cvData.profile.competencies.map(skill => ({
    name: skill,
    value: 85, // Assigning a default value, template expects name and value
}));

// Placeholder for services, as this is not directly in your CV
const services = [{
        title: "Robotics & Automation Solutions",
        description: "Developing custom robotics hardware and software, and automation systems.",
    },
    {
        title: "AI & Machine Learning",
        description: "Building and deploying AI services, machine learning models, and intelligent agents.",
    },
    {
        title: "Firmware & Embedded Systems",
        description: "Firmware development for various platforms and embedded systems integration.",
    },
];

// Helper to get full description for detail pages
const getExperienceDetailsById = (id) => {
    // This attempts to match, e.g., 'bearcover-pa' to 'bearcover' in cvData.experience
    const originalId = id.includes('-') ? id.substring(0, id.lastIndexOf('-')) : id;
    const experienceItem = cvData.experience.find(exp => exp.id === originalId);
    return experienceItem ? experienceItem.description : ["Detailed project description will be added here."];
};

// Updated dataportfolio with your projects and random Unsplash images
const dataportfolio = [
    {
        id: "bearcover-pa",
        img: projectBearcover,
        title: "Personal Assistance robot for Bearcover",
        company: "Bearcover GmbH",
        duration: cvData.experience.find(e => e.id === "bearcover")?.duration || "N/A",
        location: cvData.experience.find(e => e.id === "bearcover")?.location || "N/A",
        description_summary: "Hardware design improvements for CE certification...",
        description_full: getExperienceDetailsById("bearcover-pa"),
        link: "/project/bearcover-pa" // CORRECTED LINK
    },
    {
        id: "voltvoegel-ev",
        img: projectVoltvogel,
        title: "Autonomous EV charging robot",
        company: "VoltVogel UG",
        duration: cvData.experience.find(e => e.id === "voltvoegel")?.duration || "N/A",
        location: cvData.experience.find(e => e.id === "voltvoegel")?.location || "N/A",
        description_summary: "Firmware development for charge controller...",
        description_full: getExperienceDetailsById("voltvoegel-ev"),
        link: "/project/voltvoegel-ev" // CORRECTED LINK
    },
    {
        id: "carbonfreed-ai",
        img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        title: "AI Services and chatbot for Grid Certification",
        company: "CarbonFreed GmbH",
        duration: cvData.experience.find(e => e.id === "carbonfreed")?.duration || "N/A",
        location: cvData.experience.find(e => e.id === "carbonfreed")?.location || "N/A",
        description_summary: "AI system architecture design...",
        description_full: getExperienceDetailsById("carbonfreed-ai"),
        link: "/project/carbonfreed-ai" // CORRECTED LINK
    },
    {
        id: "bertrandt-bsh",
        img: projectBertrandt,
        title: "Automation and Electronic Verification of smart home appliances",
        company: "Bertrandt AG (BSH)",
        duration: cvData.experience.find(e => e.id === "bertrandt")?.duration || "N/A",
        location: cvData.experience.find(e => e.id === "bertrandt")?.location || "N/A",
        description_summary: "Automated testing frameworks using robotics/computer vision...",
        description_full: getExperienceDetailsById("bertrandt-bsh"),
        link: "/project/bertrandt-bsh" // CORRECTED LINK
    },
    {
        id: "enway-sweeper",
        img: projectEnway,
        title: "Autonomous Sweeper",
        company: "Enway GmbH",
        duration: cvData.experience.find(e => e.id === "enway-engineer")?.duration || "N/A",
        location: cvData.experience.find(e => e.id === "enway-engineer")?.location || "N/A",
        description_summary: "EMC testing, hardware commissioning...",
        description_full: getExperienceDetailsById("enway-sweeper"),
        link: "/project/enway-sweeper" // CORRECTED LINK
    },
    {
        id: "enway-quasimodo",
        img: projectQasimodo,
        title: "Quasimodo - 3D mapping backpack",
        company: "Enway GmbH",
        duration: cvData.experience.find(e => e.id === "enway-manager")?.duration || "N/A",
        location: cvData.experience.find(e => e.id === "enway-manager")?.location || "N/A",
        description_summary: "Deployment and testing, commissioning protocols...",
        description_full: getExperienceDetailsById("enway-quasimodo"),
        link: "/project/enway-quasimodo" // CORRECTED LINK
    },
    {
        id: "man-energy-setup",
        img: projectMan,
        title: "Experimental Setup for vibration analysis",
        company: "MAN Energy Solutions SE",
        duration: cvData.experience.find(e => e.id === "man-energy")?.duration || "N/A",
        location: cvData.experience.find(e => e.id === "man-energy")?.location || "N/A",
        description_summary: "Custom experimental setup design...",
        description_full: getExperienceDetailsById("man-energy-setup"),
        link: "/project/man-energy-setup" // CORRECTED LINK
    }
];


const contactConfig = {
    YOUR_EMAIL: cvData.profile.contact.email,
    description: "Feel free to reach out to discuss potential projects, collaborations, or any inquiries.",
    YOUR_SERVICE_ID: "service_id", // Replace with your EmailJS service ID
    YOUR_TEMPLATE_ID: "template_id", // Replace with your EmailJS template ID
    YOUR_USER_ID: "user_id", // Replace with your EmailJS user ID (public key)
};

const socialprofils = {
    github: `https://github.com/${cvData.profile.contact.handle.replace('@','')}`, // Using handle, assuming it's GitHub username
    linkedin: "https://www.linkedin.com/in/abhisheknair1009/",
    instagram: "https://www.instagram.com/padawan_abhi/",
    // twitter: `https://twitter.com/${cvData.profile.contact.handle.replace('@','')}`, // Removed Twitter
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};