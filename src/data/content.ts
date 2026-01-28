
export const brand = {
  mark: 'FAHAD',
  sub: 'ISRAR'
} as const;

// Typing roles shown in the hero section ("I'M" is static; this text is typed).
export const roles = ['AI ENGINEER', 'SOFTWARE ENGINEER', 'FULL STACK DEVELOPER'] as const;

// Small subtitle under the hero headline.
export const heroSubtitle = 'AI Engineer';

export const about = {
  title: 'Fahad Israr: Building practical AI with an Engineer’s discipline.',
  paragraphs: [
    'Experienced in Python, TensorFlow, and NLP techniques, with a focus on creating efficient, data-driven solutions to solve real-world challenges in automation and AI development.',
    // 'Recent work includes computer vision pipelines (3D plane detection with RANSAC, HDR imaging, face recognition/tracking, and clustering) and classical AI problem solving (search, SAT, and PDDL planning) in course projects.'
    'I enjoy building practical AI systems that bridge research ideas and real world applications, especially in computer vision and NLP.Over the past year, I’ve worked on end-to-end pipelines ranging from face recognition and tracking (MTCNN, FaceNet, SVM) to unsupervised clustering, as well as geometry-based perception using RANSAC plane fitting with ToF data. I’m comfortable taking a project from problem definition to a working prototype, preparing data, choosing the right model or algorithm, evaluating results, and iterating until it’s reliable.What I value most is clarity and impact, clean implementations, measurable improvements, and solutions that are easy to maintain. Experienced in Python, TensorFlow, and NLP techniques, with a focus on creating efficient solutions to solve real world challenges in automation and AI development.'
  ]
} as const;



export type SkillItem =
  | { kind: "devicon"; className: string; label: string }
  | { kind: "img"; src: string; label: string };

export type SkillGroup = {
  title: string;
  items: SkillItem[];
};

export const skillsGroups: SkillGroup[] = [
  {
    title: "LANGUAGES",
    items: [
      { kind: "devicon", className: "devicon-python-plain colored", label: "Python" },
      { kind: "devicon", className: "devicon-java-plain colored", label: "Java" },
      { kind: "devicon", className: "devicon-javascript-plain colored", label: "JavaScript" },
      { kind: "devicon", className: "devicon-typescript-plain colored", label: "TypeScript" },
      { kind: "devicon", className: "devicon-c-plain colored", label: "C" },
      { kind: "devicon", className: "devicon-cplusplus-plain colored", label: "C++" },
    ],
  },
  {
    title: "AI/ML & DATA",
    items: [
      { kind: "devicon", className: "devicon-tensorflow-original colored", label: "TensorFlow" },
      { kind: "devicon", className: "devicon-pytorch-original colored", label: "PyTorch" },
      { kind: "devicon", className: "devicon-pandas-original colored", label: "Pandas" },
      { kind: "devicon", className: "devicon-numpy-original colored", label: "NumPy" },
      { kind: "devicon", className: "devicon-matplotlib-plain colored", label: "Matplotlib" },

      // Plotly: if Devicon in your build supports it, keep devicon; otherwise use the CDN image line below.
      { kind: "devicon", className: "devicon-plotly-plain colored", label: "Plotly" },
      // { kind: "img", src: "https://cdn.simpleicons.org/plotly?viewbox=auto&size=26", label: "Plotly" },
    ],
  },
  {
    title: "WEB & DEVOPS",
    items: [
      { kind: "devicon", className: "devicon-react-original colored", label: "React" },
      { kind: "devicon", className: "devicon-angularjs-plain colored", label: "Angular" },
      { kind: "devicon", className: "devicon-html5-plain colored", label: "HTML" },
      { kind: "devicon", className: "devicon-css3-plain colored", label: "CSS" },
      { kind: "devicon", className: "devicon-jquery-plain colored", label: "jQuery" },
      { kind: "devicon", className: "devicon-bootstrap-plain colored", label: "Bootstrap" },
      { kind: "devicon", className: "devicon-materialui-plain colored", label: "Material UI" },

      { kind: "devicon", className: "devicon-nodejs-plain colored", label: "Node.js" },
      { kind: "devicon", className: "devicon-express-original colored", label: "Express.js" },
      { kind: "devicon", className: "devicon-socketio-original colored", label: "Socket.io" },
      { kind: "devicon", className: "devicon-flask-original colored", label: "Flask" },

      { kind: "img", src: "https://cdn.simpleicons.org/n8n?viewbox=auto&size=26", label: "n8n" },

      { kind: "devicon", className: "devicon-git-plain colored", label: "Git" },
      { kind: "devicon", className: "devicon-github-original colored", label: "GitHub" },

      { kind: "devicon", className: "devicon-pycharm-plain colored", label: "PyCharm" },
      { kind: "devicon", className: "devicon-jupyter-plain colored", label: "Jupyter" },
      { kind: "devicon", className: "devicon-vscode-plain colored", label: "VS Code" },
    ],
  },
];


export type TimelineItem = {
  logoLetter: string;
  role: string;
  org: string;
  orgHref: string;
  dates: string;
  location: string;
};

