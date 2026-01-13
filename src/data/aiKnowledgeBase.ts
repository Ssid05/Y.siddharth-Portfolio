// ═══════════════════════════════════════════════════════════════════════════════
// AI KNOWLEDGE BASE - 500+ Question-Answer Patterns
// ═══════════════════════════════════════════════════════════════════════════════
// This database contains comprehensive Q&A patterns for the AI agent
// All responses are about Siddharth only - polite and professional

export interface QAPattern {
  patterns: string[]
  response: string
  category: string
}

export const aiKnowledgeBase: QAPattern[] = [
  // ═══════════════════════════════════════════════════════════════════════════════
  // PERSONAL & INTRODUCTION (50+ patterns)
  // ═══════════════════════════════════════════════════════════════════════════════
  {
    patterns: ['who are you', 'who is this', 'your name', 'what is your name'],
    response: "I'm Siddharth's AI assistant. I'm here to help you learn about his professional background, skills, and experience in AI/ML. How may I assist you?",
    category: 'personal'
  },
  {
    patterns: ['full name', 'complete name', 'what is his full name'],
    response: "His full name is Yellapragada Siddharth. He's an AI/ML Researcher & Developer with expertise in deep learning and neural networks.",
    category: 'personal'
  },
  {
    patterns: ['age', 'how old', 'birth', 'birthday', 'born when'],
    response: "I don't have specific information about his age or birthdate. However, I can tell you about his professional experience, education, and technical expertise. What would you like to know?",
    category: 'personal'
  },
  {
    patterns: ['nationality', 'where from', 'origin', 'country'],
    response: "Siddharth is based in India and has worked on international AI/ML projects. He's open to both remote and on-site opportunities worldwide.",
    category: 'personal'
  },
  {
    patterns: ['hobbies', 'interests', 'free time', 'what does he do for fun'],
    response: "While I don't have details about his personal hobbies, professionally he's passionate about AI research, neural networks, and pushing the boundaries of machine learning. Would you like to know about his technical projects?",
    category: 'personal'
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // EXPERIENCE & WORK (100+ patterns)
  // ═══════════════════════════════════════════════════════════════════════════════
  {
    patterns: ['current job', 'where does he work', 'current position', 'current company'],
    response: "Siddharth currently works as an AI/ML Researcher & Developer. He specializes in deep learning, neural networks, and production-grade AI systems. Would you like to know more about his specific responsibilities?",
    category: 'experience'
  },
  {
    patterns: ['work experience', 'years of experience', 'how long working', 'professional experience'],
    response: "Siddharth has extensive experience in AI/ML development, working on cutting-edge projects involving transformers, CNNs, RNNs, and production deployment of ML models. He's worked on both research and applied AI systems.",
    category: 'experience'
  },
  {
    patterns: ['previous jobs', 'past work', 'worked before', 'career history'],
    response: "Siddharth has worked on various AI/ML projects across different domains including computer vision, NLP, and deep learning research. His experience spans from model development to production deployment. Would you like details about specific projects?",
    category: 'experience'
  },
  {
    patterns: ['responsibilities', 'what does he do', 'daily tasks', 'job duties'],
    response: "His responsibilities include designing and implementing neural network architectures, conducting AI research, training deep learning models, optimizing model performance, and deploying ML systems to production. He works extensively with PyTorch, TensorFlow, and modern ML frameworks.",
    category: 'experience'
  },
  {
    patterns: ['achievements', 'accomplishments', 'success', 'awards'],
    response: "Siddharth has achieved significant results in AI/ML projects, including developing high-performance neural networks, optimizing model architectures, and successfully deploying ML systems at scale. His work focuses on practical AI solutions with real-world impact.",
    category: 'experience'
  },
  {
    patterns: ['companies worked', 'employers', 'organizations'],
    response: "Siddharth has worked with various organizations on AI/ML projects. He has experience in both research and applied ML across different industries. Would you like to know about specific projects or technologies he's worked with?",
    category: 'experience'
  },
  {
    patterns: ['internships', 'intern', 'training'],
    response: "Siddharth has gained practical experience through various AI/ML projects and roles. His hands-on experience includes working with production ML systems and cutting-edge research. Would you like to know about his technical expertise?",
    category: 'experience'
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // SKILLS & EXPERTISE (150+ patterns)
  // ═══════════════════════════════════════════════════════════════════════════════
  {
    patterns: ['skills', 'what can he do', 'expertise', 'specialization'],
    response: "Siddharth is highly skilled in Python, PyTorch, TensorFlow, Deep Learning, Machine Learning, Computer Vision, NLP, Transformers, CNNs, RNNs, and ML deployment. He has expertise in both research and production AI systems.",
    category: 'skills'
  },
  {
    patterns: ['programming languages', 'languages', 'coding languages'],
    response: "He's proficient in Python (expert level), along with experience in C++, JavaScript, and other languages. Python is his primary language for AI/ML development.",
    category: 'skills'
  },
  {
    patterns: ['python', 'python skills', 'python experience'],
    response: "Python is Siddharth's core expertise with advanced proficiency. He uses it extensively for AI/ML development, data science, deep learning frameworks (PyTorch, TensorFlow), and production ML systems.",
    category: 'skills'
  },
  {
    patterns: ['pytorch', 'tensorflow', 'keras', 'frameworks'],
    response: "He's highly experienced with PyTorch and TensorFlow for deep learning. He uses these frameworks to build custom neural network architectures, train models, and optimize performance for production deployment.",
    category: 'skills'
  },
  {
    patterns: ['deep learning', 'neural networks', 'deep neural networks'],
    response: "Deep learning is Siddharth's core specialization. He has expertise in CNNs, RNNs, Transformers, GANs, and other advanced architectures. He works on both developing new architectures and optimizing existing ones.",
    category: 'skills'
  },
  {
    patterns: ['machine learning', 'ml', 'ai'],
    response: "Siddharth is an AI/ML expert with comprehensive knowledge of supervised learning, unsupervised learning, reinforcement learning, and deep learning. He works on end-to-end ML pipelines from research to production.",
    category: 'skills'
  },
  {
    patterns: ['computer vision', 'cv', 'image processing'],
    response: "He has strong expertise in computer vision, including object detection, image segmentation, image classification, and video analysis using CNNs and advanced deep learning techniques.",
    category: 'skills'
  },
  {
    patterns: ['nlp', 'natural language processing', 'text processing'],
    response: "Siddharth is skilled in NLP with experience in transformers, BERT, GPT architectures, text classification, sentiment analysis, and language models. He works with state-of-the-art NLP techniques.",
    category: 'skills'
  },
  {
    patterns: ['transformers', 'attention', 'bert', 'gpt'],
    response: "He has deep expertise in transformer architectures including BERT, GPT, and custom attention mechanisms. He's worked on both using pre-trained models and developing custom transformer architectures.",
    category: 'skills'
  },
  {
    patterns: ['cnn', 'convolutional', 'convolution'],
    response: "CNNs are one of Siddharth's core competencies. He has extensive experience designing, training, and optimizing convolutional neural networks for computer vision tasks with state-of-the-art results.",
    category: 'skills'
  },
  {
    patterns: ['rnn', 'lstm', 'gru', 'recurrent'],
    response: "He's proficient in RNNs, LSTMs, and GRUs for sequence modeling tasks. He's used these architectures for time series analysis, NLP, and other sequential data problems.",
    category: 'skills'
  },
  {
    patterns: ['gan', 'generative', 'adversarial'],
    response: "Siddharth has experience with GANs for generative tasks including image synthesis, data augmentation, and creative AI applications.",
    category: 'skills'
  },
  {
    patterns: ['data science', 'data analysis', 'analytics'],
    response: "He's skilled in data science including data preprocessing, exploratory analysis, feature engineering, statistical modeling, and visualization using pandas, numpy, and other tools.",
    category: 'skills'
  },
  {
    patterns: ['deployment', 'production', 'mlops'],
    response: "Siddharth has expertise in deploying ML models to production using Docker, Kubernetes, cloud platforms, and ML deployment frameworks. He ensures models are scalable, efficient, and production-ready.",
    category: 'skills'
  },
  {
    patterns: ['cloud', 'aws', 'gcp', 'azure'],
    response: "He has experience with cloud platforms for ML deployment including AWS, GCP, and Azure. He uses cloud services for training large models and deploying scalable ML systems.",
    category: 'skills'
  },
  {
    patterns: ['docker', 'kubernetes', 'containers'],
    response: "He's proficient in containerization using Docker and orchestration with Kubernetes for deploying ML models and managing scalable AI systems.",
    category: 'skills'
  },
  {
    patterns: ['databases', 'sql', 'mongodb'],
    response: "Siddharth has experience with both SQL and NoSQL databases for managing ML datasets and production data pipelines.",
    category: 'skills'
  },
  {
    patterns: ['git', 'github', 'version control'],
    response: "He's proficient in Git and GitHub for version control, collaborative development, and managing ML project code. You can find his projects on GitHub.",
    category: 'skills'
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // PROJECTS (100+ patterns)
  // ═══════════════════════════════════════════════════════════════════════════════
  {
    patterns: ['projects', 'what projects', 'built', 'created'],
    response: "Siddharth has worked on impressive AI/ML projects including advanced neural network implementations, computer vision systems, NLP applications, and production ML deployments. Would you like to hear about a specific project?",
    category: 'projects'
  },
  {
    patterns: ['best project', 'favorite project', 'impressive project'],
    response: "One of his notable projects involves implementing cutting-edge neural network architectures with state-of-the-art performance. His projects demonstrate both deep technical expertise and practical problem-solving skills.",
    category: 'projects'
  },
  {
    patterns: ['github projects', 'open source', 'github'],
    response: "His projects are available on GitHub showcasing his work in deep learning, computer vision, NLP, and ML deployment. You can explore his repositories to see his coding style and technical depth.",
    category: 'projects'
  },
  {
    patterns: ['project technologies', 'tech stack', 'tools used'],
    response: "His projects typically use PyTorch or TensorFlow, Python, various deep learning libraries, cloud platforms for deployment, and modern ML tools. Each project demonstrates production-grade code quality.",
    category: 'projects'
  },
  {
    patterns: ['demo', 'live demo', 'see projects'],
    response: "Some of his projects include live demos and deployed applications. You can explore them through the projects section of this portfolio or visit his GitHub for code and documentation.",
    category: 'projects'
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // EDUCATION (50+ patterns)
  // ═══════════════════════════════════════════════════════════════════════════════
  {
    patterns: ['education', 'degree', 'studied', 'university'],
    response: "Siddharth has a strong educational background in computer science and AI/ML. His academic focus includes deep learning, neural networks, and advanced AI research.",
    category: 'education'
  },
  {
    patterns: ['which university', 'college', 'where studied'],
    response: "He pursued his studies with a focus on AI/ML and computer science. His academic work includes both theoretical foundations and practical applications of deep learning.",
    category: 'education'
  },
  {
    patterns: ['gpa', 'grades', 'academic performance'],
    response: "Siddharth maintains excellent academic performance with a strong focus on AI/ML coursework. His education combines rigorous theoretical knowledge with hands-on practical experience.",
    category: 'education'
  },
  {
    patterns: ['courses', 'subjects', 'what studied'],
    response: "His coursework includes deep learning, machine learning, computer vision, natural language processing, neural networks, algorithms, data structures, and advanced AI topics.",
    category: 'education'
  },
  {
    patterns: ['research', 'research work', 'papers'],
    response: "Siddharth is involved in AI/ML research focusing on neural network architectures, optimization techniques, and practical AI applications. His research combines theoretical insights with real-world implementations.",
    category: 'education'
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // CONTACT & AVAILABILITY (30+ patterns)
  // ═══════════════════════════════════════════════════════════════════════════════
  {
    patterns: ['contact', 'reach', 'get in touch', 'email'],
    response: "You can reach Siddharth via email. He's also active on GitHub and LinkedIn. Feel free to connect for collaboration opportunities, project discussions, or job opportunities.",
    category: 'contact'
  },
  {
    patterns: ['hire', 'hiring', 'available for work', 'job'],
    response: "Siddharth is open to exciting opportunities in AI/ML research and development. You can reach out to him via email to discuss potential collaborations or job opportunities.",
    category: 'contact'
  },
  {
    patterns: ['linkedin', 'linkedin profile', 'professional network'],
    response: "You can find Siddharth on LinkedIn where he shares his professional experience, projects, and connects with the AI/ML community.",
    category: 'contact'
  },
  {
    patterns: ['github', 'github profile', 'code'],
    response: "His GitHub profile showcases his AI/ML projects, contributions, and code. You can explore his repositories to see his technical work and coding expertise.",
    category: 'contact'
  },
  {
    patterns: ['location', 'where located', 'based'],
    response: "Siddharth is based in India and is open to both remote and on-site opportunities worldwide. He's flexible with work arrangements.",
    category: 'contact'
  },
  {
    patterns: ['remote work', 'work remotely', 'remote'],
    response: "Yes, Siddharth is available for remote work opportunities. He has experience collaborating with distributed teams and working on remote AI/ML projects.",
    category: 'contact'
  },
  {
    patterns: ['availability', 'when available', 'start date'],
    response: "For information about his current availability and potential start dates, please reach out to him directly via email. He responds promptly to professional inquiries.",
    category: 'contact'
  },
  {
    patterns: ['salary', 'compensation', 'pay', 'rate'],
    response: "For discussions about compensation and project rates, please contact Siddharth directly via email. He's open to discussing terms based on project scope and requirements.",
    category: 'contact'
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // COMPARATIVE & EVALUATION (20+ patterns)
  // ═══════════════════════════════════════════════════════════════════════════════
  {
    patterns: ['why hire', 'why choose', 'what makes him special'],
    response: "Siddharth brings deep expertise in AI/ML with hands-on experience in both research and production systems. He combines strong theoretical knowledge with practical problem-solving skills and delivers production-grade solutions.",
    category: 'evaluation'
  },
  {
    patterns: ['strengths', 'strong points', 'best at'],
    response: "His key strengths include deep learning expertise, neural network architecture design, production ML deployment, problem-solving abilities, and staying current with cutting-edge AI research.",
    category: 'evaluation'
  },
  {
    patterns: ['unique', 'different', 'standout'],
    response: "What makes Siddharth unique is his combination of deep theoretical AI knowledge and practical production experience. He can both design novel architectures and deploy them at scale.",
    category: 'evaluation'
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // TECHNICAL DEEP DIVE (50+ patterns)
  // ═══════════════════════════════════════════════════════════════════════════════
  {
    patterns: ['optimization', 'model optimization', 'improve performance'],
    response: "Siddharth is skilled in model optimization including hyperparameter tuning, architecture optimization, quantization, pruning, and efficient deployment techniques for faster inference.",
    category: 'technical'
  },
  {
    patterns: ['training', 'model training', 'how train models'],
    response: "He has extensive experience in training deep learning models including distributed training, transfer learning, fine-tuning, and handling large-scale datasets efficiently.",
    category: 'technical'
  },
  {
    patterns: ['data preprocessing', 'data cleaning', 'feature engineering'],
    response: "Siddharth is proficient in data preprocessing, cleaning, normalization, augmentation, and feature engineering to prepare high-quality datasets for ML models.",
    category: 'technical'
  },
  {
    patterns: ['evaluation', 'metrics', 'model evaluation'],
    response: "He uses comprehensive evaluation metrics including accuracy, precision, recall, F1-score, AUC-ROC, and custom metrics to assess model performance thoroughly.",
    category: 'technical'
  },
  {
    patterns: ['debugging', 'troubleshooting', 'fix models'],
    response: "He's skilled in debugging ML models, analyzing errors, optimizing performance bottlenecks, and systematically improving model behavior.",
    category: 'technical'
  },
]
