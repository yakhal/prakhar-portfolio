import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Prakhar",
  lastName: "Rastogi",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/yakhal",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/prakhar-rastogi97",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/prakharrrastogi",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:rastogi.p39@gmail.com",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://instagram.com/prakharrrastogi",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Engineer and Architect</>,
  subline: (
    <>
      I’m Prakhar, a Senior Software Engineer at{" "}
      <InlineCode>VSERV AudiencePro</InlineCode>. <br />I spend my days crafting
      robust software and refining user experiences—because life’s too short for
      bad UX. By night, I dive into cool projects and explore the latest in
      tech, turning caffeine into code and challenges into innovations.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Prakhar Rastogi is a Senior Software Engineer passionate about crafting
        scalable solutions and innovative digital experiences. With a strong
        foundation in programming, he excels in blending technology and
        creativity to solve complex problems and build impactful software
        products.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "VSERV AudiencePro",
        timeframe: "2023 - Present",
        role: "Senior Software Engineer",
        achievements: [
          <>
            <strong>Pioneered End-to-End UI Development</strong>: Spearheaded
            the full lifecycle creation of critical modules—including Campaign
            Manager, Insights, Analytics, Marketer Manager, and both
            Portals—resulting in scalable, high-performance React applications
            that set a new benchmark for the AudiencePro product.
          </>,
          <>
            <strong>Enhanced Security & User Experience</strong>: Achieved
            significant improvements in platform security and usability by
            integrating Keycloak with custom theming and Hotjar analytics,
            elevating the overall user engagement and trust.
          </>,
          <>
            <strong>Delivered Complex, Market-Driven Features</strong>:
            Successfully implemented advanced functionalities such as
            multi-country support, audience deactivation, Snapchat activation,
            and dynamic audience recommendations, expanding the product's
            capabilities and market reach.
          </>,
          <>
            <strong>Optimized Performance & Efficiency</strong>: Improved user
            experience by optimizing page load times, caching, and adopting the
            Vite bundler for faster build times—leading to notably quicker UI
            load speeds and a more responsive application.
          </>,
          <>
            <strong>Elevated Code Quality & Collaboration</strong>:
            Significantly reduced code volume and enhanced maintainability by
            refactoring components, optimizing hooks and API calls, and adhering
            to ECMAScript standards, while proactively collaborating with UX,
            QC, Product, and Backend teams to ensure alignment with evolving
            business objectives.
          </>,
        ],
        images: [],
      },
      {
        company: "Tata Consultancy Services",
        timeframe: "Aug 2020 - Aug 2023",
        role: "Software Engineer",
        achievements: [
          <>
            <strong>Global Impact</strong>: Contributed to a high-stakes
            e-commerce platform for a leading healthcare MNC, enabling the
            worldwide sale of life-critical products and enhancing patient care
            on a global scale.
          </>,
          <>
            <strong>Performance & Quality Leadership</strong>: Developed
            innovative application features and proactively maintained the
            codebase, significantly reducing defects and boosting overall
            performance and reliability.
          </>,
          <>
            <strong>Seamless Deployment Expertise</strong>: Streamlined the
            promotion of code from development to production, enabling smooth
            and reliable deployments that minimized downtime and maximized
            operational efficiency.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Mumbai (B.Sc. Computer Science)",
        description: (
          <>Passed with distinction, with an average CGPA of 8.9/10. </>
        ),
      },
      {
        name: "Nirmala Memorial Foundation College (12th)",
        description: (
          <>Passed with distinction, with an average score of 75%.</>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },

      {
        title: "React",
        description: (
          <>
            Crafting efficient, scalable UI components using modern React
            paradigms.
          </>
        ),
        images: [
          {
            src: "/images/skills/react.jpg",
            alt: "Redux",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Tanstack Query",
        description: (
          <>
            Effortlessly manage data fetching, caching, and synchronization to
            build robust, reactive applications with seamless real-time updates.
          </>
        ),
        images: [
          {
            src: "/images/skills/tanstack.jpg",
            alt: "Redux",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Vite",
        description: (
          <>
            Boosting development speed with lightning-fast build times and
            optimized workflows.
          </>
        ),
        images: [
          {
            src: "/images/skills/vite.png",
            alt: "Redux",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Jest & React Testing Library",
        description: (
          <>
            Ensuring robust functionality through comprehensive unit and
            integration testing.
          </>
        ),
        images: [
          {
            src: "/images/skills/rtl.jpg",
            alt: "Redux",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Keycloak",
        description: (
          <>
            Implementing secure authentication with customizable theming for
            enhanced UX.
          </>
        ),
        images: [
          {
            src: "/images/skills/keycloak.png",
            alt: "Redux",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Hotjar",
        description: (
          <>
            Gaining actionable insights to optimize user experience through
            behavior analytics.
          </>
        ),
        images: [
          {
            src: "/images/skills/hotjar.jpg",
            alt: "Redux",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
