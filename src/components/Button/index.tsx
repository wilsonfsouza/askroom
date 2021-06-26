import { ButtonHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons";
import styles from "./styles.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    leftIcon?: React.ComponentType<IconBaseProps>;
    children: string;
}

export function Button({ leftIcon: Icon, children, ...rest }: ButtonProps) {
    return (
        <button type="button" className={styles.button} {...rest}>
            {Icon && <Icon className={styles.buttonLeftIcon} />}
            {children}
        </button>
    );
}