$(document).ready(() => {
// write your code here
    $.getJSON('./data.json', (data) => {
        data.forEach(topSpot => {
            $( ".table" ).after("<tr>" + "<td>" + topSpot.name + "</td>" + "</tr>")
        })
    //    var items = [];
    //    $.each( data, function (key,val) {
    //        $( ".table" ).append("<tr>" + "<td>" + val.name + "</td>" + "</tr>")
           
          
        {/* //    $( ".description" ).append("<br>" + val.description + "<br>"); */}
    //     });        
    // })
    
});
}); 