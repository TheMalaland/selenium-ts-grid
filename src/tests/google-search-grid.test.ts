import { Builder, By, until , Capabilities} from "selenium-webdriver";
import { expect } from "chai";

const chromeCapabilities = Capabilities.chrome();
chromeCapabilities.set("goog:chromeOptions", {
  args: [
    "--disable-blink-features=AutomationControlled", // Evita detección como bot
    "--disable-gpu",
    "--no-sandbox",
    "--disable-dev-shm-usage",
  ],
});



describe("Google Search - Selenium Grid and Autos in Mexico", function () {
  this.timeout(20000); // Extender el tiempo de espera para pruebas

  it("should search for Selenium Grid", async () => {
    const driver = await new Builder()
      .forBrowser("chrome")
      .usingServer("http://localhost:4444/wd/hub") // URL del Selenium Grid
      .build();

    try {
        await driver.get("https://www.google.com");
        const searchBox = await driver.findElement(By.name("q"));
        await searchBox.sendKeys("Selenium Grid");
        await searchBox.submit();
      
        await driver.wait(until.titleContains("Selenium Grid "), 15000);
        const title = await driver.getTitle();
        expect(title).to.include("Selenium Grid");
    }catch (error) {
        console.error("Error during test execution:", error);
    }finally {
        await driver.quit();
      }
  });

});