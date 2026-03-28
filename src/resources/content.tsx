import { About, Blog, Contact, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Yogesh",
  lastName: "R",
  name: `Yogesh R`,
  role: "DevOps & Full-Stack Automation Engineer",
  avatar: "/images/projects/avatar.jpg",
  email: "yogeshpmk1@gmail.com",
  location: "Coimbatore / TN",
  timeZone: "Asia/Kolkata",
  languages: ["English", "Tamil"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Let's Connect</>,
  description: <>Reach out for collaborations, cloud-native architecture audits, or just to chat about the latest in DevOps automation.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/yogeshramu",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/yogeshramu",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `Yogesh R | DevOps Engineer & Automation Specialist`,
  description: `DevOps Engineer specializing in ECS Fargate, GitLab CI/CD, and Full-Stack automation leveraging n8n, Python, and modern JS frameworks.`,
  headline: <>Architecting Scalable Cloud Systems & Intelligent Automation</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <Text variant="label-strong-m">Featured Pipeline</Text>
        <Line background="brand-alpha-strong" vert height="20" />
        <Text variant="body-default-xs" onBackground="brand-medium">
          AWS ECS Fargate Infrastructure
        </Text>
      </Row>
    ),
    href: "/work/aws-ecs-production-deployment",
  },
  subline: (
    <>
      I build <Text as="span" size="xl" weight="strong">robust CI/CD pipelines</Text>, orchestrated <Text as="span" size="xl" weight="strong">Docker environments</Text>, and AI-powered <Text as="span" size="xl" weight="strong">automation platforms</Text> that drive operational excellence at scale.
    </>
  ),
  services: {
    title: "How I help you succeed",
    description: "I partner with teams to transform their development lifecycle with production-grade automation.",
    items: [
      {
        title: "Infrastructure Audit & Strategy",
        description: "Analyzing your current cloud footprint to identify cost-saving and security optimization opportunities.",
        icon: "globe",
      },
      {
        title: "Automated Pipeline Orchestration",
        description: "Implementing advanced CI/CD that automates building, testing, and security scanning of complex applications.",
        icon: "rocket",
      },
      {
        title: "Resilient Cloud Deployment",
        description: "Deploying highly available AWS ECS architectures with zero-downtime updates and secure VPC networking.",
        icon: "grid",
      },
      {
        title: "Observability & Performance",
        description: "Setting up deep monitoring and proactive alerting to ensure your production services remain stable $24/7$.",
        icon: "eye",
      },
    ],
  },
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Beyond core infrastructure, I build intelligent end-to-end solutions — from AI-driven agricultural decision platforms (AgriPulse) to autonomous lead generation systems. I bridge the gap between sophisticated software development (Node.js, React, Next.js) and the rigorous stability of production operations (Docker, PM2, Nginx, PostgreSQL).
      </>
    ),
  },
  work: {
    display: true,
    title: "Experience",
    experiences: [
      {
        company: "Synvolve Intellis Pvt Ltd",
        timeframe: "03/2025 – Present",
        role: "DevOps Engineer",
        achievements: [
          <>
            Designed and implemented CI/CD pipelines using GitHub Actions, reducing deployment cycle times by 40% through automated testing and ECR integration.
          </>,
          <>
            Architected scalable containerized services on AWS ECS (Fargate) using private subnets, security group isolation, and Application Load Balancer (ALB) orchestration.
          </>,
          <>
            Standardized cloud monitoring via AWS CloudWatch and managed complex VPC networking across multiple availability zones for high redundancy.
          </>,
        ],
        images: [],
      },
      {
        company: "Active Theory",
        timeframe: "06/2024 – 11/2024",
        role: "Web Developer Intern",
        achievements: [
          <>
            Engineered high-performance React-based applications and Shopify stores, focusing on responsive UI designs that increased user retention.
          </>,
          <>
            Spearheaded UI/UX design transitions by creating intuitive digital experiences and branding elements that drove better conversion rates.
          </>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Nehru Institute of Engineering and Technology",
        description: <>B.Tech Computer Science and Business Systems (2021 – 2025) — CGPA: 8.00</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "DevOps & Cloud Orchestration",
        description: (
          <>AWS (EC2, ECS, ECR, VPC, S3, RDS, IAM), Docker, Kubernetes, Nginx, and PM2 cluster management.</>
        ),
        tags: [
          { name: "AWS ECS (Fargate)", icon: "aws" },
          { name: "Docker & Compose", icon: "docker" },
          { name: "GitLab/GitHub CI/CD", icon: "github" },
          { name: "PM2 Management", icon: "rocket" },
          { name: "Nginx Proxy", icon: "nginx" },
          { name: "Networking (VPC/ALB)", icon: "globe" },
        ],
        images: [],
      },
      {
        title: "Full-Stack & Automation",
        description: (
          <>Next.js, Node.js, Python, n8n Automation, Supabase, and AI/ML model integration (Llama 3).</>
        ),
        tags: [
          { name: "Node.js", icon: "nodejs" },
          { name: "Python", icon: "python" },
          { name: "n8n Workflows", icon: "rocket" },
          { name: "Supabase & SQL", icon: "supabase" },
          { name: "Next.js / React", icon: "nextjs" },
          { name: "NextAuth & Security", icon: "eye" },
          { name: "LLM Orchestration", icon: "book" },
        ],
        images: [],
      },
      {
        title: "Monitoring & Observability",
        description: (
          <>Ensuring production reliability through metrics, logs, and proactive alerting.</>
        ),
        tags: [
          { name: "AWS CloudWatch", icon: "aws" },
          { name: "Grafana", icon: "grafana" },
          { name: "Health Check Probes", icon: "rocket" },
          { name: "Log Management", icon: "document" },
        ],
        images: [],
      },
    ],
  },
  certifications: {
    display: true,
    title: "Certifications",
    certifications: [
      {
        name: "Cloud Computing",
        institution: "Gateway Solutions",
        description: "03/2023 – 04/2023",
      },
      {
        name: "Full Stack Developer",
        institution: "Techvolt",
        description: "08/2024 – 10/2024",
      },
      {
        name: "Data Visualization",
        institution: "IBM",
        description: "05/2024 – 06/2024",
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "DevOps & Automation Notes",
  description: `Sharing insights and breakthroughs by ${person.name}`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Automated systems and cloud architectures by ${person.name}`,
};

const contact: Contact = {
  path: "/contact",
  label: "Contact",
  title: `Contact – ${person.name}`,
  description: `Get in touch with ${person.name} for collaborations or audits.`,
};



export { person, social, newsletter, home, about, blog, work, contact };
