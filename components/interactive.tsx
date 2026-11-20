"use client";
import { useRef, useState } from "react";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Mail, Music2 } from "lucide-react";

import { Sprig, Envelope } from "./paper";
import { letter } from "@/lib/letter";
export function Opening({ children }: { children: React.ReactNode }) {
  const [phase, set] = useState("closed");
  const reduced = useReducedMotion();
  function open() {
    set("open");
    requestAnimationFrame(() =>
      document.getElementById("welcome")?.focus({ preventScroll: true }),
    );
    window.scrollTo(0, 0);
  }
  return (
    <>
      {phase !== "open" && (
        <section className={"opening " + phase}>
          <div className="opening-inner">
            <p className="eyebrow">For {letter.recipient}</p>
            <Envelope />
            <h1>
              A small letter,
              <br />
              <em>and a little courage.</em>
            </h1>
            <p className="hand sender">From {letter.author}</p>
            <button
              className="primary"
              onClick={() => {
                if (reduced) open();
                else {
                  set("unfolding");
                  setTimeout(open, 740);
                }
              }}
              disabled={phase === "unfolding"}
            >
              Open the letter <Mail size={16} />
            </button>
            <button className="skip" onClick={open}>
              Skip opening <ArrowRight size={13} />
            </button>
          </div>
        </section>
      )}
      <div className="letter-content" hidden={phase !== "open"}>
        {children}
      </div>
      <noscript>
        <style>
          {".opening{display:none}.letter-content[hidden]{display:block}"}
        </style>
      </noscript>
    </>
  );
}
export function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={false}
      whileInView={reduced ? undefined : { y: [9, 0], opacity: [0.86, 1] }}
      viewport={{ once: true }}
      transition={{ duration: 0.46, delay }}
    >
      {children}
    </motion.div>
  );
}
const replies = [
  [
    "I’d like that",
    "That made me smile.",
    "Whenever you’re comfortable, let’s find a time that works for both of us.",
  ],
  [
    "I need a little time",
    "Of course. Take your time.",
    "You can tell me whenever you feel comfortable.",
  ],
  [
    "I’d rather keep things as colleagues",
    "Thank you for being honest.",
    "I understand, and I’ll respect that. We’ll keep things comfortable at work.",
  ],
] as const;
export function Invitation() {
  const [answer, set] = useState<number | null>(null);
  const reduced = useReducedMotion();
  return (
    <section className="invitation">
      <p className="hand">One small question…</p>
      <h2>{letter.invitation}</h2>
      <p>{letter.supporting}</p>
      <div className="choices">
        {replies.map(([label], i) => (
          <button
            key={label}
            aria-pressed={answer === i}
            onClick={() => set(i)}
          >
            {label}
          </button>
        ))}
      </div>
      <small>Choosing an option here doesn’t send me a message.</small>
      <div role="status" aria-live="polite" aria-atomic="true">
        {answer !== null && (
          <motion.div
            key={answer}
            className="reply"
            initial={reduced ? false : { y: 5, opacity: 0.8 }}
            animate={{ y: 0, opacity: 1 }}
          >
            {answer === 0 && (
              <span className="petals" aria-hidden="true">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <i
                    key={i}
                    style={{
                      left: 8 + i * 16 + "%",
                      animationDelay: i * 0.04 + "s",
                    }}
                  />
                ))}
              </span>
            )}
            {answer === 2 && <Sprig className="response-flower" />}
            <h3>{replies[answer][1]}</h3>
            <p>{replies[answer][2]}</p>
          </motion.div>
        )}
      </div>
      {answer === 0 && letter.contact && (
        <a className="primary" href={letter.contact}>
          Message me
        </a>
      )}
    </section>
  );
}
export function Music() {
  const audio = useRef<HTMLAudioElement>(null);
  const [playing, set] = useState(false);
  const [failed, fail] = useState(false);
  if (!letter.music) return null;
  return (
    <>
      <audio
        ref={audio}
        src={letter.music}
        preload="none"
        loop
        onError={() => fail(true)}
      />
      <button
        className="music"
        disabled={failed}
        aria-pressed={playing}
        onClick={async () => {
          if (playing) {
            audio.current?.pause();
            set(false);
          } else
            try {
              await audio.current?.play();
              set(true);
            } catch {
              fail(true);
            }
        }}
      >
        <Music2 size={16} />
        {failed ? "Music unavailable" : playing ? "Pause music" : "Play music"}
      </button>
    </>
  );
}
