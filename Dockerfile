# Use Node.js 14-alpine as the base image
FROM node:14-alpine3.12

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the HTML, CSS, and JavaScript files to the appropriate directory in the container
COPY index.html .
COPY style.css .
COPY script.js .

# Expose port 8080 to allow incoming HTTP traffic
EXPOSE 8080

# Install http-server globally using npm
RUN npm install -g http-server

# Command to start the HTTP server
CMD ["http-server", "-p", "8080"]