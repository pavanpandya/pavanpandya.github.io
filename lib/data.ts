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
      "Enabled real-time interaction for high school students and parents by engineering a Flask microservice as middleware between the PHP backend and Azure OpenAI, providing personalized guidance for university admissions and career paths. Enhanced user experience by achieving instantaneous AI response (<1 second) through developing an async polling mechanism that fetches and processes new messages every second, improving interaction efficiency. Streamlined deployment efficiency by 50% by Dockerizing and deploying the chatbot application on AWS ECS Fargate, allowing the system to handle hundreds of daily queries with seamless uptime and faster updates. Boosted recommendation accuracy and response time by 20% by integrating Elasticsearch, which used cosine similarity to efficiently retrieve user recommendations based on message and profile embeddings, improving personalized interactions.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - Present",
  },
  {
    companyName: "Dhirubhai Ambani Institute of Information and Communication Technology",
    title: "Data Science Intern",
    location: "Gandhinagar, India",
    description:
      "Analyzed inflation-related sentiment by collecting and processing 1.5M+ tweets via Twitter API and Selenium. Improved sentiment analysis depth by 30% by applying advanced text preprocessing and BERT embeddings to analyze 157K inflation-specific tweets, resulting in more nuanced understanding of public sentiment. Optimized forecast accuracy by 15% by developing machine learning models with BERTopic and LDA, using manual annotation of 300 tweets and hyperparameter tuning to reveal predictive relationships between sentiment and inflation trends.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2022 - June 2023",
  },
  {
    companyName: "Hate Speech and Offensive Content Identification",
    title: "Data Science Intern",
    location: "Ahmedabad, India",
    description:
      "Increased annotation throughput by 40% by engineering a REST API backend for a submission platform, enabling seamless participant submissions and dashboard filtering by accuracy and task categories. Refined model accuracy by 15% by leading the collection of 1,200 Gujarati tweets for hate speech detection, using Selenium for data gathering, manual annotation of 200 tweets, and fine-tuning with few-shot learning techniques.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2021 - June 2023",
  },
  {
    companyName: "Brainly Beam Technologies Pvt Ltd.",
    title: "Data Science Intern",
    location: "Ahmedabad, India",
    description:
      "Achieved 78% accuracy in sentiment identification by developing a recommender system using linguistics and contextual approaches with SVM and Bayes classifiers. Deepened content understanding by analyzing and predicting sentiments in reviews and comments using NLP methodologies, leveraging RNN and LSTM models to extract actionable insights.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2022 - July 2022",
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
  "C",
  "C++",
  "Node.js",
  "Express.js",
  "Django",
  "Flask",
  "HTML",
  "CSS",
  "JavaScript",
  "RESTful APIs",
  "Tailwind CSS",
  "Streamlit",
  "PyTorch",
  "TensorFlow",
  "Keras",
  "Langchain",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "NLTK",
  "Matplotlib",
  "Seaborn",
  "Selenium",
  "Huggingface",
  "Regex",
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
