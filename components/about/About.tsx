import styles from "./about.module.scss";

export default function About() {
  return (
    <>
      <section className={styles.backgroundImage}>
        <h2>We are team</h2>
        <p>
          A top tier software development team assisting owners and decision
          makers to implement digital initiatives to achieve lasting financial
          success
        </p>
      </section>
      <section className={styles.weSection}>
        <h1>WHO WE ARE</h1>
        <p>
          Enosis is a premier provider of software development and testing
          services. Having talented software engineers on board, we craft
          compelling web, desktop, and mobile applications for our clients.
          Since our inception, we have partnered with numerous companies and
          delivered operational gains to startup, emerging, and established
          organizations in the United States and Canada.
        </p>
      </section>
    </>
  );
}
