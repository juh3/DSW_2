CREATE TABLE users (
  id UNIQUE SERIAL,
  user_id TEXT NOT NULL,
  exercises_completed TEXT
);