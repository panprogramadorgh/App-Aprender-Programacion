"use client";

/* Imports */

// react & nextjs
import { ChangeEventHandler, FC, KeyboardEventHandler, useState } from "react";

// components

// libs

// utils

// types & interfaces

// css
import styles from "@/app/ui/level/Code.module.css";

interface Props {
  code?: string;
}

const Code: FC<Props> = ({ code }) => {
  const [content, setContent] = useState<string>(code ?? "");

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = ({
    target,
  }) => {
    setContent(target.value);
  };

  const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      event.stopPropagation();
      const textarea = event.currentTarget;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const content = textarea.value;
      textarea.value =
        content.substring(0, start) + "  " + content.substring(end);
      textarea.selectionStart = textarea.selectionEnd = start + 2; // avanzamos 2 espacios
    }
  };

  return (
    <textarea
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      className={styles.code}
      value={content}
    />
  );
};

export default Code;
