/**
 * @swagger
 * tags:
 *   name: User
 *   description: Operations related to users
 */

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Register a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               login:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - name
 *               - login
 *               - password
 *     responses:
 *       '200':
 *         description: A successful response, returns the registered user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Log in with existing credentials
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               login:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - login
 *               - password
 *     responses:
 *       '200':
 *         description: A successful response, returns a JWT token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                 login:
 *                   type: string
 */

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: Get user by ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *     responses:
 *       '200':
 *         description: A successful response, returns the requested user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Получить информацию о всех пользователях
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Информация о всех пользователях успешно получена
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       500:
 *         description: Внутренняя ошибка сервера
 */

/**
 * @swagger
 * /patch:
 *   patch/{id}:
 *     summary: Update user information
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '200':
 *         description: A successful response, returns the updated user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         nikname:
 *           type: string
 *         login:
 *           type: string
 *         password:
 *           type: string
 *         role:
 *           type: string
 *         photo:
 *           type: string
 *         institute:
 *           type: string
 *         raiting:
 *           type: number
 *         showName:
 *           type: boolean
 *         passport:
 *           type: string
 *         myMessage:
 *           type: array
 *           items:
 *             type: string
 *         favorite:
 *           type: array
 *           items:
 *             type: string
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 */
