import { PersonalInfo, SkillItem, ProjectItem, EducationItem, ExperienceItem } from '../types';

/**
 * ============================================================================
 * PORTFOLIO CONFIGURATION FILE
 * ============================================================================
 * You can easily update your personal details, skills, projects, education,
 * work experience, and contact links right here!
 */

export const personalInfo: PersonalInfo = {
  fullName: "Md Mostak Laheri",
  preferredName: "Mostak",
  role: "Computer Science Undergraduate | Aspiring Software Developer",
  headline: "Hi, I'm Md Mostak Laheri.",
  subheading: "Computer Science Student | Aspiring Software Developer",
  university: "University of Wolverhampton, United Kingdom",
  degree: "BSc (Hons) Computer Science",
  location: "Birmingham, UK",
  careerGoal: "Secure a 12-month industrial placement in the UK",
  placementYear: "Seeking 2025/2026 Industrial Placement",
  heroIntro: "I'm a Computer Science undergraduate at the University of Wolverhampton, passionate about technology, problem-solving, and building practical solutions. I'm continuously developing my technical skills and looking for a placement opportunity where I can learn from experienced professionals and contribute to real-world projects.",
  aboutStory: [
    "I am currently in my undergraduate studies pursuing a BSc (Hons) in Computer Science at the University of Wolverhampton, living in Birmingham. My journey into computing began with curiosity about how software powers everyday systems, which quickly grew into a dedication to learning programming fundamentals and building functional software.",
    "As an aspiring software developer, I believe in honest self-assessment, consistent practice, and staying curious. I am currently strengthening my core skills in Python, relational databases with SQL, Git version control, and web technologies. Rather than relying on theory alone, I enjoy writing code, diagnosing bugs, and understanding the 'why' behind algorithmic decisions.",
    "My primary ambition is to secure a 12-month industrial placement in the UK. I am seeking a role where I can be immersed in professional engineering workflows, collaborate with supportive mentors, absorb industry best practices, and deliver genuine value to team goals."
  ],
  // Contact & Social Profiles (Editable)
  email: "mostak.laheri@example.com", // Replace with your primary email
  githubUrl: "https://github.com/yourusername", // Replace with your GitHub profile URL
  linkedinUrl: "https://linkedin.com/in/yourusername", // Replace with your LinkedIn profile URL
  cvFileName: "cv.pdf", // Place your cv.pdf in the /public folder
};

