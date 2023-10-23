import {sql} from '@vercel/postgres';

export default async function handler(request, response) {
    try {
        const people = await sql `SELECT * from People;`;
        return response.status(200).json({people : people.rows});
    } catch (error) {
        return response.status(500).json({error});
    }
}
