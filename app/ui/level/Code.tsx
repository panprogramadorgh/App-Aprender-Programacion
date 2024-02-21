"use client";

/* Imports */

// react & nextjs
import {
  ChangeEventHandler,
  FC,
  KeyboardEventHandler,
  useState,
  useEffect,
  useRef,
} from "react";

// components
import CodeStats from "./CodeStats";

// libs

// utils

// types & interfaces

// css
import styles from "@/app/ui/level/Code.module.css";

interface Props {
  code?: string | string[];
  // El componente necesita que le pasen el nombre teorico del archivo porque hay un evento para guardar el archivo.
  filename: string;
}

const Code: FC<Props> = ({ code, filename }) => {
  // Estado que contiene el contenido del textarea. Aunque es importante tener en cuenta que el contenido inicial de este estado puede ser un array de strings, en ese caso deben ser unidos aunque con un separador de salto de linea entre si.
  const codeToString = typeof code === "string" ? code : code?.join("\n");
  const [content, setContent] = useState<string>(codeToString ?? "");

  // El tener una referencia de este elemento nos permite posteriormente poder pasarle al componente CodeStats la posiciona actual del cursor para que pueda calcular la linea de ediciona actual
  const textareaReference = useRef(null);

  // Funcion manejadora de evento change que forma parte de la actualizacion del estado principal del componente
  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = ({
    target,
  }) => {
    setContent(target.value);
  };

  // Funciona menejadora del evento de guardado en el componente
  const handleSaving: KeyboardEventHandler = (event) => {
    event.preventDefault();
    const textarea = event.target as HTMLTextAreaElement;
    const content = textarea.value;
    if (!content) return;

    // --- Se descarga un archivo con el contenido del textarea ---
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
    // --- ---
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
      textarea.selectionStart = textarea.selectionEnd = start + 2;
    } else if (event.ctrlKey && event.key === "s") handleSaving(event);
  };

  return (
    <div className={styles.code}>
      <textarea
        ref={textareaReference}
        rows={10}
        cols={35}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        className={styles.code}
        value={content}
        spellCheck={false}
        placeholder={"// write some code here ..."}
      />
      <CodeStats
        codeContent={content}
        codeCursorPos={
          textareaReference.current
            ? (textareaReference.current as HTMLTextAreaElement).selectionStart
            : 0
        }
      />
    </div>
  );
};

export default Code;
