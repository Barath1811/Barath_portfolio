let title = "Barath S - Resume";
let summaryTitle = "Summary";
document.getElementById("title").textContent = title;
document.getElementById("summaryTitle").textContent = summaryTitle;
// Function to handle printing the resume
function printResume() {
    var printContent = document.getElementById('print-content').innerHTML;
    var originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
}

// Function to toggle dark mode

const toggleBtn = document.getElementById('toggle-theme');

    // Check for saved user preference
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        toggleBtn.textContent = 'Switch to Light Mode';
    }
// Function to toggle dark mode and set the button text accordingly
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    // Get the button and update its text
    var toggleButton = document.getElementById('toggleMode');
    
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Switch to Light Mode';
        localStorage.setItem('theme', 'dark'); // Save dark mode preference
    } else {
        toggleButton.textContent = 'Switch to Dark Mode';
        localStorage.setItem('theme', 'light'); // Save light mode preference
    }
}

// Initialize the theme based on saved preference
document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('toggleMode');
    
    // Check localStorage for saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        toggleButton.textContent = 'Switch to Light Mode';
    } else {
        document.body.classList.remove('dark-mode');
        toggleButton.textContent = 'Switch to Dark Mode';
    }
});


// Event listener for the "Drop a Mail" button
document.getElementById('mailBtn').addEventListener('click', function() {
    window.location.href = 'mailto:barathsinou@gmail.com';
});

// Event listener for the "Call" button
document.getElementById('callBtn').addEventListener('click', function() {
    var contactInfo = document.getElementById('contactInfo');
    if (contactInfo.style.display === 'block') {
        contactInfo.style.display = 'none';
    } else {
        contactInfo.style.display = 'block';
    }
    var phoneNumber = contactInfo.querySelector('p:nth-of-type(2)');
    if (phoneNumber) {
        phoneNumber.textContent = phoneNumber.textContent === '+918760209112' ? '+918760209112' : '+918760209112';
    }
});

// Event listener for the "Contact Me" button
document.getElementById('contactBtn').addEventListener('click', function() {
    var contactInfo = document.getElementById('contactInfo');
    contactInfo.style.display = contactInfo.style.display === 'block' ? 'none' : 'block';
});

// Function to toggle dark mode and set the button text accordingly
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    // Get the button and update its text
    var toggleButton = document.getElementById('toggleMode');
    
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Switch to Light Mode';
        localStorage.setItem('theme', 'dark'); // Save dark mode preference
    } else {
        toggleButton.textContent = 'Switch to Dark Mode';
        localStorage.setItem('theme', 'light'); // Save light mode preference
    }
}

// Initialize the theme based on saved preference
document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('toggleMode');
    
    // Check localStorage for saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        toggleButton.textContent = 'Switch to Light Mode';
    } else {
        document.body.classList.remove('dark-mode');
        toggleButton.textContent = 'Switch to Dark Mode';
    }
});

