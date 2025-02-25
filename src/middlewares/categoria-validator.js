import { body, param } from "express-validator";
import { categoriaExists } from ".././helpers/db-validators.js";
import { handleErrors } from "./handle-errors.js";
import { validarCampos } from "./validar-campos.js";
import { validateJWT } from "./validate-jwt.js";
import { hasRoles } from "./validate-role.js";

export const agregarCategoriaValidator = [
    validateJWT,
    hasRoles("ADMIN_ROLE"),
    body("nombre").notEmpty().withMessage("El nombre es requerido"),
    body("descripcion").optional().isString().withMessage("La descripción debe ser un texto"),
    validarCampos,
    handleErrors
];

export const getCategoriaValidator = [
    validateJWT,
    hasRoles("ADMIN_ROLE"),
    validarCampos,
    handleErrors
];

export const actualizarCategoriaValidator = [
    validateJWT,
    hasRoles("ADMIN_ROLE"),
    param("uid").isMongoId().withMessage("No es un ID válido de MongoDB"),
    body("nombre").optional().isString().withMessage("El nombre debe ser un texto"),
    body("descripcion").optional().isString().withMessage("La descripción debe ser un texto"),
    validarCampos,
    handleErrors
]

export const eliminarCategoriaValidator = [
    validateJWT,
    hasRoles("ADMIN_ROLE"),
    param("uid").isMongoId().withMessage("No es un ID válido de MongoDB"),
    param("uid").custom(categoriaExists),
    validarCampos,
    handleErrors
]