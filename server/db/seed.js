const db = require('./index');

const {
  Product,
  ProductType,
  Catagory,
  Brand,
  Sku,
  Color,
  Size,
} = require('./models');

// Rows for tables
const products = [];

const skus = [];

const productAmount = 400;

for (let i = 1; i < productAmount + 1; i++) {
  products.push({
    name: `Shoes ${i}`,
    description: 'These are really nice shoes',
    picture: './images/example_pic.jpg',
    price: Math.floor(Math.random() * 100 + 1),
  });
  for (let j = 0; j < 4; j++) {
    for (let k = 0; k < 4; k++) {
      skus.push({
        name: `size`,
        price: Math.floor(Math.random() * 100 + 1),
        stock: Math.floor(Math.random() * 10 + 1),
        description: `Shoes ${i}`,
      });
    }
  }
}

const fourth = productAmount / 4;

const colors = [
  { color: 'Red', value: 'rgba(255, 0, 0, 1)' },
  { color: 'green', value: 'rgba(0, 255, 0, 1)' },
  { color: 'blue', value: 'rgba(0, 0, 255, 1)' },
  { color: 'black', value: 'rgba(0, 0, 0, 0)' },
];

const sizes = [
  { valueSequence: 1, value: 'xs' },
  { valueSequence: 2, value: 's' },
  { valueSequence: 3, value: 'm' },
  { valueSequence: 4, value: 'l' },
];

const brands = [
  { name: 'Louis-V' },
  { name: 'ASOS' },
  { name: 'Chicken' },
  { name: 'Ruby' },
  { name: 'Blake' },
  { name: 'HELLO' },
  { name: "I'M-A-BRAND" },
];

const productTypesLifeStyle = [
  { name: 'boots' },
  { name: 'formal' },
  { name: 'loafers-and-moccasins' },
  { name: 'sneakers' },
  { name: 'adventure-and-sport' },
  { name: 'audio' },
  { name: 'grooming' },
];

const productTypesFootware = [
  { name: 'adventure-and-sport' },
  { name: 'audio' },
  { name: 'grooming' },
];

const productTypesClothing = [
  { name: 'coats-and-jacket' },
  { name: 'loungeWare' },
  { name: 'shirts' },
  { name: 'socks' },
  { name: 'sweaters' },
  { name: 'swimwear' },
  { name: 'trousers' },
];

const productTypesColection = [
  { name: 'new-in' },
  { name: 'summer-collection' },
];

const catagories = [
  { name: 'lifestyle' },
  { name: 'footwear' },
  { name: 'clothing' },
  { name: 'collection' },
];

// seedScript function

const seedScript = async () => {
  try {
    console.log('syncing db');
    await db.sync({ force: true });
    console.log('db synced');
    // Creating the rows

    const createdSizes = await Size.bulkCreate(sizes, {
      returning: true,
    });

    const createdColors = await Color.bulkCreate(colors, { returning: true });

    const createdSkus = await Sku.bulkCreate(skus, {
      returning: true,
    });

    const createdBrands = await Brand.bulkCreate(brands, {
      returning: true,
    });

    const createdProducts = await Product.bulkCreate(products, {
      returning: true,
    });

    const createdProductTypesLifeStyle = await ProductType.bulkCreate(
      productTypesLifeStyle,
      {
        returning: true,
      }
    );

    const createdProductTypesFootware = await ProductType.bulkCreate(
      productTypesFootware,
      {
        returning: true,
      }
    );

    const createdProductTypesClothing = await ProductType.bulkCreate(
      productTypesClothing,
      {
        returning: true,
      }
    );

    const createdProductTypesCollection = await ProductType.bulkCreate(
      productTypesColection,
      {
        returning: true,
      }
    );

    const createdCatagories = await Catagory.bulkCreate(catagories, {
      returning: true,
    });
    // Creating Associations

    const createAssociations = async (belongsToArr, OwnerArr, setFunc) => {
      const promiseArray = [];
      let num = 0;
      for (let i = 0; i < belongsToArr.length; i++) {
        promiseArray.push(belongsToArr[i][setFunc](OwnerArr[num]));
        num += 1;
        if (num === OwnerArr.length) {
          num = 0;
        }
      }
      await Promise.all(promiseArray);
    };

    // catagories and productTypes
    console.log('skus length', createdSkus.length);
    const promiseAssociation = [];
    createdProducts.forEach(async (product, idx) => {
      for (let i = 0; i < 16; i++) {
        promiseAssociation.push(
          createdSkus[idx * 16 + i]['setProduct'](product)
        );
      }
    });

    let num = 0;
    const skuColorAssociation = [];
    createdSkus.forEach((sku, idx) => {
      if (idx % 4 === 0) {
        num += 1;
      }
      if (num === 4) {
        num = 0;
      }
      skuColorAssociation.push(
        createdSkus[idx]['setColor'](createdColors[num])
      );
    });
    const skuSizeAssociation = [];
    createdSkus.forEach((sku, idx) => {
      let num = idx % 4;
      skuSizeAssociation.push(sku['setSize'](createdSizes[num]));
    });

    await Promise.all(promiseAssociation);

    await Promise.all(skuColorAssociation);

    await Promise.all(skuSizeAssociation);

    await createAssociations(createdProducts, createdBrands, 'setBrand');

    await createAssociations(
      createdProductTypesLifeStyle,
      [createdCatagories[0]],
      'setCatagory'
    );

    await createAssociations(
      createdProductTypesFootware,
      [createdCatagories[1]],
      'setCatagory'
    );

    await createAssociations(
      createdProductTypesClothing,
      [createdCatagories[2]],
      'setCatagory'
    );

    await createAssociations(
      createdProductTypesCollection,
      [createdCatagories[3]],
      'setCatagory'
    );
    // prodcutTypes and products
    await createAssociations(
      createdProducts.slice(0, fourth),
      createdProductTypesLifeStyle,
      'setProductType'
    );

    await createAssociations(
      createdProducts.slice(fourth, fourth * 2),
      createdProductTypesFootware,
      'setProductType'
    );

    await createAssociations(
      createdProducts.slice(fourth * 2, fourth * 3),
      createdProductTypesClothing,
      'setProductType'
    );

    await createAssociations(
      createdProducts.slice(fourth * 3, createdProducts.length),
      createdProductTypesCollection,
      'setProductType'
    );
  } catch (error) {
    console.log(error);
  } finally {
    console.log('shutting db connection down');
    db.close();
    console.log('db closed');
  }
};

seedScript();
