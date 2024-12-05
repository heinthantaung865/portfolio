import { useState, useEffect } from "react";
import styles from "./ProjectsStyles.module.css";
import { useTheme } from "../../common/ThemeContext"; // Import ThemeContext

function Projects() {
  const { theme } = useTheme(); // Get the current theme
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(6); // Default for larger screens

  const projects = [
    {
      type: "big",
      name: "E-commerce",
      image: "/public/ecommerce.png",
      link: "https://github.com/heinthantaung865/E-commerce",
    },
    {
      type: "big",
      name: "Portfolio",
      image: "/public/portfolio.png",
      link: "https://github.com/heinthantaung865/E-commerce",
    },
    {
      type: "big",
      name: "Ludo Game",
      image: "/public/ludo.png",
      link: "https://github.com/heinthantaung865/ludo-project",
    },
    {
      type: "small",
      name: "Calculator Game",
      image: "/public/calculatorGame.png",
      link: "https://github.com/heinthantaung865/calculator-game",
    },

    {
      type: "medium",
      name: "Cloth Shopping Cart",
      image: "/public/clothShopping.png",
      link: "https://github.com/heinthantaung865/cloth-shopping-website",
    },
    {
      type: "medium",
      name: "Password Generator",
      image: "/public/password.png",
      link: "https://github.com/heinthantaung865/password-generator",
    },
    {
      type: "small",
      name: "Clothings",
      image: "/public/clothings.png",
      link: "https://github.com/heinthantaung865/clothing-website",
    },

    {
      type: "small",
      name: "Memory Game",
      image: "/public/memoryGame.png",
      link: "https://github.com/heinthantaung865/memory-game",
    },
    {
      type: "medium",
      name: "Currency Exchange",
      image: "/public/currencyExchange.png",
      link: "https://github.com/heinthantaung865/currency-exchange",
    },
    {
      type: "small",
      name: "Connect4",
      image: "/public/connect4.png",
      link: "https://github.com/heinthantaung865/connect4",
    },
    {
      type: "small",
      name: "String Method Playground",
      image: "/public/stringMethodPlayground.png",
      link: "https://github.com/heinthantaung865/string-method-playground",
    },
    {
      type: "medium",
      name: "Bookmark Manager",
      image: "/public/Bookmark.png",
      link: "https://github.com/heinthantaung865/Bookmark-tailwind",
    },
    {
      type: "small",
      name: "Calendar",
      image: "/public/calendar.png",
      link: "https://github.com/heinthantaung865/calendar",
    },

    {
      type: "small",
      name: "Product Card Animation",
      image: "/public/productCard.png",
      link: "https://github.com/heinthantaung865/product-card-animation",
    },
    {
      type: "small",
      name: "Mine Sweeper",
      image: "/public/mineSweeper.png",
      link: "https://github.com/heinthantaung865/mine-sweeper",
    },
    {
      type: "medium",
      name: "Expense Tracker",
      image: "/public/expenseTracker.png",
      link: "https://github.com/heinthantaung865/expense-tracker",
    },
    {
      type: "big",
      name: "Food Recipe App",
      image: "/public/recipe.png",
      link: "https://github.com/heinthantaung865/food_recipe_project",
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.type === filter);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  const handlePageChange = (newPage) => setCurrentPage(newPage);

  // Adjust the number of projects per page based on screen size
  useEffect(() => {
    const updateProjectsPerPage = () => {
      if (window.innerWidth < 800) {
        setProjectsPerPage(3); // Fewer projects for small screens
      } else {
        setProjectsPerPage(6); // More projects for larger screens
      }
      setCurrentPage(1); // Reset to page 1 when changing projectsPerPage
    };

    // Initial check
    updateProjectsPerPage();

    // Add event listener for screen resizing
    window.addEventListener("resize", updateProjectsPerPage);
    return () => window.removeEventListener("resize", updateProjectsPerPage);
  }, []);

  const isDarkMode = theme === "dark"; // Determine current theme

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.filterButtons} style={{ gap: "20px" }}>
        {["all", "big", "medium", "small"].map((category) => (
          <button
            key={category}
            onClick={() => {
              setFilter(category);
              setCurrentPage(1); // Reset to first page when changing filter
            }}
            className={styles.filterButton}
            style={{
              backgroundColor:
                filter === category
                  ? isDarkMode
                    ? "#007bff" // Active button background in dark mode
                    : "#007bff" // Active button background in light mode
                  : isDarkMode
                  ? "#444" // Default button background in dark mode
                  : "#fff", // Default button background in light mode
              color:
                filter === category
                  ? "#fff" // Active button text color in both modes
                  : isDarkMode
                  ? "#fff" // Default text color in dark mode
                  : "#333", // Default text color in light mode
              borderColor:
                filter === category
                  ? "#007bff" // Active border color in both modes
                  : isDarkMode
                  ? "#555" // Default border color in dark mode
                  : "#ccc",
              marginRight: 10, // Default border color in light mode
            }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className={styles.projectsContainer}>
        {currentProjects.map((project, index) => (
          <div key={index} className={styles.card}>
            <img
              src={project.image}
              alt={project.name}
              className={styles.cardImage}
            />
            <div className={styles.cardInfo}>
              <h3>{project.name}</h3>
              <p className={styles.description}>{project.type}</p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardLink}
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default Projects;
