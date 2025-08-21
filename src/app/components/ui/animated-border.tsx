import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";

interface AnimatedBorderProps {
  children: React.ReactNode;
  className?: string;
  thickness?: number; // border thickness
  length?: number; // moving segment length
  duration?: number;
  gradientTop?: string;
  gradientRight?: string;
  gradientBottom?: string;
  gradientLeft?: string;
}

const AnimatedBorder = ({
  children,
  className = "",
  thickness = 6,
  length = 60,
  duration = 4,
//   gradientTop = "linear-gradient(90deg, #ff00cc, #3333ff)",
//   gradientRight = "linear-gradient(180deg, #ff9900, #ff0055)",
//   gradientBottom = "linear-gradient(90deg, #00ff99, #00ccff)",
//   gradientLeft = "linear-gradient(180deg, #ffcc00, #ff3300)",
  gradientTop = "linear-gradient(90deg, #65000B, #960018)",
  gradientRight = "linear-gradient(180deg, #960018, #A52A2A)",
  gradientBottom = "linear-gradient(90deg, #A52A2A, #800020)",
  gradientLeft = "linear-gradient(180deg, #800020, #65000B)",

}: AnimatedBorderProps) => {
  const segment = duration / 4;
  const progressRef = useRef(0);

  const topRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);

  const updatePos = (
    el: HTMLDivElement | null,
    axis: "left" | "top" | "right" | "bottom",
    start: number
  ) => {
    if (!el) return;
    const p = (progressRef.current - start + duration) % duration;
    const visible = p >= 0 && p <= segment;

    if (!visible) {
      el.style[axis] = `calc(0% - ${length}px)`;
      el.style.opacity = "0";
      return;
    }

    const ratio = p / segment;
    el.style[axis] = `calc(${Math.min(ratio, 1) * 100}% - ${length}px)`;
    el.style.opacity = "1";
  };

  useAnimationFrame((t) => {
    progressRef.current = (t / 1000) % duration;
    updatePos(topRef.current, "left", 0);
    updatePos(rightRef.current, "top", segment);
    updatePos(bottomRef.current, "right", segment * 2);
    updatePos(leftRef.current, "bottom", segment * 3);
  });

  const transitionStyle = {
    transition: `all ${1000 / 60}ms linear`,
    borderRadius: "4px",
  };

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
        {/* Top */}
        <div
          ref={topRef}
          className="absolute top-0"
          style={{
            background: gradientTop,
            height: `${thickness}px`,
            width: `${length}px`,
            ...transitionStyle,
          }}
        />
        {/* Right */}
        <div
          ref={rightRef}
          className="absolute right-0"
          style={{
            background: gradientRight,
            width: `${thickness}px`,
            height: `${length}px`,
            ...transitionStyle,
          }}
        />
        {/* Bottom */}
        <div
          ref={bottomRef}
          className="absolute bottom-0"
          style={{
            background: gradientBottom,
            height: `${thickness}px`,
            width: `${length}px`,
            ...transitionStyle,
          }}
        />
        {/* Left */}
        <div
          ref={leftRef}
          className="absolute left-0"
          style={{
            background: gradientLeft,
            width: `${thickness}px`,
            height: `${length}px`,
            ...transitionStyle,
          }}
        />
      </div>
      {children}
    </div>
  );
};

export default AnimatedBorder;
