import { FunctionComponent } from "react";
import Image from "next/image";
import Code from "@/app/ui/level/Code";
import styles from "@/app/ui/level/CodeBox.module.css";

interface Props {
  label: string;
  icon?: string;
  initialContent?: string;
  className?: string;
  showLineNumber?: boolean;
  editable?: boolean;
}
const ProgramingEnv: FunctionComponent<Props> = ({
  label,
  icon,
  initialContent,
  className,
  showLineNumber,
  editable,
}) => {
  return (
    <div className={`${styles["code-box"]} ${className}`.trim()}>
      <div className={styles["header"]}>
        {icon ? (
          <Image
            className={styles.icon}
            src={icon}
            alt="JavaScript programming language logo"
            width={18}
            height={18}
          />
        ) : null}
        <span>{label}</span>
      </div>
      <div
        className={`${styles["code-container"]} ${
          showLineNumber ? styles["line-number"] : ""
        }`.trim()}
      >
        {editable ? (
          <Code code={initialContent} />
        ) : (
          <>
            <span>// primera linea de codigo</span>
            <span>// segunda linea de codigo</span>
            <span>// tercera linea de codigo</span>
          </>
        )}
      </div>
    </div>
  );
};

export default ProgramingEnv;
