const express = require('express');
const app = express();
const port = 3300;

const swaggerDocs = require('./swagger');

swaggerDocs(app);

const users = [
    { id: 1, name: "João Silva", email: "joao.silva@email.com", password: "test@123" },
    { id: 2, name: "Maria Oliveira", email: "maria.oliveira@email.com", password: "test@123" },
    { id: 3, name: "Carlos Santos", email: "carlos.santos@email.com", password: "test@123" },
    { id: 4, name: "Ana Paula", email: "ana.paula@email.com", password: "test@123" },
    { id: 5, name: "Rafael Souza", email: "rafael.souza@email.com", password: "test@123" }
];

const docs = [
    { id: 1, id_user: 1, type: "Assignment", title: "Practical Activity 1", course: "ADS", shift: "morning" },
    { id: 2, id_user: 2, type: "Assignment", title: "Practical Activity 2", course: "ADS", shift: "afternoon" },
    { id: 3, id_user: 3, type: "Project", title: "Final Project", course: "Engineering", shift: "night" },
    { id: 4, id_user: 4, type: "Article", title: "Scientific Article", course: "Social Sciences", shift: "morning" },
    { id: 5, id_user: 5, type: "Report", title: "Technical Report", course: "Engineering", shift: "afternoon" }
];

/**
 * @openapi
 * /users:
 *   get:
 *     summary: Returns the list of users
 *     responses:
 *       200:
 *         description: List of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   password:
 *                     type: string
 */
app.get('/users', (req, res) => {
    res.json(users);
});

/**
 * @openapi
 * /docs:
 *   get:
 *     summary: Returns the list of documents
 *     responses:
 *       200:
 *         description: List of documents
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   id_user:
 *                     type: integer
 *                   type:
 *                     type: string
 *                   title:
 *                     type: string
 *                   course:
 *                     type: string
 *                   shift:
 *                     type: string
 */
app.get('/docs', (req, res) => {
    res.json(docs);
});

/**
 * @openapi
 * /users/{id}:
 *   get:
 *     summary: Returns a specific user by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 password:
 *                   type: string
 *       404:
 *         description: User not found
 */
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const user = users.find(u => u.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send({ error: "User not found" });
    }
});

app.use((req, res) => {
    res.status(404).send({ error: "Route not found" });
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});