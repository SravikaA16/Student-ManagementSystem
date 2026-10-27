const { Builder, By, until } = require("selenium-webdriver");
async function testGoogle() {
let driver = await new Builder()
.forBrowser("chrome")
.build();
try {
// Open website
await driver.get("https://www.google.com");
// Display page title
console.log("Page Title:", await driver.getTitle());
// Find search box
let searchBox = await driver.findElement(By.name("q"));
// Enter search text
await searchBox.sendKeys("Selenium WebDriver");
// Press Enter
await searchBox.sendKeys("\n");
// Wait for page to load
await driver.wait(until.titleContains("Selenium"), 5000);
console.log("Test Passed");
} catch (error) {
console.log("Test Failed:", error);
} finally {
// Close browser
await driver.quit();
}
}
testGoogle();