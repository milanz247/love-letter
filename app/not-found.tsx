import Link from "next/link";
export default function NotFound() {
  return (
    <main className="section">
      <h1>This page slipped away.</h1>
      <Link className="primary" href="/">
        Return to the letter
      </Link>
    </main>
  );
}
