import React from "react";
import { useSpring, animated } from "react-spring";

interface DocumentProps {
  title: string;
  subtitle: string;
  author: string;
  date: string;
  body: string;
}

const calc = (x: number, y: number, rect: DOMRect) => {
  // Normalize the cursor coordinates to be from -0.5 to 0.5
  const xRel = (x - (rect.left + rect.width / 2)) / rect.width; // -0.5 when cursor at left edge, 0.5 at right edge
  const yRel = (y - (rect.top + rect.height / 2)) / rect.height; // -0.5 when cursor at top edge, 0.5 at bottom edge
  const tiltMax = 9; // The maximum tilt angle

  // Inverting the signs for tiltX and tiltY to reverse the tilt direction
  const tiltY = -xRel * tiltMax; // Tilt on Y-axis changes with horizontal movement
  const tiltX = yRel * tiltMax; // Tilt on X-axis changes with vertical movement

  return {
    xys: [tiltX, tiltY, 1.07] as [number, number, number], // Adjust scale if necessary
  };
};

const Document: React.FC<DocumentProps> = ({
  title,
  subtitle,
  author,
  date,
  body,
}) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <animated.div
      className="bg-white text-gray-800 max-w-xl mx-auto my-8 p-8 rounded-lg shadow-lg"
      style={{
        transform: props.xys.interpolate(
          (x, y, s) =>
            `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        ),
      }}
      onMouseMove={({ clientX, clientY, currentTarget }) => {
        const rect = currentTarget.getBoundingClientRect();
        set(calc(clientX, clientY, rect));
      }}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
    >
      <div className="border-2 border-gray-800 p-6 rounded">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <h2 className="text-xl font-semibold">{subtitle}</h2>
          <p className="text-md mb-4">
            {author} - {date}
          </p>
        </div>
        <div className="text-left">
          <p>{body}</p>
        </div>
      </div>
    </animated.div>
  );
};

export default Document;
