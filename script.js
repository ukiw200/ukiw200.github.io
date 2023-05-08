function submitForm() {
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
    
    switch (username) {
      case "Lucas":
        if (password === "Lucas") {
          localStorage.setItem("username", username);
          localStorage.setItem("password", password);
          window.location.href = "/games/beginscherm/beginscherm.html";
        } else {
          alert("Invalid username or password");
        }
        break;
    
      case "Joss":
        if (password === "Joss123") {
          localStorage.setItem("username", username);
          localStorage.setItem("password", password);
          window.location.href = "/games/beginscherm/beginscherm.html";
        } else {
          alert("Invalid username or password");
        }
        break;
    
      default:
        alert("Invalid username or password");
        break;
    }
    

  
}
