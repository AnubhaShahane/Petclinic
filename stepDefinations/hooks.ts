import { Before, After, Status } from "cucumber";
import { browser } from "protractor";


Before(async function () {
  await console.log("First scenario before");

  // This hook will be executed before scenarios tagged with @foo
  //browser.manage().window().maximize();  given in conf file 

});

After(async function (scenario) {
  //This hook will be executed before scenarios tagged with @foo

  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png")
  
  
});


// Before({tags :'@first'},async function()
// {
//   await console.log('Before first scenario')
// });

// After({tags :'@first'},async function()
// {
//   await console.log('After first scenario')
// });

// Before({tags :'@second'},async function()
// {
//   //await console.log('Before first scenario')
// });

// After({tags :'@second'},async function()
// {
//   //await console.log('After first scenario')
// });

// Before({tags :'@third'},function()
// {
//   //await console.log('Before first scenario')
// });

// After({tags :'@third'}, function()
// {
//   //await console.log('After first scenario')
// });




