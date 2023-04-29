# Welcome to MyBlog!

## Run

To run the web application locally, make sure your project's local dependencies are installed:

```sh
npm install
```
Then you need to initial the MySQL database:

- Create a database named `myblog` in MySQL
- edit the [env file](.env) in the root directory, change the `DATABASE_URL` and `SESSION_SECRET` to your own
- run the following command in the root directory:
- ```sh
  npx prisma db push
  ```

Afterward, start the application development server like so:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!
