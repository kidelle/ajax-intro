console.log('Hello Playfair');

$(document).ready(onReady);

function onReady() {

    // ajax is asynchronus $.ajax returns a Promise
    // that says when the server responds we 
    // call the function in the `then`
    $.ajax({
        method: 'GET',
        url: '/movies'
    }).then( function (response){
        console.log (`Got some movies!!!`, response);
        renderMovies (response);
    })
    .catch( function(error){
        console.log(`Something bad happened...`);
        alert('Something bad happened. Try again later.');
    })
    // we don't wait for the server to respond before moving on
    // to run this next line of code, we just to the requesting
    console.log('down here...');
}
    // This will add all our movies to the DOM
    function renderMovies(movieList) {
        $('#movies').empty();
        for ( let item of movieList ) {
            $('#movies').append(` <tr>
                <td>${item.name}</td>
                <td>${item.movie}</td>
            </tr>`);
           
        }

    }
