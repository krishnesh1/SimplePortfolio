let responsiveNav = document.getElementById("responsiveNav");
let menu = document.getElementById("menue");
let toggle = false;
let body = document.querySelector("body");



// To track clicks on body excluding the menu and listed items
body.addEventListener("click", (event) => {
    // Increment the count property each time the body is clicked (optional)
    body.count++;
    console.log("Body clicked", body.count, "times.");

    // Check if the click is outside the menu and menu button
    if (toggle && !menu.contains(event.target) && !responsiveNav.contains(event.target)) {
        // Hide the menu
        responsiveNav.classList.remove("translate-x-0");
        responsiveNav.classList.add("translate-x-full");
        menu.classList.remove("ri-close-line");
        menu.classList.add("ri-menu-line");
        toggle = false;
    }
});

// Event listener for the menu button
menu.addEventListener("click", (event) => {
    // Prevent the event from propagating to the body click event
    event.stopPropagation();

    console.log("Menu button clicked");

    if (!toggle) {
        // Show the menu
        responsiveNav.classList.remove("translate-x-full");
        responsiveNav.classList.add("translate-x-0");
        menu.classList.remove("ri-menu-line");
        menu.classList.add("ri-close-line");
        toggle = true;
    } else {
        // Hide the menu
        responsiveNav.classList.remove("translate-x-0");
        responsiveNav.classList.add("translate-x-full");
        menu.classList.remove("ri-close-line");
        menu.classList.add("ri-menu-line");
        toggle = false;
    }
});


document.getElementById("f-clickableDiv").addEventListener("click",function(){
    window.location.href = "https://careerfoundry.com/en/blog/ux-design/the-difference-between-ux-and-ui-design-a-laymans-guide/"
})
document.getElementById("s-clickableDiv").addEventListener("click",function(){
    window.location.href = "https://dribbble.com/tags/ios"
})
document.getElementById("t-clickableDiv").addEventListener("click",function(){
    window.location.href = "https://www.interaction-design.org/literature/topics/web-design?srsltid=AfmBOopuI_50Ng2knaJ43fHtyQK8776edBkfL6T6USSyLMp7kzcJSXBd"
})
document.getElementById("l-clickableDiv").addEventListener("click",function(){
    window.location.href = "https://dribbble.com/tags/mobile-app-design"
})
document.getElementById("About").addEventListener("click",function(e){
    // window.location.href = "about.html"
    console.log(e)
})


document.getElementById("contactForm").addEventListener("submit",function(event){

    event.preventDefault();

    // Hide the contact form container
    // 
    alert("Message Sent We will contact soon")
    
})

