const projects = [
  {
    title: "Researcher.ai",
    description:
      "AI-powered research assistant leveraging NLP techniques to analyze academic papers and generate insightful summaries.  Features include paper recommendation system, automatic citation generation, and research trend analysis.",
    technologies: [
      "devicon-python-plain",
      "devicon-pytorch-plain ",
      "devicon-flask-original",
      "devicon-react-original",
    ],
    githubLink: "https://github.com/fazleo/Blog-Application-Using-Flask",
    demoLink: null,
  },
  {
    title: "Dental Structure Scanner Using LiDAR Technology",
    description:
      "Led a team to develop an innovative dental structure scanner integrating LiDAR technology with Arduino microcontrollers to capture 3D models of dental anatomy. Identified performance issues and demonstrated the feasibility of using LiDAR technology for dental applications.",
    technologies: [
      "devicon-arduino-plain-wordmark",
      "devicon-python-plain ",
      "devicon-flask-original",
      "devicon-react-original",
    ],
    githubLink: "https://github.com/fazleo/Dental-Scanner-Using-Lidar-Sensor",
    demoLink: null,
  },
  {
    title: "Smart Walking Stick for the Visually Impaired",
    description:
      "Developed a pioneering project to create a smart walking stick for the visually impaired, integrating technologies like ESP8266, ultrasonic sensor, buzzer, and vibrator. Implemented real-time notifications and haptic feedback to enhance user awareness.",
    technologies: ["devicon-arduino-plain-wordmark", "devicon-python-plain "],
    githubLink: "https://github.com/fazleo/Smart_Stick_For_Visually_Blind",
    demoLink: null,
  },
  {
    title: "Blog Application using HTML, CSS, and Bootstrap",
    description:
      "Developed a responsive blog application with dynamic content and user authentication. Implemented the front-end using HTML, CSS, and Bootstrap, and the back-end using Flask and SQLite.",
    technologies: [
      "devicon-python-plain",
      "devicon-flask-original",
      "devicon-sqlite-plain",
      "devicon-html5-plain",
      "devicon-css3-plain",
    ],
    githubLink: "https://github.com/fazleo/Blog-Application-Using-Flask",
    demoLink: "https://hellofazblog.onrender.com/",
  },
  {
    title: "Recipe Generator Using Gemini Pro Vision",
    description:
      "Developed a web application for generating recipes based on analyzing images of prepared dishes using the Gemini Pro Vision model from Google GenerativeAI. Configured and integrated the model to identify main ingredients and quantities from uploaded images.",
    technologies: ["devicon-python-plain", "devicon-streamlit-plain"],
    githubLink:
      "https://github.com/fazleo/Recipe-Generator-Using-Gemini-Pro-Vision",
    demoLink: null, // No demo link for this project
  },

  {
    title: "Blog Generation Application Using Langchain",
    description:
      "Developed a web application for automated blog generation using the Langchain library, Python, and Streamlit. Integrated Hugging Face Model Hub to access state-of-the-art language models.",
    technologies: ["devicon-python-plain", "devicon-streamlit-plain"],
    githubLink:
      "https://github.com/fazleo/Blog_Generation_Appl_Using_Langchain",
    demoLink: null, // No demo link for this project
  },
  // Add more projects here
];

function generateProjectCards(projects) {
  const projectsContainer = document.getElementById("projects-container");

  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "col-lg-8 mt-4";

    projectCard.innerHTML = `
        <div class="project-card shadow">
          <div class="project-content">
            <h3>${project.title}</h3>
            <div class="project-tech">
              ${project.technologies
                .map(
                  (tech) =>
                    `<i class="${tech} tech-icon" title="${tech
                      .split("-")
                      .join(" ")}"></i>`
                )
                .join("")}
            </div>
            <p class="text-muted">${project.description}</p>
            <div class="project-links">
              <a href="${project.githubLink}" class="btn btn-primary">
                <i class="fab fa-github"></i> Source Code
              </a>
              ${
                project.demoLink
                  ? `<a href="${project.demoLink}" class="btn btn-outline-secondary">
                      <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>`
                  : ""
              }
            </div>
          </div>
        </div>
      `;

    projectsContainer.appendChild(projectCard);
  });
}

// Render projects when the page loads
document.addEventListener("DOMContentLoaded", () => {
  generateProjectCards(projects);
});
