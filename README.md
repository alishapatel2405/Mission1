
<a name="readme-top"></a>



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/alishapatel2405/mission0">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">mission1</h3>

  <p align="center">
    Buying Experience Re-design at Turners Car Insurance
The Client
Turners Car Auctions is a market leader in the automotive industry in New Zealand, responsible for more than 10% of all used vehicle sales in the country. It has retained its original function as a vehicle auctioneer, operating in 19 branches nationwide, but has become increasingly dependent on a parallel role as a conventional used vehicle dealership. In support of that role, it has established in-house finance and vehicle insurance divisions that allow it to offer buyers a complete “one-stop shop” experience.

The Project Brief
Turners is currently undertaking a major re-design of its motor vehicle insurance systems and processes, including an investigation of ways in which the introduction of new technologies can enhance the buyer experience. Here is some information about motor vehicle insurance at Turners [https://www.turners.co.nz/Cars/finance-insurance/car-insurance/].  You have just been assigned to work on this project to help create a new insurance buying experience.

Are you Ready?



Your Tasks
Task 1. Identify Stakeholders
Identify a list of stakeholders who may have an interest to the Motor Vehicle Insurance Buying Experience Re-design project.  

The following resources may help:

REQUIRED Stakeholder identification https://www.youtube.com/watch?v=gc55hPIFW8w (10 mins)

Task ​​​​​​​​​​​​​​2. Understand Context of a Project
Identify 5 things you consider most important to know either before or at the start of a project in order for you to work effectively

The following resources may help:

REQUIRED Questions to ask before starting a project https://www.indeed.com/career-advice/career-development/questions-to-ask-before-starting-project (5 mins) ​​​​​​​

Task 3. Familiarise with tool for Task Management
If you do not already have an account, register (for free) on https://www.atlassian.com/software/jira/free

Create 3 columns on your Jira board titled "To-do", "Doing" and "Done". 

Create cards for each of the tasks in this Mission, and tick them off as you go

If you would like to get fancy, invite another candidate to your Jira board and assign Cards to him/her or get him/her to assign Cards to you (Free for up to 10 users)
This week UX Designers will require Software Developers to participate in a group ideation session of no more than 2 hours. You will need to attend and fully participate in this session via your laptop/desktop (not via mobile phone).

​​​​​In this Mission, you will be working on the backend and apply an Agile practice of Test-Driven Development (TDD).  As part of the project, there are 3 RESTful APIs that are required as part of the insurance purchasing process. 

API 1. Convert "Model" and "Year" of a car to a suggested "Car Value"

This API takes 2 parameters as input in JSON format that includes - the "model" (e.g. "Civic") and a numeric "year" of a car (e.g. 2014).  And the output is a JSON format with the suggested value for the car, such as "$6,614".  Here are the example specifications and business rules of conversion:

INPUT	OUTPUT	ERROR OUTPUT
{ model: "Civic"; year: 2014 }	{ car_value: 6614 }	{ error: "there is an error"}
 

BUSINESS RULES

Car_value is calculated by adding up the positions of alphabets of the letters in the name, times a hundred, and add the year value.  Position of alphabet means the letter in the order of alphabets (e.g. A is the first letter, so it is 1.  Z is the last letter, so it is 26).  Space and any other signs are ignored.   For example, a "Civic" in year 2014 will be worth (3 + 9 + 22 + 9 + 3) * 100 + 2014 = $6,614.  If input values are not valid, return an error.

Task 4. Learn about Test-Driven Development 
Let's start by understanding the principles of test-driven development.  Watch this video about TDD (12 mins)

Task 5. Create test cases
For your chosen API, write test cases to cover all the scenarios.  Remember to write test cases for boundaries and negative cases.  The end result will be a table that looks like the following API 1 example but with more test cases:

Test Case Number	Input (model, year)	Expected Output ($ value)	Test Description
1	"Civic", 2020	6600	Sunny day scenario
2	"911", 2020	2020	Numbers only is ok
3	"Task-Force", -987	error message	Negative year
4	"C200", "twenty twenty"	error message	Wrong data type
 

The following resources may help:

​​​​​​​​​​​​​​REQUIRED Designing Test Cases http://sqa.fyicenter.com/art/Designing_Unit_Test_Cases.html (1 hour)
Task 6. Create unit tests
Choose at least 5 of the test cases you designed, implement them as a set of automated unit test using one of the unit testing frameworks.

The following resources may help:

RECOMMENDED API Unit testing in JavaScript https://www.digitalonus.com/getting-started-with-api-test-automation-using-javascript/ (2 hours)
RECOMMENDED API Unit testing with Python: https://blog.eduonix.com/software-development/go-guide-api-testing-using-pytest/ (2 hours)
RECOMMENDED API Unit testing in .NET https://medium.com/@mourya.vikas/api-automation-using-c-f93c8dc0daaf (2 hours)
Task 7. Create API
Now that you created the unit tests, build your chosen API.  Test your API against your unit tests as you go, until you pass all the tests.

The following resources may help:

RECOMMENDED Building an API in Node.js https://www.youtube.com/watch?v=TcvOgwQPsSo (30 mins)
RECOMMENDED Building an API in Python https://towardsdatascience.com/the-right-way-to-build-an-api-with-python-cd08ab285f8f (30 mins)
RECOMMENDED Building an API in .NET https://learn.microsoft.com/en-us/aspnet/web-api/overview/older-versions/build-restful-apis-with-aspnet-web-api (30mins)
Task 8. Code Review
Obtain feedback on your code from your team member by allowing them to review your code. Make any necessary changes to the code after the feedback. Similarly, review their code by pointing out the code smells and offering a solution.

The following resources may help:

​​​​​​​​​​​​​​RECOMMENDED Code smells https://blog.codinghorror.com/code-smells/
Task 9. Present at Show and Tell
At the Show and Tell next week, your team will jointly present the tasks it has completed.  This presentation should be designed to take around 5 minutes for each team member – so, if you are in a 4-people team you have up 20 minutes in total.  The time limit will be strictly enforced.  You can use PowerPoint slides, Sway or Prezi to help with your presentation. You are encouraged to demonstrate the live API and tests.

Task 10. Submit your work
By the end of Thursday, upload all of your work (screenshots, presentation slides, documents or other files) using the mission submission form.
    <br />
    <a href="https://github.com/alishapatel2405/mission0"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/alishapatel2405/mission0">View Demo</a>
    ·
    <a href="https://github.com/alishapatel2405/mission0/issues">Report Bug</a>
    ·
    <a href="https://github.com/alishapatel2405/mission0/issues">Request Feature</a>
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
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

### Built With


Node.js

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```
    ```
    node ./server.js
    ```
    ```
    npm test
    ```

Runs the app in the development mode.

* Open http://localhost:3000 to view it in your browser.










<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - alishap2405@gmail.com

Project Link: [https://github.com/alishapatel2405/mission0](https://github.com/alishapatel2405/mission0)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* []()
* []()
* []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/alishapatel2405/mission0.svg?style=for-the-badge
[contributors-url]: https://github.com/alishapatel2405/mission0/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/alishapatel2405/mission0.svg?style=for-the-badge
[forks-url]: https://github.com/alishapatel2405/mission0/network/members
[stars-shield]: https://img.shields.io/github/stars/alishapatel2405/mission0.svg?style=for-the-badge
[stars-url]: https://github.com/alishapatel2405/mission0/stargazers
[issues-shield]: https://img.shields.io/github/issues/alishapatel2405/mission0.svg?style=for-the-badge
[issues-url]: https://github.com/alishapatel2405/mission0/issues
[license-shield]: https://img.shields.io/github/license/alishapatel2405/mission0.svg?style=for-the-badge
[license-url]: https://github.com/alishapatel2405/mission0/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/alisha-patel-84817226b
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 