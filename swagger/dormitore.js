/**
 * @swagger
 * tags:
 *   name: Dormitory
 *   description: Операции, связанные с управлением общежитиями
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Dormitory:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: Уникальный идентификатор общежития
 *         title:
 *           type: string
 *           description: Название общежития
 *         description:
 *           type: string
 *           description: Описание общежития
 *         image:
 *           type: array
 *           items:
 *             type: string
 *           description: Список URL изображений общежития
 *         rating:
 *           type: number
 *           description: Рейтинг общежития
 *         reviews:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Review'
 *           description: Список идентификаторов отзывов общежития
 *       required:
 *         - title
 *         - description
 *         - rating
 */

/**
 * @swagger
 * /dormitore:
 *   get:
 *     summary: Получить список общежитий
 *     tags: [Dormitory]
 *     responses:
 *       200:
 *         description: Возвращает список общежитий
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Dormitory'
 *       500:
 *         description: Внутренняя ошибка сервера
 */

/**
 * @swagger
 * /dormitore/{id}:
 *   get:
 *     summary: Получить одно общежитие
 *     tags: [Dormitory]
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
 *               $ref: '#/components/schemas/Dormitory'
 *       500:
 *         description: Внутренняя ошибка сервера
 */

/**
 * @swagger
 * /addDorm:
 *   post:
 *     summary: Создать новое общежитие
 *     tags: [Dormitory]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Dormitory'
 *     responses:
 *       200:
 *         description: Общежитие успешно создано
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Dormitory'
 *       500:
 *         description: Внутренняя ошибка сервера
 */
