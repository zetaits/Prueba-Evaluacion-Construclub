# Catálogo de productos

Proyecto realizado como prueba técnica para Construclub. Es una aplicación web sencilla que obtiene un listado de productos desde una API REST y los muestra en un catálogo responsive con su imagen, nombre y precio.

## Tecnologías

- Angular 20 y TypeScript para el frontend.
- Spring Boot 3.5 y Java 17 para el backend.
- Spring Data JPA y H2 como base de datos en memoria.

## Requisitos

- Java 17
- Node.js 20.19 o superior
- npm 8 o superior

## Puesta en marcha

Primero, inicia el backend:

```powershell
cd backend
.\mvnw.cmd spring-boot:run
```

La API estará disponible en `http://localhost:8080/api/productos`.

Después, abre otra terminal e inicia el frontend:

```powershell
cd frontend\product-viewer
npm ci
npm start
```

La aplicación se podrá consultar en `http://localhost:4200`.

## Estructura

```text
backend/                  API REST y acceso a datos
frontend/product-viewer/ Aplicación Angular
```

Los productos de ejemplo se cargan automáticamente al arrancar el backend. La consola de H2 está disponible en `http://localhost:8080/h2-console` con la URL JDBC `jdbc:h2:mem:pruebaevaluaciondb`, el usuario `sa` y la contraseña `password`.