export const experience: TimelineItem[] = [
  // {
  //   logoLetter: 'C',
  //   role: 'Computer Vision Project',
  //   org: 'FAU (Course Project)',
  //   orgHref: 'https://www.fau.eu',
  //   dates: 'Winter 2025/2026',
  //   location: 'Erlangen, Germany'
  // },
  // {
  //   logoLetter: 'A',
  //   role: 'Artificial Intelligence-1 System Project',
  //   org: 'FAU (Course Project)',
  //   orgHref: 'https://www.fau.eu',
  //   dates: 'Summer 2025',
  //   location: 'Erlangen, Germany'
  // },
  // {
  //   logoLetter: 'D',
  //   role: 'Cats vs. Dogs Classification (Transfer Learning)',
  //   org: 'Academic Project',
  //   orgHref: 'https://www.fau.eu',
  //   dates: '2025',
  //   location: 'Munich, Germany'
  // },
    {
    logoLetter: 'D',
    role: 'Junior Software Engineer',
    org: 'Tecklogics pvt ltd',
    orgHref: 'https://tecklogics.com/',
    dates: '2023-2024',
    location: 'Islamabad, Pakistan'
  },
   {
    logoLetter: 'D',
    role: 'Intern Software Engineer',
    org: 'Ezilline pvt ltd ',
    orgHref: 'https://www.eziline.com/',
    dates: '2020-2021',
    location: 'Rawalpindi, Pakistan'
  },
  {
    logoLetter: 'D',
    role: 'Teacher Assistant',
    org: 'Riphah International University',
    orgHref: 'https://www.fau.eu',
    dates: '2021-2023',
    location: 'Islamabad, Pakistan'
  }
  
];

export const education: TimelineItem[] = [
  {
    logoLetter: 'F',
    role: 'MSc in Artificial Intelligence',
    org: 'Friedrich-Alexander-Universität Erlangen-Nürnberg',
    orgHref: 'https://www.fau.eu',
    dates: 'April 2024 – Ongoing',
    location: 'Erlangen, Germany'
  },
  {
    logoLetter: 'R',
    role: 'B.S. in Computer Science',
    org: 'Riphah International University',
    orgHref: 'https://riphah.edu.pk',
    dates: 'July 2019 – Oct 2023',
    location: 'Islamabad, Pakistan'
  }
];

export type ProjectCategory = 'all' | 'Deep Learning' | 'Data Analysis' | 'AI';

export type Project = {
  cat: ProjectCategory;
  img: string;
  title: string;
  href?: string;
  desc: string;
};

export const portfolioFilters: ProjectCategory[] = ['all', 'Deep Learning', 'Data Analysis', 'AI'];

export const projects: Project[] = [
  {
    cat: 'AI',
    img: '/assets/projects/p1.png',
    title: 'Computer Vision Project (ToF, HDR, Face Recognition)',
    href: 'https://www.fau.eu',
    desc:
      'Developed ToF-based box detection with RANSAC plane fitting; implemented demosaicing and HDR imaging (gamma correction and white balance); built face recognition with MTCNN + FaceNet + SVM, plus tracking and clustering with k-means.'
  },
  {
    cat: 'AI',
    img: '/assets/projects/p2.png',
    title: 'Artificial Intelligence-1 System Project (Search, SAT, PDDL)',
    href: 'https://www.fau.eu',
    desc:
      'Implemented AI algorithms for six real-world problems: Wumpus cleaning agent, train connection finder (Dijkstra), adversarial game AI, nonogram solving via SAT encoding, RDF/SPARQL processing, and Wumpus escape via PDDL planning.'
  },
  {
    cat: 'Deep Learning',
    img: '/assets/projects/p3.png',
    title: 'Cats vs. Dogs Classification (Xception Transfer Learning)',
    desc:
      'Improved image classification using Xception transfer learning with advanced augmentation and preprocessing; used early stopping and adaptive learning-rate reduction strategies; delivered a saved model for inference on unseen images.'
  },

  // Kept from the template until you provide additional portfolio entries:
  // {
  //   cat: 'all',
  //   img: '/assets/projects/p4.png',
  //   title: 'OsmXchange',
  //   href: 'https://www.mad.tf.fau.de',
  //   desc:
  //     'A marketplace connecting utilities with trustworthy service providers. Includes a strategic alliance with Omicron Electronics to reinforce reliability and trust.'
  // },
  // {
  //   cat: 'AI',
  //   img: '/assets/projects/p5.png',
  //   title: 'Cucumber Test Cases Generation with OpenAI',
  //   href: 'https://github.com',
  //   desc:
  //     'Automated Gherkin scenario generation: convert test cases into Gherkin scenarios for BDD using OpenAI language models; output to terminal or file.'
  // },
  // {
  //   cat: 'Data Analysis',
  //   img: '/assets/projects/p6.png',
  //   title: 'Munster Auto Market Analysis',
  //   href: 'https://github.com',
  //   desc:
  //     'Extract and analyze vehicle data from SQLite into Pandas DataFrames, compare distributions over time, and assess correlations between inventory and average prices.'
  // }
];

export const contact = {
  location: 'Nurnberg, Germany',
  email: 'rajafahadisrar9@gmail.com',
  phone: '+49 157 73856535',
  linkedin: {
    label: 'raja-fahad-israr-ahmed-9a38b3214',
    url: 'https://www.linkedin.com/in/raja-fahad-israr-ahmed-9a38b3214/'
  },
  github: {
    label: 'fahadCoder',
    url: 'https://github.com/fahadCoder'
  },
  homepage: {
    label: 'portfolio-fahad-israr.netlify.app',
    url: 'https://portfolio-fahad-israr.netlify.app/'
  }
} as const;
