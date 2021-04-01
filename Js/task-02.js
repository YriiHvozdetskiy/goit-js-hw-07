const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const refs = {
    listIngredients: document.querySelector('ul'),
};

const makeItemsInlistIngredientsRef = (value) => {
    const itemRef = document.createElement('li');
    itemRef.textContent = value;

    return refs.listIngredients.append(itemRef);
};

const elements = ingredients.map(makeItemsInlistIngredientsRef);

//====================
// ingredients.forEach((el) => {
//     const itemRef = document.createElement('li');
//     itemRef.textContent = el;
//     refs.listIngredients.append(itemRef);
// });
