// Fetch Request -> JSON placeholder
// https://jsonplaceholder.typicode.com/


// Jordan's getPhotos
// export async function getPhotos() {
//     fetch("https://jsonplaceholder.typicode.com/photos")
//       .then((response) => response.json())
//       .then((json) => {
//         let body =document.querySelector('body')
//         console.log(json[0].thumbnailUrl)
//         let image = document.createElement('img')
//         image.setAttribute('src', json[0].thumbnailUrl)
//         body.append(image)
//       });
//   }

// This was my version - Brian
export async function getPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => response.json())
        .then((json) => {
            let body = document.querySelector('body');

            json.slice(0, 50).forEach((photo) => {
                let image = document.createElement('img');
                let figure = document.createElement('figure');

                image.setAttribute('src', photo.thumbnailUrl);

                let figcaption = document.createElement('figcaption');
                figcaption.textContent = photo.title;
                figure.append(figcaption);

                body.append(figure);
                body.append(image);
            });
        });
}
