import { FunctionComponent } from "react";
import Link from "next/link";
import Logo from "@/app/ui/branding/Logo";
// import SearchButton from "../search/SearchButton";
import styles from "@/app/ui/navigation/NavBar.module.css";

const MainNavBar: FunctionComponent<{}> = () => {
  const entries: { name: string; Icon?: FunctionComponent; path: string }[] = [
    { name: "Enlace1", path: "/" },
    { name: "Enlace2", path: "/" },
    { name: "Enlace3", path: "/" },
    { name: "Enlace4", path: "/" },
    { name: "Enlace5", path: "/" },
    { name: "Enlace6", path: "/" },
  ];
  return (
    <div className={styles["navbar"]}>
      <div className={styles["logo-container"]}>
        <Logo />
      </div>
      <ul className={styles["nav-entries"]}>
        {entries.map(({ name, Icon, path }, index) => {
          return (
            <li key={index} className={styles["nav-entry"]}>
              <Link href={path}>
                <p>{name}</p>
                {Icon ? <Icon /> : null}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className={styles["search-button-container"]}>
        {/* <SearchButton /> */}
      </div>
    </div>
  );
};

export default MainNavBar;
