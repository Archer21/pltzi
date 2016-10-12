var yo = require('yo-yo')

var planAside = require('./PlanAside')
var planTab = require('./PlanTab')

var el = yo`
  <section class="Plans">
    <h1 class="Plans-title">Nuestros planes</h1>
    
    <div class="Plans-container">
      ${planAside}

      <div class="Plans-allPlans">
        <div class="Plans-tabs">
          ${planTab()}
          ${planTab()}
          ${planTab()}
        </div>
      </div>
    </div>
      
    
    <div class="Plans-message">
      <p>** Platzi no cobra intereses, tu banco puede aplicar tarifas adicionales. Permanencia mínima de 12 meses.</p>
      <p>* Aceptamos tarjeta de crédito y algunas tarjetas de débito dependiendo de tu banco</p>
    </div>
  </section>
`

module.exports = el