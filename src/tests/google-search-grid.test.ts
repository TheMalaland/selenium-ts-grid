import { Builder, By, until, Capabilities } from "selenium-webdriver";
import { expect } from "chai";

const browsers = ["chrome", "firefox", "MicrosoftEdge"]; // Lista de navegadores

browsers.forEach((browser) => {
  describe(`Google Search - Selenium Grid on ${browser}`, function () {
    this.timeout(30000); // Extender el tiempo de espera para pruebas

    it(`should search for Selenium Grid on ${browser}`, async () => {
      const driver = await new Builder()
        .forBrowser(browser)
        .usingServer("http://localhost:4444/wd/hub") // URL del Selenium Grid
        .build();

      try {
        await driver.get("https://www.google.com");
        const searchBox = await driver.findElement(By.name("q"));
        await searchBox.sendKeys("Selenium Grid");
        await searchBox.submit();

        await driver.wait(until.titleContains("Selenium Grid"), 15000);
        const title = await driver.getTitle();
        expect(title).to.include("Selenium Grid");
      } catch (error) {
        console.error(`Error during test execution on ${browser}:`, error);
      } finally {
        await driver.quit();
      }
    });

    it(`should search for Autos en México on ${browser}`, async () => {
      const driver = await new Builder()
        .forBrowser(browser)
        .usingServer("http://localhost:4444/wd/hub") // URL del Selenium Grid
        .build();

      try {
        await driver.get("https://www.google.com");
        const searchBox = await driver.findElement(By.name("q"));
        await searchBox.sendKeys("Autos en México");
        await searchBox.submit();

        await driver.wait(until.titleContains("Autos en México"), 15000);
        const title = await driver.getTitle();
        expect(title).to.include("Autos en México");
      } catch (error) {
        console.error(`Error during test execution on ${browser}:`, error);
      } finally {
        await driver.quit();
      }
    });
  });
});
