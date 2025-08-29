import { motion } from "framer-motion";

export default function CircleArrows() {
  const polarToCartesian = (cx, cy, r, angleDeg) => {
    const a = (angleDeg - 90) * (Math.PI / 180);
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
  };

  // NOTE: start -> end (this draws the arc in the intended direction)
  const describeArc = (cx, cy, r, startAngle, endAngle) => {
    const start = polarToCartesian(cx, cy, r, startAngle);
    const end = polarToCartesian(cx, cy, r, endAngle);
    const largeArcFlag = Math.abs(endAngle - startAngle) <= 180 ? "0" : "1";
    const sweepFlag = "1"; // sweepFlag = 1 draws the arc from startAngle -> endAngle
    return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} ${sweepFlag} ${end.x} ${end.y}`;
  };

  return (
    <div className="relative w-64 h-64 flex items-center justify-center">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        className="w-full h-full"
        animate={{ rotate: 360 }}   /* anticlockwise */
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <defs>
             {/* gradient definition */}
          <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B0E199" stopOpacity="0.6" /> 
            <stop offset="100%" stopColor="#B0E199" stopOpacity="0.8" />
          </linearGradient>

          <marker
            id="arrowhead"
            markerWidth="40"
            markerHeight="40"
            refX="5"
            refY="10"
            orient="auto"
            markerUnits="userSpaceOnUse"
          >
            {/* triangle pointing to the right (marker will align with path tangent) */}
            <path d="M0,0 L5,20 L10,10 Z" fill="url(#greenGradient)" />
          </marker>
        </defs>

        {/* small equal gaps (each arc covers 80°) */}
        <path d={describeArc(100, 100, 90, 0, 80)}
              fill="none" stroke="url(#greenGradient)" strokeWidth="8" markerEnd="url(#arrowhead)" />
        <path d={describeArc(100, 100, 90, 90, 170)}
              fill="none" stroke="url(#greenGradient)" strokeWidth="8" markerEnd="url(#arrowhead)" />
        <path d={describeArc(100, 100, 90, 180, 260)}
              fill="none" stroke="url(#greenGradient)" strokeWidth="8" markerEnd="url(#arrowhead)" />
        <path d={describeArc(100, 100, 90, 270, 350)}
              fill="none" stroke="url(#greenGradient)" strokeWidth="8" markerEnd="url(#arrowhead)" />
      </motion.svg>
    </div>
  );
}
