/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Usama's Portfolio",
  description:
    "I build production-style web systems with a focus on backend reliability, data consistency, and real-time behaviour. My work spans APIs, background processing, and event-driven flows in data-heavy environments. I’ve recently been building a real-time transaction and fraud-detection system, and I have professional experience delivering end-to-end features using Node.js, Python, React, and SQL. I also work with LLM-based systems as backend components, integrating them in a controlled, production-oriented way.",
  og: {
    title: "Usama Imtiaz Portfolio",
    type: "website",
    url: "http://Usama-Imtiaz-07",
  },
};

//Home Page
const greeting = {
  title: "Usama Imtiaz",
  logo_name: "UsamaImtiaz",
  subTitle:
    "Multidisciplinary engineer skilled in full-stack development, data science, and machine learning. I build practical, intelligent systems that blend robust engineering with real-world impact.",
  resumeLink:
    "https://drive.google.com/file/d/1lE1Zars5jj666fEw5X8j9Uw46Tq1QU0A/view?usp=sharing",
  portfolio_repository: "https://github.com/Usama-Imtiaz-07/masterPortfolio",
  githubProfile: "https://github.com/Usama-Imtiaz-07",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Usama-Imtiaz-07",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/usama-imtiaz-a2a66721a/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@the_aialchemist",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:osamaimtiaz677@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website's front end using React",
        "⚡ Creating application backend in Node, Express, Django",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on multiple platforms",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/Usama-imtiaz/",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/chusamaimtiaz",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Hamdard University Islamabad",
      subtitle: "BS. in Computer Science",
      logo_path: "HUIC_logo.png",
      alt_name: "HUIC Islamabad",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://isb.hamdard.edu.pk/",
    },
    {
      title: "Middlesex University London",
      subtitle: "MSc. in Data Science",
      logo_path: "MDX_logo.png",
      alt_name: "Middlesex University London",
      duration: "2023 - 2024",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence and data science which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ During my time at university, I have also done a lot of projects regarding full stack development, data science and machine learning.",
      ],
      website_link: "https://www.mdx.ac.uk/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/77f248f2df18d01aa17ba453eb60b966",
      alt_name: "deeplearning.ai",
      color_code: "#ce181899",
    },
    {
      title: "Data Analytics",
      subtitle: "Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://coursera.org/share/4a1ccc92375ec805af42b06e87a00556",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Building AI Applications With Haystack",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://learn.deeplearning.ai/accomplishments/0edafd86-fc05-4d0d-926c-358ca7be209e?usp=sharing",
      alt_name: "deeplearning.ai",
      color_code: "#ce181899",
    },
    {
      title: "Finetuning Large Language Models",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://learn.deeplearning.ai/accomplishments/093e444b-1d2f-4d63-ae01-6e9913387fe9?usp=sharing",
      alt_name: "deeplearning.ai",
      color_code: "#ce181899",
    },
    {
      title: "Evaluating and Debugging Generative AI",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://learn.deeplearning.ai/accomplishments/fddbc67b-30ff-4e72-ac68-2c3b7b62bfdd?usp=sharing",
      alt_name: "deeplearning.ai",
      color_code: "#ce181899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "",
  description:
    "I have worked with evolving startups as Machine Learning Engineer, Data Scientist and Software Engineer.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Machine Learning Engineer",
          company: "LIVR Studios",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "livr_logo.jpeg",
          duration: "Jan 2024 - feb 2024",
          location: "London, UK",
          description:
            "Built a RAG (Retrieval-Augmented Generation) pipeline for a startup’s 3D virtual avatar, improving response speed, accuracy, and cost efficiency. Initially used GPT-3.5 Turbo but optimized for latency and cost by switching to LLaMA for generation and Text-Embedding-Ada for embeddings. Conducted query analysis and query rewriting to further reduce latency and improve response generation. Developed multiple MVP versions with three distinct avatars for law, healthcare, and handbooks. Integrated Qdrant, Docker, Microsoft Azure, LangChain, and RAGAS for evaluation, ensuring a scalable and efficient retrieval system.",
          color: "#000000",
        },
        {
          title: "Full Stack Developer",
          company: "Gravite",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "Jan 2023 - May 2023",
          location: "Islamabad, Pakistan",
          description:
            "Engineered a secure and scalable Election Voting System for a client, ensuring data integrity, authentication, and seamless user experience. Developed a React-based frontend for an intuitive interface and a Django backend with MySQL for efficient data management. Implemented RESTful APIs for secure communication, enabling real-time vote processing and validation. Optimized system performance to handle high concurrency and scalability, ensuring robust security measures to prevent unauthorized access and data manipulation.",
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    /*
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    */
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "usama.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Cloud and Data Science.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://medium.com/@osamaimtiaz677",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Redbridge, London, UK",
    locality: "London",
    country: "UK",
    region: "East London",
    postalCode: "IG4 ###",
    streetAddress: "#####",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/h3QkkutTAvxpAgqt6",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
