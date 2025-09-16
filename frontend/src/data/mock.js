// Mock data for Samarpan Mohanty's Portfolio
export const personalInfo = {
  name: "Samarpan Mohanty",
  title: "ML/AI Researcher & Full-Stack Developer",
  subtitle: "Computer Engineering @ University of Nebraska-Lincoln",
  bio: "Highly motivated and results-oriented Computer Engineering graduate with a proven track record in machine learning, deep learning, and full-stack development. Passionate about applying advanced technologies to solve real-world problems in materials science, biomedical research, and beyond.",
  email: "samarpanmohanty3347@gmail.com",
  phone: "+1 (725) 322 3944",
  location: "Lincoln, Nebraska, USA",
  linkedin: "https://linkedin.com/in/samarpan-mohanty-8b3bb0278",
  github: "https://github.com/Samarpan1122",
  website: "https://samarpan-portfolio.netlify.app/"
};

export const skills = {
  programming: ["Python", "JavaScript", "C#", "C", "Java", "SQL"],
  aiml: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "NumPy", "Pandas", "Deep Learning", "Neural Networks", "Graph Neural Networks", "Natural Language Processing", "Computer Vision", "Data Analysis", "TPOT"],
  web: ["React Native", "Next.js", "Node.js", "Express", "Flask", "HTML/CSS", "REST APIs", "WebSocket", "Firebase"],
  tools: ["Git", "Docker", "Redis", "Celery", "Arduino", "Raspberry Pi", "ESP32", "Streamlit", "OpenAI API"],
  databases: ["SQL", "Firebase", "Redis", "AWS"]
};

export const projects = [
  {
    id: 1,
    title: "Molytics Python Library",
    type: "development",
    description: "Built an automated ML pipeline with TPOT achieving up to 85% accuracy for chemical-compound property prediction and screening, with performance comparable to—and at times exceeding—preexisting deep-learning frameworks on molecular analysis tasks.",
    technologies: ["Python", "TPOT", "PyTorch", "Scikit-learn", "Flask", "Redis", "Celery", "Next.js", "AWS (EC2, S3, RDS, Cognito, CloudFront, CloudWatch)"],
    metrics: ["85% accuracy", "90% time reduction", "Scalable cloud deployment"],
    status: "completed",
    featured: true
  },
  {
    id: 2,
    title: "Multiple ML/DL Projects Portfolio",
    type: "research",
    description: "20+ end-to-end builds across CV, NLP, tabular, and generative tasks with typical accuracy 80–95%. Includes CNNs, LSTMs, transfer learning with 92% image classification and 88% text analysis.",
    technologies: ["PyTorch", "TensorFlow", "Scikit-learn", "Streamlit", "NumPy", "Pandas", "torchvision"],
    metrics: ["20+ projects", "80-95% accuracy", "Multiple domains"],
    status: "completed",
    featured: true,
    github: "https://github.com/Samarpan1122/Deep-learning-Projects"
  },
  {
    id: 3,
    title: "Chat4fun Hackathon Project",
    type: "development",
    description: "Real-time chat via WebSockets with sub-second latency and concurrent sessions. Features Firebase authentication, responsive UI, and 2023 addition of bullying/NSFW filtering using GPT API.",
    technologies: ["Node.js", "Express", "Socket.io", "Firebase", "HTML/CSS/JavaScript", "OpenAI (GPT) API"],
    metrics: ["Sub-second latency", "Real-time communication", "Content filtering"],
    status: "completed",
    featured: true,
    github: "https://github.com/Samarpan1122/Chat4fun-Hackathon"
  },
  {
    id: 4,
    title: "AR/VR Web Browser Application",
    type: "development",
    description: "Mobile VR browser that renders live web pages inside VR with smooth interaction on Android devices. Features gaze/head-tracked selection with 95% hit accuracy using dwell-time.",
    technologies: ["Unity", "C#", "Android SDK", "OpenGL", "WebView"],
    metrics: ["95% hit accuracy", "VR web browsing", "Mobile optimization"],
    status: "completed",
    featured: true
  }
];

