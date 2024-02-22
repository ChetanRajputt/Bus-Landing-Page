let city = document.getElementById('city');
let citySearch = document.getElementById('citySearch');

let showField = ()=>{
    if(citySearch.disply !='block'){
        citySearch.style.display='block';
    }else{
        citySearch.style.display='none';
    }
    console.log('Okkk');
}

city.addEventListener('click',showField);
