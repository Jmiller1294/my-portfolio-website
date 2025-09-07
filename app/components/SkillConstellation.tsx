"use client";
import React, { useRef, useEffect, useState } from "react";
import ForceGraph2D, { ForceGraphMethods } from "react-force-graph-2d";

const data = {
  nodes: [
    { id: "Python", x: 0, y: 0 },
    { id: "Excel(Pivot Tables, VLookUp)", x: 10, y: 80 },
    { id: "Google/MS Office Suite", x: 10, y: 60 },
    { id: "SQL", x: -100, y: 130 },
    { id: "Databases", x: -80, y: 150 },
    { id: "Tableau", x: -100, y: 20 },
    { id: "CRMs", x: 70, y: -40 },
    { id: "Next.js", x: 100, y: 100 },
    { id: "Windows/MacOS", x: -50, y: 150 },
    { id: "PowerBI", x: 60, y: 100 },
  ],
  links: [
    { source: "Python", target: "SQL" },
    { source: "Python", target: "Next.js" },
    { source: "Python", target: "Databases" },
    { source: "Excel(Pivot Tables, VLookUp)", target: "Google/MS Office Suite" },
    { source: "Tableau", target: "PowerBI" },
    { source: "Windows/MacOS", target: "CRMs" },
  ],
};

// Generate random star positions
const starCount = 350;
const stars = Array.from({ length: starCount }, () => ({
  x: Math.random() * 2000 - 1000,
  y: Math.random() * 2000 - 1000,
  radius: Math.random() * 1.5 + 0.5,
}));

export default function SkillConstellation() {
  const fgRef = useRef<ForceGraphMethods>(undefined);
  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 800,
    height: typeof window !== "undefined" ? window.innerHeight : 600,
  });

   useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  

  return (
    <div className="h-svh w-full bg-black rounded overflow-x-hidden">
      <ForceGraph2D
        width={dimensions.width}
        height={dimensions.height}
        ref={fgRef}
        graphData={data}
        nodeLabel="id"
        nodeAutoColorBy="id"
        backgroundColor="#000"
        enableZoomInteraction={false}
        linkColor={() => "rgba(255,255,255,0.3)"}
        onRenderFramePre={(ctx, globalScale) => {
          // draw stars before anything else
          ctx.save();
          ctx.fillStyle = "#fff";
          stars.forEach(star => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
            ctx.fill();
          });
          ctx.restore();
        }}
        nodeCanvasObject={(node, ctx) => {
          ctx.fillStyle = node.color!;
          ctx.beginPath();
          ctx.arc(node.x!, node.y!, 6, 0, 2 * Math.PI, false);
          ctx.fill();
          ctx.fillStyle = "#fff";
          ctx.font = "10px Sans-Serif";
          ctx.fillText(node.id as string, node.x! + 8, node.y! + 4);
        }}
      />
    </div>
  );
}
