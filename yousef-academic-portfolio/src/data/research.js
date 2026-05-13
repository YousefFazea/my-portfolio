import { Cpu, Shield, BrainCircuit, Radio, Building2, Network, LockKeyhole, Workflow, FlaskConical, Users, Presentation, FileText } from 'lucide-react';

export const researchOverview = {
  umbrella: 'Trustworthy Edge Intelligence for IoT and Communication Systems',
  description:
    'My research program focuses on secure, scalable, and resilient networked systems by integrating Internet of Things (IoT), cybersecurity, intelligent data-driven methods, and communication-system design. The work emphasizes trustworthy IoT architectures, edge intelligence, communication-aware systems, and student-engaged research with externally visible outcomes.'
};

export const researchAreas = [
  'Internet of Things (IoT)',
  'Cybersecurity',
  'Edge Intelligence',
  'Data Analytics and Artificial Intelligence',
  'Optical and Wireless Communications',
  'Communication Networks',
  'Smart Infrastructure',
  'Post-Quantum and Lightweight Security'
];

export const researchThemes = [
  {
    title: 'Trustworthy IoT & Cybersecurity',
    icon: Shield,
    color: 'rose',
    description:
      'Developing secure, scalable, and resilient IoT and distributed systems through lightweight security, threat analysis, post-quantum security, and trustworthy architectures for connected environments.',
    tags: [
      'IoT Security',
      'Network Security',
      'Risk Analysis',
      'Lightweight Security',
      'Post-Quantum Security',
      'Trustworthy Architectures'
    ]
  },
  {
    title: 'AI-Driven Optical, Wireless & Communication Networks',
    icon: Radio,
    color: 'emerald',
    description:
      'Modeling, optimizing, and securing optical, wireless, and next-generation communication networks using artificial intelligence, data analytics, machine learning, and performance-aware network intelligence.',
    tags: [
      'Optical Communications',
      'Wireless Systems',
      'AI for Communications',
      'Data Analytics',
      'Machine Learning',
      'OFDM',
      'Li-Fi',
      'Network Modeling',
      'Optimization'
    ]
  },
  {
    title: 'Smart Infrastructure, Edge Intelligence & Connected Systems',
    icon: Building2,
    color: 'orange',
    description:
      'Designing intelligent and secure connected systems for smart infrastructure, cyber-physical environments, edge computing, and applied computing contexts, with emphasis on resilience, automation, and real-world decision support.',
    tags: [
      'Smart Infrastructure',
      'Connected Systems',
      'Edge Intelligence',
      'Cyber-Physical Systems',
      'Resilience',
      'Secure Integration',
      'Applied Computing',
      'Decision Support'
    ]
  }
];

export const methodology = [
  {
    title: 'Problem Identification',
    icon: Workflow,
    description:
      'Identify timely problems in networking, security, IoT, communications, and intelligent systems with practical and scholarly relevance.'
  },
  {
    title: 'System Modeling & Design',
    icon: FileText,
    description:
      'Develop architectures, algorithms, protocols, and evaluation models for secure, efficient, and communication-aware systems.'
  },
  {
    title: 'Experimental Validation',
    icon: FlaskConical,
    description:
      'Use simulation, performance evaluation, and data analysis to validate methods and quantify tradeoffs in security, efficiency, and scalability.'
  },
  {
    title: 'Student Involvement',
    icon: Users,
    description:
      'Engage undergraduate and graduate students in literature review, design, implementation, analysis, writing, and dissemination.'
  },
  {
    title: 'Dissemination',
    icon: Presentation,
    description:
      'Publish and present results through journals, conferences, posters, workshops, and collaborative scholarly outputs.'
  }
];

