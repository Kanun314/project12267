document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('main-menu');
    menu.classList.toggle('active');
});

const sidebarToggle = document.getElementById('sidebarToggle');
    const categoryFilter = document.getElementById('categoryFilter');
  
    sidebarToggle.addEventListener('click', () => {
      categoryFilter.classList.toggle('show');
    });