
$(function(){
  // HIDE MOBILE MENU AFTER CLIKING ON A LINK
  $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
});

var vm = new Vue({

    el: "#body",
    data : {
        teamZoom: 0,
    },
    methods : {
    }

})
