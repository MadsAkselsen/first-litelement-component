// inspiration til at litelement + typescript + webpack

import { LitElement, html, customElement, property } from 'lit-element';

@customElement('secondary-button')
export class SecondaryButton extends LitElement {
  @property({ type: String }) foo: string;

  alert() {
    alert('You have pressed a button.');
  }

  render() {
    return html` <button @click="${this.alert}">${this.foo}</button> `;
  }
}
