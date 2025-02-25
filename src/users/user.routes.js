import { Router } from "express";
import { updatePassword, updateUser } from "./user.controller.js";
import { updatePasswordValidator, updateUserValidator } from "../middlewares/validators.js";

const router = Router();

/**
 * @swagger
 * /updatePassword/{uid}:
 *   patch:
 *     summary: Actualizar la contraseña del usuario
 *     tags: [Usuario]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *                 description: Nueva contraseña del usuario
 *                 example: "newpassword123"
 *     responses:
 *       200:
 *         description: Contraseña actualizada correctamente
 *       400:
 *         description: Error de validación
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error del servidor
 */
router.patch("/updatePassword/:uid", updatePasswordValidator, updatePassword);

/**
 * @swagger
 * /updateUser/{uid}:
 *   put:
 *     summary: Actualizar la información del usuario
 *     tags: [Usuario]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre del usuario
 *                 example: "Luis Perez"
 *               email:
 *                 type: string
 *                 description: Email del usuario
 *                 example: "luis.perez@example.com"
 *     responses:
 *       200:
 *         description: Usuario actualizado correctamente
 *       400:
 *         description: Error de validación
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error del servidor
 */
router.put("/updateUser/:uid", updateUserValidator, updateUser);

export default router;
