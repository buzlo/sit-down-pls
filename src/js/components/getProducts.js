function getProducts(idsArray) {
  const products = [
    { title: "Кресло велюровое “X\u201124”", price: 15990, oldPrice: 24990 },
    { title: "Диван тканевый “Z\u201144”", price: 22990, oldPrice: 32990, major: true },
    { title: "Будильник  “Quartz\u201123”", price: 1290, oldPrice: 1890 },
    { title: "Мини\u2011скульптура “Oh my deer”", price: 690, oldPrice: 990 },
    { title: "Диван вел\u2011флок “Z\u201185”", price: 22990, oldPrice: 32990, major: true },
    { title: "Термометр + гидрометр “H\u201118”", price: 1390, oldPrice: 2090},
    { title: "Диван кожаный “R\u201194”", price: 94990, rating: '5,0' },
    { title: "Диван апартековый “T\u201175”", price: 69900, rating: '4,9' },
    { title: "Диван тканевый “D\u201131”", price: 28490, rating: '4,8' },
    { title: "Диван велюровый “Y\u201168”", price: 22990, rating: '4,8' },
    { title: "Диван из шинила “W\u201195”", price: 22990, rating: '4,8' },
    { title: "Диван флоковый “G\u201141”", price: 17990, rating: '4,8' },
    { title: "Диван шиниловый “V\u201143”", price: 19990, rating: '4,8' },
    { title: "Диван велюровый “S\u201199”", price: 19990, rating: '4,7' },
    { title: "Диван из кожзама “F\u201185”", price: 269990, rating: '4,7' },
    { title: "Диван флоковый “H\u201164”", price: 25990, rating:  '4,6' },
    { title: "Диван флоковый “H\u201158”", price: 23990, rating:  '4,6' },
    { title: "Диван из кожзама “R\u201143”", price: 33990, rating:  '4,6' },
    { title: "Диван из шинила “С\u201142”", price: 18990, rating: '4,6' },
    { title: "Диван велюровый “U\u201158”", price: 21990, rating: '4,6' },
    { title: "Диван флоковый “F\u201141”", price: 4.5, rating: '4,5' },
    { title: "Диван велюровый “R\u201185”", price: 34990, rating: '4,5' },
    { title: "Диван велюровый “S\u201144”", price: 19990, rating: '4,5' },
    { title: "Диван из шинила “С\u201180”", price: 20990, rating: '4,4' },
  ]

  products.forEach((product, index) => {
    product.id = index + 1;
    if (product.oldPrice) product.discount = product.oldPrice - product.price;
  })

  if (idsArray) {
    return products.filter((product) => idsArray.includes(product.id))
  }

  return products;
}
