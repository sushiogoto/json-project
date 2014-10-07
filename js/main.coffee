$ ->
  $("form").submit (event) =>
    event.preventDefault()
    name = $("#name").val()
    year = $("#year").val()
    $.ajax
     url: "http://www.omdbapi.com/?s=#{name}"
     dataType: "json"
    .done (data) ->
      console.log "Success"
      console.log data
      console.log "movie name: " + data.Title
      for movie in data.Search
        movieArraySearch = movie.Title.split(' ').join('+')
        $(".suggestions > ul").append("<li><a href='http://www.google.com/search?as_q=#{movieArraySearch}'>" + movie.Title + "</a></li>")
      $("#title > span").html(data.Title)
      $("#year > span").html(data.Year)
      # if data.Poster != "N/A"
      #   $(".poster").html("<img src=\"#{data.Poster}\" />")
      # else
      #   alert "NO POSTER!"