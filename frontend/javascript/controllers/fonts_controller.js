import { Controller } from "@hotwired/stimulus"
import FontFaceObserver from "fontfaceobserver"

export default class extends Controller {
  static values = {
    watchedFontFace: {
      type: Array,
      default: []
    },
    fontLoadedEventName: {
      type: String,
      default: "fonts-loaded"
    }
  }
  
  connect() {
    this.watchFontFace()
  }
  
  watchFontFace() {
    if (!this.hasWatchedFontFaceValue) { return }
    
    const [fontFamily, variations] = this.watchedFontFaceValue
    
    if (!fontFamily) { return }
    
    if (variations) {
      this.font = new FontFaceObserver(fontFamily, variations);
    } else {
      this.font = new FontFaceObserver(fontFamily);
    }
    
    this.font.load().then(() => {
      this.dispatch(this.fontLoadedEventNameValue)
    });
  }
}