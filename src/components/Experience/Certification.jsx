import React from "react";
import styles from "./Certification.module.css";

function Certification({ certification }) {
	const experiencesElements = certification.experiences.map(
		(experience, index) => (
			<li className={styles.certification_experience_item} key={index}>
				{experience}
			</li>
		)
	);

	return (
		<div className={styles.certification}>
			<img
				className={styles.certification_image}
				src={certification.imageSrc}
				alt={certification.imageAlt}
				loading="lazy"
				width="30"
				height="30"
			/>
			<div>
				<h4 className={styles.certification_title}>{certification.title}</h4>
				<a
					className={styles.certification_url}
					href={certification.url}
					target="_blank"
				>
					{certification.url}
				</a>
				<ul className={styles.certification_experience_list}>
					{experiencesElements}
				</ul>
			</div>
		</div>
	);
}

export default Certification;
