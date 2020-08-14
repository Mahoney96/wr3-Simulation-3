CREATE TABLE users (id SERIAL, username VARCHAR(20), password VARCHAR(20), profile_pic TEXT );
INSERT INTO users (id, username, password,  profile_pic) VALUES ('1', 'Dave Chappelle', 'Chappelle Show', 'img.src');
INSERT INTO users (id, username, password,  profile_pic) VALUES ('2', 'WillFerrell', 'AnchorMan', 'img.src');
INSERT INTO users (id, username, password,  profile_pic) VALUES ('3', 'VinceVaughn', 'OldSchool', 'img.src');


CREATE TABLE posts ( id SERIAL, title VARCHAR(45), img TEXT, content TEXT, author_id INTEGER);
INSERT INTO posts (id, title, img, content, author_id ) VALUES ('1', 'To code', 'img.src', 'Book', '1');
INSERT INTO posts (id, title, img, content, author_id ) VALUES ('2', 'Or to Not Code', 'Book', 'img.src', '2');
INSERT INTO posts (id, title, img, content, author_id ) VALUES ('3', 'That is the Question', 'Book', 'img.src', '3');


-- SELECT Col.Column.users from
-- INFORMATION_SCHEMA.TABLE_CONSTRAINTS Tab,
-- INFORMATION_SCHEMA.CONSTRAINT_COLUMN_USAGE Col
-- WHERE
-- Col.Constraint_Name = Tab.Constraint_Name
-- AND Col.Table_Name = Tab.Table_Name
-- And Constraint_Type = 'PRIMARY KEY'
-- AND Col.Table_Name = '<users>'