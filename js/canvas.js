function draw() {
    const canvas = document.getElementById('canvas-drawing-area');
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = "rgb(0, 0, 220, 0.5)";
        ctx.fillRect(75, 75, 100, 100);
        
        ctx.fillStyle = "rgb(220, 0, 0, 0.5)";
        ctx.arc(175, 175, 50, 90, 360);
        ctx.fill();

        ctx.fillStyle = "rgb(0, 128, 0, 0.5)";
        ctx.beginPath();
        ctx.moveTo(0, 100);
        ctx.lineTo(100, 100);
        ctx.lineTo(100, 0);
        ctx.fill();
    }
}

window.addEventListener("load", draw);
