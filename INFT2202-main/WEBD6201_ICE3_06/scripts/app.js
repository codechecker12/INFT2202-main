/*
Name: Pratham Patel
Project:ICE03
File Name: app.js
 */

//a
$(document).ready(function() {
    //To retrieve all the box elements by using jQuery and iterate over each-one.
    var boxes = $('.red-box, .green-box, .blue-box');
    var colors = ['blue', 'green', 'red'];

    //For iterate over each box also changing its class to reorder the colors.
    boxes.each(function(index, box) {
        var currentClass = $(box).attr('class').split('-')[0];
        var nextColor = colors[(colors.indexOf(currentClass) + 1) % colors.length];
        $(box).removeClass(currentClass + '-box').addClass(nextColor + '-box');
    });

    //To construct a button element to trigger the modal display.
    var modalButton = $('<button/>', {
        text: 'Show Modal',
        id: 'showModal'
    });

    //For append the newly created button to the page
    $('#content').append(modalButton);

    //To attach a click event listener to the button to handle modal display
    $('#showModal').click(function() {
        //This will display the modal with a fading effect
        $('.lightbox').fadeIn(); 
    });

    //To set the initial state of the modal to hidden
    $('.lightbox').hide();
});
