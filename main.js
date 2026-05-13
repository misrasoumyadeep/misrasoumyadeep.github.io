const menuButton = document.querySelector('[data-menu-button]');
const mobilePanel = document.querySelector('[data-mobile-panel]');
if (menuButton && mobilePanel) {
  menuButton.addEventListener('click', () => {
    const open = mobilePanel.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
