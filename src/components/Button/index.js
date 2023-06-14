import React from "react";
import styles from "./index.module.css";

export const Button = (props) => {
    const isOperator = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };
    
    return (
        <button
            className={`${styles["button-contain"]} ${isOperator(props.children) ? styles["operator"] : ""}`.trimEnd()}
            onClick={() => props.handleClick(props.children)}
        >
            {props.children}
        </button>
        );
    };