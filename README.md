This is a simple application. It retrieves current currency rate and allows to see this on a web page.

To create a docker image, use this command:

docker build -t currency-rates-app .

Start container and expose port.

docker run -p 3000:3000 currency-rates-app

You will see this message:
Server is running on http://localhost:3000

Now you can open this application in your browser.
