# dockerized-fullstack-app-nodejs-react

It's purpose is to demonstrate, how to build a fullstack application with **React** and **NodeJS** and containerize both of them.
In it's current stage it's [ready to be deployed on AWS EC2 instances](https://docs.docker.com/engine/context/ecs-integration/).

The backend sends random _SameSite: Strict, HttpOnly_ cookies to frontend in every response.
Every subsequent axios requests (coming from the React app) should send these constantly changing cookies back to the backend, 
since both of the applications are on the **same domain**.
