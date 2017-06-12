# projectary-frontend

The frontend part of the projectary project.

## Installation
The only dependency is NodeJS, so just run `npm install` inside this repo:

```bash
$ cd \projectary-frontend
$ npm install 
```

## Usage
We need to start a server running [the API](https://github.com/iptomar/projectary-api). Grab it, install it and run it. If you need to change the IP where the API is located just change the configuration which is located at `src/main.ts`. You need the API to have communication with the database, the users created by default are described [here](https://github.com/iptomar/projectary-bd#projectary---test-data).

### Development
To run our project in development mode do `npm run start`. After that - it might take a while - you need to open your browser on the indicated address.
If you're **using vagrant** and you **need to watch files** use `npm run startWithPoll`. This will use the `--poll` flag on `ng serve`.

### Production
To build it you just need to do `npm run build` and it will build the files at `/dist`. Move the `/dist` files to your server, using nginx move it to `/var/www/html`.

## Team

| Frontend Team       |
| ------------------- |
| Luis Nunes          |
| David Bernardo      |
| Diogo Mendes        |
| Rui Barcelos        |
