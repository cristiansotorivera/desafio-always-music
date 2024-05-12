import { pool } from "../database/connection.js";

const findAll = async () => {
    const { rows } = await pool.query('SELECT * FROM estudiantes')
    return rows
}

const findOneByRut = async (rut) => {
    const query = {
        text: `SELECT * FROM estudiantes WHERE ID = $1`,
        values: [rut]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

const create = async ({ nombre, rut, curso, nivel }) => {
    
    const query = {
        text: `
        INSERT INTO estudiantes (nombre, rut, curso, nivel) 
        VALUES ($1, $2)
        RETURNING *
        `,
        values: [nombre, rut, curso, nivel]
    }

    const { rows } = await pool.query(query)
    return rows[0]
}

const remove = async (id) => {
    const query = {
        text: `
            DELETE FROM estudiantes
            WHERE ID = $1
            RETURNING *
        `,
        values: [id]
    }

    const { rows } = await pool.query(query)
    return rows[0]
}

const update = async (user) => {
    const query = {
        text: `
            UPDATE estudiantes
            SET nombre = $1,
            rut = $2
            curso = $3
            nivel = $4
            WHERE ID = $5
            RETURNING *
        `,
        values: [estudiante.nombre, estudiante.rut, estudiante.curso, estudiante.nivel, estudiante.id]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

export const Estudiante = { findAll, create, findOneByRut, remove, update }

