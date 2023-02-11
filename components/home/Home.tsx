import Image from "next/image";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <div  className="container">
      <section className={styles.topSection}>
        <div className={styles.item}>
          <h2>ENOSIS - Your trusted Software Development Partner</h2>
          <p>
            A top tier software development team assisting owners and decision
            makers to implement digital initiatives to achieve lasting financial
            success
          </p>
        </div>
        <div className={styles.item}>
          <Image
            src="/img/home-banner.png"
            alt="home"
            width={200}
            height={200}
            quality={100}
          />
        </div>
      </section>
      <section style={{ textAlign: "center", margin: "0px 200px" }}>
        <h2>OUR SERVICES</h2>
        <p>
          We build software development teams that grow with our clients, from
          the early stages to whatever they aspire to be. Our expertise includes
          front-end, backend, database, and server solutions for mobile, web,
          and desktop applications. Our purpose is to provide our clients with
          expert guidance and to build software vital to their organizations.
        </p>
      </section>
      <section className={styles.topSection}>
        <div className={styles.item}>
          <Image
            src="/img/home-dev.png"
            alt="home"
            width={200}
            height={200}
            quality={100}
          />
        </div>
        <div className={styles.item}>
          <h2>ENOSIS - Your trusted Software Development Partner</h2>
          <p>
            A top tier software development team assisting owners and decision
            makers to implement digital initiatives to achieve lasting financial
            success
          </p>
        </div>
      </section>
    </ div>
  );
}
