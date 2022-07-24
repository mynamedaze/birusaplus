jQuery(document).ready(function () {

  let closeBtn = document.getElementsByClassName('close-btn');
  let popup = document.getElementsByClassName('popup');
  let dOverlay = document.getElementsByClassName('d-overlay');
  let popupSuccess = document.getElementsByClassName('popup-success');

  $(closeBtn).click(function () {
    $(popup).fadeOut(300);
    setTimeout(function () {
      $(dOverlay).fadeOut(300);
    }, 300);
  });
  /*brands*/
  if (jQuery('.brands__list')) {

    jQuery(".brands__list").owlCarousel({
      responsive: {
        0: {
          items: 2,
          margin: 10,
          loop: true,
          dots: false
        },
        992: {
          items: 5,
          mouseDrag: false,
          touchDrag: false
        }
      }
    });

    let popupBrandName = document.getElementById('popup-brand-name');
    let popupBrandTel = document.getElementById('popup-brand-tel');

    $(popupBrandTel).inputmask("+X (999) 999-9999", {
      definitions: {
        "X": {
          validator: "[7-9]",
        }
      },
      oncomplete: function(){
        $(this).val('+7' + $(this).val().substring(2));
      }
    });

    let brands = document.getElementsByClassName('brands__brand');
    brands = Array.prototype.slice.call(brands);

    let popupBrandBrand = document.getElementById('popup-brand-brand');

    let brandPopup = document.getElementsByClassName('popup-brand');

    brands.forEach(function (item, index) {
      $(item).click(function () {
        popupBrandBrand.textContent = item.dataset.brand;
        $(dOverlay).fadeIn(300);
        $('#popup-brand-input-brand').val(item.dataset.brand);
        setTimeout(function () {
          $(brandPopup).fadeIn(300);
        }, 300);
      });
    });

    let popupBrandFormId = $('#popup-brand-form-id');

    popupBrandFormId.submit(function (ev) {
      $.ajax({
        type: popupBrandFormId.attr('method'),
        url: popupBrandFormId.attr('action'),
        data: popupBrandFormId.serialize(),
        success: function (data) {
          $(brandPopup).fadeOut(300);
          setTimeout(function () {
            $(popupSuccess).fadeIn(300);
            setTimeout(function () {
              $(popupSuccess).fadeOut(300);
              setTimeout(function () {
                $(dOverlay).fadeOut(300);
              }, 300);
            }, 2000);
          },300);
          ym(55775395, 'reachGoal', 'order');
          $(popupBrandName).val('');
          $(popupBrandTel).val('');
        }
      });
      ev.preventDefault();
    });

    let brandName = document.getElementById('brand-form-input-name');
    let brandTel = document.getElementById('brand-form-input-tel');

    $(brandTel).inputmask("+X (999) 999-9999", {
      definitions: {
        "X": {
          validator: "[7-9]",
        }
      },
      oncomplete: function(){
        $(this).val('+7' + $(this).val().substring(2));
      }
    });

    let brandFormId = $('#brand-form-id');

    brandFormId.submit(function (ev) {
      $.ajax({
        type: brandFormId.attr('method'),
        url: brandFormId.attr('action'),
        data: brandFormId.serialize(),
        success: function (data) {
          $(dOverlay).fadeIn(300);
          setTimeout(function () {
            $(popupSuccess).fadeIn(300);
            setTimeout(function () {
              $(popupSuccess).fadeOut(300);
              setTimeout(function () {
                $(dOverlay).fadeOut(300);
              }, 300);
            }, 2000);
          },300);
          ym(55775395, 'reachGoal', 'order');
          $(brandName).val('');
          $(brandTel).val('');
        }
      });
      ev.preventDefault();
    });

  }
  /*/brands*/
  /*entity*/
  let entityName = document.getElementById('entity-form-input-name');
  let entityTel = document.getElementById('entity-form-input-tel');

  $(entityTel).inputmask("+X (999) 999-9999", {
    definitions: {
      "X": {
        validator: "[7-9]",
      }
    },
    oncomplete: function(){
      $(this).val('+7' + $(this).val().substring(2));
    }
  });

  let entityFormId = $('#entity-form-id');

  entityFormId.submit(function (ev) {
    $.ajax({
      type: entityFormId.attr('method'),
      url: entityFormId.attr('action'),
      data: entityFormId.serialize(),
      success: function (data) {
        $(dOverlay).fadeIn(300);
        setTimeout(function () {
          $(popupSuccess).fadeIn(300);
          setTimeout(function () {
            $(popupSuccess).fadeOut(300);
            setTimeout(function () {
              $(dOverlay).fadeOut(300);
            }, 300);
          }, 2000);
        },300);
        ym(55775395, 'reachGoal', 'order');
        $(entityName).val('');
        $(entityTel).val('');
      }
    });
    ev.preventDefault();
  });
  /*/entity*/

  /*переделываем работу формы поломок*/

  if ($('#intro-form')) {
    let introFormTelInput = document.getElementById('intro-form-tel-input');
    let introFormBreakCustomInput = document.getElementById('intro-form-break-custom-input');

    $(introFormTelInput).inputmask("+X (999) 999-9999", {
      definitions: {
        "X": {
          validator: "[7-9]",
        }
      },
      oncomplete: function(){
        $(this).val('+7' + $(this).val().substring(2));
      }
    });

    let introForm = $('#intro-form');

    introForm.submit(function (ev) {
      ev.preventDefault();
      $.ajax({
        type: introForm.attr('method'),
        url: introForm.attr('action'),
        data: introForm.serialize(),
        success: function (data) {
          $(dOverlay).fadeIn(300);
          setTimeout(function () {
            $(popupSuccess).fadeIn(300);
            setTimeout(function () {
              $(popupSuccess).fadeOut(300);
              setTimeout(function () {
                $(dOverlay).fadeOut(300);
              }, 300);
            }, 2000);
          },300);
          ym(55775395, 'reachGoal', 'order');
          $(introFormTelInput).val('');
          $(introFormBreakCustomInput).val('');
        }
      });
    });

  }
  /*/переделываем работу формы поломок*/

});