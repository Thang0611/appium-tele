



const {remote} = require('webdriverio');

const capabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:appPackage': 'org.telegram.messenger',
  'appium:appActivity': 'org.telegram.ui.LaunchActivity',
  'appium:noReset': true,
};

const wdOpts = {
  hostname: process.env.APPIUM_HOST || 'localhost',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: 'info',
  capabilities,
};

async function runTest() {
  const std="0987027740";
  const driver = await remote(wdOpts);
  try {
    const start = await driver.$('//*[@text="Start Messaging"]');
    await start.click();
    await driver.pause(1000);
    const sim = await driver.$('//android.widget.EditText[@content-desc="Country code"]');
    await sim.click();
    await driver.pause(1000);
    await driver.keys('Backspace');
    await driver.keys('Backspace');
    await driver.keys('Backspace');
    await sim.setValue("0987027740");
    await driver.keys('Enter');
  } finally {
    await driver.pause(1000);
    // await driver.deleteSession();
  }
}

runTest().catch(console.error);

