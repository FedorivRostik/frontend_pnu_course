const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {

    "/lab9/": "./index.html",
    "/lab9/catalog": "./pages/catalog.html",
    "/lab9/catalog/1": "./pages/catalog_data.html",
    "/lab9/catalog/2": "./pages/catalog_data.html",
    "/lab9/catalog/3": "./pages/catalog_data.html",
    "/lab9/catalog/4": "./pages/catalog_data.html",
    "/lab9/catalog/5": "./pages/catalog_data.html",
    "/lab9/catalog/6": "./pages/catalog_data.html",
};
const endsWithNumber = (text) => {
    return /\d$/.test(text);
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max)+1;
  }
const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path];
    
    if (path === "/lab9/") {
        const html = await fetch(route).then((data) => data.text());
        document.getElementsByTagName("html")[0].innerHTML = html;
    }
    else if (endsWithNumber(path)) {
        const html = await fetch('/lab9/pages/catalog_data.html').then((data) => data.text());
        const data = await fetch(`/lab9/data/catalog${path.slice(-1)}.json`).then((response) => response.json()).then((responseData) => responseData);
        const dataTitles = await fetch(`/lab9/data/catalog.json`).then((response) => response.json()).then((responseData) => responseData);
        if (data) {
            let dataText = "";

            for (const item of data.data) {
                dataText += `<div class="flex flex-col">
                    <div  class="relative flex  overflow-hidden p-4  w-full h-full m-auto mb-2">
        
                <div class="w-full h-full bg-gradient-to-b from-black/10 to-black/40 rounded-2xl absolute  left-0 top-0 z-10 border-white border-2 "></div>
                <img src="https://via.placeholder.com/200x200?text=+" class="w-full rounded-2xl h-full z-0 opacity-90 object-cover" alt="">
             
                    <div class="absolute left-0 bottom-0 z-30 p-7 h-48 overflow-hidden  w-full">
                    <div class="flex w-full  justify-between  items-center">
                    <h3  class="font-bold text-white text-2xl mr-2">Title: ${item.shortname}</h3>                      

                    <p class="opacity-60 text-white text-xs">Price: ${item.price}</p>
                </div>
                        <p class="opacity-60 text-white text-sm">Notes: ${item.description}</p>
                        
                    </div>
            </div>
            </div>`

            }
            dataText += '';
            document.getElementById("app").innerHTML = html;
            document.getElementById('catalog-section').innerHTML = dataText
            let title = "";
            for (const item of dataTitles.data) {
                if (item.id == path.slice(-1)) { 
                    title += item.name;
                    break;
                }
            }
            document.getElementById('catalog-h1').innerHTML = title;
            return;


        }
    }
    else {
        const html = await fetch(route).then((data) => data.text());
        const data = await fetch(`/lab9/data/catalog.json`).then((response) => response.json()).then((responseData) => responseData);

        if (data) {
            let dataText = "";

            for (const item of data.data) {
                dataText += `<div class="flex flex-col">
                    <a href="/catalog/${item.id}"   onclick="route()"  class="relative inline-flex  overflow-hidden p-4  w-full h-full m-auto mb-2">
        
                <div class="w-full h-full bg-gradient-to-b from-black/10 to-black/40 rounded-2xl absolute  left-0 top-0 z-10 border-white border-2 "></div>
                <img src="https://via.placeholder.com/200x200?text=+" class="w-full rounded-2xl h-full z-0 opacity-90 object-cover" alt="">
             
                    <div class="absolute left-0 bottom-0 z-30 p-7 h-48  overflow-hidden  w-full">

                        <h3 class="font-bold text-white">Title: ${item.shortname}</h3>                      

                        <p class="text-amber-50">Notes: ${item.notes}</p>
                        
                    </div>
            </a>
            <a href="/lab9/catalog/${item.id}" class="hover:underline underline-color-red"  onclick="route()" >Go to</a>
            </div>`

            }
            dataText += `<a class="inline-flex col-span-3 justify-center items-center rounded-xl p-2 w-full bg-gradient-to-br from-blue-600 to-yellow-400 text-white" href="/lab9/catalog/${getRandomInt(data.data.length)}" onclick="route()">On Sale</a>`;
            document.getElementById("app").innerHTML = html;
            document.getElementById('catalog-section').innerHTML = dataText
            return;


        }
        document.getElementById("app").innerHTML = html;
    }
};

window.onpopstate = handleLocation;
window.route = route;
window.onbeforeunload = function () {
    window.setTimeout(function () {
        window.location = '/';
    }, 0);
    window.onbeforeunload = null; // necessary to prevent infinite loop, that kills your browser 
}
handleLocation();
