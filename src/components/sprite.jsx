import { useEffect, useRef } from "react";

const SpriteCanvas = () => {
    const canvasRef = useRef(null);
    const frameRef = useRef(0);
    const const1Ref = useRef(0);
    const playerImage = new Image();
    playerImage.src = "./cat.png";

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        canvas.width = 200;
        canvas.height = 200;

        const drawPlayer = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(
                playerImage,
                const1Ref.current * 128.14,
                0 * 128,
                128,
                128,
                0,
                0,
                canvas.width,
                canvas.height
            );

            if (frameRef.current < 30) {
                frameRef.current++;
                const1Ref.current = 1;
            } else if (frameRef.current < 60) {
                frameRef.current++;
                const1Ref.current = 0;
            } else {
                frameRef.current = 0;
            }

            requestAnimationFrame(drawPlayer);
        };

        playerImage.onload = () => {
            drawPlayer(); 
        };
    }, []);

    return <canvas ref={canvasRef} />;
};

export default SpriteCanvas;
