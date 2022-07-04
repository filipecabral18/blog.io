import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

export function ButtonGithub() {
  const isloged = true;
  if (isloged) {
    return (
      <>
        <button className={styles.SignButton}>
          <FaGithub color="#04d361" />
          Sign in with Github
          <FiX className={styles.ClosedIcon}/>
        </button>
      </>
    );
  } else {
    return (
      <>
        <button className={styles.SignButton}>
          <FaGithub color="#eba417" />
          Sign in with Github
        </button>
      </>
    );
  }
}
