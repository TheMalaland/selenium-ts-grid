import { Builder, By, until } from "selenium-webdriver";
import { expect } from "chai";

describe("Google Search", function () {
  this.timeout(10000); // Extender el tiempo de espera para pruebas

  it("should search for Selenium", async () => {
    const driver = await new Builder().forBrowser("chrome").build();

    try {
      await driver.get("https://www.google.com");
      const searchBox = await driver.findElement(By.name("q"));
      await searchBox.sendKeys("Selenium");
      await searchBox.submit();

      await driver.wait(until.titleContains("Selenium"), 5000);
      const title = await driver.getTitle();
      expect(title).to.include("Selenium");
    } finally {
      await driver.quit();
    }
  });

  it("should search for WebDriver", async () => {
    const driver = await new Builder().forBrowser("chrome").build();

    try {
      await driver.get("https://www.google.com");
      const searchBox = await driver.findElement(By.name("q"));
      await searchBox.sendKeys("WebDriver");
      await searchBox.submit();

      await driver.wait(until.titleContains("WebDriver"), 5000);
      const title = await driver.getTitle();
      expect(title).to.include("WebDriver");
    } finally {
      await driver.quit();
    }
  });

  it("should search for JavaScript", async () => {
    const driver = await new Builder().forBrowser("chrome").build();

    try {
      await driver.get("https://www.google.com");
      const searchBox = await driver.findElement(By.name("q"));
      await searchBox.sendKeys("JavaScript");
      await searchBox.submit();

      await driver.wait(until.titleContains("JavaScript"), 5000);
      const title = await driver.getTitle();
      expect(title).to.include("JavaScript");
    } finally {
      await driver.quit();
    }
  });

  it("should search for TypeScript", async () => {
    const driver = await new Builder().forBrowser("chrome").build();

    try {
      await driver.get("https://www.google.com");
      const searchBox = await driver.findElement(By.name("q"));
      await searchBox.sendKeys("TypeScript");
      await searchBox.submit();

      await driver.wait(until.titleContains("TypeScript"), 5000);
      const title = await driver.getTitle();
      expect(title).to.include("TypeScript");
    } finally {
      await driver.quit();
    }
  });

  it("should search for Node.js", async () => {
    const driver = await new Builder().forBrowser("chrome").build();

    try {
      await driver.get("https://www.google.com");
      const searchBox = await driver.findElement(By.name("q"));
      await searchBox.sendKeys("Node.js");
      await searchBox.submit();

      await driver.wait(until.titleContains("Node.js"), 5000);
      const title = await driver.getTitle();
      expect(title).to.include("Node.js");
    } finally {
      await driver.quit();
    }
  });

  it("should search for Mocha", async () => {
    const driver = await new Builder().forBrowser("chrome").build();

    try {
      await driver.get("https://www.google.com");
      const searchBox = await driver.findElement(By.name("q"));
      await searchBox.sendKeys("Mocha");
      await searchBox.submit();

      await driver.wait(until.titleContains("Mocha"), 5000);
      const title = await driver.getTitle();
      expect(title).to.include("Mocha");
    } finally {
      await driver.quit();
    }
  });

  it("should search for Chai", async () => {
    const driver = await new Builder().forBrowser("chrome").build();

    try {
      await driver.get("https://www.google.com");
      const searchBox = await driver.findElement(By.name("q"));
      await searchBox.sendKeys("Chai");
      await searchBox.submit();

      await driver.wait(until.titleContains("Chai"), 5000);
      const title = await driver.getTitle();
      expect(title).to.include("Chai");
    } finally {
      await driver.quit();
    }
  });

  it("should search for Selenium WebDriver", async () => {
    const driver = await new Builder().forBrowser("chrome").build();

    try {
      await driver.get("https://www.google.com");
      const searchBox = await driver.findElement(By.name("q"));
      await searchBox.sendKeys("Selenium WebDriver");
      await searchBox.submit();

      await driver.wait(until.titleContains("Selenium WebDriver"), 5000);
      const title = await driver.getTitle();
      expect(title).to.include("Selenium WebDriver");
    } finally {
      await driver.quit();
    }
  });

  it("should search for Automation Testing", async () => {
    const driver = await new Builder().forBrowser("chrome").build();

    try {
      await driver.get("https://www.google.com");
      const searchBox = await driver.findElement(By.name("q"));
      await searchBox.sendKeys("Automation Testing");
      await searchBox.submit();

      await driver.wait(until.titleContains("Automation Testing"), 5000);
      const title = await driver.getTitle();
      expect(title).to.include("Automation Testing");
    } finally {
      await driver.quit();
    }
  });

  it("should search for Continuous Integration", async () => {
    const driver = await new Builder().forBrowser("chrome").build();

    try {
      await driver.get("https://www.google.com");
      const searchBox = await driver.findElement(By.name("q"));
      await searchBox.sendKeys("Continuous Integration");
      await searchBox.submit();

      await driver.wait(until.titleContains("Continuous Integration"), 5000);
      const title = await driver.getTitle();
      expect(title).to.include("Continuous Integration");
    } finally {
      await driver.quit();
    }
  });

  it("should search for DevOps", async () => {
    const driver = await new Builder().forBrowser("chrome").build();

    try {
      await driver.get("https://www.google.com");
      const searchBox = await driver.findElement(By.name("q"));
      await searchBox.sendKeys("DevOps");
      await searchBox.submit();

      await driver.wait(until.titleContains("DevOps"), 5000);
      const title = await driver.getTitle();
      expect(title).to.include("DevOps");
    } finally {
      await driver.quit();
    }
  });
});