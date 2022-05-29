import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import logo from '../public/somb1.png';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<div className={styles.app}>
			<Head>
				<title>SeniorTom</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/somb1.png" />
			</Head>

			<header className={styles.appHeader}>
				<div className={styles.appLogo}>
					<Image src={logo} alt="logo" height={372} width={806} />
				</div>
				<p>Welcome to seniortom.com</p>
			</header>
		</div>
	);
};

export default Home;
