BEGIN;

TRUNCATE mdndocs, reactdocs, documents RESTART IDENTITY CASCADE;

INSERT INTO mdndocs (id, mdnimagelink, mdnpagelink)
    VALUES
        ('1', 'https://i.imgur.com/ESNEOFg.png', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat'),
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
        ('1', 'concat()', '1', '1'),
        ('2', 'parseInt', '2', '2'),
        ('3', 'toString', '3', '3'),
        ('4', 'fetch', '4', '4');

COMMIT;