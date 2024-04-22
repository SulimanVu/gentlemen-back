/**
 * @swagger
 * tags:
 *   name: University News
 *   description: Операции, связанные с новостями университетов
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     UniversityNews:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: Уникальный идентификатор новости университета
 *         title:
 *           type: string
 *           description: Заголовок новости
 *         description:
 *           type: string
 *           description: Описание новости
 *         image:
 *           type: array
 *           items:
 *             type: string
 *           description: Список URL изображений новости
 *         reviews:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Review'
 *           description: Список идентификаторов отзывов к новости
 *       required:
 *         - title
 *         - description
 */

/**
 * @swagger
 * /news/{id}:
 *   get:
 *     summary: Получить одну новость университета
 *     tags: [University News]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор новости
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Возвращает новость университета
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UniversityNews'
 *       404:
 *         description: Новость не найдена
 *       500:
 *         description: Внутренняя ошибка сервера
 */

/**
 * @swagger
 * /news:
 *   get:
 *     summary: Получить список новостей университета
 *     tags: [University News]
 *     responses:
 *       200:
 *         description: Возвращает список новостей университета
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/UniversityNews'
 *       404:
 *         description: Новости не найдены
 *       500:
 *         description: Внутренняя ошибка сервера
 */

/**
 * @swagger
 * /news:
 *   post:
 *     summary: Создать новость университета
 *     tags: [University News]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
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
 *         description: Новость успешно создана
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UniversityNews'
 *       400:
 *         description: Неверный запрос
 *       500:
 *         description: Внутренняя ошибка сервера
 */

/**
 * @swagger
 * /news/{id}:
 *   patch:
 *     summary: Обновить новость университета
 *     tags: [University News]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор новости
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
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
 *         description: Новость успешно обновлена
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UniversityNews'
 *       404:
 *         description: Новость не найдена
 *       500:
 *         description: Внутренняя ошибка сервера
 */

/**
 * @swagger
 * /news/{id}:
 *   delete:
 *     summary: Удалить новость университета
 *     tags: [University News]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Идентификатор новости
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Новость успешно удалена
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UniversityNews'
 *       404:
 *         description: Новость не найдена
 *       500:
 *         description: Внутренняя ошибка сервера
 */
