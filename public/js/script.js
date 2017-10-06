$(() => {
    console.log("js connected");

    $('.new-date-form').on('submit', (e) => {
        e.preventDefault();

        const tourdate = $('.date-input').val(),
            venue = $('.venue-input').val(),
            city = $('.city-input').val(),
            bands = $('.bands-input').val(),
            link = $('.link-input').val();

        const newDate = {
            tourdate: tourdate,
            venue: venue,
            city: city,
            bands: bands,
            link: link
        }

        //users the variables as parameters as a way to pass them through a GET call
        $.ajax({
            method: 'POST',
            url: '/dates/',
            data: newDate,
            success: response => {
                window.location.replace('/dates/add')
            },
            error: msg => {
                console.log(msg);
            }
        });
    });
});