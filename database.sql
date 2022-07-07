
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "decks" (
	"id" SERIAL PRIMARY KEY,
	"deck_name" VARCHAR (150) UNIQUE NOT NULL,
	"format_type" VARCHAR (50),
	"user_id" INTEGER REFERENCES "user"
	);