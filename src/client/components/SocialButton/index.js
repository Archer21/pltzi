var yo = require('yo-yo')

module.exports = function renderSocialButton (buttonType) {
  return yo`
    <a href="/auth/facebook" rel="external" class="SocialButton ${(buttonType==='facebook')?'facebook':'twitter'}">
      <span class="SocialButton-icon">+</span>
      <span class="SocialButton-text">Login with ${buttonType}</span>
    </a>
  `
}