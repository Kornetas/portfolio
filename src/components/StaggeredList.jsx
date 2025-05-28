import React from "react";
import { motion } from "framer-motion";

export default function StaggeredList({
  children,
  stagger = 0.08,
  duration = 0.4,
  from = "bottom",
  className = "",
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
          initial={{ opacity: 0, ...direction }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ delay: stagger * idx, duration }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
