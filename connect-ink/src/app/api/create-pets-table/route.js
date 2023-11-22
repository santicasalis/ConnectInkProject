import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

import { Client } from "@vercel/postgres";

async function crearTabla() {
  const client = new Client({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
  });

  try {
    await client.connect();

    // Ejecutar consulta para crear una tabla
    await client.query(
      "CREATE TABLE Pets (Name varchar(255), Owner varchar(255));"
    );

    console.log("Tabla creada con éxito");
  } catch (error) {
    console.error("Error al crear la tabla:", error);
  } finally {
    // Asegúrate de cerrar la conexión, incluso si ocurre un error
    await client.end();
  }
}

// Llamar a la función para crear la tabla
crearTabla();
export async function GET(request) {
  try {
    const result =
      await sql`CREATE TABLE Pets ( Name varchar(255), Owner varchar(255) );`;
    console.log(result);
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
