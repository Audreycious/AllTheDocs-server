DROP TABLE IF EXISTS userhistory;

CREATE TABLE userhistory( 
    id VARCHAR PRIMARY KEY, 
    fkuserid VARCHAR NOT NULL,
    searchname VARCHAR NOT NULL
);

ALTER TABLE userhistory ADD CONSTRAINT fk_user_id FOREIGN KEY (fkuserid) REFERENCES users(id);