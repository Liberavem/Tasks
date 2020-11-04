$('#test').click(function(){
    var text = $('.white-space-is-dead').val();
    text = text.replace(/\s{2,}/g, ' ');
    $('.white-space-is-dead').val(text);
  });
  
  $('.info__add').click(function() {
    
    $(this).parent().append($('<div/>').append($
    ('<button/>',{
        'class':'del',
        'text': 'DELETE'
    }),
    ('<input/>'), 
    ('<input/>')
    ));
    
    $('.del').click(function(){
      $(this).parent('div').remove();
    });
  });