var yo = require('yo-yo')

var loginAvatar = require('./components/LoginAvatar')
var loginContent = require('./components/LoginContent')

var el = yo`
  <section class="LoginView">
    ${loginAvatar}
    ${loginContent}
    
    <p class="LoginView-register">
      ¿Aún no tienes cuenta? <a href="#" class="LoginView-link">Regístrate aquí</a>
    </p>

    <div class="LoginView-info">
      <p>Valoramos tu <a href="#">privacidad</a> como si fuera la nuestra.</p>
      <br>
      <p>Ante cualquier duda, nuestros <a href="#" title="Terminos de servicio">Términos de Servicio.</a></p>
    </div>
  </section>
`

module.exports = el