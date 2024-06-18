$(function() {
    $(window).scroll(function() {

      if ($(this).scrollTop() > 300) {
        $('.cargo').addClass('changebg1')
      }
      if ($(this).scrollTop() < 300) {
        $('.cargo').removeClass('changebg1')
      }


      if ($(this).scrollTop() > 650) {
        $('.cargo').addClass('changebg2')
      }
      if ($(this).scrollTop() < 650) {
        $('.cargo').removeClass('changebg2')
      }

      if ($(this).scrollTop() > 1200) {
        $('.cargo').addClass('changebg3')
      }
      if ($(this).scrollTop() < 1200) {
        $('.cargo').removeClass('changebg3')
      }

      if ($(this).scrollTop() > 1750) {
        $('.cargo').addClass('changebg4')
      }
      if ($(this).scrollTop() < 1750) {
        $('.cargo').removeClass('changebg4')
      }


      if ($(this).scrollTop() > 2000) {
        $('.cargo').addClass('changebg5')
      }
      if ($(this).scrollTop() < 2000) {
        $('.cargo').removeClass('changebg5')
      }

      if ($(this).scrollTop() > 2500) {
        $('.cargo').addClass('changebg6')
      }
      if ($(this).scrollTop() < 2500) {
        $('.cargo').removeClass('changebg6')
      }

      if ($(this).scrollTop() > 2800) {
        $('.cargo').addClass('changebg7')
      }
      if ($(this).scrollTop() < 2800) {
        $('.cargo').removeClass('changebg7')
      }

      if ($(this).scrollTop() > 3100) {
        $('.cargo').addClass('changebg8')
      }
      if ($(this).scrollTop() < 3100) {
        $('.cargo').removeClass('changebg8')
      }

      if ($(this).scrollTop() > 3400) {
        $('.cargo').addClass('changebg9')
      }
      if ($(this).scrollTop() < 3400) {
        $('.cargo').removeClass('changebg9')
      }

      if ($(this).scrollTop() > 3700) {
        $('.cargo').addClass('changebg10')
      }
      if ($(this).scrollTop() < 3700) {
        $('.cargo').removeClass('changebg10')
      }

      if ($(this).scrollTop() > 4000) {
        $('.cargo').addClass('changebg11')
      }
      if ($(this).scrollTop() < 4000) {
        $('.cargo').removeClass('changebg11')
      }

      if ($(this).scrollTop() > 4600) {
        $('.cargo').addClass('changebg12')
      }
      if ($(this).scrollTop() < 4600) {
        $('.cargo').removeClass('changebg12')
      }

    });
  });