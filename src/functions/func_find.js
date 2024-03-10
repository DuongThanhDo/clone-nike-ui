export const findUrlImg = (listImg, indexImg) => {
    let url = '';
    listImg.forEach((item) => {
        if (item.index === indexImg) {
            url = item.url;
        }
    });
    return url;
};

export const findProductId = (listProduct, id) => {
    let product = {};
    listProduct.forEach((item) => {
        if (item.id === Number(id)) {
            product = item;
        }
    });
    return product;
};
