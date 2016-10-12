var yo = require('yo-yo')

var el = yo`
  <article class="PlanTab">
    <header class="PlanTab-header">
      <h6 class="PlanTab-title">Plan Anual</h6>
      <span class="PlanTab-monthlyCost">$25</span>
      <p class="PlanTab-currency">
        <div class="PlanTab-imageContainer">
          <img class="PlanTab-country" src="US.png" />              
        </div>
        <span class="PlanTab-coin">Dolares al mes</span>
      </p>
      <p class="PlanTab-totalCost">
        Un solo pago de $299
      </p>
    </header>

    <ul class="PlanTab-content">
      <li class="PlanTab-row">+</li>
      <li class="PlanTab-row">+</li>
      <li class="PlanTab-row">+</li>
      <li class="PlanTab-row">+</li>
      <li class="PlanTab-row">+</li>
      <li class="PlanTab-row">+</li>
      <li class="PlanTab-row">+</li>
    </ul>

    <footer class="PlanTab-footer">
      <a href="#" class="PlanTab-button">Comprar plan</a>
    </footer>
  </article>
`

module.exports = module.exports = function (plan) {
  var el = yo`
    <article class="PlanTab">
      <header class="PlanTab-header">
        <h6 class="PlanTab-title">Plan Anual</h6>
        <span class="PlanTab-monthlyCost">$25</span>
        <p class="PlanTab-currency">
          <div class="PlanTab-imageContainer">
            <img class="PlanTab-country" src="US.png" />              
          </div>
          <span class="PlanTab-coin">Dolares al mes</span>
        </p>
        <p class="PlanTab-totalCost">
          Un solo pago de $299
        </p>
      </header>

      <ul class="PlanTab-content">
        <li class="PlanTab-row">+</li>
        <li class="PlanTab-row">+</li>
        <li class="PlanTab-row">+</li>
        <li class="PlanTab-row">+</li>
        <li class="PlanTab-row">+</li>
        <li class="PlanTab-row">+</li>
        <li class="PlanTab-row">+</li>
      </ul>

      <footer class="PlanTab-footer">
        <a href="#" class="PlanTab-button">Comprar plan</a>
      </footer>
    </article>
  `
  
  return el
} 