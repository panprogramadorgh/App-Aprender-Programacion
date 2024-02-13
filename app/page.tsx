import MainNavBar from "@/app/ui/navigation/NavBar";
import CodeBox from "@/app/ui/level/CodeBox";
import styles from "@/app/page.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <MainNavBar />
      </header>
      <section>
        <h1 className={styles.title}>Hello World</h1>
        <CodeBox label="src/main.tsx" icon="TypeScript.svg" />
        <CodeBox
          editable
          label="src/index.mjs"
          icon="JavaScript.svg"
          initialContent={`const name = "Alvaro"`}
        />
      </section>
    </main>
  );
}
