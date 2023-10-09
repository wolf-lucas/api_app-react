# API

API realizada para el proyecto del bootcamp "Full Stack Engineer" de Educacion IT.

## MAPA DE RUTAS
### GET /products
    - Descripción: Obtener información todos los productos.
    - Precondiciones: 
    - Respuesta:

        UserWithToken = {   
            username: string; 
            id: string;
            createdAt: Date; 
            currentToken: Token 
        }
        
    - Poscondiciones:

### GET /products/:id
    - Descripción: Obtener información de un solo producto según id.
    - Precondiciones: Token existente, valido y habilitado
    - Respuesta: UserWithToken { username: string; id: string; createdAt: Date; currentToken: Token }
    - Poscondiciones:

### POST /products/:id
    - Descripción: Crear un nuevo producto
    - Precondiciones: El usuario no debe existir en la base de datos
    - Respuesta: UserBase { username: string; id: string; createdAt: Date }
    - Poscondiciones: Nuevo usuario creado en la base de datos

### POST /query
    - Descripción: Enviar mensaje de contacto al servidor
    - Precondiciones: Token existente, valido y habilitado
    - Respuesta: MessageResponse { msj: string; }
    - Poscondiciones:

#