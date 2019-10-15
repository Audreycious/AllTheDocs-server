BEGIN;

TRUNCATE mdndocs, reactdocs, documents RESTART IDENTITY CASCADE;

INSERT INTO mdndocs (id, mdnimagelink, mdnpagelink)
    VALUES
        ('1', 'https://i.imgur.com/ESNEOFg.png', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat'),
        ('2', 'https://i.imgur.com/YBAZWUV.png', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow'),
        ('3', 'https://i.imgur.com/d5A5wLd.png', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date'),
        ('4', 'https://i.imgur.com/dGhVxWK.png', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor'),
         ('5', 'https://i.imgur.com/rvWsiTm.png', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array'),
         ('6', 'https://i.imgur.com/zlCC9ZX.png', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null'),
         ('7', 'https://i.imgur.com/SODQPtE.png', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf'),
         ('8', 'https://i.imgur.com/GeQcpWk.png', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice'),
                 ('9', 'https://i.imgur.com/bTmDUfz.png', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase'),
        ('10', 'https://i.imgur.com/p8RM94e.png', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split'),
        ('11', 'https://i.imgur.com/d5A5wLd.png', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date'),
        ('12', 'https://i.imgur.com/5aGZhsA.png', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr'),
        ('13', 'https://i.imgur.com/TcT7FtV.png', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf'),
        ('14', 'https://i.imgur.com/dH0DVji.png', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min'),
        ('15', 'https://i.imgur.com/jZpUTI3.png', 'https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm'),
        ('16', 'https://i.imgur.com/erxAE3R.png', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'),
        ('17', 'https://i.imgur.com/cRHJg8A.png', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString'),
        ('18', 'https://i.imgur.com/tW88gqd.png', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase'),
        ('19', 'https://i.imgur.com/7Cyj5F7.png', 'https://developer.mozilla.org/en-US/docs/Web/API/Document/write'),
        ('20', 'https://i.imgur.com/YBAZWUV.png', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow'),
        ('21', 'https://i.imgur.com/251LwHM.png', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max'),
        ('22', 'https://i.imgur.com/MMlqxrQ.png', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random'),
        ('23', 'https://i.imgur.com/Nch33LZ.png', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push'),
        ('24', 'https://i.imgur.com/L2B54kC.png', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil'),
        ('25', 'https://i.imgur.com/GFkZmyb.png', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt'),
        ('26', 'https://i.imgur.com/g75rrXb.png', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object'),
        ('27', 'https://i.imgur.com/hx6dDCB.png', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat'),
        ('28', 'https://i.imgur.com/kpgs7o8.png', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf'),
        ('29', 'https://i.imgur.com/3NfFWWg.png', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt'),
        ('30', 'https://i.imgur.com/LKmodn4.png', 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch');


INSERT INTO reactdocs (id, reactimagelink, reactpagelink)
    VALUES
        ('1', 'https://i.imgur.com/NSL98L6.png', 'https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data'),
        ('2', 'secondImageLink', 'secondPageLink'),
        ('3', 'thirdImageLink', 'thirdPageLink'),
        ('4', 'fourthImageLink', 'fourthPageLink'),
        ('5', 'fifthImageLink', 'fifthPageLink'),
        ('6', 'sixthImageLink', 'sixthPageLink'),
        ('7', 'seventhImageLink', 'seventhPageLink'),
        ('8', 'eighthImageLink', 'eighthPageLink'),
        ('9', 'ninthImageLink', 'ninthPageLink'),
        ('10', 'tenthImageLink', 'tenthPageLink'),
        ('11', 'eleventhImageLink', 'eleventhPageLink'),
        ('12', 'twelfthImageLink', 'twelfthPageLink'),
        ('13', 'thirteenthImageLink', 'thirteenthPageLink'),
        ('14', 'fourteenthImageLink', 'fourteenthPageLink'),
        ('15', 'fifteenthImageLink', 'fifteenthPageLink'),
        ('16', 'sixteenthImageLink', 'sixteenthPageLink'),
        ('17', 'seventeenthImageLink', 'seventeenthPageLink'),
        ('18', 'eighteenthImageLink', 'eighteenthPageLink'),
        ('19', 'nineteenthImageLink', 'nineteenthPageLink'),
        ('20', 'twentyImageLink', 'twentyPageLink'),
        ('21', 'twentyoneImageLink', 'twentyonePageLink'),
        ('22', 'twentytwoImageLink', 'twentytwoPageLink'),
        ('23', 'twentythreeImageLink', 'twentythreePageLink'),
        ('24', 'twentyfourImageLink', 'twentyfourPageLink'),
        ('25', 'twentyfiveImageLink', 'twentyfivePageLink'),
        ('26', 'twentysixImageLink', 'twentysixPageLink'),
        ('27', 'twentysevenImageLink', 'twentysevenPageLink'),
        ('28', 'twentyeightImageLink', 'twentyeightPageLink'),
        ('29', 'twentynineImageLink', 'twentyninePageLink'),
        ('30', 'thirtyImageLink', 'thirtyPageLink');

INSERT INTO documents (id, term, fkmdndocs, fkreactdocs)
    VALUES
        ('1', 'concat()', '1', '1'),
        ('2', 'pow()', '2', '2'),
        ('3', 'date()', '3', '3'),
        ('4', 'floor()', '4', '4'),
        ('5', 'array', '5', '5'),
        ('6', 'null', '6', '6'),
        ('7', 'indexof', '7', '7'),
        ('8', 'slice', '8', '8'),
        ('9', 'touppercase', '9', '9'),
        ('10', 'split', '10', '10'),
        ('11', 'date', '11', '11'),
        ('12', 'substr', '12', '12'),
        ('13', 'lastindexof', '13', '13'),
        ('14', 'min', '14', '14'),
        ('15', 'confirm', '15', '15'),
        ('16', 'string', '16', '16'),
        ('17', 'tostring', '17', '17'),
        ('18', 'tolowercase', '18', '18'),
        ('19', 'write', '19', '19'),
        ('20', 'pow', '20', '20'),
        ('21', 'max', '21', '21'),
        ('22', 'random', '22', '22'),
        ('23', 'push', '23', '23'),
        ('24', 'ceil', '24', '24'),
        ('25', 'charat', '25', '25'),
        ('26', 'object', '26', '26'),
        ('27', 'concat', '27', '27'),
        ('28', 'valueof', '28', '28'),
        ('29', 'charcodeat', '29', '29'),
        ('30', 'fetch', '30', '30');
COMMIT;