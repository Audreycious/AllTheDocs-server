DROP TABLE IF EXISTS mdndocs;
DROP TABLE IF EXISTS reactdocs;
DROP TABLE IF EXISTS documents;
SET TIME ZONE 'America/Chicago';

CREATE TABLE mdndocs (
    id VARCHAR PRIMARY KEY,
    imagelink VARCHAR NOT NULL,
    pagelink VARCHAR NOT NULL
);

CREATE TABLE reactdocs (
    id VARCHAR PRIMARY KEY,
    imagelink VARCHAR NOT NULL,
    pagelink VARCHAR NOT NULL
);

CREATE TABLE documents (
    id VARCHAR PRIMARY KEY,
    term VARCHAR NOT NULL,
    fkmdndocs VARCHAR REFERENCES mdndocs(id) NOT NULL,
    fkreactdocs VARCHAR REFERENCES reactdocs(id) NOT NULL
);