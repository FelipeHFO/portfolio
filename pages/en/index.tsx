import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import LogoButton from "../../src/components/LogoButton/LogoButton";
import SkillsCard from "../../src/components/SkillsCard/SkillsCard";
import LanguageSelection from "../../src/components/LanguageSelection/LanguageSelection";
import SocialNetworksCard from "../../src/components/SocialNetworksCard/SocialNetworksCard";

const skills = [
  {
    id: 1,
    image: "/code-solid.svg",
    title: "Front-end",
    description:
      "The first contact with the Front-end was with that basic HTML, CSS and Javascript, but fundamental!",
    technologies: "HTML, CSS, Javascript, React, Next.JS, Tailwind",
    devTools: "Git, Codepen, VSCode, Terminal",
  },
  {
    id: 2,
    image: "/terminal-solid.svg",
    title: "Back-end",
    description:
      "The Back-end in my life developed along with my curiosity, looking for ways to understand and build my own applications.",
    technologies: "NodeJS, NestJS, MySQL",
    devTools: "Git, Insomnia, Workbench, VSCode, Terminal",
  },
];

const socialNetworks = [
  {
    id: 3,
    link: "https://github.com/FelipeHFO",
    image: "/github.png",
    alt: "Logo do Github",
  },
  {
    id: 4,
    link: "https://www.instagram.com/felipehfo/?hl=pt-br",
    image: "/instagram.png",
    alt: "Logo do Instagram",
  },
  {
    id: 5,
    link: "https://www.linkedin.com/in/felipehf-oliveira/",
    image: "/linkedin.png",
    alt: "Logo do Linkedin",
  },
  {
    id: 6,
    link: "mailto:felipe.henrique.f.o@gmail.com",
    image: "/gmail.png",
    alt: "Logo do Gmail",
  },
];

const Home: NextPage = (language) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfólio - Felipe Henrique</title>
        <meta name="description" content="Website for my portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <LogoButton />
        <LanguageSelection language="EN" />
      </header>

      <main className={styles.main}>
        <h1 className={styles.person_title}>Full-stack Developer</h1>
        <h4 className={styles.person_subtitle}>
          I like challenges and always looking to learn something new. Learning
          never stops!
        </h4>
        <div>
          <Image
            width="350"
            height="350"
            src="/foto-perfil.jpg"
            alt="Profile photo"
            className={styles.person_photo}
          />
        </div>
        <div className={styles.background}>
          <Image
            width="500"
            height="200"
            src="/banner-featured.png"
            alt="Drawing of an office table and work tools as a background image"
          />
        </div>
        <section className={styles.intro_section}>
          <h1>Hi, my name is Felipe. Nice to meet you!</h1>
          <p>
            Since I was little I&apos;ve been interested in computers and games,
            so I decided to look for something that would bring me closer to
            this area. In 2015, I started the Computer Science course that I
            haven&apos;t finished yet, but it served in many important things
            and one of them was opening my mind about what I could do. It was in
            a college course that I fell in love with Javascript and everything
            that surrounded this programming language. I have been studying and
            working with this language for two years and intend to specialize in
            it.
          </p>
        </section>
        <section className={styles.skills_section}>
          {skills.map((skill) => (
            <SkillsCard
              key={skill.id}
              image={skill.image}
              title={skill.title}
              description={skill.description}
              technologies={skill.technologies}
              devTools={skill.devTools}
              language="EN"
            />
          ))}
        </section>

        <section className={styles.social_section}>
          <h1>Social Networks</h1>
          <div className={styles.social_networks_container}>
            {socialNetworks.map((socialNetwork) => (
              <SocialNetworksCard
                key={socialNetwork.id}
                link={socialNetwork.link}
                image={socialNetwork.image}
                alt={socialNetwork.alt}
              />
            ))}
          </div>
        </section>

        <section className={styles.contact_section}>
          <div className={styles.contact_container}>
            <h1>Want to start a project?</h1>
            <p>Any idea is welcome and no matter your level in programming!</p>
            <Link
              href="https://api.whatsapp.com/send?phone=5535984249391"
              passHref
            >
              <a href="/" target="_blank" className={styles.contact_button}>
                Let&apos;s talk!
              </a>
            </Link>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>
          © 2022 Felipe Henrique | version 1.0.2 | All rights reserved.
        </span>
      </footer>
    </div>
  );
};

export default Home;
