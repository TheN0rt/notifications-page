(function () {
   document.querySelector('#notif-count').textContent = document.querySelectorAll('.new').length;
   
   const readAllNotif = (li) => {
      li.classList.remove('new')
         document.querySelector('#notif-count').textContent = document.querySelectorAll('.new').length;
   }

   document.querySelectorAll('.new').forEach(li => {
      li.addEventListener('click', () => readAllNotif(li))
   })

   document.querySelector('.notification__read').onclick = () => {
      document.querySelectorAll('.new').forEach(li => readAllNotif(li))
   }
})()
   
