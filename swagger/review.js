/**
 * @swagger
 * tags:
 *   name: Review
 *   description: Операции, связанные с отзывами
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Review:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: Уникальный идентификатор отзыва
 *         userId:
 *           type: string
 *           description: Идентификатор пользователя, оставившего отзыв
 *         comment:
 *           type: string
 *           description: Текст отзыва
 *         rating:
 *           type: number
 *           description: Рейтинг отзыва
 *       required:
 *         - userId
 *         - comment
 *         - rating
 */

/**
 * @swagger
 * /review:
 *   post:
 *     summary: Создать новый отзыв
 *     tags: [Review]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Review'
 *     responses:
 *       201:
 *         description: Отзыв успешно создан
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Review'
 *       500:
 *         description: Внутренняя ошибка сервера
 */

/**
 * @swagger
 * /review/{id}:
 *   get:
 *     summary: Получить отзыв по идентификатору
 *     tags: [Review]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор отзыва
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Возвращает отзыв
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Review'
 *       404:
 *         description: Отзыв не найден
 *       500:
 *         description: Внутренняя ошибка сервера
 */

/**
 * @swagger
 * /review:
 *   get:
 *     summary: Получить все отзывы
 *     tags: [Review]
 *     responses:
 *       200:
 *         description: Возвращает список всех отзывов
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Review'
 *       500:
 *         description: Внутренняя ошибка сервера
 */

/**
 * @swagger
 * /review/{id}:
 *   delete:
 *     summary: Удалить отзыв по идентификатору
 *     tags: [Review]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор отзыва
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Отзыв успешно удален
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Review'
 *       404:
 *         description: Отзыв не найден
 *       500:
 *         description: Внутренняя ошибка сервера
 */
