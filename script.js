// JavaScript code
document.addEventListener("DOMContentLoaded", function () {
    const mobileForm = document.getElementById("mobileForm");
    const ownerPassword = "yourpassword"; // Replace with your password
    const storedDataKey = "mobileData";
 
    mobileForm.addEventListener("submit", function (e) {
        e.preventDefault();
 
        // Get the form data
        const brand = document.getElementById("brand").value;
        const model = document.getElementById("model").value;
        const year = document.getElementById("year").value;
        const futureModel = document.getElementById("futureModel").value;
 
        // Store the data in local storage
        const mobileData = {
            brand,
            model,
            year,
            futureModel,
        };
 
        localStorage.setItem(storedDataKey, JSON.stringify(mobileData));
 
        // Disable the form
        mobileForm.style.display = "none";
 
        // Prompt the owner for password to access data
        const password = prompt("Enter password to access data:");
        if (password === ownerPassword) {
            // Password is correct, display stored data
            const storedData = JSON.parse(localStorage.getItem(storedDataKey));
            if (storedData) {
                displayStoredData(storedData);
            } else {
                alert("No data found.");
            }
        } else {
            alert("Incorrect password. Access denied.");
        }
    });
 
    // Function to display stored data
    function displayStoredData(data) {
        const dataContainer = document.createElement("div");
        dataContainer.innerHTML = `
            <h2>Stored Mobile Data</h2>
            <p><strong>Brand:</strong> ${data.brand}</p>
            <p><strong>Model:</strong> ${data.model}</p>
            <p><strong>Year of Usage:</strong> ${data.year}</p>
            <p><strong>Future Model:</strong> ${data.futureModel}</p>
        `;
        document.body.appendChild(dataContainer);
    }
 });
 