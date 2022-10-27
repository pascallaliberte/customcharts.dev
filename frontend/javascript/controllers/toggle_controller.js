import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "toggleable" ]
  
  catchChecked(event) {
    const target = event.target
    const checked = target.checked
    this.toggleableTargets.forEach(toggleableTarget => {
      const eventName = `${this.identifier}:toggle`
      toggleableTarget.dispatchEvent(
          new CustomEvent(eventName, { 
            detail: { toggle: checked },
            bubbles: true,
            cancelable: true
          }
        )
      )
    })
  }
}