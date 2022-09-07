import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import CounterBlock from "../components/counter-block";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Counter App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to 
          <br/>
          <span style={{color: '#0072F5'}}>
          "Counter with Next.js!"
          </span>
          
        </h1>
        <div style={{display:'flex',justifyContent:'center'}}>
          <CounterBlock 
            firstButton={1} 
            secondButton={2} 
          />
          <CounterBlock 
            firstButton={5} 
            secondButton={10} 
          />
          <CounterBlock 
            firstButton={100} 
            secondButton={1000} 
          />
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://ban-works.github.io"
          target="_blank"
        >
          An exercise by Ban
        </a>
      </footer>
    </div>
  );
};

export default Home;