export const skillsData: SkillItem[] = [
  {
    name: "Python",
    category: "Languages",
    level: "Beginner / Learning",
    percentage: 55,
    description: "Developing foundational scripting and procedural programming skills. Practicing object-oriented concepts, loops, dictionaries, and file handling.",
    focusAreas: ["Syntax & Control Flow", "Data Structures", "OOP Concepts", "File I/O"],
    icon: "Code2"
  },
  {
    name: "SQL",
    category: "Languages",
    level: "Beginner / Learning",
    percentage: 50,
    description: "Learning relational database concepts, entity relationships, and core SQL queries for querying and manipulating structured data.",
    focusAreas: ["SELECT Queries", "JOIN Operations", "CRUD Operations", "Table Normalization"],
    icon: "Database"
  },
  {
    name: "Git & GitHub",
    category: "Tools & Workflows",
    level: "Foundational",
    percentage: 60,
    description: "Using Git for version control to track project history, create feature branches, commit meaningful changes, and collaborate on GitHub.",
    focusAreas: ["Branching & Merging", "Commit Best Practices", "GitHub Repositories", "Pull Requests"],
    icon: "GitBranch"
  },
  {
    name: "HTML & CSS",
    category: "Languages",
    level: "Foundational",
    percentage: 65,
    description: "Writing semantic markup and applying modern CSS to create clean, responsive layouts with Flexbox, CSS Grid, and utility styling.",
    focusAreas: ["Semantic HTML5", "CSS Flexbox & Grid", "Responsive Design", "Modern UI Styling"],
    icon: "Layout"
  },
  {
    name: "JavaScript",
    category: "Languages",
    level: "Beginner / Learning",
    percentage: 45,
    description: "Exploring basic DOM manipulation, ES6 syntax, functions, and event handling for interactive web applications.",
    focusAreas: ["Variables & Functions", "DOM Manipulation", "Event Listeners", "Basic Asynchronous Code"],
    icon: "FileCode"
  },
  {
    name: "Programming Fundamentals",
    category: "Core Computer Science",
    level: "Foundational",
    percentage: 65,
    description: "Understanding fundamental logic, conditional branching, modular code structure, and foundational algorithms taught in university modules.",
    focusAreas: ["Algorithmic Logic", "Functions & Scope", "Data Types", "Clean Code Basics"],
    icon: "Cpu"
  },
  {
    name: "Problem-Solving & Debugging",
    category: "Core Computer Science",
    level: "Foundational",
    percentage: 60,
    description: "Breaking down complex problems into manageable steps, utilizing terminal debugging, reading stack traces, and testing edge cases.",
    focusAreas: ["Debugging Stack Traces", "Analytical Thinking", "Input Edge Cases", "Troubleshooting"],
    icon: "Terminal"
  },
  {
    name: "Teamwork & Communication",
    category: "Professional & Transferable",
    level: "Foundational",
    percentage: 75,
    description: "Clear verbal and written communication, receptive to feedback, active listening, and collaborating effectively in team projects.",
    focusAreas: ["Collaborative Projects", "Active Listening", "Feedback Reception", "Time Management"],
    icon: "Users"
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "python-expense-tracker",
    title: "Python Expense Tracker",
    subtitle: "Personal Finance & Spending Categorisation Tool",
    status: "Proposed Idea",
    category: "Python CLI / Data Handling",
    description: "A planned command-line application to help users record daily income and expenses, calculate running totals, view categorized monthly summaries, and save reports. Being designed to practice object-oriented Python, file I/O operations, and user input validation.",
    learningGoals: [
      "Practice Object-Oriented Programming (classes for Transactions & Accounts)",
      "Implement persistent data storage using CSV / JSON",
      "Develop robust input validation and error handling for currency inputs"
    ],
    features: [
      "Add, edit, and categorize income and expenses",
      "Calculate real-time running balance and total expenditure",
      "Generate monthly breakdown summaries by category",
      "Export transaction logs for personal accounting"
    ],
    technologies: ["Python", "File I/O (CSV/JSON)", "CLI", "Data Structures"],
    githubUrl: undefined, // Leave undefined until repo is created
    demoUrl: undefined,
    isUpcoming: true
  },
  {
    id: "student-grade-calculator",
    title: "Student Grade Calculator",
    subtitle: "Weighted Academic Grade & Classification Calculator",
    status: "Proposed Idea",
    category: "Python Utility",
    description: "A Python application designed to calculate module marks, calculate weighted average percentages, validate mark inputs (0-100%), and output UK degree classifications (First Class, 2:1, 2:2, Third). Created to practice modular code organization and defensive programming.",
    learningGoals: [
      "Implement clean, modular functions with clear parameter boundaries",
      "Master edge-case validation and error recovery for numerical inputs",
      "Format clean, readable terminal tables and summary reports"
    ],
    features: [
      "Input multiple module scores and their respective credit weightings",
      "Validate user inputs with descriptive feedback on invalid scores",
      "Calculate overall weighted average and predicted UK honours classification",
      "Display clean tabular breakdown of performance per module"
    ],
    technologies: ["Python", "Input Validation", "Modular Functions", "Algorithms"],
    githubUrl: undefined,
    demoUrl: undefined,
    isUpcoming: true
  },
  {
    id: "student-database-management-system",
    title: "Student Database Management System",
    subtitle: "Relational Record Management with SQL & Python",
    status: "Proposed Idea",
    category: "Database & Backend Fundamentals",
    description: "A planned database system to store, retrieve, update, and manage student academic records. Designed to demonstrate practical SQL query authoring, relational table structures, primary/foreign key relationships, and CRUD operations connected via Python.",
    learningGoals: [
      "Design normalized relational database schemas (Students, Courses, Grades)",
      "Write safe parameterized SQL queries to avoid injection vulnerabilities",
      "Integrate Python with an SQLite database engine using standard database connectors"
    ],
    features: [
      "Create, Read, Update, and Delete (CRUD) student records",
      "Search and filter students by course, module, or academic year",
      "Enforce data integrity with foreign keys and unique constraints",
      "Generate summary reports on student enrollment and performance"
    ],
    technologies: ["SQL", "SQLite / MySQL", "Python", "CRUD Operations", "Relational Design"],
    githubUrl: undefined,
    demoUrl: undefined,
    isUpcoming: true
  }
];

