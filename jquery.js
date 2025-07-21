$(document).ready(function () {
  $('.BoxDesc1').click(function () {
    $('.SlideLinkConteudos').slideToggle();
    $('.SlideLinkConteudos').removeClass("displaynone");
    $('.SlideLinkConteudos').toggleClass("NewOrderItens");
    $('.BoxDesc1').toggleClass("ActiveBox");
  });
  $('.BoxDesc2').click(function () {
    $('.SlideLinkExerc').slideToggle();
    $('.SlideLinkExerc').removeClass("displaynone");
    $('.SlideLinkExerc').toggleClass("NewOrderItens");
    $('.BoxDesc2').toggleClass("ActiveBox");
  });
  $('.BoxDesc3').click(function () {
    $('.SlideLinkResolucoes').slideToggle();
    $('.SlideLinkResolucoes').removeClass("displaynone");
    $('.SlideLinkResolucoes').toggleClass("NewOrderItens");
    $('.BoxDesc3').toggleClass("ActiveBox");
  });
  $('.BoxDesc4').click(function () {
    $('.SlideLinkForm').slideToggle();
    $('.SlideLinkForm').removeClass("displaynone");
    $('.SlideLinkForm').toggleClass("NewOrderItens");
    $('.BoxDesc4').toggleClass("ActiveBox");
  });
  $('.AumentarFonte').click(function () {
    $('h1, h2, h3, h4, h5, h6, p, li, a').each(function () {
      let tamanhoAtual = parseInt($(this).css('font-size'));
      let novoTamanho = tamanhoAtual + 1;
      $(this).css('font-size', novoTamanho + 'px');
    });
  });

  $('.DiminuirFonte').click(function () {
    $('h1, h2, h3, h4, h5, h6, p, li, a').each(function () {
      let tamanhoAtual = parseInt($(this).css('font-size'));
      let novoTamanho = tamanhoAtual - 1;
      // Evita que o tamanho fique menor que 10px
      if (novoTamanho >= 10) {
        $(this).css('font-size', novoTamanho + 'px');
      }
    });
  });

  $('.FundoEscuro').click(function () {
    $('html').removeClass('FundoClaro').addClass('FundoEscuro');
    $('h1, h2, h3, h4, h5, h6, p, li, a, ol, ul, img').addClass('TextoBranco');
    $('.BoxDesc').addClass('BoxDark');
  });

  $('.FundoClaro').click(function () {
    $('html').removeClass('FundoEscuro').addClass('FundoClaro');
    $('h1, h2, h3, h4, h5, h6, p, li, a, ol, ul, img').removeClass('TextoBranco');
    $('.BoxDesc').removeClass('BoxDark');
  });

  $('.Desc15').click(function() {
    $('.Explicacao15, .VideoAula15').removeClass('Desativado').addClass('Ativado');
    $('.Explicacao19, .VideoAula19, .Explicacao22, .VideoAula22').addClass('Desativado');
  });

  $('.Desc19').click(function() {
    $('.Explicacao19, .VideoAula19').removeClass('Desativado');
    $('.Explicacao15, .VideoAula15, .Explicacao22, .VideoAula22').addClass('Desativado');
  });

  $('.Desc22').click(function() {
    $('.Explicacao22, .VideoAula22').removeClass('Desativado');
    $('.Explicacao15, .VideoAula15, .Explicacao19, .VideoAula19').addClass('Desativado');
  });

});
