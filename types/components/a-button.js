var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
export class AButton extends LitElement {
    constructor() {
        super(...arguments);
        this.label = 'Click here';
    }
    render() {
        return html ` <button>${this.label}</button> `;
    }
}
AButton.styles = css `
    button {
      background-color: #000000;
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
    }
  `;
__decorate([
    property({ type: String })
], AButton.prototype, "label", void 0);
customElements.define('a-button', AButton);
//# sourceMappingURL=a-button.js.map