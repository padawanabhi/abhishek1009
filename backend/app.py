import json
from flask import Flask, jsonify, abort
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load data from JSON file
try:
    with open('data.json', 'r', encoding='utf-8') as f:
        cv_data = json.load(f)
except FileNotFoundError:
    print("Error: data.json not found!")
    cv_data = {} # Default to empty data if file is missing
except json.JSONDecodeError:
    print("Error: data.json contains invalid JSON!")
    cv_data = {} # Default to empty data if JSON is invalid


@app.route('/api/profile', methods=['GET'])
def get_profile():
    """Returns the profile section of the CV."""
    profile = cv_data.get('profile')
    if not profile:
        abort(404, description="Profile data not found")
    return jsonify(profile)

@app.route('/api/experience', methods=['GET'])
def get_experience():
    """Returns the list of professional experiences."""
    experience = cv_data.get('experience')
    if experience is None: # Check for None specifically, as empty list is valid
         abort(404, description="Experience data not found")
    # Return only summary fields for the overview page
    experience_summary = [
        {
            "id": exp.get("id"),
            "company": exp.get("company"),
            "role": exp.get("role"),
            "duration": exp.get("duration"),
            "location": exp.get("location")
        } for exp in experience
    ]
    return jsonify(experience_summary)

@app.route('/api/experience/<string:experience_id>', methods=['GET'])
def get_experience_detail(experience_id):
    """Returns the detailed information for a specific experience."""
    experience_list = cv_data.get('experience', [])
    experience_detail = next((exp for exp in experience_list if exp.get('id') == experience_id), None)

    if experience_detail is None:
        abort(404, description=f"Experience with id '{experience_id}' not found")
    return jsonify(experience_detail)

@app.route('/api/education', methods=['GET'])
def get_education():
    """Returns the education section."""
    education = cv_data.get('education')
    if education is None:
         abort(404, description="Education data not found")
    return jsonify(education)

@app.route('/api/extracurricular', methods=['GET'])
def get_extracurricular():
    """Returns the extracurricular activities section."""
    extracurricular = cv_data.get('extracurricular')
    if extracurricular is None:
        abort(404, description="Extracurricular data not found")
    return jsonify(extracurricular)


@app.route('/api/data', methods=['GET'])
def get_all_data():
    """Returns all CV data (useful for frontend hydration)."""
    if not cv_data:
         abort(404, description="CV data not found or is empty")
    return jsonify(cv_data)


if __name__ == '__main__':
    # Consider using environment variables for host and port in production
    app.run(debug=True, port=5001) # Use a different port like 5001 for the backend 