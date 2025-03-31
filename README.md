# Playwright Test Automation Suite
This is a fully functional **end-to-end test automation framework** using **Playwright** with the **Page Object Model (POM)** to test the login and home functionality of the website.
## 📌 Features
- **Playwright** for automation
- **Page Object Model** (POM) for maintainability
- **Advanced reporting** with Allure reports
- **Secure credential** management with environment variables (.env)
- **Multiple test scenarios** for login and homepage validation
---
## 🛠️ Setup Instructions
### **1. Clone the repository**
```sh
git clone <https://github.com/qbitstest/testautomation.git>
cd testautomation
```
### **2. Install dependencies**
```sh
npm install
```
### **3. Install Playwright Browsers**
```sh
npx playwright install --with-deps
```
### **4. Setup Environment Variables**
#### **Create `.env` file in the root directory of the repo**
```ini
BASE_URL=https://www.hudl.com
USERNAME=email@example.com
PASSWORD=password
INVALID_PASSWORD=Test@123
```
🚨 **Note:** Do not commit `.env` file. Add it to `.gitignore`.
---
## 🚀 Running the Tests
### **Change config values (as needed)**
```sh
playwright.config.ts
```
### **Run all tests**
```sh
npx playwright test
```
### **Run a specific test file**
```sh
npx playwright test tests/LoginTest.spec.ts
npx playwright test tests/HudlHomePageTest.spec.ts
```
### **Run tests in headed mode**
```sh
npx playwright test --headed
```
### **Run tests with UI debugging**
```sh
npx playwright test --ui
```
---
## 📑 Project Structure
```
testautomation/
│── .env
│── .env.example
│── .gitignore
│── package.json
│── playwright.config.ts
│── tests/
│   ├── LoginTest.spec.ts
│   ├── HudlHomePageTest.spec.ts
│── pages/
│   ├── BasePage.ts
│   ├── LoginPage.ts
│   ├── HudlHomePage.ts
│   ├── SiteHomePage.ts
│── utils/
│   ├── env.ts
│   ├── env.example
```
---
## 📜 Test Cases Implemented
- ✅ **Hudl Login Tests :** 
Goto site home and Login with valid credentials → Expect successful login
Login with invalid credentials should show error → Expect error message
- ✅ **Hudl Homepage Tests :** 
Goto library and check video available → Confirm searched video exist in library, play it and return back
Goto team profile and validate team name with club name → Confirm team name contains text from joined clubname
---
## 📊 Viewing Test Reports
After running tests, generate and view an HTML report:
```sh
npx allure serve allure-results
```
---
## 📌 Next Steps
- ✅ Expand test cases (Create Account, Continue with Google/Facebook/Apple, etc.)
- ✅ Mock API responses to simulate different login scenarios
- ✅ Cover non-functional area like accessbility with pa11y 
- ✅ Cover non-functional area like front-end performance with K6
---
## 📞 Support
If you have any questions or need help setting up, feel free to reach out! 🚀