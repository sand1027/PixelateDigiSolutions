import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function PacmanAnimation() {
  const [pacmen, setPacmen] = useState([]);
  const controls = useAnimation();

  useEffect(() => {
    const colors = ["#8a2be2", "#00bfff", "#00ff7f", "#ffd700", "#ff69b4"];
    const newPacmen = Array(3)
      .fill()
      .map(() => ({
        id: Math.random(),
        top: Math.random() * 80 + 10,
        left: Math.random() * 80 + 10,
        dots: Array(5)
          .fill()
          .map(() => ({
            id: Math.random(),
            offset: Math.random() * 100,
            color: colors[Math.floor(Math.random() * colors.length)],
          })),
      }));

    setPacmen(newPacmen);

    const animate = async () => {
      while (true) {
        await controls.start({
          x: [0, 100, 0],
          transition: { duration: 4, repeat: Infinity, ease: "linear" },
        });
      }
    };

    animate();
  }, [controls]);

  return (
    <>
      {pacmen.map((pacman) => (
        <div
          key={pacman.id}
          className="absolute"
          style={{ top: `${pacman.top}%`, left: `${pacman.left}%` }}
        >
          <motion.div
            className="pacman"
            animate={controls}
            variants={{
              eat: {
                clipPath: [
                  "polygon(50% 50%, 100% 0%, 100% 35%, 50% 50%, 100% 65%, 100% 100%, 50% 50%)",
                  "polygon(50% 50%, 100% 10%, 100% 35%, 50% 50%, 100% 65%, 100% 90%, 50% 50%)",
                  "polygon(50% 50%, 100% 20%, 100% 35%, 50% 50%, 100% 65%, 100% 80%, 50% 50%)",
                ],
                transition: { duration: 0.7, repeat: Infinity },
              },
            }}
            initial="eat"
          />
          {pacman.dots.map((dot) => (
            <motion.div
              key={dot.id}
              className="dot absolute"
              style={{ left: `${dot.offset}px`, backgroundColor: dot.color }}
              animate={{
                opacity: [1, 0.5, 1],
                scale: [1, 0.8, 1],
                transition: { duration: 0.7, repeat: Infinity },
              }}
            />
          ))}
        </div>
      ))}
    </>
  );
}