export const activeProjects = [
  {
    status: 'Active',
    year: '2026 - Present',
    title: 'AI/ML-Driven Battery Health Monitoring from Sensor Data',
    description:
      'Developing data analytics and machine learning models to estimate lithium-ion battery State of Health (SOH) using publicly available battery aging datasets. The work uses signals such as voltage, current, temperature, and charge/discharge cycle data to build and compare predictive models under realistic operating conditions.',
    tags: ['Data Analytics & AI', 'Battery Analytics', 'Machine Learning']
  },
  {
    status: 'Active',
    year: '2026 - Present',
    title: 'AI/ML-Driven Multi-Modal Battery Analytics and Data Fusion',
    description:
      'Building a reproducible data analytics and AI/ML pipeline to estimate battery State of Health (SOH) and, when feasible, Remaining Useful Life (RUL) using public benchmarks. The project emphasizes leakage-free evaluation, dataset-shift analysis, and multi-modal data fusion to improve prediction stability and practical monitoring performance.',
    tags: ['Data Analytics & AI', 'Multi-Modal Analytics', 'Battery Monitoring']
  },
  {
    status: 'Active',
    year: '2025 - 2027',
    title: 'NSF REU Site: Undergraduate Research in Data Analytics',
    description:
      'Contributing as Co-PI to an externally funded undergraduate research program by supporting research training, student mentoring, ethics and communication seminars, and dissemination-oriented research activities.',
    tags: ['NSF REU', 'Student Research', 'Data Analytics']
  },
  {
    status: 'Active',
    year: '2025 - Present',
    title: 'Machine Learning for Real-Time IoT Network Anomaly Detection',
    description:
      'Developing and evaluating data-driven models for real-time anomaly detection in MQTT-based and related IoT network environments, with emphasis on trustworthy edge intelligence and student-engaged research.',
    tags: ['Internet of Things', 'Cybersecurity', 'Data Analytics & AI']
  },
  {
    status: 'Active',
    year: '2024 - Present',
    title: 'Lightweight Security and Intelligent Detection for Resource-Constrained Systems',
    description:
      'Investigating lightweight security mechanisms, anomaly detection methods, and practical cybersecurity approaches for constrained and distributed computing environments.',
    tags: ['Cybersecurity', 'Internet of Things', 'Edge Intelligence']
  },

];

export const completedProjects = [
  {
    status: 'Completed',
    year: '2024',
    title: 'John Marshall Scholar Project: Online Learning, External Support, and Stress Management',
    description:
      'Investigated how online learning environment, external support, and stress management influence student performance and satisfaction at Marshall University. The project generated actionable findings related to student learning support and resulted in scholarly dissemination.'
  },
  {
    status: 'Completed',
    year: '2023',
    title: 'Summer Undergraduate Research Experience: Lattice-Based Cryptography for IoT',
    description:
      'Mentored an undergraduate student on lattice-based cryptography for Internet of Things applications, supporting advanced study in secure systems and resulting in peer-reviewed dissemination and a Best Paper Award.'
  },
  {
    status: 'Completed',
    year: '2022',
    title: 'Summer Research Project: Quantum Computing and Emerging Computing Concepts',
    description:
      'Developed accessible scholarly work on quantum computing and related emerging technologies, with emphasis on educational translation, broader impact, and externally visible publication outcomes.'
  },
  {
    status: 'Completed',
    year: '2024 - 2025',
    title: 'Civil-Military Innovation Institute (CMI2): Skills Enhancement Suite Evaluation',
    description:
      'Contributed as Co-PI to a large collaborative defense-related project focused on evaluation planning, field-based assessment, data analysis, and sponsor-aligned reporting for a training and technology prototype.'
  },
  {
    status: 'Completed',
    year: '2023 - 2024',
    title: 'Optical and Communication-System Modeling for Next-Generation Networks',
    description:
      'Investigated optical and communication-aware models involving performance evaluation, signal optimization, and scalable communication architectures for advanced networked systems.'
  },
  {
    status: 'Completed',
    year: '2022 - 2023',
    title: 'Post-Quantum, Blockchain, and Secure Distributed Systems Studies',
    description:
      'Explored secure distributed-system models in areas such as post-quantum security, blockchain-based architectures, and resilient communication frameworks through review, modeling, and scholarly dissemination.'
  }
];