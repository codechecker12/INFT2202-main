// // Define the body copy content as string variables
// var welcomeMessage = "Welcome to My Labs-1!";
// var bodyContent = "Hello, I am Pratham Patel,This is My Website, I suggested best series to watch on Netflix for that you can find that on products, Hope that helps you. Thank you!";

// // Select the elements where you want to inject the content
// var welcomeHeading = document.querySelector('h1');
// var bodyParagraph = document.querySelector('.fs-5');

// // Inject the content into the selected elements
// welcomeHeading.innerHTML = welcomeMessage;
// bodyParagraph.innerHTML = bodyContent;




// //for changing the product.html to interest
// // Select the element containing the "Products" link
// document.addEventListener('DOMContentLoaded', function() {
//     var productsLink = document.querySelector('a[href="products.html"]');

//     // Update the text content of the element to "Interests"
//     if (productsLink) {
//         productsLink.textContent = "Interests";
//     }
// });



// //3rd step
// // Create a new list item element
// var newListItem = document.createElement('li');
// newListItem.classList.add('nav-item');

// // Create a link element for Human Resources
// var newLink = document.createElement('a');
// newLink.classList.add('nav-link');
// newLink.href = 'human_resources.html'; // Set the href attribute
// newLink.textContent = 'Human Resources'; // Set the text content

// // Create an icon element for Human Resources
// var newIcon = document.createElement('i');
// newIcon.classList.add('fas', 'fa-users'); // Add Font Awesome classes for the icon

// // Append the icon to the link
// newLink.appendChild(newIcon);

// // Append the link to the list item
// newListItem.appendChild(newLink);

// // Find the position where you want to insert the new link
// var aboutUsLink = document.querySelector('a[href="about.html"]');
// var contactUsLink = document.querySelector('a[href="contact.html"]');
// var parentList = aboutUsLink.parentNode.parentNode;

// // Insert the new list item before the "Contact Us" link
// parentList.insertBefore(newListItem, contactUsLink.parentNode);

////////////////////////////////////////////////////////////////////////////////////////
// 
//Function to add a new link to the navbar
// 


document.addEventListener('DOMContentLoaded', () => {
    // Identify the page by a unique element ID
    if (document.getElementById('HomePage')) {
        // Inject home page content
        injectHomePageContent();
    } else if (document.getElementById('ProductsPage')) {
        // Inject product page content
        injectProductPageContent();
    } else if (document.getElementById('ServicesPage')) {
        // Inject services page content
        injectServicesPageContent();
    } else if (document.getElementById('AboutPage')) {
        // Inject about us page content
        injectAboutUsContent();
    } else if (document.getElementById('ContactPage')) {
        // Setup contact page form
        setupContactForm();
    }

    addNavbar();
});

function addNavbar(){
    const navbarHTML = `
    <nav class="NavBar">
    <div class="container">
      <a class="navbar-brand" href="index.html">My Labs</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="products.html">Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="services.html">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about.html">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.html">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  `;

  document.body.insertAdjacentHTML('afterbegin', navbarHTML);
}

function injectHomePageContent() {
    // HTML string for the home page content
    const homePageHTML = `
        <div class="container my-5">
            <h1>Welcome to My Labs-1!</h1>
            <div class="col-lg-8 px-0">
                <hr class="col-1 my-4">
                <p class="fs-5">Hello, I am Pratham Patel,This is My Website, I suggested best series to watch on Netflix for that you can find that on products, Hope that helps you. Thank you!</p>
                <hr class="col-1 my-4">
                <p style="background-image: url('./images/background.png');"></p>
            </div>
        </div>
    `;
    // Inserts the home page content HTML into the <body>
    document.body.insertAdjacentHTML('beforeend', homePageHTML);
}

function injectProductPageContent() {
   
        const productsPageHTML = `
        <h1>My Favorite TV Shows</h1>

        <div>
  
        </div>
  
        <!-- Product 1 -->
        <div class="product">
          <h2>Stranger Things</h2>
          <img src="./images/Stranger_Things_.png" alt="Stranger Things" width="400">
          <p>This is the one if the best series on Netflix, you will love to watch this I do personally rate this no.1 series on netflix </p>
        </div>
        <div>
  
        </div>
  
        <!-- Product 2 -->
        <div class="product">
          <h2>Breaking Bad</h2>
          <img src="./images/Breaking_Bad.png" alt="Breaking Bad">
          <p>Breaking Bad is a really good good big series, the story line of the series is amazing! you will love it! </p>
        </div>
        <div>
  
        </div>
        <!-- Product 3 -->
        <div class="product">
          <h2>Lucifer</h2>
          <img src="./images/Lucifer.jpg" alt="Lucifer" width="200">
          <p>Lucifer is a good series, it is too long and thats why people finds it very boring, but the story is good tho. </p>
        </div>
      </div>
  
        `;
        // Inserts the services page content HTML into the <body>
        document.body.insertAdjacentHTML('beforeend', productsPageHTML);

}


