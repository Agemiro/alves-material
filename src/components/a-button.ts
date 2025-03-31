import {LitElement, html, css} from 'lit';
import {property} from 'lit/decorators.js';

export class AButton extends LitElement {
  @property({type: String}) label = 'Click here';

  static override styles = css`
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

  override render() {
    return html` <button>${this.label}</button> `;
  }
}

customElements.define('a-button', AButton);
