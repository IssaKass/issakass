import React from "react";
import styles from "./Skill.module.css";

function Skill({ skill }) {
	return (
		<div className={styles.skill}>
			<p className={styles.skill_title}>{skill.title}</p>
			<div className={styles.skill_image_wrapper}>
				<img
					className={styles.skill_image}
					src={skill.imageSrc}
					alt={skill.imageAlt}
					loading="lazy"
				/>
			</div>
		</div>
	);
}

export default Skill;
