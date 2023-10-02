
const btn = document.getElementById("btn")
let img = {}
const url = 'https://hargrimm-wikihow-v1.p.rapidapi.com/images?count=1';
const divImg = document.getElementById("divImg");
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f72fcea636msh5f0c6521fc2748cp107eedjsn40d298ffe7f7',
		'X-RapidAPI-Host': 'hargrimm-wikihow-v1.p.rapidapi.com'
	}
};
async function buscarimagen(){
try {
	const response = await fetch(url, options);
	const result = await response.json();
    
    const imagen = `<img src="${result[1]}" alt="no cargó">`
    divImg.innerHTML = imagen  
    console.log(result)
    
}catch (error) {
	console.error(error);
}
}

btn.addEventListener("click",async ()=>{
    await buscarimagen()
})