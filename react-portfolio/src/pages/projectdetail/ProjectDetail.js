import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async'; // For setting page title
import { Container, Row, Col } from 'react-bootstrap'; // Assuming react-bootstrap is used like in other pages
import { dataportfolio, meta } from '../../content_option'; // Import data
import './ProjectDetail.css'; // For custom styling

export default function ProjectDetailPage() {
  let { id } = useParams();
  const project = dataportfolio.find((p) => p.id === id);

  useEffect(() => {
    // Optional: Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <Container className="text-white text-center py-5 Not-found-container">
        <HelmetProvider>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Project Not Found | {meta.title}</title>
          </Helmet>
        </HelmetProvider>
        <h2>Project not found!</h2>
        <p>Could not find details for project ID: {id}</p>
        <Link to="/portfolio" className="btn btn-primary ac_btn mt-3">Back to Portfolio</Link>
      </Container>
    );
  }

  // Use project.title for the page title, fallback to generic
  const pageTitle = project.title ? `${project.title} | ${meta.title}` : `Project Detail | ${meta.title}`;

  return (
    <HelmetProvider>
      <Container className="project-detail-page py-5">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{pageTitle}</title>
          {/* You can add more meta tags here if needed, e.g., description */}
          <meta name="description" content={project.description_summary || 'Project details'} />
        </Helmet>
        <Row>
          <Col lg="12">
            {/* Cover Photo */}
            <img src={project.img} alt={project.title} className="img-fluid project-cover-image mb-4" />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col lg="12" className="project-details-content">
            {/* Name of the project as heading */}
            <h1 className="display-4 mb-3 project-title">{project.title}</h1>
            {/* Sub-heading with company, duration, location */}
            <h3 className="text-muted project-subtitle mb-1">{project.company}</h3>
            <p className="text-muted project-meta mb-1">
              <strong>Duration:</strong> {project.duration}
            </p>
            <p className="text-muted project-meta mb-4">
              <strong>Location:</strong> {project.location}
            </p>

            {/* Rest a text block for the project details */}
            <div className="project-description-block mt-4">
              <h4 className="mb-3 section-title">Project Overview & Responsibilities</h4>
              <ul className="project-description-list">
                {project.description_full && project.description_full.map((point, index) => (
                  <li key={index} className="mb-2">{point}</li>
                ))}
              </ul>
            </div>
            
            <div className="mt-5 text-center"> {/* Centered back button */}
              <Link to="/portfolio" className="btn btn-primary ac_btn">
                Back to Portfolio
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
} 