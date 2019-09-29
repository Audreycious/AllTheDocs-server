BEGIN;

TRUNCATE mdndocs, reactdocs, documents RESTART IDENTITY CASCADE;

INSERT INTO mdndocs (id, mdnimagelink, mdnpagelink)
    VALUES
        ('1', 'firstImageLink', 'firstPageLink'),
        ('2', 'secondImageLink', 'secondPageLink'),
        ('3', 'thirdImageLink', 'thirdPageLink'),
        ('4', 'fourthImageLink', 'fourthPageLink');

INSERT INTO reactdocs (id, reactimagelink, reactpagelink)
    VALUES
        ('1', 'firstImageLink', 'firstPageLink'),
        ('2', 'secondImageLink', 'secondPageLink'),
        ('3', 'thirdImageLink', 'thirdPageLink'),
        ('4', 'fourthImageLink', 'fourthPageLink');

INSERT INTO documents (id, term, fkmdndocs, fkreactdocs)
    VALUES
        ('1', 'fetch', '1', '1'),
        ('2', 'parseInt', '2', '2'),
        ('3', 'toString', '3', '3'),
        ('4', 'map', '4', '4');

COMMIT;