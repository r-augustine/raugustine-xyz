import React, { ReactNode } from "react";
import styles from "../styles/Section.module.css";

interface SectionProps {
  children: ReactNode | Array<ReactNode>;
  id?: string;
}

const Section = ({ children, id }: SectionProps) => {
  return (
    <section className={styles.section} id={id}>
      {children}
    </section>
  );
};

export default Section;
