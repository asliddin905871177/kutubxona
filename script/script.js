// DOMContentLoaded event - sayt yuklanganda
document.addEventListener('DOMContentLoaded', () => {
    // Kirish animatsiyasi
    const header = document.querySelector('header');
    header.classList.add('fade-in');

    // Scroll Effektlari
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('hidden'); // Yashirish
        window.addEventListener('scroll', () => {
            if (section.getBoundingClientRect().top < window.innerHeight) {
                section.classList.add('fade-in');
            }
        });
    });

    // Dropdown menyu (mobil qurilmalar uchun)
    const menuButton = document.querySelector('.menu-button');
    const nav = document.querySelector('nav');
    menuButton.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Modal oynani ko'rsatish
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    const modal = document.querySelector('.modal');
    const closeModal = document.querySelector('.close-modal');
    
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            modal.classList.add('show');
        });
    });
    
    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
    });
});
