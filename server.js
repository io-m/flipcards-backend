const express = require('express');
const cors = require('cors');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
const port = 3001;

app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'images')));

const cardsData = {
  "cards": [
    {
      "id": 1,
      "image": "/images/abstract.png",
      "description": "Do you like abstract art?"
    },
    {
      "id": 2,
      "image": "/images/cake.png",
      "description": "Guess calories?"
    },
    {
      "id": 3,
      "image": "/images/cat.png",
      "description": "Cats are mysteriously awesome!"
    },
    {
      "id": 4,
      "image": "/images/interior.png",
      "description": "Is this hygge?"
    },
    {
      "id": 5,
      "image": "/images/tech.png",
      "description": "What's your take on AI?"
    },
    {
      "id": 6,
      "image": "/images/whisper.png",
      "description": "Loud whisper!"
    }
  ]
};

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Flipcards Backend API',
    version: '1.0.0',
    description: 'API for flipcards frontend developer challenge',
  },
  servers: [
    {
      url: 'http://localhost:3001',
      description: 'Local server',
    },
  ],
};

// Options for the swagger docs
const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./server.js'],
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsdoc(options);

// Use swagger-UI-express for your app documentation endpoint
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /cards:
 *   get:
 *     summary: Retrieve a list of cards
 *     description: Retrieve a list of cards with images and descriptions.
 *     responses:
 *       200:
 *         description: A list of cards.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 cards:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The card ID.
 *                         example: 1
 *                       image:
 *                         type: string
 *                         description: The URL of the image.
 *                         example: /images/abstract.png
 *                       description:
 *                         type: string
 *                         description: The description of the image.
 *                         example: Do you like abstract art?
 *       500:
 *         description: Internal Server Error.
 */

app.get('/cards', (req, res) => {
  // Generate a random delay between 400 and 2000 milliseconds
  const delay = Math.floor(Math.random() * (2000 - 400 + 1)) + 400;

  // Introduce a random error response
  const randomError = Math.random() < 0.16; // 16% chance of error

  setTimeout(() => {
    if (randomError) {
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(cardsData);
    }
  }, delay);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});
