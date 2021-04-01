const images = [
    {
        url:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url:
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url:
            'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const refs = {
    gallery: document.querySelector('#gallery'),
};

const makeGallery = ({ url, alt }) => {
    const imageRef = document.createElement('img');

    return refs.gallery.insertAdjacentHTML(
        'afterbegin',
        `<li class="gallary__item"><img class="gallary__image" src="${(imageRef.src = url)}" alt="${(imageRef.alt = alt)}"></li>`,
    );
};

const elements = images.map(makeGallery);
