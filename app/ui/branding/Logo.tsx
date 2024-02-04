import { FunctionComponent, CSSProperties } from "react";
import Link from "next/link";
import styles from "@/app/ui/branding/Logo.module.css";

interface LogoProps {
  propStyles?: CSSProperties;
}
const Logo: FunctionComponent<LogoProps> = ({ propStyles }) => {
  return (
    <Link href="/" className={styles.loog} style={propStyles}>
      <p className={styles["logo-text"]}>App logo</p>
      {/* Icon */}
    </Link>
  );
};

export default Logo;
