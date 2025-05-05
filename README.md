# Abhishek Nair - Portfolio Website

This project contains the source code for Abhishek Nair's portfolio website, built with a Flask backend and a React frontend.

## Project Structure

```
/website_sample
|-- backend/
|   |-- app.py            # Flask backend application
|   |-- data.json         # CV data in JSON format
|   |-- requirements.txt  # Python dependencies
|-- frontend/
|   |-- public/           # Static assets
|   |-- src/              # React source code
|   |   |-- assets/       # Frontend assets (images, etc.)
|   |   |-- components/   # Reusable React components
|   |   |-- pages/        # Page-level React components
|   |   |-- App.jsx       # Main application component with routing
|   |   |-- index.css     # Global styles and Tailwind directives
|   |   |-- main.jsx      # Entry point for the React app
|   |-- index.html        # Main HTML file
|   |-- package.json      # Node.js dependencies and scripts
|   |-- postcss.config.js # PostCSS configuration (for Tailwind)
|   |-- tailwind.config.js# Tailwind CSS configuration
|   |-- vite.config.js    # Vite build tool configuration
|-- README.md             # This file
```

## Setup and Running

You need Python (3.7+) and Node.js (check `frontend/package.json` or Vite docs for compatible versions, v18+ recommended) installed.

### 1. Backend Setup (Flask)

   Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

   Create a virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

   Install the required Python packages:
   ```bash
   pip install -r requirements.txt
   ```

   Run the Flask development server (defaults to port 5001):
   ```bash
   flask run --port 5001
   # Or: python app.py
   ```
   The backend API should now be running at `http://localhost:5001`.

### 2. Frontend Setup (React + Vite)

   Open a *new* terminal window/tab.

   Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

   Install Node.js dependencies (if you haven't already during the initial setup):
   ```bash
   npm install
   ```

   Run the React development server (usually defaults to port 5173):
   ```bash
   npm run dev
   ```

   Open your web browser and navigate to the address provided by Vite (e.g., `http://localhost:5173`).

## Functionality

*   **Homepage (`/`)**: Displays the professional summary, core competencies, and a list of professional experiences.
*   **Experience Detail Page (`/experience/:id`)**: Clicking on an experience card on the homepage navigates to a detailed view showing the company, role, duration, location, and a list of responsibilities/achievements for that specific role.
