import { ReactNode } from "react";
import styles from "./ErrorMessage.module.css";

type ErrorMessageProps = {
    children: ReactNode;
};
export default function ErrorMessage({ children }: ErrorMessageProps) {
    return <p className={styles["err-msg"]}>{children}</p>;
}
