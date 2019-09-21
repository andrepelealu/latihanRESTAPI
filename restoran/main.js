$.getJSON('data/mcd.json',function(data){
  var menu = data.menu;
  // console.log(menu);
function TampilMenu(){
  $.each(menu,function(i, data){
    console.log(data)
    $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3" style="width: 18rem;"><img src="..." class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+ data.nama_menu +'</h5><p class="card-text">test</p><p class="card-text">'+data.harga+'</p><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>');
  });
}

});
TampilMenu();
$('.nav-link').on('click',function(){
  $('.nav-link').removeClass('active');
  $(this).addClass('active');

  var kategori = $(this).html();
  $('h1').html(kategori);


  $.getJSON('data/mcd.json',function(data){
    var menu = data.menu;
    var content = '';

    $.each(menu, function(i,data){
      if(data.kategori == kategori.toLowerCace()){
        content += ''
      }
    })
  })

})
