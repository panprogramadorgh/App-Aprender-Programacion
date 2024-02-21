import { FunctionComponent } from "react";
import Image from "next/image";
import Code from "@/app/ui/level/Code";
import styles from "@/app/ui/level/CodeBox.module.css";

interface Props {
  label: string;
  icon?: string;
  initialContent: string | string[];
  className?: string;
  showLineNumber?: boolean;
  editable?: boolean;
}
const ProgramingEnv: FunctionComponent<Props> = ({
  label,
  icon,
  initialContent = "",
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
          <Code
            filename={label.split("/").reverse()[0]}
            code={initialContent}
          />
        ) : // Si no es editable primero se verifica si es un string o bien un array de strings. Si es un array de strings se renderiza un array jsx
        initialContent instanceof Array ? (
          <>
            {initialContent.map((line, index) => (
              <span key={index}>{line}</span>
            ))}
          </>
        ) : (
          <span>{initialContent}</span>
        )}
      </div>
    </div>
  );
};

export default ProgramingEnv;
