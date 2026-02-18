function initCursor() {
    const cursor = document.createElement('div');
    cursor.id = 'custom-cursor';
    document.body.appendChild(cursor);

    // Style the cursor
    Object.assign(cursor.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '20px',
        height: '20px',
        border: '2px solid var(--accent-primary)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: '9999',
        transform: 'translate(-50%, -50%)',
        transition: 'transform 0.1s ease, width 0.2s, height 0.2s, background-color 0.2s',
        mixBlendMode: 'difference'
    });

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    const animate = () => {
        // Smooth follow
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;

        cursor.style.left = `${outlineX}px`;
        cursor.style.top = `${outlineY}px`;

        requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    // Hover Effects
    const links = document.querySelectorAll('a, button, .cursor-hover');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(2)';
            cursor.style.backgroundColor = 'rgba(99, 102, 241, 0.2)';
        });
        link.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.backgroundColor = 'transparent';
        });
    });
}
