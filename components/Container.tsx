import React, { ReactNode } from "react";
import styles from "../styles/Container.module.css";

interface ContainerProps {
  children: ReactNode | Array<ReactNode>;
}

const Container = ({ children }: ContainerProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
