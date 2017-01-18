$(function(){
  $('a').on('click', function(e) {
    e.preventDefault();

    $('article').hide().filter('[data-block=' + $(this).attr('data-block') + ']').show();
  });

  var gold = document.getElementById('gold');
  console.table(gold.dataset);
  gold.dataset.block = 'silver';
  gold.dataset.sponsor = "Newman's Own";
  delete gold.dataset.block;
})
