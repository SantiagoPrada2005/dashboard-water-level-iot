# Configuración de Base de Datos SQLite con Drizzle ORM

## 📋 Resumen

Este proyecto utiliza **Drizzle ORM** con **SQLite** como base de datos. La configuración está lista y la base de datos en blanco ha sido creada exitosamente.

## 🗂️ Archivos de Configuración

### `.env`
```
DB_FILE_NAME=file:water-level.db
```

### `drizzle.config.ts`
Configuración de Drizzle Kit para migraciones y generación de código.

### `src/db/index.ts`
Conexión principal a la base de datos usando libSQL.

### `src/db/schema.ts`
Archivo para definir los esquemas de las tablas (actualmente vacío).

## 🚀 Scripts Disponibles

```bash
# Crear/verificar la base de datos
npm run db:create

# Generar migraciones (después de definir esquemas)
npm run db:generate

# Aplicar migraciones
npm run db:migrate

# Abrir Drizzle Studio (interfaz web)
npm run db:studio
```

## 📝 Próximos Pasos

1. **Definir Esquemas**: Agrega tus tablas en `src/db/schema.ts`
2. **Generar Migraciones**: Ejecuta `npm run db:generate`
3. **Aplicar Migraciones**: Ejecuta `npm run db:migrate`
4. **Usar en tu Aplicación**: Importa `db` desde `src/db/index.ts`

## 💡 Ejemplo de Uso

```typescript
import { db } from '@/db';

// Ejemplo de consulta (después de definir esquemas)
// const users = await db.select().from(userTable);
```

## ✅ Estado Actual

- ✅ Base de datos SQLite creada (`water-level.db`)
- ✅ Conexión configurada y probada
- ✅ Drizzle ORM configurado
- ⏳ Esquemas pendientes de definir