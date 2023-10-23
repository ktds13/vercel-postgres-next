import {sql} from '@vercel/postgres';

export default async function handler(request, response) {
    try {
        const id = request.query.id;
        const name = request.query.name;
        await sql`INSERT INTO People (Id, Name) VALUES (${id}, ${name});`;
    } catch (error) {
        return response.status(500).json({error});
    }

    const people = await sql `SELECT * from People;`;
    return response.status(200).json({people : people.rows});
}
