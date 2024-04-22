/**
 * @swagger
 * tags:
 *   name: University
 *   description: Операции, связанные с университетами
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     University:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: Уникальный идентификатор новости университета
 *         name:
 *           type: string
 *           description: Название университета
 *         image:
 *           type: array
 *           items:
 *             type: string
 *           description: Список URL изображений университета
 *         email:
 *           type: string
 *           description: Электронная почта университета
 *         siteUrl:
 *           type: string
 *           description: URL сайта университета
 *         address:
 *           type: string
 *           description: Адрес университета
 *         news:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/UniversityNews'
 *           description: Список новостей университета
 *         institute:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Institute'
 *           description: Список институтов университета
 *         dormitory:
 *           $ref: '#/components/schemas/Dormitory'
 *           description: Общежитие университета
 *         docsImg:
 *           type: string
 *           description: URL изображения документов университета
 *         selectionCommittee:
 *           type: object
 *           properties:
 *             mail:
 *               type: string
 *               description: Электронная почта приемной комиссии университета
 *             phone:
 *               type: string
 *               description: Телефон приемной комиссии университета
 *           description: Контактная информация приемной комиссии университета
 *         reviews:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Review'
 *           description: Список отзывов о университете
 *         users:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/UserComment'
 *           description: Список комментариев пользователей о университете
 *         access:
 *           type: array
 *           items:
 *             type: string
 *           description: Список идентификаторов пользователей, имеющих доступ к университету
 *         admin:
 *           type: string
 *           description: Идентификатор администратора университета
 *       required:
 *         - name
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
 *     Institute:
 *       type: object
 *       properties:
 *         // Определите свойства для института
 *     Dormitory:
 *       type: object
 *       properties:
 *         // Определите свойства для общежития
 *     Review:
 *       type: object
 *       properties:
 *         // Определите свойства для отзыва
 *     UserComment:
 *       type: object
 *       properties:
 *         // Определите свойства для комментария пользователя
 */

/**
 * @swagger
 * /university/{id}:
 *   post:
 *     summary: Создать новый университет
 *     tags: [University]
 *     description: Создает новый университет с заданным ID администратора
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID администратора
 *       - in: formData
 *         name: image
 *         type: file
 *         description: Изображение университета
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/University'
 *     responses:
 *       '200':
 *         description: Университет успешно создан
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/University'
 */

/**
 * @swagger
 * /university/{id}:
 *   get:
 *     summary: Получить университет по ID
 *     tags: [University]
 *     description: Получает информацию об университете по его ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID университета
 *     responses:
 *       '200':
 *         description: Университет успешно получен
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/University'
 */

/**
 * @swagger
 * /university/{id}:
 *   patch:
 *     summary: Обновить университет
 *     tags: [University]
 *     description: Обновляет информацию об университете
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID университета
 *       - in: formData
 *         name: image
 *         type: file
 *         description: Изображение университета
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/University'
 *     responses:
 *       '200':
 *         description: Университет успешно обновлен
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/University'
 */

/**
 * @swagger
 * /university/{id}:
 *   delete:
 *     summary: Удалить университет
 *     tags: [University]
 *     description: Удаляет университет по его ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID университета
 *     responses:
 *       '200':
 *         description: Университет успешно удален
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/University'
 *       '404':
 *         description: Университет не найден
 *       '500':
 *         description: Внутренняя ошибка сервера
 */

/**
 * @swagger
 * /university/addComment/{id}:
 *   post:
 *     summary: Добавить комментарий к университету
 *     tags: [University]
 *     description: Добавляет комментарий к университету по его ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID университета
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *               comment:
 *                 type: string
 *               time:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Комментарий успешно добавлен
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/UserComment'
 *       '500':
 *         description: Внутренняя ошибка сервера
 */

/**
 * @swagger
 * /university/addUser/{id}:
 *   post:
 *     summary: Добавить пользователя к университету
 *     tags: [University]
 *     description: Добавляет пользователя к университету по его ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID университета
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Пользователь успешно добавлен
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/University'
 *       '500':
 *         description: Внутренняя ошибка сервера
 */

/**
 * @swagger
 * /university/deleteUser/{id}:
 *   post:
 *     summary: Удалить пользователя из университета
 *     tags: [University]
 *     description: Удаляет пользователя из университета по его ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID университета
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Пользователь успешно удален
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/University'
 *       '500':
 *         description: Внутренняя ошибка сервера
 */

/**
 * @swagger
 * /university:
 *   get:
 *     summary: Получить все университеты
 *     tags: [University]
 *     description: Получает список всех университетов
 *     responses:
 *       '200':
 *         description: Список университетов успешно получен
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/University'
 *       '500':
 *         description: Внутренняя ошибка сервера
 */
