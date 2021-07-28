import { ButtonHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons";
import styles from "./styles.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: string;
    leftIcon?: React.ComponentType<IconBaseProps>;
    isOutlined?: boolean;
}

export function Button({ leftIcon: Icon, isOutlined = false, children, ...rest }: ButtonProps) {
    const outlined = isOutlined ? styles.outlined : ''
    return (
        <button type="button" className={`${styles.button} ${outlined}`} {...rest}>
            {Icon && <Icon className={styles.buttonLeftIcon} />}
            {children}
        </button>
    );
}