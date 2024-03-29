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
      "O primeiro contato com o Front-end, foi com aquele HTML, CSS e Javascript básico, porém fundamental!",
    technologies: "HTML, CSS, Javascript, React, Next.JS, Tailwind",
    devTools: "Git, Codepen, VSCode, Terminal",
  },
  {
    id: 2,
    image: "/terminal-solid.svg",
    title: "Back-end",
    description:
      "O Back-end na minha vida se desenvolveu junto com a minha curiosidade, buscando formas de entender e construir aplicações próprias.",
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
        <meta name="description" content="Site para meu portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <LogoButton />
        <LanguageSelection language="PT-BR" />
      </header>

      <main className={styles.main}>
        <h1 className={styles.person_title}>Desenvolvedor Full-stack</h1>
        <h4 className={styles.person_subtitle}>
          Gosto de deasfios e sempre busco aprender algo novo. O aprendizado
          nunca para!
        </h4>
        <div>
          <Image
            width="350"
            height="350"
            src="/foto-perfil.jpg"
            alt="Foto de Perfil"
            className={styles.person_photo}
          />
        </div>
        <div className={styles.background}>
          <Image
            width="500"
            height="200"
            src="/banner-featured.png"
            alt="Desenho de uma mesa de escritório e ferramentas de trabalho como imagem de fundo"
          />
        </div>
        <section className={styles.intro_section}>
          <h1>Oi, meu nome é Felipe. Prazer em te conhecer!</h1>
          <p>
            Desde pequeno eu sou interessado em computador e jogos, então decidi
            buscar algo que me aproximasse dessa área. Em 2015, iniciei o curso
            de Ciência da Computação que ainda não conclui, mas que serviu em
            muitas coisas importantes e uma delas foi abrir minha cabeça em
            relação ao que poderia fazer. Foi em uma matéria da faculdade que me
            apaixonei por Javascript e tudo que rodeava essa linguagem de
            programação. Há dois anos estudo e trabalho com essa linguagem e
            pretendo me especializar nela.
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
              language="PT-BR"
            />
          ))}
        </section>

        <section className={styles.social_section}>
          <h1>Redes Sociais</h1>
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
            <h1>Quer iniciar um projeto?</h1>
            <p>
              Qualquer ideia é bem vinda e não importa seu nível na programação!
            </p>
            <Link
              href="https://api.whatsapp.com/send?phone=5535984249391"
              passHref
            >
              <a href="/" target="_blank" className={styles.contact_button}>
                Bora conversar!
              </a>
            </Link>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>
          © 2022 Felipe Henrique | versão 1.0.2 | Todos os direitos reservados.
        </span>
      </footer>
    </div>
  );
};

export default Home;
