Cypress Test Automation for Assurdly Website

This project contains automated test scripts using Cypress for verifying the functionality of key links and pages on the Assurdly website.

Table of Contents
- Requirements
- Setup Instructions
- Running Tests
- Test Scripts
- Contact

Requirements

Make sure you have the following installed on your machine:
- Node.js (version 14 or higher)
- Cypress (v10 or higher)
- Git (for cloning the repository)

Setup Instructions

1. Clone the Repository  
   If you haven't already, clone this repository to your local machine:
   'cmd'
   git clone https://github.com/ScarGit-Majo/Assurdly-Week8.git cd Assurdly-Week8

2. Install Dependencies 
   Run the following command to install the necessary dependencies:
   'cmd'
   npm install

3. Cypress Configuration
   Cypress should be installed automatically with `npm install`. If you don't have Cypress installed yet, run:
   'cmd'
   npm install cypress --save-dev

4. Running Tests
   To run the Cypress tests, use the following command:
   'cmd'
   npx cypress open
   This will open the Cypress Test Runner, where you can choose the tests you want to run.

Alternatively, you can run tests in headless mode:
'cmd'
npx cypress run

Test Scripts

The following test scripts have been included in this repository:

1. Home Page Test: Tests the basic functionality of the Assurdly homepage.
2. Resources Dropdown Test: Verifies dropdown links such as Newsletter, Service Brochure, and FAQ.
3. Newsletter Test: Checks the external redirect for the Newsletter link.
4. Service Brochure Test: Ensures the Service Brochure link redirects to the correct PDF file.
5. FAQ Test: Verifies the FAQ link and checks that the FAQ section is visible.

Test Locations
[**cypress/e2e folder**](./cypress/e2e)


- All test scripts are located in the `cypress/e2e` folder.
- Tests are organized by page functionality, e.g., `01-home.cy.js`, `02-services.cy.js`, etc.

Contact

For any issues or inquiries, please contact:

- Email: esther@assurdlycom
- GitHub: https://github.com/ScarGit-Majo/Assurdly-Week8
 
