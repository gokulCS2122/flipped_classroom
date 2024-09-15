const courses = {
    'cse': {
        '1': ['Mathematics I', 'Physics', 'Chemistry'],
        '2': ['Data Structures', 'Computer Organization', 'Discrete Mathematics'],
        '3': ['Algorithms', 'Database Management Systems', 'Operating Systems'],
        '4': ['Computer Networks', 'Software Engineering', 'Theory of Computation'],
        '5': ['Design and Analysis of Algorithms', 'Artificial Intelligence', 'Machine Learning'],
        '6': ['Compiler Design', 'Web Technologies', 'Information Security'],
        '7': ['Computer Graphics', 'Cloud Computing', 'Big Data Analytics'],
        '8': ['Capstone Project', 'Elective I', 'Elective II']
    },
    'ece': {
        '1': ['Mathematics I', 'Physics', 'Electrical Engineering Basics'],
        '2': ['Circuit Theory', 'Electronics', 'Signals and Systems'],
        '3': ['Microprocessors', 'Analog Electronics', 'Digital Electronics'],
        '4': ['Communication Systems', 'Control Systems', 'Electromagnetic Theory'],
        '5': ['VLSI Design', 'Embedded Systems', 'Power Electronics'],
        '6': ['Digital Signal Processing', 'Computer Architecture', 'Communication Networks'],
        '7': ['Advanced Electronics', 'Wireless Communication', 'Optical Communication'],
        '8': ['Capstone Project', 'Elective I', 'Elective II']
    },
    'aiml': {
        '1': ['Introduction to AI', 'Mathematics for ML', 'Programming Basics'],
        '2': ['Data Science Basics', 'Statistics', 'Machine Learning Fundamentals'],
        '3': ['Supervised Learning', 'Unsupervised Learning', 'Neural Networks'],
        '4': ['Deep Learning', 'Natural Language Processing', 'Reinforcement Learning'],
        '5': ['Advanced Machine Learning', 'AI in Robotics', 'Computer Vision'],
        '6': ['AI Ethics', 'AI Tools and Frameworks', 'Big Data Analysis'],
        '7': ['AI Research', 'AI Project Management', 'Industry Applications'],
        '8': ['Capstone Project', 'Elective I', 'Elective II']
    },
    'mech': {
        '1': ['Mathematics I', 'Physics', 'Engineering Mechanics'],
        '2': ['Thermodynamics', 'Fluid Mechanics', 'Material Science'],
        '3': ['Manufacturing Processes', 'Mechanical Design', 'Dynamics'],
        '4': ['Heat Transfer', 'Vibrations', 'Control Systems'],
        '5': ['Machine Design', 'IC Engines', 'Advanced Manufacturing'],
        '6': ['Refrigeration and Air Conditioning', 'Finite Element Analysis', 'Mechatronics'],
        '7': ['Robotics', 'Automobile Engineering', 'Biomechanics'],
        '8': ['Capstone Project', 'Elective I', 'Elective II']
    },
    'civil': {
        '1': ['Mathematics I', 'Physics', 'Engineering Drawing'],
        '2': ['Building Materials', 'Surveying', 'Structural Analysis'],
        '3': ['Concrete Technology', 'Geotechnical Engineering', 'Environmental Engineering'],
        '4': ['Transportation Engineering', 'Hydraulics', 'Construction Management'],
        '5': ['Structural Design', 'Water Resources Engineering', 'Advanced Surveying'],
        '6': ['Structural Analysis II', 'Earthquake Engineering', 'Pavement Design'],
        '7': ['Urban Planning', 'Remote Sensing', 'Advanced Construction Techniques'],
        '8': ['Capstone Project', 'Elective I', 'Elective II']
    }
};

function nextScreen() {
    const form = document.getElementById('student-registration-form');
    if (form.checkValidity()) {
        document.getElementById('additional-info').style.display = 'block';
    } else {
        alert('Please fill in all required fields.');
    }
}

function updateCourses() {
    const branch = document.getElementById('branch').value;
    const semester = document.getElementById('semester').value;
    const courseSelect = document.getElementById('course');
    courseSelect.innerHTML = '<option value="">Select a course</option>';
    if (branch && semester && courses[branch] && courses[branch][semester]) {
        courses[branch][semester].forEach(course => {
            const option = document.createElement('option');
            option.value = course;
            option.textContent = course;
            courseSelect.appendChild(option);
        });
    }
}

function registerStudent() {
    const form = document.getElementById('student-registration-form');
    if (form.checkValidity()) {
        alert('You are registered successfully.');
        form.reset();
        document.getElementById('additional-info').style.display = 'none';
    } else {
        alert('Please fill in all required fields.');
    }
}