export const experience = [
  {
    id: 1,
    role: "Research Assistant — Machine Learning for Materials Science",
    company: "PSE Bavarian Lab, University of Nebraska-Lincoln",
    duration: "Sep 2024 - Present",
    type: "research",
    description: "Built TensorFlow/PyTorch and TPOT predictors for ionic conductivity, strengthening solid-state battery evaluation.",
    achievements: [
      "Built TensorFlow/PyTorch and TPOT predictors for ionic conductivity, strengthening solid-state battery evaluation",
      "Apply graph neural networks to crystal lattices to forecast properties for experimental screening",
      "Ran NLP across 100+ papers to extract variables/design rules",
      "Collaborated in a 5-member team on Python/statistical analyses"
    ]
  },
  {
    id: 2,
    role: "Research Assistant — Biomedical Data Analysis",
    company: "Dr. Razavi's Lab, University of Nebraska-Lincoln",
    duration: "Nov 2024 - Dec 2024",
    type: "research",
    description: "Trained models that raised lymphatic-flow prediction accuracy by 20%; prepared and validated biological datasets with Python/Pandas.",
    achievements: [
      "Trained models that raised lymphatic-flow prediction accuracy by 20%",
      "Prepared and validated biological datasets with Python/Pandas",
      "Applied statistical methods for biomedical research",
      "Contributed to interdisciplinary healthcare research"
    ]
  }
];

export const awards = [
  {
    id: 1,
    title: "UCARE Research Fellowship",
    organization: "University of Nebraska-Lincoln",
    year: "2025-2026",
    amount: "$6,240",
    type: "fellowship",
    description: "Competitive research grant to conduct undergraduate research applying machine learning and artificial intelligence techniques to accelerate solid-state battery development",
    featured: true
  },
  {
    id: 2,
    title: "Dean's List",
    organization: "University of Nebraska-Lincoln",
    year: "Spring 2025",
    type: "academic",
    featured: true
  },
  {
    id: 3,
    title: "San Francisco Tech Summit (Fully Funded)",
    organization: "Selected from 5000+ applicants",
    year: "2024",
    type: "conference",
    description: "Selected from 5000+ applicants for exclusive technology leadership summit",
    featured: true
  },
  {
    id: 4,
    title: "Best PCB Design Award",
    organization: "Competition",
    year: "2023",
    amount: "$100",
    type: "competition",
    description: "Recognized for innovative high-efficiency printed circuit board layout",
    featured: true
  },
  {
    id: 5,
    title: "4th Place, Syntax v7.1 Hackathon",
    organization: "Hackathon",
    year: "2021",
    type: "competition",
    description: "Competitive placement among 100+ development teams in app/web development",
    featured: true
  },
  {
    id: 6,
    title: "Google Code Certificate",
    organization: "Google",
    year: "2020",
    type: "certification",
    description: "Successfully completed Google's advanced programming challenges",
    featured: false
  }
];

export const publications = [
  {
    id: 1,
    title: "LiClustCondAI: A Clustering-Based Ensemble Regression Framework for Generalizing Ionic Conductivity Predictions to Unseen Solid-State Electrolytes",
    authors: ["Paul, B.", "Mohanty, S.", "Guo, H.", "Bavarian, M."],
    journal: "Journal of Power Sources",
    year: "2025",
    type: "research paper",
    status: "under review",
    note: "1Co-first authors, 2Corresponding author"
  },
  {
    id: 2,
    title: "Molytics: A Clustering-Based Ensemble Regression Framework for Generalizing Property Predictions to Unseen Materials",
    authors: ["Mohanty, S.", "Paul, B.", "Guo, H.", "Bavarian, M."],
    journal: "Nature Machine Intelligence (Target)",
    year: "2025",
    type: "research paper",
    status: "in preparation",
    note: "1Co-first authors, 2Corresponding author"
  }
];

export const education = {
  degree: "Bachelor of Science in Computer Engineering",
  university: "University of Nebraska-Lincoln",
  expectedGraduation: "2028",
  gpa: "Dean's List Spring 2025",
  relevantCourses: [
    "Machine Learning",
    "Deep Learning",
    "Computer Vision", 
    "Natural Language Processing",
    "Data Structures & Algorithms",
    "Software Engineering",
    "Database Systems",
    "Computer Networks"
  ]
};

export const contactInfo = {
  email: "samarpanmohanty3347@gmail.com",
  phone: "+1 (725) 322 3944",
  location: "Lincoln, Nebraska, USA",
  linkedin: "https://linkedin.com/in/samarpan-mohanty-8b3bb0278",
  github: "https://github.com/Samarpan1122",
  website: "https://samarpan-portfolio.netlify.app/",
  calendly: "https://calendly.com/samarpanmohanty3347/30min",
  availability: "Available for internships, research collaborations, and full-time opportunities starting 2028"
};