import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function AnimatedBackground() {
    const particlesInit = async (engine) => {
        await loadSlim(engine);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: { color: "#031013" },
                particles: {
                    number: { value: 50 },
                    color: { value: "#ffffff" },
                    shape: { type: "circle" },
                    opacity: { value: 0.5, random: true },
                    size: { value: 3, random: true },
                    move: {
                        enable: true,
                        speed: 0.5,
                        direction: "top",
                        random: true,
                        outModes: { default: "out" },
                    },
                },
            }}
        />
    );
}
