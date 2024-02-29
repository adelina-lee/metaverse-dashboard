/* Countdown Timer */
class countdownTimer extends HTMLElement {
    connectedCallback() {
      this.innerHTML =
      `
      <!-- Countdown Timer -->

      `
    }
  }
  customElements.define('countdown-timer', countdownTimer)