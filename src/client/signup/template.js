var yo = require('yo-yo')

var loginAvatar = require('./components/LoginAvatar')
var signupContent = require('./components/SignupContent')

var el = yo`
  <section class="LoginView">
    ${loginAvatar}
    ${signupContent}
    
    <p class="LoginView-register">
      ¿Ya tienes cuenta? <a href="/signin" class="LoginView-link">Inicia sesion aquí</a>
    </p>

    <div class="LoginView-info">
      <p>Valoramos tu <a href="#">privacidad</a> como si fuera la nuestra.</p>
      <br>
      <p>Ante cualquier duda, nuestros <a href="#" title="Terminos de servicio">Términos de Servicio.</a></p>
    </div>
  </section>
`

module.exports = el