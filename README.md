# Wolt API for internship 2023
> Delivery fee calculator API

This is an API that calculates delivery fees complying with [Wolt](https://github.com/woltapp/engineering-summer-intern-2023)'s requirements for the 2023 internship programme. The API is built with fastApi library, and the server is provided by uvicorn's library. It has a single endpoint "/get-delivery-cost".

## Installation
To install all the project's dependencies **pip** and **Python >= 3.9** should be installed, then run:

```sh
pip install -r requirements.txt
```

## Usage example

For running the project just go to "App/src/" directory and launch app.py via command line
```sh
python3 app.py
```
this will launch an uvicorn server on [**127.0.0.1:8000**](127.0.0.1:8000) by default. If you want to run the server on another port go to  the same directory and write on command line:
```sh
uvicorn app:app --reload --port [port]
```

For sending requests two options are available:
1. **FastAPI Swagger UI**

If you want to send it via fastAPI Swagger UI go to [**127.0.0.1:8000/docs**](127.0.0.1:8000/docs) click on "Try it out" edit the payload, send it and check the API's response below.
![alt text](fastapiUI.png)

2. **Curl**

To test the API's response via Curl type on cmd a command that follows this structure:
```sh
curl -X POST 127.0.0.1:8000/get-delivery-cost -H "Content-type:application/json" --data "{\"cart_value\":790,\"delivery_distance\":2235,\"number_of_items\":4,\"time\":\"2021-10-12T13:00:00Z\"}"
```
> :warning: keep in mind that running this command in Windows 10 and lower may not be possible by default

## Testing
Pytest was the library used to implement testing so, to test the project go to "App/src/" and type in the command line
```sh
python -m pytest [-v]
```
this will run all tests inside  "tests/" folder, which are base and edge cases for business logic and api tests. For a more verbose output include *-v* on the command.

## Meta

Paul Martinez – martinezalcalaph@gmail.com

[https://github.com/xoxtomon](https://github.com/xoxtomon/)
