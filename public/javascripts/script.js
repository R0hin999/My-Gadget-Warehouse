// const searchInput = document.querySelector('.search')
// /// Update search term when typing
// searchInput.addEventListener('keyup', displayMatches)




// $('.nav-btns li a').click(function() {
//     $('.nav-btns li a').removeClass('active').addClass('inactive');
//     $(this).removeClass('inactive').addClass('active');
//   });


// $('.outsidenav li a').click(function() {
//     $('.outsidenav li a').removeClass('active').addClass('inactive');
//     $(this).removeClass('inactive').addClass('active');
//   });


function closemenu(){
  document.getElementById('menu').style.display='none';
  
  document.getElementById('cross').style.display='none';
  document.getElementById('intxt').style.display='none';
  document.getElementById('intxt2').style.display='none';
  document.body.style.overflow = 'visible';
  document.getElementById('vid').style.display='none';
  // document.getElementById('fronttxt').style.display='flex';   
  // document.getElementById('ci').style.display='flex';   
   
  }
  
  function openmenu(){
      document.getElementById('menu').style.display='flex';
      document.getElementById('cross').style.display='flex';
      document.getElementById('intxt').style.display='flex';
      
      document.getElementById('intxt2').style.display='flex';
      document.body.style.overflow = 'hidden';
      
      document.getElementById('vid').style.display='flex';
      
      // document.getElementById('fonttext').style.display='flex';
      // document.getElementById('ci').style.display='none';
   
  } 