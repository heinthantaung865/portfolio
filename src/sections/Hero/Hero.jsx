import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/Design uten navn.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Hein Thant Aung</h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://github.com/heinthantaung865" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
        </span>
        <p className={styles.description}>
          Dedicated to creating user-friendly and efficient web applications
          that drive business success.
        </p>
        <a
          href="https://www.canva.com/design/DAGYHpWcKr8/HP1NzpGbPxc7njA5vWv18A/edit?utm_content=DAGYHpWcKr8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          target="_blank"
        >
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
