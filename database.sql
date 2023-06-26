
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "deck" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user" NOT NULL,
    "name" VARCHAR(255) DEFAULT "My Deck"
);

CREATE TABLE "card" (
    "id" SERIAL PRIMARY KEY,
    "deck_id" INT REFERENCES "deck" NOT NULL,
    "card_id" INT,
    "img" VARCHAR(2000),
    "card_name" VARCHAR(500),
    "cmc" INT,
    "color_identity" VARCHAR(255),
    "description" TEXT,
    "rulings" TEXT
);