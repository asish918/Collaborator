<a name="readme-top"></a>

[![Stargazers][stars-shield]][stars-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href=" https://github.com/asish918/Collaborator">
    <img src="readme_assets/logo.png" alt="Logo" width="30" height="30">
  </a>

<h3 align="center">Collaborator</h3>

  <p align="center">
A collaborative workspace manager built using NextJS, ShadCn UI powered by Supabase Backend that supports realtime document editing using WebSockets.
    <br />
    <br />
    <a href="#contact">There's no demo, sorry 😔</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![Product Name Screen Shot][product-screenshot]
[Click to view video](readme_assets/demo.mp4)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- ![Next][Next.js]
- ![React][React.js]
- ![Drizzle][Drizzle]
- ![Tailwind][Tailwind]
- ![ShadCn][ShadCn]
- ![Postgres][Postgres]
- ![WebSockets][WebSockets]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get API Keys/ URIs for your Supabase Project. You need to set these up manually.
2. Clone the repo
   ```sh
   git clone  https://github.com/asish918/Collaborator.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API keys in `.env`. Refer the `.env.example` file
5. Use the `database.sql` file and run it entirely as a query in SQL Editor of Supabase. That would create all the schemas and buckets required for the web app.
6. Run the project
   ```sh
   npm run dev
   ```
   <p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Database Schema

Refer to this visual schema to understand better
![Database Schema][db-schema]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information. Basically you can do whatever the hell you want to with the code 😉

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Asish Mahapatra - asishmahapatra918@gmail.com

<i>The project has not been deployed because it uses WebSockets and that requires you to operate a server with paid plans which I don't intend to do just so that random people can viewe my project. So go ahead, clone it, configure it and make it yours</i>

Project Link: [ https://github.com/asish918/Collaborator](https://github.com/asish918/Collaborator)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[stars-shield]: https://img.shields.io/github/stars/asish918/NextJS-Hotel-Booking.svg?style=for-the-badge
[stars-url]: https://github.com/asish918/NextJS/stargazers
[license-shield]: https://img.shields.io/github/license/asish918/NextJS-Hotel-Booking.svg?style=for-the-badge
[license-url]: https://github.com/asish918/Collaborator/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/asishmahapatra918
[product-screenshot]: readme_assets/banner.png
[db-schema]: readme_assets/schema.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[Drizzle]: https://img.shields.io/badge/Drizzle_ORM-C5F74F?style=for-the-badge&logo=drizzle&logoColor=black
[Tailwind]: https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white
[ShadCn]: https://img.shields.io/badge/ShadCn-000000?style=for-the-badge&logo=shadcn/ui&logoColor=white
[Postgres]: https://img.shields.io/badge/Postgres-4169E1?style=for-the-badge&logo=postgres&logoColor=white
[Supabase]: https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white
[WebSockets]: https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white
