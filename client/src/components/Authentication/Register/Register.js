// Register.js
class Register {
  constructor() {
      this.form = document.createElement('form');
      this.form.innerHTML = `
          <h1>Hello, Friend!</h1>
          <label for="name">Name:</label><br>
          <input type="text" id="name" name="name"><br>
          <label for="email">Email:</label><br>
          <input type="email" id="email" name="email"><br>
          <label for="pwd">Password:</label><br>
          <input type="password" id="pwd" name="pwd"><br>
          <input type="checkbox" id="tc" name="tc">
          <label for="tc">I read and agree to Troms & Conditions</label><br>
          <input type="submit" value="CREATE ACCOUNT">
          <a href="#">Already have an account? Sign in</a>
      `;
      this.form.addEventListener('submit', this.handleSubmit.bind(this));
  }

  handleSubmit(event) {
      event.preventDefault();
      // Handle form submission here
      console.log('Form submitted:', this.form);
  }
}

// Usage
const register = new Register();
document.body.appendChild(register.form);