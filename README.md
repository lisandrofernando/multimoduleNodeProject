# multimoduleNodeProject
# General command to run playwright: npx playwroght test
# What is the difference between selenium and playwright web browsing testing?
# The difference between selenium and playwright 
# playwright.config.js is the test runner 
# The key words inside the test functions browser or page are playwright fixtures and to be recognized in playwright we need to wrapp it inside ({browser, or page})
# browser.newContext() the context is to create a new instance of the browser anytime we launch a browser
# By default playwright runs tests headless in order to run headed need to pass the flag --headed
# The testDir will point the directory the tests should run, below we can define global timeouts the max time one test can run for and expected timeouts max times to expect any assertions.
# When locating an array of elements in playwright, since the page is loading it may occur that playwright won't find all the elements, and it returns an empty array. In order to locate all the elements let playwright wait for the first element at least and then call the method: allTextContents()
# await page.waitForLoadState('networkidle'); this step waits untill the the page loads network json call, the alternative is waitFor() method, but this method also waits for a single element, to return multiple elements first().waitFor()
# When running playwright --debug will open the debug window and from there we can keep working on tests.
# Code gen npx playwright codegen http://google.com
# In playwright we can customize the test behaviors creating custom fixtures and call it direct into our tests
# There are a few properties in the configuration file to run tests in multiple browsers, like properties configuration we can configure multiple browsers to run in parallel in prject property like an array
# viewport property we can define the width and height of an application, in case we want to run mobile mode.
# viewport: {width:720,height:720}
# If we provide ...devices['iphone 11'] will run exactly in iphone view port
# In the playwright configue file we can also set ignoreHttpsErrors:true
# In case we navigate to any website and google throws permissions pop up give permissions:['geolocation']
# We can add video property on failure. video:'retain-on-failure'
# To generate logs in playwright we use traces property
# At the global configuration level we can retry failed tests with retries property, retries:1
# By default tests run in sequence mode presented in the same file, but by default playwright trigger tests in parallel, or in the test config we can set workers:6 to run the tests in multiple browsers
# If you want the tests in the same file to run in parallel in the test file we can do: test.describe.configure({mode:'parallel'}) or sereal
# We can also run tests tagged with @tag name in the test function.
# Applications now work through API calls. Which means the API sends a response and front end parse the data to display something into the front end
# To open traces in playwright in the HTML reports trace.playwright.dev
# To intercept the network or mock integration tests in playwright we use page.route("" route=>{page.request.fetch(route.request())})
# One challenge I faced was getting an error request context disposed, when mocking a request payload to the browser. It occurs when the response is slightly delayed. To fix it I had to add the method waitForResponse("url")
# If we want to stop the call from reaching the browser we can use page.route('**/*.css', route=> route.abort())
# If we want to track the calls made in the browser we can use page.on('request', request=> console.log(request.url()))
# page.on('response', response=> console.log(response.url(), response.status()))
