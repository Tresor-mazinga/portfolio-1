
/**-------- ISOTOP LIBRARY FILTER---------------- */

$(document).ready(function(){    // Use Ready function

    let $btns=$('.project-area .button-group button'); // Selection of buttons

    $btns.click(function(e){  // call clickEvent function

        $('.project-area .button-group button').removeClass('active'); // remove the active class to the buttons

        e.target.classList.add('active');

        let selector=$(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter:selector

        });

        return false;

    })

    $('.project-area .button-group #btn1').trigger('click');

/**-------- END OF ISOTOP LIBRARY FILTER---------------- */
/**-------- AOS INSTANCE----------- */
 AOS.init();

 $(document).ready(function(){

    $('.col-lg-3').hover(
        function(){
            $(this).animate({
                marginTop:"-=2%",
            },200);
        },
        function(){
            $(this).animate({
                marginTop:"0%"
            },200);
        }
        

    );

 });




      var typed = new Typed('#typed', {
          strings:[
             'Web Developper',
             'Freelancer'
          ],
          typeSpeed: 70,
          backSpeed: 60,
          loop:true
      });












});








