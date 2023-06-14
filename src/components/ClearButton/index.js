import React from "react";
import styles from "./index.module.css";

export const ClearButton = (props) => (
  <div className={styles["clear-button"]} onClick={props.handleClear}>
    {props.children}
  </div>
);