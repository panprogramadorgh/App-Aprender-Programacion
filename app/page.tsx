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
        <h1 className={styles.title}>Learn to Code !</h1>
        <CodeBox
          editable
          label="src/index.mjs"
          icon="JavaScript.svg"
          initialContent={['const name = "Alvaro"', "adios"]}
        />
      </section>
    </main>
  );
}
