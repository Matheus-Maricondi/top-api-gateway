import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("admins").del();

    // Inserts seed entries
    await knex("admins").insert([
        { id: 1, username: "admin", password: "123456" }
    ]);
};
