const tabs = document.querySelectorAll('.tab-btn');
const all_content = document.querySelectorAll('.content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        tabs.forEach(tab => { tab.classList.remove('active') });
        tab.classList.add('active');
    })
    
    ver line = document.querySelector('.line');
    line.style.width = e.target.offsetwidth + "px";
    line.style.left = e.target.offsetwidth + "px";
})



