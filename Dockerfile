# Use the official Node.js image based on Alpine Linux as the base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Expose the port that your app runs on
EXPOSE 8080

# Command to run your application
CMD ["npm", "start"]
