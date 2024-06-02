# Use an official Node runtime as a parent image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any needed dependencies
RUN npm install

# Bundle app source
COPY . .

# Generate Prisma Client inside the Docker container
RUN npx prisma generate

# Expose the port the app runs on
EXPOSE 5000

# Define the command to run the app
CMD ["npm", "start"]