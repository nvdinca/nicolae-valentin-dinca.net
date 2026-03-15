"use client";

import { motion, useReducedMotion } from "framer-motion";

type AnimateInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article";
};

export default function AnimateIn({
  children,
  className = "",
  delay = 0,
  as: Component = "div",
}: AnimateInProps) {
  const reduceMotion = useReducedMotion();
  const MotionComponent = motion[Component] as typeof motion.div;

  return (
    <MotionComponent
      initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.4, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}
