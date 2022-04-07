$(document).ready(() => {
    
    $.getJSON('./data.json', (data) => {
        data.forEach(topSpot => {
            $( ".table" ).append(`<tr><td id="name-cell"> ${topSpot.name} </td><td> ${topSpot.description} </td><td><a href="https://www.google.com/maps?q=${topSpot.location}" target="_blank"><button>Open in Google Maps</button></a> </td></tr>`)
            $(document).ready(function()
{
  $("tr:odd").css({
    "background-color":"rgb(237, 237, 237)"
  });
});
           
        })
});
}); 

  
