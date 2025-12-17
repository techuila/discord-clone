import styles from './spinner.module.css';

function Spinner() {
	return (
		<div className={styles.spinnerContainer}>
			<div className={styles.spinner}>
				<div className={styles.box1}></div>
				<div className={styles.box2}></div>
			</div>
		</div>
	);
}

export default Spinner;
