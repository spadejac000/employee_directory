document.addEventListener("DOMContentLoaded", function(event) {
  $.ajax({
    url: 'https://randomuser.me/api/?results=12',
    dataType: 'json',
    success: function(data) {
      console.log('ready');
    }
  })
  .then(function(data) {
    for(let i = 0; i < data.results.length; i++) {
      let profileImage = document.createElement("img");
      profileImage.src = data.results[i].picture.large;
      let firstName = data.results[i].name.first;
      let lastName = data.results[i].name.last;
      let email = data.results[i].email;
      let city = data.results[i].location.city;
      let employeeList = document.getElementById("employeeList")
      let employeeDiv = document.createElement('div');
      let employeeInfoDiv = document.createElement('div');
      let imageDiv = document.createElement('div');
      let nameHeader = document.createElement('h2');
      let emailLine = document.createElement('p');
      let cityLine = document.createElement('p');
      imageDiv.appendChild(profileImage);
      employeeDiv.appendChild(imageDiv);
      nameHeader.appendChild(document.createTextNode(firstName + " " + lastName));
      emailLine.appendChild(document.createTextNode(email));
      cityLine.appendChild(document.createTextNode(city));
      employeeInfoDiv.appendChild(nameHeader);employeeInfoDiv.appendChild(emailLine);employeeInfoDiv.appendChild(cityLine);
      employeeDiv.appendChild(employeeInfoDiv);
      employeeList.appendChild(employeeDiv);
    }
  })
});