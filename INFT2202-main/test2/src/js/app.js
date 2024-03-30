(function() {
    
    // Question 0
    // Use npm to install jquery and holder.js
    // Add a reference to jquery and holder.js in your index.html in the appropriate spot
    
    // Complete all steps using jquery.
    // Changes to index.html should not be necessary unless specifically mentioned

    // Question 1
    // Update the page title to say "YOUR NAME - Test 2"
    // Update the navbar title to say "YOUR NAME"
    // Replace the footer text with a copyright symbol and the year, using the Date object.

    // Question 2
    // get a reference to the test table
    // get a reference to the second row in the table
    // update the student number to be 100100100

    // Question 3
    // create a table row with your own information
    // create a table delimeter and set your first name
    // add it to your table row
    // create a table delimeter and set your last name
    // add it to your table row
    // create a table delimeter and set your banner id
    // add it to your table row
    // add your row to the test table body

    // Question 4
    // remove Alice Bobberts from the table

    // Question 5
    // add the .table-info class to your personal row

    // Question 6
    // remove the .table-warning class from Adam Kunz's row

    // Question 7
    // change .table-dark to .table-success for John Doe's row

    // Question 8
    // Go to https://getbootstrap.com/docs/5.3/components/card/
    // Using jquery, add a new container div to the <main> section
    // In that container, add a new bootstrap card. This should take several steps.
    // // make a card, make an image, append the image to the card
    // // make a card body, append it to the card
    // // make a heading, a paragraph, a link, append them to the card-body
    // // append the card to the new container
    // use holder.js to render the image in the card
    // add a heading with your name in the card body, and a sentence or two about yourself.



    $(document).ready(function() {
        // Question 1
    $('title').text('Pratham Patel - Test 2'); 
    $('.navbar-brand').text('Pratham Patel'); 
    $('.footer .text-body-secondary').text('© ' + new Date().getFullYear()); 
    
        // Question 2
        var table = $("#test-table");
        var secondRow = table.find("tbody tr").eq(1);
        secondRow.find("td").eq(2).text("100894939");
    
        // Question 3
        var newRow = $("<tr>").append(
            $("<td>").text("Pratham"),
            $("<td>").text("Patel"),
            $("<td>").text("100894939")
        );
        table.find("tbody").append(newRow);
    
        // Question 4
        table.find("tbody tr").each(function() {
            if ($(this).find("td:first").text() === "Alice") {
                $(this).remove();
            }
        });
    
        // Question 5
        newRow.addClass("table-info");
    
        // Question 6
        table.find("tbody tr").removeClass("table-warning");
    
        // Question 7
        secondRow.removeClass("table-dark").addClass("table-success");
    
        // Question 8
        var container = $("<div>").addClass("container");
        var card = $("<div>").addClass("card");
        var img = $("<img>").attr("src", "holder.js/100px180").addClass("card-img-top");
        var cardBody = $("<div>").addClass("card-body");
        var heading = $("<h5>").addClass("card-title").text("Pratham Patel");
        var paragraph = $("<p>").addClass("card-text").text("A sentence or two about yourself.");
        var link = $("<a>").addClass("btn btn-primary").attr("href", "#").text("Go somewhere");
    
        cardBody.append(heading, paragraph, link);
        card.append(img, cardBody);
        container.append(card);
        $("main").append(container);
    });
    
})();
