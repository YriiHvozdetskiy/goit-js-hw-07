const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const refs = {
    listIngredients: document.querySelector('ul'),
};

const makeItemsInlistIngredientsRef = (value) => {
    const itemRef = document.createElement('li');
    itemRef.textContent = value;
    return itemRef;
};

const elements = ingredients.map(makeItemsInlistIngredientsRef);

refs.listIngredients.append(...elements);
