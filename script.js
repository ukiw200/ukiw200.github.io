function submitForm() {
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
    
    // Check if the username and password are correct
    if (username === "admin" && password === "admin") {
      // Save the username and password in Local Storage
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      
      // Redirect to the welcome page
      window.location.href = "/games/beginscherm/beginscherm.html";
    } else {
      alert("Invalid username or password");
    }
  }