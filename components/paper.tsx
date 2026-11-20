export function Sprig({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 110 160"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
    >
      <path d="M19 153Q65 108 73 33M45 119Q33 102 33 77M61 89Q83 84 93 63M68 58Q54 51 49 33" />
      <g fill="#a3a583">
        <path d="M37 97Q18 92 20 74Q36 78 37 97ZM46 120Q48 97 61 96Q63 108 46 120ZM74 82Q77 61 89 58Q92 73 74 82ZM66 66Q47 65 43 49Q58 50 66 66Z" />
      </g>
      <g fill="#eabbc0" stroke="#a66576">
        {[
          [73, 29],
          [32, 71],
          [47, 29],
          [95, 56],
        ].map(([x, y]) => (
          <g key={x} transform={`translate(${x} ${y})`}>
            {[0, 72, 144, 216, 288].map((r) => (
              <ellipse
                key={r}
                cy="-5"
                rx="4.5"
                ry="6.5"
                transform={`rotate(${r})`}
              />
            ))}
            <circle r="3" fill="#d3b77f" />
          </g>
        ))}
      </g>
    </svg>
  );
}
export function Rose() {
  return (
    <svg
      className="rose"
      viewBox="0 0 150 230"
      aria-hidden="true"
      fill="none"
      stroke="#716d51"
      strokeWidth="1.5"
    >
      <path
        className="stem"
        d="M37 223Q85 148 86 55M59 176Q45 147 26 132M76 125Q102 113 117 84"
      />
      <g fill="#b4b395">
        <path d="M57 167Q28 163 18 126Q53 132 57 167ZM79 123Q79 93 122 80Q113 112 79 123ZM75 142Q55 136 48 112Q73 119 75 142Z" />
      </g>
      <path d="m22 130 32 31m29-42 34-34" />
      <g stroke="#955363" fill="#d99ea9">
        <path d="M83 67Q62 58 62 43Q48 27 65 24Q64 10 81 15Q92 3 101 16Q121 12 119 30Q134 48 109 59Q98 72 83 67Z" />
        <path d="M64 25Q84 24 92 48Q111 42 118 30M65 42Q74 60 99 59Q118 50 119 38M78 17Q85 21 91 33Q100 22 109 24M72 34Q78 22 91 33L96 42" />
      </g>
      <path fill="#aaa98b" d="m74 62 11 3 9 5 14-10-12 16-10-5z" />
    </svg>
  );
}
export function Envelope() {
  return (
    <div className="art" aria-hidden="true">
      <Sprig className="branched" />
      <Rose />
      <div className="env">
        <div className="slip" />
        <div className="pocket" />
        <div className="flap" />
        <div className="seal">
          <svg
            viewBox="0 0 40 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          >
            <path d="M11 29Q21 23 24 12M19 22q-10 0-9-7 7 0 9 7Zm3-5q8 0 8-6-6 0-8 6Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
export function Unfolded() {
  return (
    <svg className="unfolded" aria-hidden="true" viewBox="0 0 340 330">
      <g transform="rotate(-9 170 165)" stroke="#c6b79a">
        <path fill="#f9ecd9" d="m46 76 211-8 10 66-209 12Z" />
        <path fill="#fffcf5" d="m58 146 209-12-4 102-209 13Z" />
        <path fill="#f6ead7" d="m54 249 209-13 13 47-212 12Z" />
        {[0, 1, 2, 3].map((n) => (
          <path
            key={n}
            className="ink-line"
            pathLength={1}
            style={{ animationDelay: `${180 + n * 110}ms` }}
            d={`M83 ${167 + n * 15}l${95 - n * 8} -6`}
          />
        ))}
      </g>
      <g transform="translate(137 40) rotate(16) scale(.82)">
        <Rose />
      </g>
      <path
        d="M194 205q-15-25-31-12 2 13 31 12-1-21 18-21 11 10-18 21l-18 32m18-32 17 22"
        fill="none"
        stroke="#b77888"
        strokeWidth="4"
      />
    </svg>
  );
}
