import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";
import { signIn, useSession, signOut } from "next-auth/react";

export function ButtonGithub() {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <>
        <button className={styles.SignButton}>
          <FaGithub color="#04d361" />
          Hello, {session.user.name} !
          <FiX className={styles.ClosedIcon} onClick={() => signOut()} />
        </button>
      </>
    );
  } else {
    return (
      <>
        <button className={styles.SignButton} onClick={() => signIn("github")}>
          <FaGithub color="#eba417" />
          Sign in with Github
        </button>
      </>
    );
  }
}
