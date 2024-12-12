//const apiUrl = "https://jsonplaceholder.typicode.com/users";
const apiUrl = 'https://dummyjson.com/user';

const tableBody = document.getElementById('data-table').querySelector('tbody');
let data = [];

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      console.log("Check the URL and try again.");
    }
    return response.json(); // Parse the response as JSON if the status is OK
  })
  .then(json => {
    data = json; // Store the fetched data
    console.log(data); // Log the data after it's fetched
    data.array.forEach(element => {
        console.log(element.id);
    });

    //800435

    // data.forEach(user => {
        
    //     const rows = data.map(user => `
    //         <tr>
    //             <td>${user.id}</td>
    //             <td>${user.firstName}</td>
    //             <td>${user.email}</td>
    //             <td>${user.address.city}</td>
    //             <td>${user.phone}</td>
    //             <td>
    //             <button class="btn-view" onclick="handleView(${user.id})">View</button>
    //             </td>
    //         </tr>
    //     `).join(''); // Join all the rows into a single string
           
    //     // Insert the rows into the table body
    //     tableBody.innerHTML = rows;

    // });
  })
  .catch(error => 
    console.error('Error fetching data:', error.message)
  );

// Button click handler
function handleView(userId) {
    document.querySelector('.heading').textContent = `Selected ID - ${userId}`;
  }
 

