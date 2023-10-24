# Ecommerce

## Desripcion
La aplicacion es una aplicación web diseñada para ofrecer una experiencia de compra de zapatillas en línea. La aplicación se conecta a una base de datos en tiempo real (Firebase) para gestionar y mostrar información sobre los productos disponibles. Además, permite a los usuarios realizar pedidos y gestionar sus compras.

## Características Clave
- Amplia selección de zapatillas de diferentes marcas, estilos y tallas.
- Conexión en tiempo real con Firebase para mantener actualizada la información de los productos.
- Capacidades de búsqueda y filtrado para facilitar la navegación de productos.
- Carrito de compras que permite a los usuarios agregar, editar y eliminar productos.
- Proceso de pago seguro y opciones de envío personalizadas.
- Registro de pedidos y seguimiento del estado de las compras.
- Integración con Firebase para almacenar y recuperar información de productos y gestionar las órdenes de compra.


## Navegacion
Aqui hay una demo de la navegacion del sitio, la misma esta hecha con React Router




https://github.com/LopezSantii/Ecommerce/assets/105465529/f79961f5-655f-4377-b022-3cfaf6b17f63


## lenguajes y tecnologias
#### Lenguajes
- Jsx
- Js
- Css
#### Frameworks y Librerias
- React
- Firebase
- Node.js
- Boostrap
- Toastify
- Sweetalert2
#### Sistemas de control de versiones
- Git
- GitHub

## Como correr el proyecto
Para el correctamente funcionamiento del proyecto debes ejecutar los siguientes comandos:
```
npm install
npm start
npm install react-router-dom
npm install firebase
npm install react-bootstrap bootstrap
npm install sweetalert2
npm install toastify-js
```
Recuerda tener seteadas las variables de entorno en el archivo `.env` para el correcto funcionamiento de la base de datos.
```
VITE_FIRESTORE_API_KEY
VITE_FIRESTORE_AUTH_DOMAIN
VITE_FIRESTORE_PROJET_ID
VITE_FIRESTORE_STORAGE_BUCKET
VITE_FIRESTORE_MESSAGING_SENDER_ID
VITE_FIRESTORE_APP_ID
```

## Componentes principales
### Navbar
En el Navbar se alojan los links asi las categorias de los producos como tambien el Cart que es otro componente importante del proyecto
![image](https://github.com/LopezSantii/Ecommerce/assets/105465529/2e085530-f980-4a62-835d-5cfb9592acc3)

### CartWidget
Es un modal que se despliega al precionar en el boton, solo se abre si hay productos en el carrito
![image](https://github.com/LopezSantii/Ecommerce/assets/105465529/3b22f152-221d-422f-b566-fa02a1e26dbb)

<br>Al darle comprar se despliega el form para realizar la compra
<br>![image](https://github.com/LopezSantii/Ecommerce/assets/105465529/fe37d9bf-7f16-4052-bd91-39a2a31dbacb)

### ItemContainer
Es el contenedor de todos los productos del ecommerce
![image](https://github.com/LopezSantii/carritoDeCompras/assets/105465529/5739cd24-9152-4999-a097-ecd887f2c3cc)

### ItemDetail
Muestra el detalle del producto al hacerle click en el item container
![image](https://github.com/LopezSantii/Ecommerce/assets/105465529/1b942d9d-9527-4e04-b799-36a347a42fe7)


## Experiencia de usuario
Para mejorar la experiencia de usuario use dos librerias de notificaciones que le permiten al usuario saber que esta pasando
![image](https://github.com/LopezSantii/Ecommerce/assets/105465529/1ea60224-9d21-4632-b8d9-a197d5250785)
![image](https://github.com/LopezSantii/carritoDeCompras/assets/105465529/3b93ea25-ea69-4b30-b9bd-83a26a981124) 
![image](https://github.com/LopezSantii/Ecommerce/assets/105465529/b174858b-7c5b-4aba-8299-93003492b158)
![image](https://github.com/LopezSantii/Ecommerce/assets/105465529/c2e2da31-6951-4260-a3f7-fe9bf1d224a8)


### Gracias por llegar hasta aqui espero que les haya gustado ❤
Les dejo mi LinkedIn: https://www.linkedin.com/in/santiago-lopez-3962a4234/
