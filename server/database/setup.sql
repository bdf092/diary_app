DROP TABLE IF EXISTS entries;

CREATE TABLE entries (
  id INT GENERATED ALWAYS AS IDENTITY,
  date VARCHAR(255) NOT NULL,
  time INT NOT NULL,
  text VARCHAR(25500) NOT NULL,
  category VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO entries (date, time, text, category)
VALUES ('17/08/2023', 15.01, ' This is my first entry', 'Personal')
