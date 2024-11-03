import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Your API Title",
			version: "1.0.0",
			description: "API documentation for your application",
		},
	},
	apis: ["./src/router/router.ts"], // Updated to match project structure
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };
