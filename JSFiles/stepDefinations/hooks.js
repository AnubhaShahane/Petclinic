"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.Before(function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log("First scenario before");
        // This hook will be executed before scenarios tagged with @foo
        //browser.manage().window().maximize();  given in conf file 
    });
});
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        //This hook will be executed before scenarios tagged with @foo
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBaUQ7QUFDakQsMkNBQXFDO0FBR3JDLGlCQUFNLENBQUM7O1FBQ0wsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFFM0MsK0RBQStEO1FBQy9ELDREQUE0RDtJQUU5RCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZ0JBQUssQ0FBQyxVQUFnQixRQUFROztRQUM1Qiw4REFBOEQ7UUFFOUQsTUFBTSxVQUFVLEdBQUcsTUFBTSxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFBO0lBR3RDLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFHSCwyQ0FBMkM7QUFDM0MsSUFBSTtBQUNKLCtDQUErQztBQUMvQyxNQUFNO0FBRU4sMENBQTBDO0FBQzFDLElBQUk7QUFDSiw4Q0FBOEM7QUFDOUMsTUFBTTtBQUVOLDRDQUE0QztBQUM1QyxJQUFJO0FBQ0osaURBQWlEO0FBQ2pELE1BQU07QUFFTiwyQ0FBMkM7QUFDM0MsSUFBSTtBQUNKLGdEQUFnRDtBQUNoRCxNQUFNO0FBRU4scUNBQXFDO0FBQ3JDLElBQUk7QUFDSixpREFBaUQ7QUFDakQsTUFBTTtBQUVOLHFDQUFxQztBQUNyQyxJQUFJO0FBQ0osZ0RBQWdEO0FBQ2hELE1BQU0ifQ==