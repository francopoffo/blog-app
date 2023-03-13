import React from "react";
import classes from "./hero.module.css";
import Image from "next/legacy/image";

const Hero: React.FC = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/franco.png"
          alt="Rosto do Franco Poffo"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Franco Poffo</h1>
      <p>A blog about my journey in web development.</p>
    </section>
  );
};

export default Hero;
