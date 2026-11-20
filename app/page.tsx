import { Mail, ArrowDown } from "lucide-react";
import { Opening, Reveal, Invitation, Music } from "@/components/interactive";
import { Sprig, Unfolded } from "@/components/paper";
import { letter } from "@/lib/letter";
export default function Home() {
  return (
    <>
      <header>
        <span className="brand">
          <Mail size={21} />A Little Letter
        </span>
        <Music />
      </header>
      <main>
        <Opening>
          <section className="hero">
            <div>
              <p className="hand">
                {letter.greeting.replace("{name}", letter.recipient)}
              </p>
              <p className="eyebrow">A little courage, put into words</p>
              <h1 id="welcome" tabIndex={-1}>
                There’s something I’ve been <em>meaning to tell you.</em>
              </h1>
              <p className="intro">{letter.introduction}</p>
              <a className="primary" href="#note">
                Read my note <ArrowDown size={16} />
              </a>
            </div>
            <Unfolded />
          </section>
          <section
            id="note"
            className="stationery"
            aria-label="My personal letter"
          >
            <Sprig className="pressed" />
            <h2>Hi {letter.recipient},</h2>
            {letter.paragraphs.map((p, i) => (
              <Reveal key={p} delay={i * 0.025}>
                <p>{p}</p>
              </Reveal>
            ))}
            <p className="hand signature">— {letter.author}</p>
          </section>
          <Invitation />
          <footer>
            <span className="rule" aria-hidden="true">
              ◇
            </span>
            <p>Thank you for taking a moment to read this.</p>
            <small>Made with a little courage, by {letter.author}.</small>
          </footer>
        </Opening>
      </main>
    </>
  );
}
