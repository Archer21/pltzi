var yo = require('yo-yo')

var socialButton = require('./../../../components/SocialButton')

var el = yo`
  <div class="LoginView-content">
    <h1 class="LoginView-title">Bienvenido a Platzi</h1>
    <div class="LoginView-socialContainer">
      ${socialButton('facebook')}
      ${socialButton('twitter')}
    </div>
    
    <a href="#" class="LoginView-emailLoginLink">Ingresas con email?</a>
  </div>
`

module.exports = el