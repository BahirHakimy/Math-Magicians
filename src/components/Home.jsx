import React from 'react';
import styles from 'styles/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Welcome to math magicians!</h2>
      <p className={styles.description}>
        I&apos;ve built this app using ReactJS to provide you with a smooth and
        interactive experience. The app features a simple calculator to help you
        with your basic arithmetic needs. Whether you&apos;re calculating
        expenses or trying to solve a math problem, this calculator is here to
        help. In addition to the calculator, my app has a page dedicated to
        displaying a random quote. Each time you visit this page, you&apos;ll be
        greeted with a new quote to inspire and motivate you.
        <br />
        <br />
        <br />
        To make navigation as easy as possible, I&apos;ve implemented React
        Router for routing. This means you can seamlessly move between different
        pages of the app without any hiccups. Whether you&apos;re a student, a
        professional, or just someone looking for a quick and easy way to do
        basic calculations and get inspired, my web application is here to help.
        Thank you for checking it out and I hope you enjoy using it as much as I
        enjoyed building it!
      </p>
    </div>
  );
}

export default Home;
