const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const listIngredientsRef = document.querySelector('ul');

ingredients.forEach((el) => {
    const itemRef = document.createElement('li');
    itemRef.textContent = el;
    listIngredientsRef.append(itemRef);
});
