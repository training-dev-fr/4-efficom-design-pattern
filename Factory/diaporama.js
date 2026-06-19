import DiaporamaFactory from "./DiaporamaFactory.js";

let currentIndex = 0;

const loadData = async () => {
    let res = await fetch('./content.json');
    let data = await res.json();
    return data;
}

const showDiapo = (element) => {
    // let domElement = "";
    // if (element.type === "image") {
    //     domElement = `<img src="${element.url}" />`;
    // } else if (element.type === "video") {
    //     domElement = `<video src="${element.url}" autoplay="true" />`;
    // } else if(element.type === "map"){
    //     domElement = `<iframe source="google.map" data-lat=${element.lat} />`;
    // }
    // document.querySelector("#diaporama").innerHTML= domElement;

    let item = new DiaporamaFactory(element);
    document.querySelector("#diaporama").innerHTML= item.display();
}



const prepareEvent = (data) => {
    document.querySelector('#prev').addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = data.length - 1;
        }
        showDiapo(data[currentIndex]);
    });

    document.querySelector('#next').addEventListener("click", () => {
        if (currentIndex < data.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        showDiapo(data[currentIndex]);
    });
}

const init = async () => {
    let data = await loadData();
    showDiapo(data[currentIndex]);
    prepareEvent(data);
}

init();