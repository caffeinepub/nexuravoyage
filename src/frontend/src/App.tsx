import { useEffect, useState } from "react";
import { CountUp } from "./components/CountUp";
import { CustomCursor } from "./components/CustomCursor";
import { Loader } from "./components/Loader";
import { ScrollReveal } from "./components/ScrollReveal";
import { StarfieldCanvas } from "./components/StarfieldCanvas";

function setColor(el: HTMLElement, color: string) {
  el.style.color = color;
}

// ── Navbar ──────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "EXPLORE", href: "#tactics" },
    { label: "ABOUT", href: "#about" },
    { label: "TACTICS", href: "#tactics" },
    { label: "PODCAST", href: "#podcast" },
    { label: "PROTECT", href: "#protect" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "20px 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(8,8,8,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,169,110,0.1)" : "none",
        transition:
          "background 0.4s ease, backdrop-filter 0.4s ease, border 0.4s ease",
      }}
    >
      <a
        href="#hero"
        data-ocid="nav.link"
        style={{
          fontFamily: "'Bodoni Moda', 'Bodoni MT', 'Didot', serif",
          fontSize: "20px",
          fontWeight: 700,
          color: "#c9a96e",
          letterSpacing: "0.2em",
          textDecoration: "none",
          textTransform: "uppercase",
        }}
      >
        NEXURA_VOYAGE
      </a>

      <nav style={{ display: "flex", gap: "40px" }} className="hidden md:flex">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            data-ocid="nav.link"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "11px",
              fontWeight: 300,
              letterSpacing: "0.3em",
              color: "rgba(232,232,232,0.7)",
              textDecoration: "none",
              textTransform: "uppercase",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => setColor(e.currentTarget, "#c9a96e")}
            onMouseLeave={(e) =>
              setColor(e.currentTarget, "rgba(232,232,232,0.7)")
            }
          >
            {l.label}
          </a>
        ))}
      </nav>

      <a
        href="#tactics"
        data-ocid="nav.primary_button"
        className="hidden md:block"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "10px",
          fontWeight: 400,
          letterSpacing: "0.25em",
          color: "#c9a96e",
          textDecoration: "none",
          textTransform: "uppercase",
          border: "1px solid rgba(201,169,110,0.5)",
          padding: "10px 22px",
          transition: "background 0.3s ease, color 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#c9a96e";
          setColor(e.currentTarget, "#020409");
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
          setColor(e.currentTarget, "#c9a96e");
        }}
      >
        ENTER THE MIND
      </a>

      <button
        className="md:hidden"
        data-ocid="nav.toggle"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: "none",
          border: "none",
          color: "#c9a96e",
          fontSize: "22px",
          cursor: "none",
        }}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(8,8,8,0.97)",
            borderBottom: "1px solid rgba(201,169,110,0.2)",
            padding: "24px 48px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "12px",
                letterSpacing: "0.3em",
                color: "rgba(232,232,232,0.8)",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

// ── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        padding: "160px 48px 80px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        zIndex: 1,
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "60px",
          alignItems: "center",
        }}
      >
        <div>
          <ScrollReveal delay={100}>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "11px",
                fontWeight: 300,
                letterSpacing: "0.35em",
                color: "rgba(201,169,110,0.7)",
                textTransform: "uppercase",
                marginBottom: "32px",
              }}
            >
              Dark Psychology Atlas · Understanding the Mind
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: "clamp(64px, 9vw, 120px)",
                lineHeight: 1,
                color: "#e8e8e8",
                margin: 0,
              }}
            >
              We Decode
            </h1>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: "clamp(64px, 9vw, 120px)",
                lineHeight: 1.05,
                color: "#e8e8e8",
                margin: 0,
              }}
            >
              Dark Minds
            </h1>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(40px, 5vw, 72px)",
                color: "rgba(255,255,255,0.12)",
                margin: "8px 0 40px",
                lineHeight: 1,
              }}
            >
              Where shadows meet science
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              <a
                href="#tactics"
                data-ocid="hero.primary_button"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "11px",
                  fontWeight: 400,
                  letterSpacing: "0.25em",
                  color: "#020409",
                  background: "#c9a96e",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  padding: "16px 36px",
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.85";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                EXPLORE TACTICS
              </a>
              <a
                href="#protect"
                data-ocid="hero.secondary_button"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "11px",
                  fontWeight: 400,
                  letterSpacing: "0.25em",
                  color: "#c9a96e",
                  background: "transparent",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  padding: "15px 36px",
                  border: "1px solid rgba(201,169,110,0.4)",
                  transition:
                    "background 0.3s ease, color 0.3s ease, transform 0.3s ease",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(201,169,110,0.1)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                PROTECT YOURSELF
              </a>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={600}>
          <div
            className="animate-fly-box"
            style={{
              border: "1px solid rgba(201,169,110,0.3)",
              background: "rgba(201,169,110,0.04)",
              padding: "40px 36px",
              textAlign: "center",
              backdropFilter: "blur(10px)",
              minWidth: "200px",
            }}
          >
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "80px",
                fontWeight: 700,
                color: "#c9a96e",
                lineHeight: 1,
              }}
            >
              93%
            </div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "11px",
                letterSpacing: "0.3em",
                color: "rgba(232,232,232,0.6)",
                marginTop: "12px",
                textTransform: "uppercase",
              }}
            >
              UNAWARE
            </div>
            <div
              style={{
                width: "40px",
                height: "1px",
                background: "rgba(201,169,110,0.4)",
                margin: "16px auto 0",
              }}
            />
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "10px",
                color: "rgba(232,232,232,0.4)",
                marginTop: "12px",
                letterSpacing: "0.1em",
              }}
            >
              of manipulation victims
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ── Marquee ──────────────────────────────────────────────────────────────────
function MarqueeBanner() {
  const marqueeText =
    "Manipulation · Dark Triad · Gaslighting · Coercive Control · NLP · Emotional Abuse · Cognitive Bias · Love Bombing · Narcissism · Fear Tactics · ";
  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: "1px solid rgba(201,169,110,0.15)",
        borderBottom: "1px solid rgba(201,169,110,0.15)",
        padding: "16px 0",
        position: "relative",
        zIndex: 1,
        background: "rgba(0,0,0,0.3)",
      }}
    >
      <div
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          animation: "marquee 30s linear infinite",
        }}
      >
        {(["first", "second"] as const).map((id) => (
          <span
            key={id}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "18px",
              color: "rgba(201,169,110,0.5)",
              flexShrink: 0,
            }}
          >
            {marqueeText}
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Tactic SVG Icons ─────────────────────────────────────────────────────────
function HexIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      role="img"
      aria-label="Hexagon icon"
    >
      <polygon
        points="16,2 30,9 30,23 16,30 2,23 2,9"
        stroke="#c9a96e"
        strokeWidth="1"
        fill="none"
        opacity="0.7"
      />
      <circle cx="16" cy="16" r="4" fill="#c9a96e" opacity="0.4" />
    </svg>
  );
}
function TriIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      role="img"
      aria-label="Triangle icon"
    >
      <polygon
        points="16,2 30,28 2,28"
        stroke="#c9a96e"
        strokeWidth="1"
        fill="none"
        opacity="0.7"
      />
      <circle cx="16" cy="20" r="3" fill="#c9a96e" opacity="0.4" />
    </svg>
  );
}
function SquareIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      role="img"
      aria-label="Square icon"
    >
      <rect
        x="4"
        y="4"
        width="24"
        height="24"
        stroke="#c9a96e"
        strokeWidth="1"
        fill="none"
        opacity="0.7"
      />
      <rect x="12" y="12" width="8" height="8" fill="#c9a96e" opacity="0.4" />
    </svg>
  );
}
function PentIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      role="img"
      aria-label="Pentagon icon"
    >
      <polygon
        points="16,2 29,9.5 29,22.5 16,30 3,22.5 3,9.5"
        stroke="#c9a96e"
        strokeWidth="1"
        fill="none"
        opacity="0.7"
      />
      <polygon
        points="16,10 22,13.5 22,20.5 16,24 10,20.5 10,13.5"
        fill="#c9a96e"
        opacity="0.25"
      />
    </svg>
  );
}
function CircIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      role="img"
      aria-label="Circle icon"
    >
      <circle
        cx="16"
        cy="16"
        r="13"
        stroke="#c9a96e"
        strokeWidth="1"
        fill="none"
        opacity="0.7"
      />
      <circle cx="16" cy="16" r="6" fill="#c9a96e" opacity="0.3" />
    </svg>
  );
}

