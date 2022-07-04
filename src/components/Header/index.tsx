import Image from "../../../node_modules/next/image";
import { ButtonGithub } from "../ButtonGithub/index";
import styles from "./styles.module.scss";
export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image
            src="/assets/ig.news.svg"
            alt="logo"
            width={100}
            height={100} 
        />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>
        <ButtonGithub/>
      </div>
    </header>
  );
}
