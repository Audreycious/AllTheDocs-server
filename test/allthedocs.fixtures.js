
function makeMDNDocsArray() {
    return [
        {
            id: '1', 
            imagelink: 'firstImageLink', 
            pagelink: 'firstPageLink'
        },
        {
            id: '2', 
            imagelink: 'secondImageLink', 
            pagelink: 'secondPageLink'
        },
        {
            id: '3', 
            imagelink: 'thirdImageLink', 
            pagelink: 'thirdPageLink'
        },
        {
            id: '4', 
            imagelink: 'fourthImageLink', 
            pagelink: 'fourthPageLink'
        }
    ]
}

function makeReactDocsArray() {
    return [
        {
            id: '1', 
            imagelink: 'firstImageLink', 
            pagelink: 'firstPageLink'
        },
        {
            id: '2', 
            imagelink: 'secondImageLink', 
            pagelink: 'secondPageLink'
        },
        {
            id: '3', 
            imagelink: 'thirdImageLink', 
            pagelink: 'thirdPageLink'
        },
        {
            id: '4', 
            imagelink: 'fourthImageLink', 
            pagelink: 'fourthPageLink'
        }
    ]
}

function makeDocsArray() {
    return [
        {
            id: '1',
            term: 'fetch', 
            fkmdndocs: '1', 
            fkreactdocs: '1'
        },
        {
            id: '2', 
            term: 'parseInt', 
            fkmdndocs: '2', 
            fkreactdocs: '2'
        },
        {
            id: '3', 
            term: 'toString', 
            fkmdndocs: '3', 
            fkreactdocs: '3'
        },
        {
            id: '4', 
            term: 'map', 
            fkmdndocs: '4', 
            fkreactdocs: '4'
        }
    ]
}


module.exports = {
    makeMDNDocsArray,
    makeReactDocsArray,
    makeDocsArray
}