function injectServicesPageContent() {
    const servicesPageHTML = `
                <div class="container my-5">
                    <h1>My Services</h1>

                    <!-- Service 1 -->
                    <div class="service">
                        <h2>Web Development</h2>
                        <p>I offer web development services. I can help you build your website from scratch or improve your existing website. I have experience with HTML, CSS, JavaScript, and various web development frameworks.</p>
                        <img src="./images/C_Prog.png" alt="Custom Programming" width="400">
                    </div>

                    <!-- Service 2 -->
                    <div class="service">
                        <h2>Mobile App Development</h2>
                        <p>I offer mobile app development services. I can help you build a mobile app for iOS or Android. I have experience with Swift, Kotlin, and various mobile app development frameworks.</p>
                        <img src="./images/webd.png" alt="Web Design" width="400">
                    </div>

                    <!-- Service 3 -->
                    <div class="service">
                        <h2>Custom Software Development</h2>
                        <p>I offer custom software development services. I can help you build a custom software solution tailored to your specific needs. I have experience with various programming languages and software development methodologies.</p>
                        <img src="./images/M_dev.jpg" alt="Mobile Development" width="400">
                    </div>
                </div>
            `;
            
        // Inserts the services page content HTML into the <body>
        document.body.insertAdjacentHTML('beforeend', servicesPageHTML);
}

function injectAboutUsContent() {
    const aboutPageHTML = `
                <header>
                    <h1>About Luna</h1>
                </header>
                
                <main>
                    <section id="about-luna">
                        
                        <p>Hello, meet Luna, our magnificent Siberian Husky! With her striking blue eyes and majestic coat, Luna is a true beauty. She's not just a pet; she's a beloved member of our family.</p>
                        <img src="./images/luna.jpg" alt="Luna" width="200">
                        
                        <p>Luna's adventurous spirit knows no bounds. She absolutely loves outdoor escapades, especially hiking through the wilderness and chasing squirrels in the park. Her energy and enthusiasm are contagious, bringing joy to everyone around her.</p>
                        <p>Despite her playful nature, Luna also has a gentle side. She's incredibly affectionate and loves cuddling up with us after a long day's adventure. Luna's presence fills our home with warmth and happiness, making every moment together truly special.</p>
                    </section>
                </main>
                <footer>
                    <p>Thank you for taking the time to learn more about Luna. She's more than just a dog; she's a source of endless love and laughter in our lives.</p>
                    <a class="Resume-Link" href="Resume.html">Resume</a>
                    
                </footer>
            `;
            // Inserts the about page content HTML into the <body>
            document.body.insertAdjacentHTML('beforeend', aboutPageHTML);
        
}

function setupContactForm() {
    const contactPageHTML = `
                <header>
                    <h1>Contact Us</h1>
                </header>
                <main>
                    <form id="contactForm">
                        <label for="name">Name:</label><br>
                        <input type="text" id="name" name="name" required><br>

                        <label for="contactNumber">Contact Number:</label><br>
                        <input type="text" id="contactNumber" name="contactNumber" required><br>

                        <label for="email">Email Address:</label><br>
                        <input type="email" id="email" name="email" required><br>

                        <label for="message">Short Message:</label><br>
                        <textarea id="message" name="message" rows="4" required></textarea><br>

                        <input type="button" value="Submit" onclick="submitForm()">
                    </form>
                </main>
                <footer>
                    <p>Contact us for any inquiries or feedback!</p>
                </footer>
            `;
            // Inserts the contact page content HTML into the <body>
            document.body.insertAdjacentHTML('beforeend', contactPageHTML);
}


function submitForm() {
    // Get form values
    var name = document.getElementById("name").value;
    var contactNumber = document.getElementById("contactNumber").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Output user information to console
    console.log("Name: " + name);
    console.log("Contact Number: " + contactNumber);
    console.log("Email: " + email);
    console.log("Message: " + message);

    // Start timer to redirect after 3 seconds
    setTimeout(function() {
        window.location.href = "index.html"; // Redirect to Home Page
    }, 3000);
}

function modifyNavbar() {
  // Change the Products link to Interests
  let productsLink = document.querySelector('a[href="products.html"]');
  if (productsLink) {
      productsLink.textContent = 'Interests';
      productsLink.href = 'interests.html';
  }

  // Add a new link named Human Resources between About Us and Contact Us
  let aboutUsLink = document.querySelector('a[href="about.html"]');
  if (aboutUsLink) {
      let hrLink = document.createElement('a');
      hrLink.className = 'nav-link';
      hrLink.href = 'hr.html';
      hrLink.innerHTML = '<i class="fas fa-users-cog"></i> Human Resources';

      aboutUsLink.parentNode.insertAdjacentElement('afterend', hrLink);
  }

  // Add a fixed bottom navbar
  let navbarHTML = `
      <nav class="navbar fixed-bottom">
          <div class="container">
              <span class="navbar-text">
                  Copyright 2024, Matt Graham
              </span>
          </div>
      </nav>
  `;
  document.body.insertAdjacentHTML('beforeend', navbarHTML);
}


