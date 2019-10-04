
function makeMDNDocsArray() {
    return [
        {
            id: '1', 
            mdnimagelink: 'firstImageLink', 
            mdnpagelink: 'firstPageLink'
        },
        {
            id: '2', 
            mdnimagelink: 'secondImageLink', 
            mdnpagelink: 'secondPageLink'
        },
        {
            id: '3', 
            mdnimagelink: 'thirdImageLink', 
            mdnpagelink: 'thirdPageLink'
        },
        {
            id: '4', 
            mdnimagelink: 'fourthImageLink', 
            mdnpagelink: 'fourthPageLink'
        }
    ]
}

function makeReactDocsArray() {
    return [
        {
            id: '1', 
            reactimagelink: 'firstImageLink', 
            reactpagelink: 'firstPageLink'
        },
        {
            id: '2', 
            reactimagelink: 'secondImageLink', 
            reactpagelink: 'secondPageLink'
        },
        {
            id: '3', 
            reactimagelink: 'thirdImageLink', 
            reactpagelink: 'thirdPageLink'
        },
        {
            id: '4', 
            reactimagelink: 'fourthImageLink', 
            reactpagelink: 'fourthPageLink'
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