// ── Tactics Section ───────────────────────────────────────────────────────────
const tactics = [
  {
    num: "01",
    title: "Gaslighting",
    desc: "A form of psychological manipulation that causes victims to question their own memory, perception, and reality.",
    icon: <HexIcon />,
  },
  {
    num: "02",
    title: "Dark Triad",
    desc: "The convergence of narcissism, Machiavellianism, and psychopathy — traits that enable ruthless manipulation.",
    icon: <TriIcon />,
  },
  {
    num: "03",
    title: "Love Bombing",
    desc: "Overwhelming a target with affection and attention to establish control — a classic tactic in narcissistic abuse.",
    icon: <SquareIcon />,
  },
  {
    num: "04",
    title: "Neuro-Linguistic Programming",
    desc: "Language patterns and behavioral techniques used to influence subconscious thought and shift belief systems.",
    icon: <PentIcon />,
  },
  {
    num: "05",
    title: "Coercive Control",
    desc: "A pattern of behavior that seeks to take away the victim's liberty through isolation, threats, and surveillance.",
    icon: <CircIcon />,
  },
];

function TacticsSection() {
  return (
    <section
      id="tactics"
      style={{
        padding: "120px 48px",
        position: "relative",
        zIndex: 1,
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          marginBottom: "80px",
          alignItems: "end",
        }}
      >
        <div>
          <ScrollReveal>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "11px",
                letterSpacing: "0.35em",
                color: "rgba(201,169,110,0.6)",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              WHAT LURKS BENEATH
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: "clamp(56px, 7vw, 90px)",
                color: "#e8e8e8",
                lineHeight: 1,
                margin: 0,
              }}
            >
              Tactics Built for
            </h2>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(40px, 5vw, 72px)",
                color: "rgba(255,255,255,0.12)",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Domination
            </p>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={200}>
          <p
            style={{
              fontFamily: "'Cormorant SC', 'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "18px",
              lineHeight: 1.8,
              color: "rgba(232,232,232,0.65)",
            }}
          >
            Understanding the arsenal of psychological control is the first step
            toward freedom. Each tactic below has been studied, documented, and
            weaponized — by understanding them, you reclaim your power.
          </p>
        </ScrollReveal>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "2px",
        }}
      >
        {tactics.map((t, i) => (
          <ScrollReveal key={t.num} delay={i * 100}>
            <div
              data-ocid={`tactics.item.${i + 1}`}
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(201,169,110,0.12)",
                padding: "40px 32px",
                position: "relative",
                transition:
                  "background 0.4s ease, border-color 0.4s ease, transform 0.4s ease",
                height: "100%",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(201,169,110,0.06)";
                el.style.borderColor = "rgba(201,169,110,0.4)";
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.025)";
                el.style.borderColor = "rgba(201,169,110,0.12)";
                el.style.transform = "translateY(0)";
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "24px",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 700,
                  fontSize: "52px",
                  color: "rgba(201,169,110,0.12)",
                  lineHeight: 1,
                }}
              >
                {t.num}
              </span>
              <div style={{ marginBottom: "24px" }}>{t.icon}</div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 700,
                  fontSize: "22px",
                  color: "#e8e8e8",
                  marginBottom: "12px",
                }}
              >
                {t.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "14px",
                  lineHeight: 1.7,
                  color: "rgba(232,232,232,0.55)",
                  margin: 0,
                }}
              >
                {t.desc}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

// ── Podcast Section ───────────────────────────────────────────────────────────
function MicIcon() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      role="img"
      aria-label="Microphone icon"
    >
      <rect
        x="22"
        y="6"
        width="20"
        height="30"
        rx="10"
        stroke="#c9a96e"
        strokeWidth="1.5"
        fill="none"
        opacity="0.8"
      />
      <path
        d="M12 32c0 11.046 8.954 20 20 20s20-8.954 20-20"
        stroke="#c9a96e"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      <line
        x1="32"
        y1="52"
        x2="32"
        y2="60"
        stroke="#c9a96e"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <line
        x1="20"
        y1="60"
        x2="44"
        y2="60"
        stroke="#c9a96e"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <circle cx="32" cy="21" r="4" fill="#c9a96e" opacity="0.25" />
    </svg>
  );
}

