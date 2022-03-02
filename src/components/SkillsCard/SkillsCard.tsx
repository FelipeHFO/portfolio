import Image from 'next/image';
import React from 'react';
import styles from './SkillsCard.module.css';

type SkillsCardProps = {
	image: string,
	title: string,
	description: string,
	technologies: string,
	devTools: string,
}

const SkillsCard = (
	{
		image,
		title,
		description,
		technologies,
		devTools
	}: SkillsCardProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.image_container}>
				<Image
					width="100"
					height="100"
					src={image}
					alt="Ícone de Card"
					className={styles.image}
				/>
			</div>
			<div className={styles.title_container}>
				<h1 className={styles.title}>{title}</h1>
				<h4 className={styles.description}>{description}</h4>
			</div>

			<div className={styles.tech_container}>
				<h1 className={styles.title}>Tecnologias</h1>
				{technologies.split(',').map((item, index) =>
					<p key={technologies.length + index} className={styles.description}>{item}</p>)
				}
			</div>

			<div className={styles.dev_container}>
				<h1 className={styles.title}>Ferramentas de Desenvolvimento</h1>
				{devTools.split(',').map((item, index) =>
					<p key={devTools.length + index} className={styles.description}>{item}</p>)
				}
			</div>
		</div>
	)
}

export default SkillsCard;