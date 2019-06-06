const db = require('./index');

const { Product, ProductType, Catagory, Brand } = require('./models');

// Rows for tables
const products = [];

for (let i = 0; i < 1600; i++) {
  products.push({
    name: `Shoes ${i}`,
    description: 'These are really nice shoes',
    picture: './images/example_pic.jpg',
    price: Math.floor(Math.random() * 100 + 1),
  });
}

const fourth = 400;

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

    // catagories and prodcutTypes
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

    // const settingCategoryProductType = [];
    // for (let i = 0; i < productTypes.length; i++) {
    //   settingCategoryProductType.push(
    //     createdProductTypes[i].setCatagory(catagories[0])
    //   );
    // }
    // const settingProductType = [];
    // let procudtTypeNum = 0;
    // for (let i = 0; i < createdProducts.length; i++) {
    //   settingProductType.push(
    //     createdProducts[i].setProductType(createdProductTypes[procudtTypeNum])
    //   );
    //   procudtTypeNum += 1;
    //   if (procudtTypeNum === createdProductTypes.length) {
    //     procudtTypeNum = 0;
    //   }
    // }
    // await Promise.all(settingProductType);
  } catch (error) {
    console.log(error);
  } finally {
    console.log('shutting db connection down');
    db.close();
    console.log('db closed');
  }
};

seedScript();
