import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: string;
  className?: string;
}

export function CountUp({ value, className = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState("0");
  const [started, setStarted] = useState(false);

  // Extract numeric part
  const numMatch = value.match(/(\d+)/);
  const numericVal = numMatch ? Number.parseInt(numMatch[1]) : 0;
  const prefix = value.replace(/\d.*/, "");
  const suffix = value.replace(/^[^\d]*\d+/, "");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += numericVal / steps;
      if (current >= numericVal) {
        setDisplayed(value);
        clearInterval(timer);
      } else {
        setDisplayed(`${prefix}${Math.floor(current)}${suffix}`);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [started, numericVal, value, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {displayed}
    </span>
  );
}
