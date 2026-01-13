// ═══════════════════════════════════════════════════════════════════════════════
// COSMIC DATA NEXUS - The Single Source of Truth
// ═══════════════════════════════════════════════════════════════════════════════
// Edit this file to update your portfolio content. No code changes needed!
// This is data-driven design at its finest - like feeding data to a neural network.

export interface SiteData {
  personal: PersonalInfo
  about: AboutSection
  experience: ExperienceItem[]
  projects: ProjectItem[]
  skills: SkillCategory[]
  education: EducationItem[]
  certifications: CertificationItem[]
  contact: ContactInfo
}

interface PersonalInfo {
  name: string
  title: string
  tagline: string
  bio: string
  avatar?: string
  resume: string
}

interface AboutSection {
  description: string[]
  interests: string[]
}

interface ExperienceItem {
  id: string
  title: string
  company: string
  location: string
  period: string
  description: string[]
  technologies: string[]
  icon?: string
}

export interface ProjectItem {
  id: string
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  github?: string
  demo?: string
  image?: string
  featured?: boolean
  category: 'ML/AI' | 'Web' | 'Research' | 'Tools'
}

interface SkillCategory {
  category: string
  skills: SkillItem[]
  featured?: boolean
}

interface SkillItem {
  name: string
  level?: number // 0-100
  icon?: string
}

interface EducationItem {
  id: string
  degree: string
  institution: string
  location: string
  period: string
  description?: string
  gpa?: string
  highlights?: string[]
}

interface CertificationItem {
  id: string
  name: string
  issuer: string
  date: string
  credential?: string
  link?: string
}

interface ContactInfo {
  email: string
  github: string
  linkedin: string
  twitter?: string
  location: string
}

// ═══════════════════════════════════════════════════════════════════════════════
// YOUR COSMIC PORTFOLIO DATA - EDIT BELOW
// ═══════════════════════════════════════════════════════════════════════════════

