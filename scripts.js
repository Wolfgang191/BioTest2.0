    
    
    
    const menuBtn = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');

    menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');   // slide sidebar in/out
    menuBtn.classList.toggle('hidden');   // hide/show menu button
});