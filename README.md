# web-partner

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with this application, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/angular-carousel-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd angular-carousel-app
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

## Usage

This Angular application features a carousel component, 'PartnersComponent,' which displays a set of images in a responsive carousel format. The component is configured to show 5 slides at a time, with 2 slides scrolling per step, and includes navigation dots for easy browsing. It also has autoplay enabled and hides the navigation arrows.

To use the 'PartnersComponent' in your Angular application, follow these steps:

1. Import the component:

   ```typescript
   import { PartnersComponent } from './path-to-partners/partners.component';
   ```

2. Add the 'PartnersComponent' to your template:

   ```html
   <app-partners></app-partners>
   ```

3. Ensure you have the necessary styles and configurations in your module.

   ```typescript
   // Import the SlickCarouselModule
   import { SlickCarouselModule } from 'ngx-slick-carousel';

   // Include it in the imports array of your module
   @NgModule({
     imports: [SlickCarouselModule, /* other modules */],
   })
   ```

4. Customize the 'slides' array and 'slideConfig' as needed in 'PartnersComponent' to display your own content.

   ```typescript
   slides = [
     { img: 'http://placehold.it/350x150/000000' },
     { img: 'http://placehold.it/350x150/111111' },
     // Add more slides as needed
   ];

   slideConfig = {
     slidesToShow: 5,
     slidesToScroll: 2,
     dots: true,
     autoplay: true,
     arrows: false,
   };
   ```

## Tests

This project includes unit tests for the 'PartnersComponent.' To run the tests, use the following command:

```bash
ng test
```

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork this repository.

2. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m 'Add your commit message'
   ```

4. Push your changes to your fork:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a pull request to this repository with a clear description of your changes.
