
Debt Manager API is a simple full-stack app with a Node.js + MongoDB backend, JWT auth, and a React frontend—built for learning and experimenting with core backend concepts like routing, authentication, testing, and containerization.
It was inspired by real-world fintech use cases and the desire to better understand how to build secure, transparent systems that support user-facing financial workflows.



##  Running the Project with Docker Compose

To start the API and MongoDB together:

```bash
docker-compose up --build
```

- API will be available at `http://localhost:5000`
- MongoDB runs on `localhost:27017`

You can test the endpoints using Postman or the React app.

---

## Running the React Frontend

The frontend is located in the `frontend-react` folder.

### 1. Install dependencies

```bash
cd frontend-react
npm install
```

### 2. Start the development server

```bash
npm start
```

- The React app runs on `http://localhost:3000`
- It fetches data from the backend running on port `5000`

> Make sure both the backend (`docker-compose up`) and frontend (`npm start`) are running.

---

## Running Tests

We use Jest and Supertest for API testing.

```bash
npm install
npm test
```

Tests are located in the `tests/` folder.
