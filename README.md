# web-partner — Partner Logo Showcase Component

This submodule contains the `PartnersComponent` for the **IH Hand Sanitation** portal. It displays a responsive auto-scrolling partner logo carousel, driven by `data.json`.

- [CHANGELOG](CHANGELOG.md)
- [CLIFF NOTES](CLIFF_NOTES.md)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Dependencies](#dependencies)
- [Tests](#tests)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

The `PartnersComponent` renders a full-width partner logo strip using `ngx-slick-carousel`. It is styled with a dark glassmorphic background to visually delineate it from the carousel above and the offerings section below.

Files in this submodule:

| File | Purpose |
| --- | --- |
| `partners.component.ts` | Component class — loads `data.json` and exposes `partnersData` |
| `partners.component.html` | Template — `<ngx-slick-carousel>` partner logo slider |
| `partners.component.css` | Component-scoped styles (glassmorphism, logo sizing, layout) |
| `partners.component.spec.ts` | Unit tests (Karma + Jasmine) |

---

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/DTIG-US/web-partner.git
   cd web-partner
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

> [!NOTE]
> In normal use, this component is consumed as a Git submodule of `ih-hand-sanitation-www`. See the [parent README](https://github.com/DTIG-US/ih-hand-sanitation-www) for the full setup workflow.

---

## Usage

Add the selector to your root application template (`app.html`):

```html
<app-partners></app-partners>
```

Import the component in your root `App` component (Angular v20+ standalone — no NgModule required):

```typescript
import { Component } from '@angular/core';
import { PartnersComponent } from './web-partner/partners.component';

@Component({
  selector: 'app-root',
  imports: [PartnersComponent],
  templateUrl: './app.html',
})
export class App {}
```

---

## Configuration

The carousel behaviour is controlled by the `slideConfig` object in `partners.component.ts`. The current defaults show 5 slides at a time and auto-scroll:

```typescript
slideConfig = {
  slidesToShow: 5,
  slidesToScroll: 2,
  dots: true,
  autoplay: true,
  arrows: false,
};
```

Customize the `slides` array and `slideConfig` as needed to display your own partner logos.

### Data Shape

The component reads `../../data.json`. The expected structure for the partners section:

```json
{
  "partners": [
    { "img": "path/to/partner-logo.png", "alt": "Partner Name" }
  ]
}
```

---

## Dependencies

| Package | Purpose |
| --- | --- |
| `ngx-slick-carousel` | Angular wrapper for the Slick carousel library |
| `slick-carousel` | Core Slick carousel JS/CSS |
| `bootstrap` | Grid layout and utility classes |
| `jquery` | Required peer dependency of `slick-carousel` |
| `@angular/common` | `CommonModule` for structural directives |

---

## Tests

Run the unit test suite with:

```bash
ng test
```

---

## Contributing

1. Fork this repository.
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "Add your commit message"`
4. Push to your fork: `git push origin feature/your-feature-name`
5. Open a pull request to `DTIG-US/web-partner` with a clear description of your changes.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.
