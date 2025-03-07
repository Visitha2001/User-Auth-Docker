
---

# User CRUD Application

This repository contains the source code and instructions for running a **User CRUD Application** using Docker. The application listens on port `3000` by default but can be mapped to any host port during runtime.

---

## Table of Contents

- [User CRUD Application (v1.0.0)](#user-crud-application-v100)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Building the Docker Image](#building-the-docker-image)
  - [Running the Docker Container](#running-the-docker-container)
    - [Default Port Mapping](#default-port-mapping)
    - [Custom Port Mapping](#custom-port-mapping)
  - [Accessing the Application](#accessing-the-application)
  - [Stopping the Container](#stopping-the-container)
  - [Additional Notes](#additional-notes)

---

## Prerequisites

Before you begin, ensure that the following tools are installed on your system:

- **Docker**: Install Docker from the [official website](https://www.docker.com/products/docker-desktop).
- **Git** (optional): If you need to clone this repository.

Verify your Docker installation by running:
```bash
docker --version
```

---

## Building the Docker Image

To build the Docker image for the application, follow these steps:

1. Navigate to the root directory of the project where the `Dockerfile` is located.
2. Run the following command to build the image:
   ```bash
   docker build -t visitha/user-crud-v1.0.0 .
   ```
   - `-t visitha/user-crud-v1.0.0`: Tags the image with the name `visitha/user-crud-v1.0.0`.
   - `.`: Specifies the current directory as the build context.

3. Verify that the image has been built successfully:
   ```bash
   docker images
   ```
   You should see an entry for `visitha/user-crud-v1.0.0`.

---

## Running the Docker Container

Once the image is built, you can run the container using the following command:

### Default Port Mapping
By default, the application listens on port `3000`. To map it to the same port on your host machine:
```bash
docker run -p 3000:3000 visitha/user-crud-v1.0.0
```

### Custom Port Mapping
If you want to map the application's port `3000` to a different port (e.g., `3001`) on your host machine:
```bash
docker run -p 3001:3000 visitha/user-crud-v1.0.0
```

Alternatively, you can use the image ID instead of the tag:
```bash
docker run -p 3001:3000 <imageID>
```
Replace `<imageID>` with the actual image ID obtained from `docker images`.

---

## Accessing the Application

After starting the container, the application will be accessible via the specified host port. For example:

- If you used the default mapping (`3000:3000`), access the app at:
  ```
  http://localhost:3000
  ```

- If you used a custom mapping (`3001:3000`), access the app at:
  ```
  http://localhost:3001
  ```

---

## Stopping the Container

To stop the running container:

1. List all running containers:
   ```bash
   docker ps
   ```

2. Identify the container ID or name of your application.

3. Stop the container using:
   ```bash
   docker stop <containerID_or_name>
   ```

---

## Additional Notes

- **Environment Variables**: If your application requires environment variables, you can pass them using the `-e` flag:
  ```bash
  docker run -p 3001:3000 -e ENV_VAR_NAME=value visitha/user-crud-v1.0.0
  ```

- **Persistent Data**: If your application uses a database or requires persistent storage, consider using Docker volumes:
  ```bash
  docker run -p 3001:3000 -v /host/path:/container/path visitha/user-crud-v1.0.0
  ```

- **Logs**: To view the logs of a running container:
  ```bash
  docker logs <containerID_or_name>
  ```

---
