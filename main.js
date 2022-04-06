$(document).ready(() => {
// write your code here
    $.getJSON('./data.json', (data) => {
        data.forEach(topSpot => {
            $( ".table" ).append(`<tr><td> ${topSpot.name} </td><td> ${topSpot.description} </td><td><a href="https://www.google.com/maps?q=${topSpot.location}" target="_blank"><button>Open in Google Maps</button></a> </td></tr>`)
        })
});
}); 