export const siteData: SiteData = {
  // ━━━ PERSONAL INFO ━━━
  personal: {
    name: "Yellapragada Siddharth",
    title: "AI/ML/DL Researcher & Developer",
    tagline: "Training models by day, chasing cosmic truths by night.",
    bio: "Neural explorer building intelligent systems that push the boundaries of what's possible.",
    resume: "/YELLAPRAGADA_SIDDHARTH_CV.pdf",
  },

  // ━━━ ABOUT SECTION ━━━
  about: {
    description: [
      "I'm an AI/ML/DL researcher and developer passionate about pushing the boundaries of artificial intelligence. Currently pursuing dual-degree studies involving TMU and BITS Pilani, Hyderabad Campus, I specialize in deep learning, transformers, and neural architecture design.",
      "My work spans from theoretical research to production-grade implementations, with a focus on making AI systems more intelligent, efficient, and accessible. I believe in building technology that doesn't just solve problems—it asks better questions.",
      "When I'm not training models or optimizing loss functions, you'll find me exploring the latest papers on arXiv, contributing to open-source ML frameworks, or contemplating the nature of intelligence itself."
    ],
    interests: [
      "Neural Architecture Search",
      "Transformers & Attention Mechanisms", 
      "MLOps & Model Deployment",
      "Reinforcement Learning",
      "Explainable AI",
      "Computer Vision"
    ]
  },

  // ━━━ EXPERIENCE ━━━
  experience: [
    {
      id: "exp-1",
      title: "IT Support & Deployment Trainee",
      company: "Apple Training (via Pearson VUE)",
      location: "Remote",
      period: "July 2025 - Present",
      description: [
        "Training in Apple device support, deployment, and management",
        "Preparing for Apple Certified IT Professional credentials in support, security, and management",
        "Apple Certification Records System | Candidate ID: APPL455306"
      ],
      technologies: ["Apple Deployment", "IT Support", "Device Management", "Security"],
      icon: "Apple"
    },
    {
      id: "exp-2",
      title: "Copilot Trainee",
      company: "Microsoft",
      location: "Remote",
      period: "June 2025",
      description: [
        "Completed structured training on Microsoft Copilot AI tools",
        "Learned to streamline workflows and improve productivity using AI-powered assistance"
      ],
      technologies: ["Microsoft Copilot", "AI Tools", "Workflow Optimization"],
      icon: "Laptop"
    },
    {
      id: "exp-3",
      title: "AI Developer (Project-Based)",
      company: "Self / Independent Projects",
      location: "Remote",
      period: "Jan 2025 - Present",
      description: [
        "Developing AI-powered applications and machine learning models",
        "Building end-to-end solutions from research to deployment",
        "Working on transformer architectures and deep learning projects"
      ],
      technologies: ["Python", "PyTorch", "TensorFlow", "Transformers", "AI/ML"],
      icon: "Brain"
    }
  ],

  // ━━━ PROJECTS ━━━
  projects: [
    {
      id: "proj-1",
      title: "Neural Style Transfer Engine",
      description: "Real-time artistic style transfer using optimized CNNs",
      longDescription: "A GPU-accelerated style transfer system that applies artistic styles to images and videos in real-time. Implements fast neural style transfer with perceptual loss functions.",
      technologies: ["PyTorch", "CUDA", "OpenCV", "FastAPI", "React"],
      github: "https://github.com/yourusername/style-transfer",
      demo: "https://style-transfer-demo.vercel.app",
      featured: true,
      category: "ML/AI"
    },
    {
      id: "proj-2",
      title: "Transformer From Scratch",
      description: "Educational implementation of the Transformer architecture with detailed annotations",
      longDescription: "A clean, well-documented implementation of 'Attention Is All You Need' from first principles. Includes training scripts, visualization tools, and Jupyter notebooks explaining every component.",
      technologies: ["PyTorch", "NumPy", "Matplotlib", "Jupyter"],
      github: "https://github.com/yourusername/transformer-scratch",
      featured: true,
      category: "Research"
    },
    {
      id: "proj-3",
      title: "LLM Fine-tuning Pipeline",
      description: "Automated pipeline for fine-tuning large language models on custom datasets",
      technologies: ["Transformers", "LoRA", "PEFT", "Weights & Biases", "Python"],
      github: "https://github.com/yourusername/llm-finetune",
      category: "ML/AI"
    },
    {
      id: "proj-4",
      title: "Object Detection API",
      description: "Production-ready REST API for real-time object detection",
      technologies: ["YOLOv8", "FastAPI", "Docker", "Redis", "PostgreSQL"],
      github: "https://github.com/yourusername/detection-api",
      demo: "https://detection-api-demo.com",
      category: "ML/AI"
    },
    {
      id: "proj-5",
      title: "ML Model Observatory",
      description: "Dashboard for monitoring ML model performance and drift in production",
      technologies: ["Python", "Streamlit", "Plotly", "MLflow", "Prometheus"],
      github: "https://github.com/yourusername/ml-observatory",
      category: "Tools"
    },
    {
      id: "proj-6",
      title: "Research Paper Analyzer",
      description: "NLP tool that summarizes and extracts key insights from academic papers",
      technologies: ["Transformers", "LangChain", "ChromaDB", "Gradio"],
      github: "https://github.com/yourusername/paper-analyzer",
      category: "ML/AI"
    }
  ],

  // ━━━ SKILLS ━━━
  skills: [
    {
      category: "Deep Learning Frameworks",
      featured: true,
      skills: [
        { name: "PyTorch", level: 95 },
        { name: "TensorFlow", level: 85 },
        { name: "JAX", level: 70 },
        { name: "Keras", level: 80 }
      ]
    },
    {
      category: "ML & AI",
      featured: true,
      skills: [
        { name: "Transformers", level: 90 },
        { name: "Computer Vision", level: 85 },
        { name: "NLP", level: 88 },
        { name: "Reinforcement Learning", level: 75 },
        { name: "GANs", level: 70 }
      ]
    },
    {
      category: "Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "C++", level: 75 },
        { name: "JavaScript/TypeScript", level: 80 },
        { name: "SQL", level: 85 },
        { name: "Bash", level: 70 }
      ]
    },
    {
      category: "MLOps & Tools",
      skills: [
        { name: "Docker", level: 85 },
        { name: "Git", level: 90 },
        { name: "AWS/GCP", level: 75 },
        { name: "Weights & Biases", level: 85 },
        { name: "MLflow", level: 80 },
        { name: "Kubernetes", level: 65 }
      ]
    },
    {
      category: "Libraries & Frameworks",
      skills: [
        { name: "Hugging Face", level: 90 },
        { name: "FastAPI", level: 85 },
        { name: "NumPy", level: 95 },
        { name: "Pandas", level: 90 },
        { name: "Scikit-learn", level: 88 },
        { name: "OpenCV", level: 80 }
      ]
    }
  ],

  // ━━━ EDUCATION ━━━
  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Engineering (B.E.) in Computer Science",
      institution: "Birla Institute of Technology and Science (BITS), Pilani",
      location: "Hyderabad Campus, India",
      period: "2022 - 2026",
      gpa: "8.5/10.0",
      highlights: [
        "Focus: Machine Learning, Deep Learning, Computer Vision",
        "Relevant Coursework: Neural Networks, AI, Data Structures, Algorithms",
        "Member of AI/ML Research Club"
      ]
    },
    {
      id: "edu-2",
      degree: "B.Tech in Computer Science Engineering (AI, ML, DL)",
      institution: "Teerthanker Mahaveer University (TMU)",
      location: "Moradabad, Uttar Pradesh, India",
      period: "2024 - 2026",
      highlights: [
        "Research focus: Efficient Transformers and Neural Architecture Search",
        "Collaboration with AI research labs"
      ]
    }
  ],

  // ━━━ CERTIFICATIONS ━━━
  certifications: [
    {
      id: "cert-1",
      name: "Deep Learning Specialization",
      issuer: "DeepLearning.AI (Coursera)",
      date: "2024",
      credential: "ABC123XYZ",
      link: "https://coursera.org/verify/specialization/ABC123XYZ"
    },
    {
      id: "cert-2",
      name: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "2024",
      credential: "TF-2024-001",
      link: "https://www.credential.net/example"
    },
    {
      id: "cert-3",
      name: "Machine Learning Engineering for Production (MLOps)",
      issuer: "DeepLearning.AI",
      date: "2024"
    },
    {
      id: "cert-4",
      name: "AWS Certified Machine Learning - Specialty",
      issuer: "Amazon Web Services",
      date: "2025"
    }
  ],

  // ━━━ CONTACT INFO ━━━
  contact: {
    email: "ssid050804@gmail.com",
    github: "https://github.com/Ssid05",
    linkedin: "https://www.linkedin.com/in/y-s-a0bba1374/",
    twitter: "https://x.com/__SSID__00000",
    location: "Toronto / Hyderabad"
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// NAVIGATION CONFIG
// ═══════════════════════════════════════════════════════════════════════════════

export const navigationSections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
] as const

export type SectionId = typeof navigationSections[number]['id']
