import { motion } from "motion/react"; 
interface SeekRLogoProps {
  /** Tailwind height class — kept for API compat */
  height?: string;
  className?: string;
  /** Visual size variant */
  size?: "sm" | "md" | "lg";
}

const fontSizeMap: Record<string, string> = {
  sm: "0.9rem",
  md: "clamp(1.008rem, 2.016vw, 1.44rem)",
  lg: "clamp(1.498rem, 4.608vw, 2.88rem)",
};

/**
 * SeekR brand wordmark — white text matching the hero headline style.
 */
export function SeekRLogo({
  height = "h-40",
  className = "",
  size = "lg",
}: SeekRLogoProps) {
  return (
    <motion.h4
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative inline-block leading-[1.08] tracking-tight text-white"
      style={{
        fontSize: fontSizeMap[size],
        textShadow: "0 1px 10px rgba(0,0,0,0.45), 0 1px 3px rgba(0,0,0,0.3)",
      }}
    >
      <img
        src={"/Flight_LOGO.png"}
        alt=""
        aria-hidden
        draggable={false}
        style={{
          position: "absolute",
          height: "2.1em",
          width: "auto",
          top: "30%",
          left: "68%",
          transform: "translate(-50%, -52%)",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 0,
        }}
      />
      <span style={{ position: "relative", zIndex: 1 }}>
        SeekR
      </span>
    </motion.h4>
  );
}