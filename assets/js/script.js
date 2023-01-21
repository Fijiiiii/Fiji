$(function(){
  $('.skill').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 4,
    arrows:false,
    dots:false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots:true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
          
        }
      },
      {
        breakpoint: 425,
        settings: {
          arrows: false,
          dots:true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
        }
      }
    ]
  });
}
);

$(function () {
  $(document).on("load scroll", function() {
    const navbar = document.querySelector('nav');
    document.onscroll = () => {
    if (window.scrollY > 0) {
        navbar.classList.add('stix');
    } else {
        navbar.classList.remove('stix');
    }
};
  });
});
const navbar = document.querySelector('nav');
window.onload = () => {
  if (window.scrollY > 100) {
    navbar.classList.add('stix');
} else {
    navbar.classList.remove('stix');
}
}



var damn = document.getElementById('damn');
damn.addEventListener('click', function(e){
  e.preventDefault()
  var name = document.getElementById('Name').value;
  var email = document.getElementById('Email').value;
  var subject = document.getElementById('Subject').value;
  var message = document.getElementById('Message').value;
  var body = 'name:' + name + ' <br/> email: ' + email + ' <br/> subject: ' + subject + ' <br/> message: ' + message;
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "carloquila12@gmail.com",
    Password : "rehfqiznapltllkg",
    To : 'carloquila12@gmail.com',
    From : email,
    Subject : subject,
    Body : body
  }).then(
    message => alert(message)
  );
})