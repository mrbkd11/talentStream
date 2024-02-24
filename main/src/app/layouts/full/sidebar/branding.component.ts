import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <div class="branding">
      <a href="/">
        <img
          src="./assets/images/logos/logo1.png"
          class="align-middle m-2"
          alt="logo"
          width= 80%,
        />
      </a>
    </div>
  `,
})
export class BrandingComponent {
  constructor() {}
}
