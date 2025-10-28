export const siteConfig = {
  name: "Filip Krężel",
  title: "DevOps Engineer",
  description: "Portfolio website",
  accentColor: "#1d4ed8",
  social: {
    email: "filip.0krezel@gmail.com",
    linkedin: "https://www.linkedin.com/in/filip-kr%C4%99%C5%BCel-4727301ab/",
    github: "https://github.com/Flixirr",
  },
  aboutMe:
    "I am a passionate game development hobbyist with 3.5 years of professional experience as a Data Engineer, DevOps specialist and Penetration Tester. In my professional work, I contributed to data analysis and supported security assessments for AWS-based solutions. I am highly interested in automation and continuously look for ways to optimize workflows. Outside of work, I enjoy developing games and participating in game jams.",
  skills: ["Python", "C++", "C#", "Jenkins", "Github Actions", "Kubernetes", "AWS", "Docker", "Terraform", "Linux", "Git", "Jenkins"],
  projects: [
    {
      name: "[WiP] Job offer scraper with Discord notifications",
      description:
        "A Python-based web scraper that monitors job listings on skillshot.pl and sends notifications end of each day to a Discord channel with new job offers.",
      link: "https://github.com/Flixirr/skillshot-bot",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "Dedicated server for MOBA game",
      description:
        "Created dedicated server and netcode for a MOBA game with autoscaling configuration on Azure PlayFab",
      link: "https://github.com/Flixirr/MOBA2V2",
      skills: ["Azure PlayFab", "C#", "Unity", "Server Management"],
    },
    {
      name: "Godot CD pipeline",
      description:
        "A pipeline to automate builds for games made in Godot to speed up development process during game jams.",
      link: "https://gitlab.com/Flixirr/godot-infra-automation",
      skills: ["GitLab CI/CD", "Godot"],
    },
  ],
  experience: [
    {
      company: "Capgemini",
      title: "Data Engineer / DevOps Engineer",
      dateRange: "March 2022 - Sep 2024",
      bullets: [

        "Implemented parts of the CI/CD pipeline for deployments",
        "Integrated SAST tool with existing pipeline",
        "Used Terraform to provision and manage AWS infrastructure",
        "Designed parts of the AWS architecture",
        "Designed and implemented tests for existing solutions",
        "Responsible for data processing in financial advisory tool"
      ],
    },
    {
      company: "Opera",
      title: "Penetration Tester Intern",
      dateRange: "Jun 2020 - Dec 2021",
      bullets: [
        "Performed tests for existing applications.",
        "Documented issues that were found during the tests.",
        "Communicated with developers on how to fix the issues found",
        "Manually tested various APIs for vulnerabilities"
      ],
    }
  ],
  education: [
    {
      school: "Politechnika Wroclawska",
      degree: "Bachelor of Engineering in Applied Computer Science",
      dateRange: "2019 - 2023",
      achievements: [
        "Thesis title: Cloud solution in MOBA game dedicated server management",
      ],
    },
    {
      school: "Universytet Dolnośląski DSW",
      degree: "Master of Science in Game Design",
      dateRange: "2024 - Present",
      achievements: [
        
      ],
    },
  ],
};
