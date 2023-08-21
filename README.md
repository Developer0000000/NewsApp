# News App with Create React App

I made a News App using API from NewsApi. 

- I made with with Create React App but don't make in it. You can use vite.js to make it.
<br>
<br>
### ABOUT API KEY 🔑
- This is an excellent api.But you can't deploy it as website, bc'z its free for development only.🙂🙃   

<br>
<br>

## Follow these simple steps 👇

1: Create an Account on [NewsApi](https://newsapi.org/) 📰🗞

2: Take an API KEY.

3: make a file " .env.local " on main directory.

4: Put API KEY like this if you are using react(vite).js:

VITE_API_KEY = 'put-your-real-API KEY-to-here' 🔑

5: Then go on that file, where you are using api key and paste this code:
const API = import.meta.env.VITE_JOKES

this code is for react.(vite).js 👆