

MANAGE YOUR PROJECT
This is a simple web application for managing tasks using HTML, CSS, and JavaScript. It allows users to add tasks, update their status, and view all tasks.

How to Run the Application Locally
Clone this repository to your local machine:

git clone https://github.com/yourusername/web-application-.git

**Navigate to the project directory:**


cd web-application-

Open the index.html file in your preferred web browser.

**Building the Docker Image and Running a Container**

To build the Docker image and run a container using the image, follow these steps:

Make sure you have Docker installed on your machine. You can download and install Docker from https://www.docker.com/get-started.

In the terminal, navigate to the project directory:


cd web-application-
Build the Docker image using the provided Dockerfile:

 sudo docker build -t web-application .

Replace web-application with the name you want to give to your Docker image.

Once the image is built, you can run a container using the image:


sudo docker run -d -p 8080:80 web-application

This command will start a container in detached mode (-d) and map port 8080 on your host machine to port 80 on the container.

Open your web browser and navigate to (http://localhost:8080) to access the application.

**Assumptions and Decisions Made During Development**
During the development process, the following assumptions and decisions were made:

Technology Stack: The application was built using HTML, CSS, and JavaScript without any frontend frameworks like Vue.js to keep it lightweight and simple.

Styling: Basic CSS was used for styling the application to keep it clean and minimalist.

No Backend: Since this is a frontend-only application, there's no backend or database integration. Task data is stored locally within the browser's memory.

Dockerization: The application was Dockerized for portability and ease of deployment. A simple Nginx server serves the static files.

Port Configuration: The application runs on port 80 inside the Docker container. When running the container locally, port 8080 on the host machine is mapped to port 80 on the container to avoid conflicts.

