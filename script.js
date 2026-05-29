const form = document.getElementById("leadForm");
const leadList = document.getElementById("leadList");

// Local Storage nunchi data tiskovadam
let leads = JSON.parse(localStorage.getItem("leads")) || [];

// Page open ayinappudu display cheyyi
displayLeads();

// Form submit
form.addEventListener("submit", function(e){

    e.preventDefault();

    // Input values
    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const message = document.getElementById("message").value;

    const status = document.getElementById("status").value;

    // Lead object
    const lead = {
        name,
        email,
        message,
        status
    };

    // Array lo save
    leads.push(lead);

    // Local Storage lo save
    localStorage.setItem("leads", JSON.stringify(leads));

    // Screen meeda display
    displayLeads();

    // Form clear
    form.reset();

});

// Leads display function
function displayLeads(){

    leadList.innerHTML = "";

    leads.forEach(function(lead){

        leadList.innerHTML += `
        
        <div class="lead-card">

            <h3>${lead.name}</h3>

            <p><strong>Email:</strong> ${lead.email}</p>

            <p><strong>Message:</strong> ${lead.message}</p>

            <p><strong>Status:</strong> ${lead.status}</p>

        </div>

        `;

    });

}