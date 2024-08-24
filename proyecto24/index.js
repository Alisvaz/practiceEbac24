const gallery = document.querySelector('.container-img');

const season = 13;
const url = 'https://api.tvmaze.com/seasons/';

for (let i = 1; i <= season; i++) {
    fetch(url + i)
        .then(response => response.json())
        .then(data => {
                const img = document.createElement('IMG');
                img.src = data.image.medium; // Usa la URL de la imagen que deseas
                img.alt = `Season ${i}`; // Agrega un texto alternativo para la imagen
                img.className = 'imagenes'
                gallery.appendChild(img); // Añade la imagen al contenedor
        })
        .catch(error => console.log(error));
}
