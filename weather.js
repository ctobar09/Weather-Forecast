$(document).ready(function(){

    $("#searchBtn").click(function(){

        var city = $("#city").val();

            $.ajax({

                queryUrl: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" +
                "&APPID=b4c0df4313eab8d2235e613c40604980",
                method: "GET"

                })
                
                .then(function(response){
                    var results = response.data;

                    console.log(results);
                })

            })
}); 
        