// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const addtab = document.querySelector('.topics')

const tabdata = [axios.get('https://lambda-times-backend.herokuapp.com/topics')]
console.log(tabdata)

tabdata.forEach(element => {
    console.log('element', element)

    element
    .then(data => {
        console.log('sucess', data)


        const axiodata = data.data;
        const topicarray = axiodata.topics
        console.log('topicarray:', topicarray)

        topicarray.forEach(tabitem =>{
            console.log('name', tabitem)

            const newtabfromarr = createTabs(tabitem)
            addtab.appendChild(newtabfromarr)
        })

        
        

    })
});



function createTabs(tabdata){
    const tabdiv = document.createElement('div');

    tabdiv.classList.add('tab')

    tabdiv.textContent = tabdata.topic

    return createTabs
}