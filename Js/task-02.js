const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const listIngredientsRef = document.querySelector('ul');

const makeItemsInlistIngredientsRef = (value) => {
    const itemRef = document.createElement('li');
    itemRef.textContent = value;

    return listIngredientsRef.append(itemRef);
};

const elements = ingredients.map(makeItemsInlistIngredientsRef);

//====================
// ingredients.forEach((el) => {
//     const itemRef = document.createElement('li');
//     itemRef.textContent = el;
//     listIngredientsRef.append(itemRef);
// });
