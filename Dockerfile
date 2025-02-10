# Use Node.js as the base image
FROM node:22

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy application files
COPY . .

# Expose application port
EXPOSE 3000

# Run the application
CMD ["npm", "start"]