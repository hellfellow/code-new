/*
window.onscroll=()=>{
const navbar=document.querySelector('header')
if (window.pageYOffset !== 0){navbar.style.boxShadow = '0 0 10px black';}
else {navbar.style.boxShadow = '';}}
*/
var navPos = $('.nav').offset().top;
  var lastPos = 0;


  $(window).on('scroll', function () {

    var pos = $(window).scrollTop();
      if (pos >= navPos + $('.nav').height() && lastPos < pos) {
        $('.nav').css({"position":"fixed"});$('.nav').addClass('open');
      }
      if (pos < navPos && lastPos > pos) {
        $('.nav').css({"position":"relative"});$('.nav').removeClass('open');
      }
      lastPos = pos;
  });
var pos = $(window).scrollTop();
var hello =$('.1').offset().top;
var skills =$('.2').offset().top;
var portfolio =$('.3').offset().top;
var contact =$('.4').offset().top;

  $(window).on('scroll', function () {
if(pos>hello && pos<skills){$('.nav-item').addClass('name')}
if(pos<hello || pos>skills){$('.nav-item').removeClass('name')}  
  });



/*
window.onscroll=()=>{
if (window.pageYOffset !== 0){
$( ".photo" ).animate({ "top": "+=50px" }, "fast" );};};


$('.uppercard').mouseenter(function()
    {$('.uppercard').animate({'top': '-=20px'},'fast');}).mouseleave(function(){$('.uppercard').animate({'top': '+=20px'},'fast');});
*/


document.addEventListener('click',function(e){
	if(e.target.className.indexOf('slide')>=0){

		event.preventDefault();
        const id = $(e.target).attr('href'),
		      top  = $(id).offset().top;


		$('body,html').animate({scrollTop: top}, 1000);
	};
});

//$('.hi').html('Привет')



//анимация  движения вврех и тени входного блока
/*
$('.uppercard').mouseenter(function()
    {$('.uppercard').animate({'top': '-=20px'},'fast');}).mouseleave(function(){$('.uppercard').animate({'top': '+=20px'},'fast');});


$('.uppercard').mouseenter(function()
    {$('.uppercard').css('boxShadow', '8px 8px 8px black')}).mouseleave(function(){$('.uppercard').css('boxShadow', '5px 5px 5px black')});


//Модальное окно при переходе к другим  проектам
$('.portfolio-card-photo').on('click',() => open_modal());

  const OffScroll = () => {
    const winScrollTop = $(window).scrollTop();
    $(window).bind('scroll', () => $(window).scrollTop(winScrollTop));
  };

  const close_modal = () => {
    $('.portfolio-card-hidden').css({"display":"none"});
    $('.portfolio-card-background').css({"display":"none"});
    $(window).unbind('scroll');
  };

  const open_modal = () => {
    $('.portfolio-card-hidden').css({"display":"flex"});
    $('.portfolio-card-background').css({"display":"flex"});
    OffScroll();
    $(document).on('click', (e) => {
      const { className } = e.target;
      if (className === 'portfolio-card-background') {
        close_modal();
      };
    });
  };
 */
$('.button').on('click',()=>{
	if (this.id == $('.enter').id-1) {$('.enter').addClass('enter-width')}
})