document.addEventListener('DOMContentLoaded', async () => {
    // 1. Inject Header
    try {
        const headerRes = await fetch('header.html');
        if (headerRes.ok) {
            const headerHtml = await headerRes.text();
            document.getElementById('header-inject').innerHTML = headerHtml;
        }
    } catch (e) {
        console.error('Failed to load header', e);
    }

    // 2. Inject Footer
    try {
        const footerRes = await fetch('footer.html');
        if (footerRes.ok) {
            const footerHtml = await footerRes.text();
            document.getElementById('footer-inject').innerHTML = footerHtml;
            updateTime();
        }
    } catch (e) {
        console.error('Failed to load footer', e);
    }

    // 3. Initialize Animations
    initAnimations();

    // 4. Initialize Cursor
    initCursor();

    // 6. Mobile Menu Toggle
    initMobileMenu();

    console.log('⚡ Power Trio System Online');
});

function updateTime() {
    const timeEl = document.getElementById('utc-time');
    if (timeEl) {
        const now = new Date();
        timeEl.textContent = now.toUTCString();
    }
}

function initMobileMenu() {
    const toggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('mobile-nav');

    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });

    // Close on link click
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}
