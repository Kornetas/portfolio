import React from "react";
import { motion } from "framer-motion";

export default function StaggeredList({
  children,
  stagger = 0.08,
  duration = 0.4,
  from = "bottom",
  className = "",
  animate = true,
}) {
   // Choose animation direction based on the "from" prop
  const directions = {
    bottom: { y: 20, x: 0 },
    top: { y: -20, x: 0 },
    left: { x: -20, y: 0 },
    right: { x: 20, y: 0 },
  };
  const direction = directions[from] || directions.bottom;

  return (
    <div className={className}>
           {/* Map each child to a staggered animation using framer-motion */}
      {React.Children.map(children, (child, idx) => (
        <motion.div
          initial={animate ? { opacity: 0, ...direction } : false}
          animate={animate ? { opacity: 1, y: 0, x: 0 } : false}
          transition={
            animate ? { delay: stagger * idx, duration } : { duration: 0 }
          }
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
