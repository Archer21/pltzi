var yo = require('yo-yo')

var el = yo`
  <div class="LoginView-content">
    <h1 class="LoginView-title">Bienvenido a Platzi</h1>
    <div class="LoginView-socialContainer">
      <form class="Form" action="" method="">
        <h2 class="Form-title">Ingresa los datos</h2>
        <input type="text" className="Form-input" name="name" placeholder="Nombre"/>
        <input type="text" className="Form-input" name="username" placeholder="Nombre de Usuario"/>
        <input type="email" className="Form-input" name="email" placeholder="Correo electronico"/>
        <input type="password" className="Form-input" name="password" placeholder="Contraseña"/>
      </form>
    </div>
  </div>
`

module.exports = el