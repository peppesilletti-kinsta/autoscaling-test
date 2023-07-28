# Pull in the official lightweight version of Node 12.
FROM node

# Create and change to the app directory.
WORKDIR /app

COPY package.json .
COPY package-lock.json .

# Install production dependencies.
RUN npm install --production

# Copy local codebase into the container image
COPY . .

# Start the api server
CMD [ "npm", "start" ]