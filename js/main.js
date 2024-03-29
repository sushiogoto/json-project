// Generated by CoffeeScript 1.8.0
(function() {
  $(function() {
    return $("form").submit((function(_this) {
      return function(event) {
        var name, year;
        event.preventDefault();
        name = $("#name").val();
        year = $("#year").val();
        return $.ajax({
          url: "http://www.omdbapi.com/?s=" + name,
          dataType: "json"
        }).done(function(data) {
          var movie, movieArraySearch, _i, _len, _ref;
          console.log("Success");
          console.log(data);
          console.log("movie name: " + data.Title);
          _ref = data.Search;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            movie = _ref[_i];
            movieArraySearch = movie.Title.split(' ').join('+');
            $(".suggestions > ul").append(("<li><a href='http://www.google.com/search?as_q=" + movieArraySearch + "'>") + movie.Title + "</a></li>");
          }
          $("#title > span").html(data.Title);
          return $("#year > span").html(data.Year);
        });
      };
    })(this));
  });

}).call(this);

//# sourceMappingURL=main.js.map
