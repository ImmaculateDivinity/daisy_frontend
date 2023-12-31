// Timeline.tsx
import React from "react";

interface TimelineProps {
  children: React.ReactNode[];
}

const Timeline: React.FC<TimelineProps> = ({ children }) => {
  return (
    <div className="timeline-container">
      {children.map((child, index) => (
        <React.Fragment key={index}>{child}</React.Fragment>
      ))}
    </div>
  );
};

export default Timeline;
