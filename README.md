# Country Information App Assignment 2 

This is a country information web application built with HTML, CSS, JavaScript, and a Python Flask backend.

The app allows a user to enter a country name and display information such as:

* Country name
* Capital
* Region
* Population
* Flag

## Why this project uses a backend

The API used in this project requires an Authorization API key.

The API key must not be placed inside `script.js`, because frontend JavaScript is visible to anyone using the browser.

Instead, this project uses a Flask backend.

The frontend sends a request to the backend, and the backend sends the request to the external API with the Authorization header.

## Project flow

```text
User Browser
    ↓
script.js
    ↓
Flask Backend: app.py
    ↓
.env file loads API_KEY
    ↓
External Countries API
```

## Project structure

```text
Task2/
├── app.py
├── index.html
├── style.css
├── script.js
├── requirements.txt
├── .gitignore
└── .env
```

## Important security note

The `.env` file contains the private API key.

It should not be uploaded to GitHub.

The `.gitignore` file includes:

```text
.env
__pycache__/
*.pyc
```

This prevents the API key and Python cache files from being committed.

## Local setup

Install the required Python packages:

```bash
pip install -r requirements.txt
```

Create a `.env` file in the project folder:

```env
API_KEY=YOUR_API_KEY_HERE
```

Run the Flask backend:

```bash
python app.py
```

The backend will run on:

```text
http://127.0.0.1:5000
```

Then open the frontend using Live Server:

```text
http://127.0.0.1:5500/index.html
```

## How the frontend connects to the backend

In `script.js`, the frontend calls the Flask backend:

```js
fetch(`http://127.0.0.1:5000/api/country?name=${encodeURIComponent(countryName)}`)
```

The frontend does not contain the API key.

# How the backend uses the API key

In `app.py`, the backend loads the API key from `.env`:

```python
from dotenv import load_dotenv
import os

load_dotenv()

APIKEY = os.getenv("API_KEY")
```

Then the backend sends the Authorization header:

```python
headers={
    "Authorization": f"Bearer {APIKEY}"
}
```

## Deployment note

To make the app work online for other users, the Flask backend should be deployed to a Python hosting service such as:

* Render

After deployment, the frontend URL in `script.js` should be changed from:

```js
http://127.0.0.1:5000
```

to the deployed backend URL, for example:

```js
https://your-backend-url.onrender.com
```

The API key should be added as an environment variable on the deployment platform, not uploaded to GitHub.

## Summary
During this assignment, we:
* Used Postman to test API requests and understand how APIs work.
* Used the GET method to retrieve data from an external API.
* Configured Bearer Token Authorization to access protected API endpoints.
* Learned the importance of protecting API keys and keeping sensitive credentials out of client-side code.
* Implemented a Flask backend and environment variables (.env) to securely store the API key instead of exposing it in the frontend.