function PodcastSection() {
  return (
    <section
      id="podcast"
      style={{
        padding: "120px 48px",
        position: "relative",
        zIndex: 1,
        borderTop: "1px solid rgba(201,169,110,0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
      >
        {/* Left column */}
        <ScrollReveal>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "14px",
              letterSpacing: "0.35em",
              color: "rgba(201,169,110,0.6)",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            JOIN THE CONVERSATION
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              fontSize: "clamp(56px, 7vw, 90px)",
              color: "#e8e8e8",
              lineHeight: 1,
              margin: "0 0 4px",
            }}
          >
            Podcast
          </h2>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(38px, 5vw, 64px)",
              color: "rgba(255,255,255,0.12)",
              margin: "0 0 32px",
              lineHeight: 1,
            }}
          >
            On Dark Psychology
          </p>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "20px",
              lineHeight: 1.85,
              color: "rgba(232,232,232,0.65)",
              marginBottom: "40px",
            }}
          >
            Want to explore the depths of dark psychology, manipulation, and
            psychic awareness with us? Join the podcast and let&apos;s have a
            real conversation.
          </p>
          <a
            href="tel:+919711192390"
            data-ocid="podcast.primary_button"
            style={{
              display: "inline-block",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "20px",
              fontWeight: 500,
              letterSpacing: "0.25em",
              color: "#c9a96e",
              textDecoration: "none",
              textTransform: "uppercase",
              border: "1px solid rgba(201,169,110,0.6)",
              padding: "16px 32px",
              transition:
                "background 0.3s ease, color 0.3s ease, transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#c9a96e";
              setColor(e.currentTarget, "#020409");
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              setColor(e.currentTarget, "#c9a96e");
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <span
              style={{
                fontSize: "12px",
                letterSpacing: "0.3em",
                display: "block",
                marginBottom: "4px",
              }}
            >
              CALL TO JOIN
            </span>
            <span style={{ fontSize: "20px" }}>+91 97111 92390</span>
          </a>
        </ScrollReveal>

        {/* Right column — decorative card */}
        <ScrollReveal delay={250}>
          <div
            className="animate-fly-box"
            style={{
              border: "1px solid rgba(201,169,110,0.25)",
              background: "rgba(201,169,110,0.04)",
              backdropFilter: "blur(10px)",
              padding: "60px 48px",
              textAlign: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "16px",
                left: "16px",
                width: "24px",
                height: "24px",
                borderTop: "1px solid rgba(201,169,110,0.5)",
                borderLeft: "1px solid rgba(201,169,110,0.5)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                width: "24px",
                height: "24px",
                borderTop: "1px solid rgba(201,169,110,0.5)",
                borderRight: "1px solid rgba(201,169,110,0.5)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "16px",
                left: "16px",
                width: "24px",
                height: "24px",
                borderBottom: "1px solid rgba(201,169,110,0.5)",
                borderLeft: "1px solid rgba(201,169,110,0.5)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "16px",
                right: "16px",
                width: "24px",
                height: "24px",
                borderBottom: "1px solid rgba(201,169,110,0.5)",
                borderRight: "1px solid rgba(201,169,110,0.5)",
              }}
            />

            <div
              style={{
                marginBottom: "28px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <MicIcon />
            </div>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "24px",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#c9a96e",
                  animation: "pulse 1.8s ease-in-out infinite",
                }}
              />
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "11px",
                  letterSpacing: "0.3em",
                  color: "#c9a96e",
                  textTransform: "uppercase",
                }}
              >
                On Air
              </span>
            </div>

            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: "28px",
                color: "#e8e8e8",
                marginBottom: "12px",
              }}
            >
              Dark Psychology Talks
            </h3>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "14px",
                lineHeight: 1.7,
                color: "rgba(232,232,232,0.5)",
                margin: 0,
              }}
            >
              Conversations that go beyond the surface — into the shadow side of
              the human mind.
            </p>

            <div
              style={{
                marginTop: "32px",
                paddingTop: "24px",
                borderTop: "1px solid rgba(201,169,110,0.15)",
                display: "flex",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              {[1, 2, 3, 4, 5].map((bar) => (
                <div
                  key={bar}
                  style={{
                    width: "4px",
                    height: `${12 + bar * 6}px`,
                    background: "rgba(201,169,110,0.4)",
                    borderRadius: "2px",
                    animation: `soundwave ${0.6 + bar * 0.15}s ease-in-out infinite alternate`,
                  }}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ── About Section ─────────────────────────────────────────────────────────────
function AboutSection() {
  const clairs = [
    "Clairvoyance",
    "Clairaudience",
    "Clairsentience",
    "Claircognizance",
    "Clairalience",
  ];
  return (
    <section
      id="about"
      style={{
        padding: "120px 48px",
        position: "relative",
        zIndex: 1,
        borderTop: "1px solid rgba(201,169,110,0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "start",
        }}
      >
        <ScrollReveal>
          <blockquote
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(22px, 2.5vw, 32px)",
              lineHeight: 1.5,
              color: "rgba(201,169,110,0.8)",
              margin: "0 0 48px",
              borderLeft: "2px solid rgba(201,169,110,0.4)",
              paddingLeft: "32px",
            }}
          >
            &ldquo;The universe speaks in silence. Those gifted with the Clairs
            hear what others cannot — and see what the eyes will never
            reach.&rdquo;
          </blockquote>

          <div>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "10px",
                letterSpacing: "0.3em",
                color: "rgba(201,169,110,0.5)",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              I HAVE BEEN BLESSED WITH:
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {clairs.map((clair) => (
                <span
                  key={clair}
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    color: "rgba(201,169,110,0.85)",
                    border: "1px solid rgba(201,169,110,0.4)",
                    padding: "8px 18px",
                    textTransform: "uppercase",
                    background: "rgba(201,169,110,0.04)",
                  }}
                >
                  {clair}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "11px",
              letterSpacing: "0.35em",
              color: "rgba(201,169,110,0.6)",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            ABOUT THE OWNER
          </p>
          <h2
            style={{
              fontFamily: "'Cinzel Decorative', 'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "clamp(36px, 4vw, 56px)",
              color: "#d4af37",
              lineHeight: 1.1,
              margin: "0 0 8px",
              textShadow:
                "0 0 18px rgba(212,175,55,0.9), 0 0 40px rgba(212,175,55,0.5), 0 0 80px rgba(212,175,55,0.3)",
              letterSpacing: "0.05em",
            }}
          >
            Prisha Singh
          </h2>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(24px, 2.5vw, 36px)",
              color: "rgba(255,255,255,0.12)",
              margin: "0 0 32px",
              lineHeight: 1,
            }}
          >
            Game Developer · Editor · Psychic
          </p>
          <p
            style={{
              fontFamily: "'Cormorant SC', 'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "18px",
              lineHeight: 1.85,
              color: "rgba(232,232,232,0.65)",
              marginBottom: "24px",
            }}
          >
            I am Prisha Singh — a game developer, video editor, and psychic. I
            have created over 50+ games and have been learning video editing
            since I was 10. Today, I am a professional editor.
          </p>
          <p
            style={{
              fontFamily: "'Cormorant SC', 'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "18px",
              lineHeight: 1.85,
              color: "rgba(232,232,232,0.55)",
            }}
          >
            I had strange experiences when I was a kid, but I couldn&apos;t
            understand what was happening. Then I discovered that I have natural
            psychic abilities, and it all started making sense to me. I have a
            connection with the universe. My abilities allow me to receive
            information and feelings from my angels, souls, archangels, and
            ascended masters. I can predict with accuracy. I can see, hear,
            feel, sense, and have intuitions beyond the boundaries of the
            physical world. I believe predictions can show you the way and give
            you directions. But remember, a prediction isn&apos;t an absolute
            outcome that is set in stone.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ── Stats Section ─────────────────────────────────────────────────────────────
const stats = [
  { value: "200M+", label: "People Affected Annually" },
  { value: "93%", label: "Unaware They're Being Manipulated" },
  { value: "7", label: "Core Dark Psychology Tactics" },
  { value: "24/7", label: "How Manipulation Operates" },
];

function StatsSection() {
  return (
    <section
      style={{
        padding: "100px 48px",
        position: "relative",
        zIndex: 1,
        borderTop: "1px solid rgba(201,169,110,0.1)",
        borderBottom: "1px solid rgba(201,169,110,0.1)",
        background: "rgba(201,169,110,0.02)",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "2px",
        }}
      >
        {stats.map((s, i) => (
          <ScrollReveal key={s.label} delay={i * 100}>
            <div
              data-ocid={`stats.item.${i + 1}`}
              style={{
                textAlign: "center",
                padding: "40px 20px",
                borderRight:
                  i < 3 ? "1px solid rgba(201,169,110,0.15)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 700,
                  fontSize: "clamp(52px, 6vw, 88px)",
                  color: "#c9a96e",
                  lineHeight: 1,
                  marginBottom: "16px",
                }}
              >
                <CountUp value={s.value} />
              </div>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  color: "rgba(232,232,232,0.5)",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                {s.label}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

// ── Protect / Process Section ─────────────────────────────────────────────────
const steps = [
  {
    roman: "I",
    title: "Recognize",
    desc: "Learn the signs of manipulation before they take hold. Awareness is the first layer of psychological armor.",
  },
  {
    roman: "II",
    title: "Question",
    desc: "Challenge narratives that create urgency, guilt, or fear. Manipulators rely on rushed, emotional decisions.",
  },
  {
    roman: "III",
    title: "Detach",
    desc: "Emotional distance is your greatest defense. Create space between stimulus and response — that gap is freedom.",
  },
  {
    roman: "IV",
    title: "Reclaim",
    desc: "Rebuild boundaries with clarity and confidence. Reclaim your narrative, your identity, and your autonomy.",
  },
];

function ProtectSection() {
  return (
    <section
      id="protect"
      style={{
        padding: "120px 48px",
        position: "relative",
        zIndex: 1,
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      <ScrollReveal>
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "11px",
              letterSpacing: "0.35em",
              color: "rgba(201,169,110,0.6)",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            HOW TO SHIELD YOUR MIND
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              fontSize: "clamp(56px, 7vw, 90px)",
              color: "#e8e8e8",
              lineHeight: 1,
              margin: 0,
            }}
          >
            The Protection
          </h2>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(40px, 5vw, 72px)",
              color: "rgba(255,255,255,0.12)",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Method
          </p>
        </div>
      </ScrollReveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "2px",
        }}
      >
        {steps.map((step, i) => (
          <ScrollReveal key={step.roman} delay={i * 120}>
            <div
              data-ocid={`protect.item.${i + 1}`}
              style={{
                padding: "48px 32px",
                border: "1px solid rgba(201,169,110,0.12)",
                background: "rgba(255,255,255,0.02)",
                transition: "border-color 0.4s ease, background 0.4s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(201,169,110,0.4)";
                el.style.background = "rgba(201,169,110,0.04)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(201,169,110,0.12)";
                el.style.background = "rgba(255,255,255,0.02)";
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  border: "1px solid rgba(201,169,110,0.4)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "28px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                    fontSize: "18px",
                    color: "#c9a96e",
                  }}
                >
                  {step.roman}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 700,
                  fontSize: "26px",
                  color: "#e8e8e8",
                  marginBottom: "14px",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "14px",
                  lineHeight: 1.75,
                  color: "rgba(232,232,232,0.55)",
                  margin: 0,
                }}
              >
                {step.desc}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

// ── Quote Section ─────────────────────────────────────────────────────────────
function QuoteSection() {
  return (
    <section
      style={{
        padding: "120px 48px",
        position: "relative",
        zIndex: 1,
        borderTop: "1px solid rgba(201,169,110,0.1)",
        textAlign: "center",
        background: "rgba(201,169,110,0.015)",
      }}
    >
      <ScrollReveal>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "120px",
              color: "rgba(201,169,110,0.25)",
              lineHeight: 0.6,
              marginBottom: "32px",
              userSelect: "none",
            }}
          >
            &ldquo;
          </div>
          <blockquote
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(24px, 3vw, 40px)",
              lineHeight: 1.5,
              color: "rgba(232,232,232,0.85)",
              margin: "0 0 32px",
            }}
          >
            In the digital world, your mind is the most targeted asset. Those
            who understand dark psychology rule — those who don&apos;t, are
            ruled.
          </blockquote>
          <cite
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "20px",
              letterSpacing: "0.2em",
              color: "rgba(201,169,110,0.6)",
              textTransform: "uppercase",
              fontStyle: "normal",
            }}
          >
            — NEXURA_VOYAGE
          </cite>
        </div>
      </ScrollReveal>
    </section>
  );
}

// ── Visitor Signup Section ─────────────────────────────────────────────────
function VisitorSignupSection() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const inputStyle = (field: string) => ({
    width: "100%",
    padding: "14px 18px",
    background: "rgba(201,169,110,0.05)",
    border: `1px solid ${focusedField === field ? "rgba(201,169,110,0.7)" : "rgba(201,169,110,0.25)"}`,
    color: "rgba(232,232,232,0.9)",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "16px",
    fontWeight: 300,
    outline: "none",
    transition: "border-color 0.3s ease",
    boxSizing: "border-box" as const,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;
    setSubmittedName(name);
    setSubmitted(true);
  };

  return (
    <section
      id="visitor-signup"
      style={{
        padding: "100px 48px",
        position: "relative",
        zIndex: 1,
        borderTop: "1px solid rgba(201,169,110,0.1)",
      }}
    >
      <ScrollReveal>
        <div
          style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "11px",
              letterSpacing: "0.4em",
              color: "#c9a96e",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            JOIN THE VOYAGE
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "clamp(36px, 5vw, 60px)",
              color: "rgba(232,232,232,0.95)",
              marginBottom: "20px",
              lineHeight: 1.15,
            }}
          >
            Leave Your Mark
          </h2>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "14px",
              background: "rgba(201,169,110,0.07)",
              border: "1px solid rgba(201,169,110,0.25)",
              borderLeft: "3px solid rgba(201,169,110,0.7)",
              borderRadius: "4px",
              padding: "18px 24px",
              marginBottom: "32px",
              marginTop: "8px",
            }}
          >
            <span style={{ fontSize: "20px", marginTop: "1px", flexShrink: 0 }}>
              🔒
            </span>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: 1.75,
                color: "rgba(201,169,110,0.85)",
                margin: 0,
              }}
            >
              <strong style={{ fontWeight: 600, color: "rgba(201,169,110,1)" }}>
                I promise you — this is a safe space.
              </strong>{" "}
              I'm Prisha, and I built this site because I genuinely care about
              awareness and truth. I'm not here to collect your data or sell
              your name. I simply want to know who is walking this path
              alongside me. No spam, no third-party sharing — just a name, kept
              close and respected. You have my word.
            </p>
          </div>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "17px",
              lineHeight: 1.8,
              color: "rgba(232,232,232,0.5)",
              marginBottom: "56px",
            }}
          >
            Introduce yourself. Your identity remains yours — we simply want to
            know who walks through these doors.
          </p>

          {submitted ? (
            <div
              data-ocid="visitor_signup.success_state"
              style={{
                padding: "60px 40px",
                border: "1px solid rgba(201,169,110,0.3)",
                background: "rgba(201,169,110,0.04)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Bodoni Moda', 'Bodoni MT', 'Didot', serif",
                  fontSize: "clamp(28px, 4vw, 48px)",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: "#c9a96e",
                  textShadow:
                    "0 0 30px rgba(201,169,110,0.6), 0 0 60px rgba(201,169,110,0.3)",
                  marginBottom: "16px",
                  textTransform: "uppercase",
                }}
              >
                WELCOME, {submittedName}.
              </p>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "15px",
                  fontWeight: 300,
                  color: "rgba(232,232,232,0.4)",
                  letterSpacing: "0.15em",
                }}
              >
                Your presence has been noted.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              data-ocid="visitor_signup.modal"
              style={{ textAlign: "left" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div>
                  <label
                    htmlFor="visitor-name"
                    style={{
                      display: "block",
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "11px",
                      letterSpacing: "0.3em",
                      color: "rgba(201,169,110,0.7)",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                    }}
                  >
                    Name *
                  </label>
                  <input
                    id="visitor-name"
                    data-ocid="visitor_signup.input"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Your name"
                    required
                    style={inputStyle("name")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="visitor-message"
                    style={{
                      display: "block",
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "11px",
                      letterSpacing: "0.3em",
                      color: "rgba(201,169,110,0.7)",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                    }}
                  >
                    Message (optional)
                  </label>
                  <textarea
                    id="visitor-message"
                    data-ocid="visitor_signup.textarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Say something, or don’t…"
                    rows={4}
                    style={{
                      ...inputStyle("message"),
                      resize: "vertical" as const,
                    }}
                  />
                </div>
                <button
                  data-ocid="visitor_signup.submit_button"
                  type="submit"
                  style={{
                    marginTop: "12px",
                    padding: "16px 48px",
                    background: "transparent",
                    border: "1px solid #c9a96e",
                    color: "#c9a96e",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.35em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    display: "block",
                    width: "100%",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "rgba(201,169,110,0.1)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow =
                      "0 0 20px rgba(201,169,110,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "transparent";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow =
                      "none";
                  }}
                >
                  ENTER THE VOYAGE
                </button>
              </div>
            </form>
          )}
        </div>
      </ScrollReveal>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  const navLinks = [
    "Explore",
    "About",
    "Tactics",
    "Podcast",
    "Protect Yourself",
    "Contact",
    "Join the Voyage",
  ];
  return (
    <footer
      id="contact"
      style={{
        padding: "80px 48px 40px",
        position: "relative",
        zIndex: 1,
        borderTop: "1px solid rgba(201,169,110,0.15)",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: "60px",
          marginBottom: "60px",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "'Bodoni Moda', 'Bodoni MT', 'Didot', serif",
              fontWeight: 700,
              fontSize: "28px",
              color: "#c9a96e",
              letterSpacing: "0.15em",
              marginBottom: "16px",
            }}
          >
            NEXURA_VOYAGE
          </h2>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "14px",
              lineHeight: 1.8,
              color: "rgba(232,232,232,0.45)",
              maxWidth: "320px",
            }}
          >
            Decoding the hidden forces of the human mind. Your guide to
            understanding dark psychology, manipulation tactics, and the art of
            protection.
          </p>
        </div>

        <div>
          <h4
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "11px",
              letterSpacing: "0.3em",
              color: "rgba(201,169,110,0.7)",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            NAVIGATE
          </h4>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                data-ocid="footer.link"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "14px",
                  color: "rgba(232,232,232,0.45)",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => setColor(e.currentTarget, "#c9a96e")}
                onMouseLeave={(e) =>
                  setColor(e.currentTarget, "rgba(232,232,232,0.45)")
                }
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "11px",
              letterSpacing: "0.3em",
              color: "rgba(201,169,110,0.7)",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            GET IN TOUCH
          </h4>
          <a
            href="tel:+919711192390"
            data-ocid="footer.link"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "14px",
              color: "rgba(232,232,232,0.45)",
              textDecoration: "none",
              transition: "color 0.3s ease",
              display: "block",
              marginBottom: "8px",
            }}
            onMouseEnter={(e) => setColor(e.currentTarget, "#c9a96e")}
            onMouseLeave={(e) =>
              setColor(e.currentTarget, "rgba(232,232,232,0.45)")
            }
          >
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ color: "#c9a96e", fontSize: "15px" }}>📞</span>+91
              97111 92390
            </span>
          </a>
          <a
            href="mailto:mayan050215@gmail.com"
            data-ocid="footer.link"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "14px",
              color: "rgba(232,232,232,0.45)",
              textDecoration: "none",
              transition: "color 0.3s ease",
              display: "block",
              marginBottom: "8px",
            }}
            onMouseEnter={(e) => setColor(e.currentTarget, "#c9a96e")}
            onMouseLeave={(e) =>
              setColor(e.currentTarget, "rgba(232,232,232,0.45)")
            }
          >
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ color: "#c9a96e", fontSize: "15px" }}>✉</span>
              mayan050215@gmail.com
            </span>
          </a>
          <a
            href="https://twitter.com/Not_Prisha7"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="footer.link"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "14px",
              color: "rgba(232,232,232,0.45)",
              textDecoration: "none",
              transition: "color 0.3s ease",
              display: "block",
              marginBottom: "8px",
            }}
            onMouseEnter={(e) => setColor(e.currentTarget, "#c9a96e")}
            onMouseLeave={(e) =>
              setColor(e.currentTarget, "rgba(232,232,232,0.45)")
            }
          >
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ color: "#c9a96e", fontSize: "15px" }}>𝕏</span>
              @Not_Prisha7
            </span>
          </a>
        </div>
      </div>

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          paddingTop: "24px",
          borderTop: "1px solid rgba(201,169,110,0.1)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: "12px",
            color: "rgba(232,232,232,0.3)",
            margin: 0,
          }}
        >
          © {new Date().getFullYear()} NEXURA_VOYAGE. All rights reserved.
        </p>
        <p
          style={{
            fontFamily: "'Cormorant SC', 'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontWeight: 600,
            fontSize: "16px",
            color: "#d4af37",
            margin: 0,
            textAlign: "right",
            textShadow:
              "0 0 12px rgba(212,175,55,0.8), 0 0 30px rgba(212,175,55,0.4)",
            letterSpacing: "0.08em",
          }}
        >
          Lead Visionary &amp; CEO — Prisha Singh &amp; Caylus Laroche
        </p>
        <p
          style={{
            fontFamily: "'Cormorant SC', 'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontWeight: 600,
            fontSize: "16px",
            color: "#d4af37",
            margin: 0,
            textAlign: "right",
            textShadow:
              "0 0 12px rgba(212,175,55,0.8), 0 0 30px rgba(212,175,55,0.4)",
            letterSpacing: "0.08em",
          }}
        >
          Creative Director — Kobayashi Kobori
        </p>
      </div>
    </footer>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      style={{
        background: "#020409",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <StarfieldCanvas />
      <CustomCursor />
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.6s ease",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Navbar />
        <main>
          <HeroSection />
          <MarqueeBanner />
          <TacticsSection />
          <PodcastSection />
          <AboutSection />
          <StatsSection />
          <ProtectSection />
          <QuoteSection />
          <VisitorSignupSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
