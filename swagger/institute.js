/**
 * @swagger
 * tags:
 *   name: Institute
 *   description: Операции, связанные с институтами
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Institute:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: Уникальный идентификатор института
 *         id:
 *           type: string
 *           description: Идентификатор института
 *         title:
 *           type: string
 *           description: Название института
 *         description:
 *           type: string
 *           description: Описание института
 *         image:
 *           type: array
 *           items:
 *             type: string
 *           description: Список URL изображений института
 *         reviews:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Review'
 *           description: Список идентификаторов отзывов об институте
 *       required:
 *         - title
 *         - description
 */

/**
 * @swagger
 * /institute:
 *   post:
 *     summary: Создать новый институт
 *     tags: [Institute]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               image:
 *                 type: array
 *                 items:
 *                   type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Институт успешно создан
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Institute'
 *       400:
 *         description: Неверный запрос
 *       500:
 *         description: Внутренняя ошибка сервера
 */

/**
 * @swagger
 * /institute:
 *   get:
 *     summary: Получить список институтов
 *     tags: [Institute]
 *     responses:
 *       200:
 *         description: Возвращает список институтов
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Institute'
 *       404:
 *         description: Институты не найдены
 *       500:
 *         description: Внутренняя ошибка сервера
 */
