function submitForm(event) {
  // Retrieve data from the external JSON file
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      // Retrieve the name and age properties from the JSON object
      const name = data.name;
      const age = data.age;

      // Print the retrieved data to the console
      console.log(`Name: ${name}`);
      console.log(`Age: ${age}`);

      // Display the retrieved data in a web page
      const infoDiv = document.getElementById("info");
      console.log(`Name: ${name} <br> Age: ${age}`);
      console.log("Successfull.");
    })
    .catch((error) => console.error(error));
}

// redirect the user to a success page
//   window.location.href = "/success.html";
