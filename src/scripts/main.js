$(document).ready(function() {
    $.ajax({
        url: "https://volspb.ru/greeting.json"
    }).then(function(data) {
        $('.greeting-id').append(data.content);
        
    });
})