export const educationData: EducationItem = {
  degree: "BSc (Hons) Computer Science",
  institution: "University of Wolverhampton",
  location: "Wolverhampton, West Midlands, United Kingdom",
  period: "2024 – 2028 (Including 12-Month Industrial Placement)",
  status: "Currently in progress",
  placementFocus: "Actively seeking a 12-month placement commencing Summer/Autumn 2025/2026",
  overview: "Studying core computer science disciplines including programming methodologies, database systems, computer systems architecture, and algorithmic problem-solving. Focussing on building solid theoretical foundations alongside practical software implementations.",
  coreModules: [
    {
      name: "Object-Oriented Programming & Fundamentals",
      description: "Developing structured programming habits, understanding classes, methods, inheritance, and clean code principles."
    },
    {
      name: "Database Systems & Design",
      description: "Relational database concepts, normalization, ER modeling, and writing SQL queries for data persistence."
    },
    {
      name: "Computer Systems & Architecture",
      description: "Understanding low-level hardware organization, operating systems basics, memory management, and binary logic."
    },
    {
      name: "Mathematics for Computing & Algorithms",
      description: "Discrete mathematics, boolean logic, complexity awareness, and algorithmic problem-solving approaches."
    }
  ]
};

export const experienceData: ExperienceItem[] = [
  {
    id: "transferable-work-experience",
    role: "Customer Service & Team Member (Transferable Experience)",
    organization: "[Employer Name / Retail / Service Role - Editable]",
    location: "Birmingham, United Kingdom",
    period: "2023 – Present (Editable)",
    type: "Part-time / Genuine Employment Experience",
    overview: "Gained valuable real-world experience balancing part-time work alongside university studies. Developed foundational workplace disciplines that translate directly into professional software engineering teams.",
    transferableSkills: [
      "Teamwork & Collaboration",
      "Active Listening & Communication",
      "Time Management under Pressure",
      "Following Standard Operating Procedures",
      "Customer Empathy & Problem Resolution"
    ],
    responsibilities: [
      "Worked collaboratively with colleagues in fast-paced environments to ensure smooth daily operations and high standards.",
      "Communicated clearly and respectfully with diverse customers and team members to resolve inquiries effectively.",
      "Maintained punctuality, reliability, and diligence adhering to organizational procedures and safety policies.",
      "Managed time efficiently to balance academic deadlines at university alongside shift responsibilities."
    ]
  },
  {
    id: "academic-collaboration",
    role: "Peer Collaborator & Group Study Contributor",
    organization: "University of Wolverhampton",
    location: "Wolverhampton, UK",
    period: "2024 – Present",
    type: "Academic Collaboration",
    overview: "Engaged in collaborative lab sessions and peer review discussions with fellow Computer Science students, fostering a supportive learning community.",
    transferableSkills: [
      "Code Review & Peer Feedback",
      "Technical Discussion",
      "Collaborative Problem Decomposition",
      "Continuous Learning"
    ],
    responsibilities: [
      "Participated in group laboratory tasks, discussing algorithmic logic and comparing troubleshooting approaches.",
      "Shared debugging techniques and constructive feedback on code readability and structure.",
      "Cultivated a proactive mindset towards seeking clarification and sharing useful learning resources with peers."
    ]
  }
];

export const placementObjectives = [
  {
    title: "12-Month UK Commitment",
    description: "Fully eligible and enthusiastic to commit to a full-time, 12-month industrial placement across the UK (West Midlands, London, or flexible hybrid/relocation)."
  },
  {
    title: "Eager & Fast Learner",
    description: "Highly motivated to learn your team's specific tech stack, conventions, and internal workflows from day one."
  },
  {
    title: "Strong Work Ethic",
    description: "Honest, reliable, and committed to contributing meaningfully to real-world tasks and team objectives."
  },
  {
    title: "Collaborative Mindset",
    description: "Enjoys working with mentors and cross-functional teammates, actively asking thoughtful questions and welcoming constructive feedback."
  }
];
