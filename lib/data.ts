import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import itineraImg from "@/public/itinera.png";
import nsfwDetectionImg from "@/public/nsfw_detection.png";
import medilinkImg from "@/public/medilink.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import tableauprojectImg from "@/public/tableau_project.png";
import kidneydiseaseImg from "@/public/kidneydiseaseclassification.jpg";
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
    companyName: "Marchup Inc.",
    title: "Software Developer Intern",
    location: "San Jose, CA",
    description: [
      "Architected a scalable, real-time AI chatbot for student counseling using Flask microservices, Azure OpenAI (dual-mode static/generative LLM architecture), and asynchronous programming, achieving <1s response time and reducing LLM API costs through caching and prompt engineering.",
      "Engineered and optimized a data-driven user recommendation engine leveraging Elasticsearch, vector embeddings, and cosine similarity to deliver personalized user suggestions based on interests, location, and interaction history, resulting in increase in user engagement.",
      "Led the migration from Lucene Search to AWS OpenSearch, architecting automated reindexing workflows with AWS Lambda and implementing monitoring pipelines via CloudWatch, boosting search response times and ensuring zero data loss during transition.",
      "Orchestrated containerized deployment using Docker and AWS ECS Fargate, implementing CI/CD pipelines, automated scaling, and comprehensive testing frameworks, enabling seamless, zero-downtime deployments, and maintaining service reliability with 99.9% uptime.",
      "Drove Agile development processes, driving cross-functional collaboration in a team of 5 dev. Conducted daily stand-ups, evaluated frameworks, performed rigorous performance testing, and aligned technical solutions with business needs, resulting in high-quality product delivery.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - Nov 2024",
  },
  {
    companyName: "Dhirubhai Ambani Institute of Information and Communication Technology",
    title: "Data Science Intern",
    location: "Gandhinagar, India",
    description: [
      "Extracted over 1.5M+ tweets using Twitter API and Selenium, identifying 157K relevant tweets related to inflation through advanced topic modeling techniques (BERTopic, LDA), laying the groundwork for targeted economic trend analysis.",
      "Achieved 87% sentiment trend classification accuracy by applying advanced text preprocessing and BERT embeddings, optimizing performance through model fine-tuning with manual annotation of 300 tweets and hyperparameter tuning.",
      "Presented key findings to researchers, illustrating the influence of tweet sentiment on people's buying patterns & inflation trends."
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2022 - June 2023",
  },
  {
    companyName: "Hate Speech and Offensive Content Identification",
    title: "Data Science Intern",
    location: "Ahmedabad, India",
    description: [
      "Enhanced model performance by 15% by fine-tuning a BERT-based multilingual model using pseudo-labeling techniques, leveraging data for hate speech detection, and optimizing it with few-shot learning for low-resource languages.",
      "Increased annotation throughput by 40% by developing a REST API backend that streamlined participant submissions and introduced dynamic dashboard filtering by task accuracy and categories, enabling faster and more efficient workflows.",
      "Ensured seamless platform functionality by performing unit and integration testing and enforcing adherence to a CI/CD pipeline, while improving user experience through UI enhancements and content updates on the front end.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "June 2021 - June 2023",
  },
] as const;


export const projectsData = [
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
    title: "DocQnA – Intelligent PDF Querying LLM System",
    description:
      "I led the creation of a PDF-based question-answering system using retrieval-augmented generation (RAG), integrating Apache Cassandra for data management and Streamlit for a user-friendly interface.",
    tags: ["Apache Cassandra", "Astra DB", "LangChain", "Streamlit", "Hugging Face"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Sales & Customer Data Analysis Dashboard",
    description:
      "I developed Tableau dashboards for sales and customer analysis, enhancing trend identification and customer segmentation with interactive, data-driven insights.",
    tags: ["Tableau", "ETL", "SQL", "Data Collection"],
    imageUrl: tableauprojectImg,
  },
  {
    title: "Kidney Disease Classification",
    description:
      "I improved kidney disease classification accuracy with a deep-learning model and streamlined the deployment process using AWS, Docker and creating an efficient CI/CD pipeline.",
    tags: ["Python", "Deep Learning", "MLFlow", "DVC", "AWS", "Docker", "GitHub Actions"],
    imageUrl: kidneydiseaseImg,
  },
  {
    title: "Unveiling Trends - A Cloud-Driven Data Engineering Project",
    description:
      "I created a custom YouTube data scraper and built interactive QuickSight dashboards to analyze and visualize trending topics, supporting informed decision-making.",
    tags: ["AWS", "S3", "Glue", "Lambda", "Athena", "QuickSight", "Python"],
    imageUrl: AWStrendsImg,
  },
  {
    title: "Uber Data Analysis Pipeline using GCP",
    description:
      "I developed a GCP data pipeline to analyze NYC taxi trip data, enhancing processing efficiency and operational effectiveness through insightful visualizations with Looker.",
    tags: ["Python", "BigQuery", "Data Extraction", "Data Transformation", "MageAI", "Looker"],
    imageUrl: taxiImg,
  },
] as const;

export const skillsData = [
  "Python",
  "JavaScript",
  "C",
  "C++",
  "PHP",
  "HTML",
  "CSS",
  "Node.js",
  "Express.js",
  "React",
  "Flask",
  "Django",
  "LangChain",
  "RESTful APIs",
  "PyTorch",
  "TensorFlow",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "NLTK",
  "Matplotlib",
  "Seaborn",
  "Selenium",
  "Huggingface",
  "Regex",
  "Tailwind CSS",
  "Streamlit",
  "SQL",
  "PostgreSQL",
  "MySQL",
  "SQLite",
  "NoSQL",
  "MongoDB",
  "Apache Cassandra",
  "DynamoDB",
  "Redis",
  "AWS",
  "Azure",
  "Docker",
  "GitHub Actions",
  "CI/CD",
  "Kubernetes",
  "Git",
  "Linux",
  "Elasticsearch",
  "Hadoop",
  "Apache Spark",
  "Postman",
  "Swagger",
  "Tableau",
  "Render",
  "Vercel",
  "Jira",
  "Agile",
  "Scrum",
  "SDLC",
  "Unit Testing",
  "Integration Testing",
] as const;
