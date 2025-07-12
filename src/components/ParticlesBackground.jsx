import Particles from "@tsparticles/react";
import { loadFull } from "@tsparticles/engine";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: {
          color: { value: "#0f172a" }, // Dark background
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 60,
            density: { enable: true, area: 800 },
          },
          color: { value: "#14b8a6" }, // Teal color for particles
          shape: {
            type: ["char", "circle"],
            character: {
              value: ["0", "1", "=", ">", "<", "{", "}", ";", "if", "else"],
              font: "monospace",
              weight: "400",
              style: "",
            },
          },
          opacity: {
            value: 0.3,
            random: true,
          },
          size: {
            value: 10,
            random: true,
          },
          links: {
            enable: true,
            distance: 140,
            color: "#0ea5e9", // Blue color for links
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            random: false,
            straight: false,
            outModes: { default: "bounce" },
          },
        },
        detectRetina: true,
      }}
      className="absolute top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default ParticlesBackground;