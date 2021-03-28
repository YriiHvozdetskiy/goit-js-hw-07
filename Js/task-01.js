const listCategoriesRef = document.querySelector('#categories');

const showlistCategoriesItems = (list) => `В списке ${list.children.length} категории.`;

console.log(showlistCategoriesItems(listCategoriesRef));

const itemRef = document.querySelectorAll('.item');

const showСategoryAndQuantity = (item) => {
    return [...item]
        .map(
            (el) =>
                ` Категория: ${el.firstElementChild.textContent},количество элементов:${el.lastElementChild.children.length}`,
        )
        .join(',')
        .trim();
};

console.log(showСategoryAndQuantity(itemRef));
