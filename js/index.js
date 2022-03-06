const openBtn = document.getElementById('hamburg');
const closeBtn = document.getElementById('closeImg');
const menu = document.getElementById('menuM')


openBtn.addEventListener('click' , ()=> {
   menu.style.display = 'block'
})

closeBtn.addEventListener('click' , () => {
   menu.style.display = 'none'
})