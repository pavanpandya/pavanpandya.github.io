import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import flagShipImg from "@/public/flagship.png";
import iuCourseCompassImg from "@/public/iu_course_compass.png";
import itineraImg from "@/public/itinera.png";
import nsfwDetectionImg from "@/public/nsfw_detection.png";
import medilinkImg from "@/public/medilink.png";
import AWStrendsImg from "@/public/AWS_trends.png";
import taxiImg from "@/public/taxi_gcp.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    companyName: "Offline Talent",
    title: "Product Engineer",
    location: "Chicago, IL",
    description: [
      "Engineered the MVP of a marketing discovery platform for brands to execute in-person campaigns at scale through a network of 10,000+ IRL communities, delivering the application in 5 weeks by building 30+ components with React and TypeScript.",
      "Architected the core backend system by designing 33+ RESTful API endpoints with server-side pagination in Node.js, supported by a scalable PostgreSQL schema on Neon DB to ensure efficient data handling for 10,000+ communities.",
      "Drove product velocity by establishing a comprehensive testing suite with Jest (unit) and Postman (API) and leveraging AI-powered tools, enabling an automated CI/CD pipeline for rapid deployments to Vercel and Railway.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2025 - Present",
  },
  {
    companyName: "Heartland Community Network",
    title: "Senior Consultant – Software Engineer (Contract)",
    location: "Remote",
    description: [
      "Led and developed an Advertising Marketplace platform from ideation to first launch by running client workshops to define product scope, translating business requirements into Jira stories and aligning stakeholders and engineers for faster delivery.",
      "Developed core product features in React, integrating REST APIs and collaborating with product manager, engineers and designers to deliver a user-focused solution, supporting business goals and ensuring reliable performance through Postman API testing.",
      "Architected a backend system using Node.js with optimized SQL database schemas and REST APIs, applying MVC design architecture to create a maintainable platform that supports future scalability and smooth feature expansion.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2025 - Present",
  },
  {
    companyName: "Marchup Inc.",
    title: "Software Developer Intern",
    location: "San Jose, CA",
    description: [
      "Designed and launched an AI-powered counseling chatbot using Python (Flask) and Azure OpenAI, providing real-time personalized guidance to students and parents and improving session satisfaction by 20% as measured through surveys.",
      "Optimized chatbot performance with Redis caching and asynchronous processing to deliver sub-second responses to concurrent users and introduced a dual-mode logic flow (static for FAQs, generative for new queries) that saved $600/month in cloud costs.",
      "Developed two key engagement features - an adaptive AI to generate contextual follow-up questions and a user recommendation engine using Elasticsearch and cosine similarity to connect users, driving higher daily engagement.",
      "Automated document updates with AWS Lambda (Python Script) and implemented system health monitoring via CloudWatch during migration to AWS OpenSearch, improving search accuracy and ensuring stable performance for 10,000+ documents.",
      "Automated deployments to AWS ECS Fargate using CDK and Docker, worked cross-functionally to integrate CI/CD pipelines with Pytest for unit and integration testing and performed 20+ peer code reviews to ensure high code quality and reliable releases.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2024 - Nov 2024",
  },
  {
    companyName: "Dhirubhai Ambani University",
    title: "Data Science Intern",
    location: "Gandhinagar, India",
    description: [
      "Enhanced model performance by 15% by fine-tuning a BERT-based multilingual model using pseudo-labeling techniques, leveraging data for hate speech detection, and optimizing it with few-shot learning for low-resource languages.",
      "Increased annotation throughput by 40% by developing a REST API backend that streamlined participant submissions and introduced dynamic dashboard filtering by task accuracy and categories, enabling faster and more efficient workflows.",
      "Automated Twitter data scraping and built preprocessing pipelines, reducing weekly maintenance by 80% (10 to 2 hours) by cleaning and structuring 10K+ tweets and developing REST APIs with unittest coverage for submission and registration workflows.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2022 - June 2023",
  },
  {
    companyName: "Hate Speech and Offensive Content Identification",
    title: "Data Science Intern",
    location: "Gandhinagar, India",
    description: [
      "Built a full-stack competition platform that automated submission evaluation and leaderboard updates using Python and JavaScript, increasing participation by 40% and reliably handling 500+ entries across 15+ teams.",
      "Developed a registration portal with JavaScript, HTML/CSS and GCP storage, enabling participants to register and upload documents directly, while giving organizers an admin panel for document verification, cutting onboarding time by 67% from 15 to 5 mins/user.",
      "Automated Twitter data scraping and built preprocessing pipelines, reducing weekly maintenance by 80% (10 to 2 hours) by cleaning and structuring 10K+ tweets and developing REST APIs with unittest coverage for submission and registration workflows.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "June 2021 - June 2023",
  },
] as const;

export const educationData = [
  {
    school: "Indiana University Bloomington",
    degree: "Master of Science in Computer Science",
    location: "Bloomington, IN",
    description: [
      "Relevant Coursework: Applied Algorithms, Computer Networks, Deep Learning Systems, Applied Machine Learning, Software Engineering - I, Engineering Cloud Computing, Information Visualization, Elements of Artificial Intelligence, Introduction to Statistics",
      "Graduated with GPA: 3.7 / 4.0",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2023 - May 2025",
  },
  {
    school: "LDRP Institute of Technology and Research",
    degree: "Bachelor of Engineering in Computer Engineering",
    location: "Gandhinagar, India",
    description: [
      "Relevant Coursework: Software Engineering, Design & Analysis of Algorithms, Computer Networks, Database Management Systems, Web Development, Artificial Intelligence, Object Oriented Programming, Data Structure and Algorithms, Python, Machine Learning, Soft Computing, Natural language processing, Image Processing, Optimization Techniques",
      "Graduated with CGPA: 9.1 / 10.0",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2019 - May 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Flagship",
    description:
      "Engineered a distributed feature flag system to enable teams to safely turn features on/off without redeploying code, creating a full-stack solution and Prometheus for monitoring.",
    tags: ["Golang", "React", "Node.js", "Python", "Kubernetes", "Prometheus"],
    imageUrl: flagShipImg,
  },
  {
    title: "IU Course Compass",
    description:
      "An AI-powered course planner that generates personalized recommendations by analyzing historical grade data and professor ratings to help them make informed academic decisions.",
    tags: ["React", "TailwindCSS", "FastAPI", "Supabase", "Gemini AI"],
    imageUrl: iuCourseCompassImg,
  },
  {
    title: "Itinera - Full Stack AI Travel Planner Application",
    description:
      "Developed a full-stack travel planning app that provides personalized recommendations and real-time data synchronization, enhancing the user experience with AI-driven features and secure cloud-based services.",
    tags: ["React", "Gemini AI", "TailwindCSS", "Firebase"],
    imageUrl: itineraImg,
  },
  {
    title: "Optimized NSFW Content Detection for Real-Time Moderation",
    description:
      "Developed an NSFW content detection model using ResNet18, achieving 95.1% accuracy and optimizing model size and inference speed for real-time moderation on resource-constrained devices.",
    tags: ["PyTorch", "CNN", "Deep Learning", "Quantization"],
    imageUrl: nsfwDetectionImg,
  },
  {
    title: "MediLink - Patient and Insurance Management System",
    description:
      "As a full-stack developer, I developed a healthcare management platform enabling patients, doctors, and insurance providers to efficiently manage appointments, medical records, and insurance plans.",
    tags: ["Django", "Next.js", "Render", "PostgreSQL", "Docker"],
    imageUrl: medilinkImg,
  },
  {
    title: "Unveiling Trends - A Cloud-Driven Data Engineering Project",
    description:
      "I created a custom YouTube data scraper and built interactive QuickSight dashboards to analyze and visualize trending topics, supporting informed decision-making.",
    tags: ["AWS", "S3", "Glue", "Lambda", "Athena", "QuickSight", "Python"],
    imageUrl: AWStrendsImg,
  },
] as const;

export const skillsData = [
  "Python",
  "JavaScript",
  "TypeScript",
  "SQL",
  "React",
  "Next.js",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "Flask",
  "Django",
  "FastAPI",
  "RESTful APIs",
  "GraphQL",
  "Microservices",
  "AWS",
  "Azure",
  "Firebase",
  "Supabase",
  "NeonDB",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "DynamoDB",
  "Redis",
  "Elasticsearch",
  "Git",
  "Linux",
  "GitHub Actions",
  "CI/CD",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Selenium",
  "Jest",
  "PyTest",
  "Postman",
  "Swagger",
  "Render",
  "Railway",
  "Vercel",
  "Jira",
  "Agile",
  "Scrum",
  "SDLC",
  "Unit Testing",
  "Integration Testing",
  "Power BI",
] as const;
