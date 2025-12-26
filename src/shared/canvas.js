let Canvas;
try {
    Canvas = (await import('canvas')).default;
} catch {
    class CanvasShim {
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }
        getContext() { return null; }
        toDataURL() { return ''; }
    }
    Canvas = {
        createCanvas: (width, height) => new CanvasShim(width, height)
    };
}
export default Canvas;
