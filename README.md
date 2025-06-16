# multimoduleNodeProject
# General command to run playwright: npx playwroght test
# What is the difference between selenium and playwright web browsing testing?

# playwright.config.js is the test runner 
# The key words inside the test functions browser or page are playwright fixtures and to be recognized in playwright we need to wrapp it inside ({browser, or page})
# browser.newContext() the context is to create a new instance of the browser anytime we launch a browser
# By default playwright runs tests headless in order to run headed need to pass the flag --headed
# The testDir will point the directory the tests should run, below we can define global timeouts the max time one test can run for and expected timeouts max times to expect any assertions.
# When locating an array of elements in playwright, since the page is loading it may occur that playwright won't find all the elements, and it returns an empty array. In order to locate all the elements let playwright wait for the first element at least and then call the method: allTextContents()
# await page.waitForLoadState('networkidle'); this step waits untill the the page loads network json call, the alternative is waitFor() method, but this method also waits for a single element, to return multiple elements first().waitFor()
# When running playwright --debug will open the debug window and from there we can keep working on tests.
# Code gen npx playwright codegen http://google.com