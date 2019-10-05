
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

function makeUsersArray() {
    return [
        {
            id: '1',
            username: 'First',
            password: "first"
        },
        {
            id: '2',
            username: 'Second',
            password: "second"
        },
        {
            id: '3',
            username: 'Third',
            password: "third"
        },
        {
            id: '4',
            username: 'Fourth',
            password: "fourth"
        },
        {
            id: '5',
            username: 'Fifth',
            password: "fifth"
        },
    ]
}

function makeUserHistory() {
    return [
        {
            id: '1',
            fkuserid: '1',
            searchname: "fetch"
        },
        {
            id: '2',
            fkuserid: '1',
            searchname: "parseInt()"
        },
        {
            id: '3',
            fkuserid: '2',
            searchname: "push()"
        },
        {
            id: '4',
            fkuserid: '3',
            searchname: "toString()"
        },
        {
            id: '5',
            fkuserid: '3',
            searchname: "val()"
        },
    ]
}


module.exports = {
    makeMDNDocsArray,
    makeReactDocsArray,
    makeDocsArray,
    makeUsersArray,
    makeUserHistory,
}
