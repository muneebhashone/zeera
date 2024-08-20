CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" text,
	"email" text,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
