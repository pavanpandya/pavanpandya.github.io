import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
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
    title: "Software Developer",
    location: "San Jose, CA",
    description:
      "Engineered a Flask microservice as middleware between PHP backend and Azure OpenAI. Implemented async functions and polling mechanism for real-time interaction with 'marc,' our AI mentor, ensuring responses within a second per query. Dockerized & Deployed the application using AWS ECR & AWS ECS Fargate, achieving 50% faster deployment and supporting simultaneous users. Implemented unit testing to ensure robust performance & reliability across various deployment scenarios.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - Present",
  },
  {
    companyName: "Dhirubhai Ambani Institute of Information and Communication Technology",
    title: "Data Science Intern",
    location: "Gandhinagar, India",
    description:
      "Spearheaded a system for analyzing inflation-related sentiment by collecting & processing over 1.5 million tweets using Twitter API & Selenium. Applied advanced text preprocessing & BERT embeddings to extract & analyze 157K inflation-specific tweets. Implemented statistical modeling and machine learning techniques, including topic modeling with BERTopic and LDA, to explore predictive relationships between social sentiment and inflation trends.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2022 - June 2023",
  },
  {
    companyName: "Brainly Beam Technologies Pvt Ltd.",
    title: "Data Science Intern",
    location: "Ahmedabad, India",
    description:
      "Developed a recommender system utilizing Linguistics and Contextual-Based approach for sentiment identification using SVM or Bayes classifier, achieving an accuracy rate of approximately 68% with ML Algorithms. Utilized NLP methodologies to analyze and predict sentiments associated with generated content, such as reviews and comments, leveraging RNN and LSTM models, to extract insights and enhance content understanding.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2022 - July 2022",
  },
  {
    companyName: "Hate Speech and Offensive Content Identification",
    title: "Data Science Intern",
    location: "Ahmedabad, India",
    description:
      "Engineered a REST API backend for a submission platform, facilitating seamless participant submissions & dashboard display with filters based on accuracy metric & task categories, resulting in a 40% increase in annotation throughput. Led the collection of 1200 Gujarati tweets for hate speech detection using selenium, enhancing model accuracy by 15% through manual annotation (200 tweets) and fine-tuning using few-shot learning techniques.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2021 - June 2023",
  },
] as const;

export const projectsData = [
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
  "R",
  "SQL",
  "C",
  "HTML",
  "CSS",
  "JavaScript",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "PyTorch",
  "TensorFlow",
  "Keras",
  "Langchain",
  "Node.js",
  "Express.js",
  "Django",
  "Flask",
  "Tailwind CSS",
  "Streamlit",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "Selenium",
  "Hugging Face",
  "Regex",
  "Git",
  "GitHub",
  "AWS",
  "Linux",
  "Docker",
  "Elasticsearch",
  "Tableau",
  "Postman",
  "Render",
  "Vercel",
  "Firebase",
  "Jira"
] as const;
