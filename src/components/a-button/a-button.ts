import {LitElement, html, css} from 'lit';
import {property} from 'lit/decorators.js';
import {applyThemeVariables, themeColors} from '../../styles/themes';

export class AButton extends LitElement {
  @property({type: String}) color = '';

  constructor() {
    super();
    applyThemeVariables();
  }

  static override styles = css`
    :host {
      display: inline-block;
    }

    button {
      background-color: #ffffff;
      border: none;
      padding: 10px 16px;
      font-size: 16px;
      cursor: pointer;
      border: 1px solid #000000;
      border-radius: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--main-color, #000000);
    }

    ::slotted([aPrefix]),
    ::slotted([aSuffix]) {
      display: flex;
      align-items: center;
    }
  `;

  override updated() {
    const resolvedColor = themeColors()[this.color] || this.color;

    this.style.setProperty('--main-color', resolvedColor);
  }

  override firstUpdated() {
    this.updateSlots();
  }

  updateSlots() {
    this.querySelectorAll('[aPrefix], [aSuffix]').forEach((child) => {
      if (child.hasAttribute('aPrefix')) {
        child.setAttribute('slot', 'aPrefix');
      } else if (child.hasAttribute('aSuffix')) {
        child.setAttribute('slot', 'aSuffix');
      }
    });
  }

  override render() {
    return html`
      <button>
        <slot name="aPrefix"></slot>
        <slot></slot>
        <slot name="aSuffix"></slot>
      </button>
    `;
  }
}

customElements.define('a-button', AButton);
