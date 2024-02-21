/* Imports */

// react & nextjs
import { FC } from "react";

// components

// libs

// utils

// types & interfaces

// css
import styles from "@/app/ui/level/CodeStats.module.css";

interface Props {
  codeContent: string;
  codeCursorPos: number;
}

const CodeStats: FC<Props> = ({ codeContent, codeCursorPos }) => {
  const lines = codeContent.split("\n").length;
  const currentLine = codeContent
    .substring(0, codeCursorPos)
    .split("\n").length;
  return (
    <div className={`${styles["code-stats"]}`.trim()}>
      <span>Line = {currentLine}</span>
      <span>Total = {lines}</span>
    </div>
  );
};

export default CodeStats;
