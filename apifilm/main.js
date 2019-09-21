function searchMovie(){
  $('#movie-list').html('');
  $.ajax({
    url : 'http://omdbapi.com',
    type: 'get',
    datatype: 'json',
    data: {
      'apikey' : '1cbc9091',
      's': $('#search-input').val()

    },
    success: function(result){
      if(result.Response == "True"){

        var movies = result.Search;
        $.each(movies, function(i, data){
          $('#movie-list').append(`
            <div class= col-md-3>
            <div class="card" style="width: 18rem;">
              <img src="`+data.Poster+`" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">`+data.Title+`</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Cras justo odio</li>
              <li class="list-group-item">Dapibus ac facilisis in</li>
              <li class="list-group-item">Vestibulum at eros</li>
            </ul>
            <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>

            `)
        })

        $('#search-input').val('')
      }else{
        $('#movie-list').html(`
          <div class="col">
          <h1 class="text-center">`+
        result.Error+` </h1>
        <div>
        `)
      }
    }
  })
}

$('#search-button').on('click',function(){
  searchMovie();
});

$('#search-input').on('keyup',function(e){
  if(e.which === 13){
    searchMovie();
  }
})
