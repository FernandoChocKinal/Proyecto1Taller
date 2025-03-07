import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
    swaggerDefinition:{
        openapi: "3.0.0",
        info:{
            title: "Gestion De Ventas API",
            version: "1.0.0",
            description: "API de gestor de ventas de un supermercado",
            contact:{
                name: "Fernando Choc",
                email: "fchoc-2020619@kinal.edu.gt"
            }
        },
        servers:[
            {
                url: "http://127.0.0.1:3000/gestorDeVentas/v1"
            }
        ]
    },
    apis:[
        "./src/auth/auth.routes.js",
        "./src/user/user.routes.js",
    ]
}

const swaggerDocs = swaggerJSDoc(swaggerOptions)

export {swaggerDocs, swaggerUi};