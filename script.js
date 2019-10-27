$(document) .ready(function() {
    $('#submit').click(function()|{
        var cityName=$('input').val();
        var weatherURL="http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units=metric&appid=54fa5b40f77ee5f294c70a3cc2cd4ce9";

        console.log(weatherURL);

        $.ajax({
            url:weatherURL,
            sucess:function(result){
                console.log(result);

                var html;
                var type = $('#select').val();
                var label = $('#select options:selected').text();

                switch()type{
                    case 'main':
                    var main = result.main;
                    html='<ul>'+'<li><b>Temperature:</b>'+ '<em>(min:'+main.temp_min+, max: ')</em></li>'
                    
                }

            }

        })
        

    }
