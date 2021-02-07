// History

// It is possible to access sthe browser history in a specific section
// through window.history. The object history have different methods and properties


// history.pushState(obj, title, url) => obj and title are usually null
// usually used as fetch 

// window.history.pushState(null, null, 'sobre.html');

// history.popstate 
// executes a function every time the user click on the next or back button


// window.addEventListener('popstate', () => {
//     console.log('Teste');
// });


// Fetch and History

// By pulling data via fetch api, the page's url remains the same. 
// But when fetch api and history are combined it is possible to simulate
// a real navigation through the pages, without necessity of reload of them. 

const links = document.querySelectorAll('a');

function handleClick(event) {
    event.preventDefault();
    fetchPage(event.target.href);
    window.history.pushState(null, null, event.target.href)
}

async function fetchPage(url) {
    document.querySelector('.content').innerHTML = 'Carregando';
    const pageResponse = await fetch(url);
    const pageText = await pageResponse.text();
    // console.log(pageText);
    replaceContent(pageText);
}

function replaceContent(newText) {
    const newHtml = document.createElement('div');
    newHtml.innerHTML = newText;

    const oldContent = document.querySelector('.content');
    const newContent = newHtml.querySelector('.content');

    oldContent.innerHTML = newContent.innerHTML;

    document.title = newHtml.querySelector('title').innerText;

    console.log(newHtml);
}

window.addEventListener('popstate', () => {
    fetchPage(windows.location.href);
})

links.forEach((link) => {
    link.addEventListener('click', handleClick);
})