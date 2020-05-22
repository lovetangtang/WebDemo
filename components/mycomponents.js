const template = document.createElement('template');

template.innerHTML = `
  <style>
    .container {
      padding: 8px;
    }
 
    button {
      display: block;
      overflow: hidden;
      position: relative;
      padding: 0 16px;
      font-size: 16px;
      font-weight: bold;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: pointer;
      outline: none;
 
      width: 100%;
      height: 40px;
 
      box-sizing: border-box;
      border: 1px solid #a1a1a1;
      background: #ffffff;
      box-shadow: 0 2px 4px 0 rgba(0,0,0, 0.05), 0 2px 8px 0 rgba(161,161,161, 0.4);
      color: #363636;
      cursor: pointer;
    }
  </style>
 
  <div class="container">
    <button>Label</button>
  </div>
`;

class Button extends HTMLElement {
    constructor() {
        super();

        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('my-button', Button);





const template1 = document.createElement('template');

template1.innerHTML = `
  <style>
    :host {
      font-family: sans-serif;
    }
 
    .dropdown {
      padding: 3px 8px 8px;
    }
 
    .label {
      display: block;
      margin-bottom: 5px;
      color: #000000;
      font-size: 16px;
      font-weight: normal;
      line-height: 16px;
    }
 
    .dropdown-list-container {
      position: relative;
    }
 
    .dropdown-list {
      position: absolute;
      width: 100%;
      display: none;
      max-height: 192px;
      overflow-y: auto;
      margin: 4px 0 0;
      padding: 0;
      background-color: #ffffff;
      border: 1px solid #a1a1a1;
      box-shadow: 0 2px 4px 0 rgba(0,0,0, 0.05), 0 2px 8px 0 rgba(161,161,161, 0.4);
      list-style: none;
    }
 
    .dropdown-list li {
      display: flex;
      align-items: center;
      margin: 4px 0;
      padding: 0 7px;
      font-size: 16px;
      height: 40px;
      cursor: pointer;
    }
  </style>
 
  <div class="dropdown">
    <span class="label">Label</span>
 
    <my-button as-atom>Content</my-button>
 
    <div class="dropdown-list-container">
      <ul class="dropdown-list"></ul>
    </div>
  </div>
`;

class Dropdown extends HTMLElement {
    constructor() {
        super();

        this._sR = this.attachShadow({ mode: 'open' });
        this._sR.appendChild(template1.content.cloneNode(true));
    }

    static get observedAttributes() {
        return ['label', 'option', 'options'];
    }

    get label() {
        return this.getAttribute('label');
    }

    set label(value) {
        this.setAttribute('label', value);
    }

    get option() {
        return this.getAttribute('option');
    }

    set option(value) {
        this.setAttribute('option', value);
    }

    get options() {
        return JSON.parse(this.getAttribute('options'));
    }

    set options(value) {
        this.setAttribute('options', JSON.stringify(value));
    }

    static get observedAttributes() {
        return ['label', 'option', 'options'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        this.render();
    }

    render() {

    }
}

window.customElements.define('my-dropdown', Dropdown);