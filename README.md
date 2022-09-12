# Prueba Técnica Epic

Esta es la prueba técnica de Alexander Rincón para la vacante de frontend Engineer en Epic.io

---
Instrucciones para correr el proyecto:

1. Clonar el proyecto
```
git clone https://github.com/9alex12/EpicTestMARS.git
```

2. Instalar dependencias
```
yarn o npm i
```

3. Ejecutar el proyecto
```
yarn start o npm start
```

3. Ejecutar el proyecto: Abrir el proyecto en el navegador [http://localhost:3000/](http://localhost:3000/)

---
Estructura del proyecto:
```
 📂src
  ┣ 📂components
  ┃ ┗ 📂[Nombre componente]
  ┃   ┣ 📜[Nombre componente].jsx //*Archivo base del componente, ()*
  ┃   ┣ 📜[Nombre componente].styles.js //*Estilos de componente, se uso emotion*
  ┃   ┗ 📜index.js //*Se exporta el componente base desde el index para un mejor manejo al desarrollar*
  ┣ 📂routes
  ┣ ┗ 📜index.js //*Tiene todo el manejo del enrutamiento, se uso react-router-dom*
  ┣ 📂store
  ┃ ┗ 📜index.js //*Tiene todo el manejo de la data con redux, contiene actions, reducers, resolvers y types*
  ┣ 📂utils
  ┣ ┗ 📂schemas (Contiene las reglas de validación de los formularios, se uso yup para crear los schemas)
  ┣ 📂views
  ┣   ┗ 📂[Nombre de la vista]
  ┃   ┃  ┣ 📜[Nombre la vista].jsx //*Archivo base de la vista, integra componentes para renderizar información y la lógica*
  ┃   ┃  ┣ 📜index.js //*Se exporta la vista desde el index para un mejor manejo al desarrollar*
  ┣ 📜App.js //*Configuración de Tabs en el Header y render del enrutamiento*
  ┗ 📜Index.js //*Configuración y render de react al DOM*
```
---

Tecnologías:
* Se elimino formik y se cambio a react-hook-form ya que esta mas optimizado, por ejemplo evitando renders innecesarios, y para dejar todos los formularios estandarizados con una sola librería
* Se utilizo react-router-dom para el manejo de enrutamiento de las diferentes vistas del proyecto.
* Se utilizo emotion para el manejo de estilos con la metodología de styled components
* Se implemento las devtools de redux para facilitar el desarrollo.
* Se agrego la carpeta resolvers para tener aparte la lógica de los reducers.

---
Componentes a resaltar:
* Se creo el componente **DynamicTable** para renderizar los datos enviados dependiendo el componente padre (Cameras o cameraTypes), este componente facilitara agregar o quitar columnas a la necesidad del desarrollador

```jsx
const columns = [
    { title: 'id', key: "id" }, 
    { title: 'Name', key: "name" }, 
    { title: 'Description', key: "description" }
]
<DynamicTable
    data={data} //Arreglo de los datos a renderizar en la tabla
    columns={columns} //Arreglo de Columnas a mostrar en la tabla dependiendo de la data
    onEdit={onEdit} // Función a ejecutar al dar click en el botón editar de cada fila del listado
    onDelete={onDelete} // Función a ejecutar al dar click en el botón eliminar de cada fila del listado
/>
```

* Se creo el componente **ListWithSearch** para filtrar los datos por medio del input search dependiendo de los criterios en **filters** y luego renderizar los datos en el componente **DynamicTable**, este componente facilita la reutilización en donde se necesiten listados con filtracion

```jsx
<ListWithSearch
    columns={columns} // Prop que se pasa al componente DynamicTable
    data={cameraTypeData} // Data usada para filtrar y mostrar en el componente DynamicTable
    filters={['name', 'description']} // Arreglo de campos que se tomaran de criterio al filtrar
    onAdd={handleAdd} // Función a ejecutar al dar click en el botón ADD del componente
    onEdit={handleEdit} // Prop que se pasa al componente DynamicTable
    onDelete={handleDelete} // Prop que se pasa al componente DynamicTable
/>
```