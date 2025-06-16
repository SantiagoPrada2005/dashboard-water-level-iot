import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

async function createDatabase() {
  let client;
  
  try {
    console.log('🗄️  Creando base de datos SQLite...');
    
    // Crear el cliente de libSQL
    client = createClient({
      url: process.env.DB_FILE_NAME!,
    });
    
    // Crear la instancia de Drizzle ORM
    const db = drizzle(client);
    
    // Verificar la conexión
    const result = await db.run('SELECT 1 as test');
    console.log('✅ Conexión a la base de datos establecida correctamente');
    console.log('📊 Resultado de prueba:', result);
    
    console.log('🎉 Base de datos SQLite creada y lista para usar');
    console.log('📝 Puedes agregar tus esquemas en src/db/schema.ts');
    console.log('📁 Archivo de base de datos:', process.env.DB_FILE_NAME);
    
  } catch (error) {
    console.error('❌ Error al crear la base de datos:', error);
    process.exit(1);
  } finally {
    // Cerrar la conexión
    if (client) {
      client.close();
      console.log('🔒 Conexión cerrada');
    }
  }
}

createDatabase();