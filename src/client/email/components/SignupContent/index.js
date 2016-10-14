var yo = require('yo-yo')

var el = yo`
  <div class="LoginView-content">
    <h1 class="LoginView-title">Bienvenido a Platzi</h1>
    <div class="LoginView-socialContainer">
      <form class="Form" action="/login" method="POST">
        <h2 class="Form-title">Ingresa los datos</h2>
        <input type="text" class="Form-input" name="username" placeholder="Nombre de Usuario"/>
        <input type="password" class="Form-input" name="password" placeholder="Contraseña"/>
        <input type="submit" class="Form-input" value="Registrarse" />
      </form>
    </div>
  </div>
`

module.exports = el