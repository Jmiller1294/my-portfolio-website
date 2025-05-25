import React, { useRef, useEffect } from "react";
import ForceGraph2D from "react-force-graph-2d";

const data = {
  nodes: [
    { id: "Python" },
    { id: "Pandas" },
    { id: "SQL" },
    { id: "Tableau" },
    { id: "React" },
    { id: "Next.js" },
    { id: "Jupyter" },
    { id: "Data Visualization" },
  ],
  links: [
    { source: "Python", target: "Pandas" },
    { source: "Python", target: "Jupyter" },
    { source: "SQL", target: "Tableau" },
    { source: "React", target: "Next.js" },
    { source: "Python", target: "Data Visualization" },
  ],
};

export default function SkillConstellation() {
  return (
    <div className="h-svh w-svw bg-black rounded">
      <ForceGraph2D
        graphData={data}
        nodeLabel="id"
        nodeAutoColorBy="id"
        backgroundColor="#000"
        linkColor={() => "rgba(255,255,255,0.3)"}
        nodeCanvasObject={(node, ctx) => {
          ctx.fillStyle = node.color;
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
