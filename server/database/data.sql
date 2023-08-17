DROP TABLE IF EXISTS entries;

CREATE TABLE entries (
  id INT GENERATED ALWAYS AS IDENTITY,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  time TIME NOT NULL,
  text VARCHAR(25500) NOT NULL,
  category VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO entries (date, time, text, category)
VALUES ('2023-08-17', '15:05:00', ' This is my first entry', 'Personal')
