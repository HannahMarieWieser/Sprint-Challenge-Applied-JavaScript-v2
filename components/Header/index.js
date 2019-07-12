// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component




const hinput = {
    headdate:'SMARCH 28, 2019',
    headtitle: 'Lambda Times',
    headtemp: '98°'
}



function header(headdate, headtitle, headtemp) {
    const hdiv = document.createElement('div');
    const hdate = document.createElement('span');
    const htitle = document.createElement('h1');
    const htemp = document.createElement('span');

    //place elements
    hdiv.appendChild(hdate);
    hdiv.appendChild(htitle);
    hdiv.appendChild(htemp);

    //set styles
    hdiv.classList.add('header');
    hdate.classList.add('date');
    htemp.classList.add('temp')

    //add content
    hdate.textContent = headdate;
    htitle.textContent = headtitle;
    htemp.textContent = headtemp;

    //console.log('made compoennt')
    return hdiv

}


const addheader = document.querySelector('.header-container')


//console.log(hinput)
addheader.appendChild(header(hinput.headdate, hinput.headtitle, hinput.headtemp));
