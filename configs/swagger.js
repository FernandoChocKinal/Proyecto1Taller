import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
    swaggerDefinition:{
        openapi: "3.0.0",
        info:{
            title: "Sistema de Ventas API",
            version: "1.0.0",
            description: "API para gestionar el sistema de ventas de una tienda",
            contact:{
                name: "Fernando Choc",
                email: "fchoc-2020619@kinal.edu.gt"
            }
        },
        servers:[
            {
                url: "http://127.0.0.1:3000/salesSystem/v1"
            }
        ]
    },
    apis:[
        "./src.js",
        "./src.js",
        "./src.js",
        "./src.js",
        "./src.js"
    ]
}

const swaggerDocs = swaggerJSDoc(swaggerOptions)

export {swaggerDocs, swaggerUi};