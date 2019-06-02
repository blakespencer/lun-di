const db = require('./index');

const { Product, User } = require('./models');

// Rows for tables
const products = [
  {
    name: 'Shoes',
    description: 'These are really nice shoes',
    picture: './images/example_pic.jpg',
  },
  {
    name: 'Shoes',
    description: 'These are really nice shoes',
    picture: './images/example_pic.jpg',
  },
  {
    name: 'Shoes',
    description: 'These are really nice shoes',
    picture: './images/example_pic.jpg',
  },
  {
    name: 'Shoes',
    description: 'These are really nice shoes',
    picture: './images/example_pic.jpg',
  },
  {
    name: 'Shoes',
    description: 'These are really nice shoes',
    picture: './images/example_pic.jpg',
  },
  {
    name: 'Shoes',
    description: 'These are really nice shoes',
    picture: './images/example_pic.jpg',
  },
  {
    name: 'Shoes',
    description: 'These are really nice shoes',
    picture: './images/example_pic.jpg',
  },
  {
    name: 'Shoes',
    description: 'These are really nice shoes',
    picture: './images/example_pic.jpg',
  },
  {
    name: 'Shoes',
    description: 'These are really nice shoes',
    picture: './images/example_pic.jpg',
  },
  {
    name: 'Shoes',
    description: 'These are really nice shoes',
    picture: './images/example_pic.jpg',
  },
  {
    name: 'Shoes',
    description: 'These are really nice shoes',
    picture: './images/example_pic.jpg',
  },
  {
    name: 'Shoes',
    description: 'These are really nice shoes',
    picture: './images/example_pic.jpg',
  },
  {
    name: 'Shoes',
    description: 'These are really nice shoes',
    picture: './images/example_pic.jpg',
  },
  {
    name: 'Shoes',
    description: 'These are really nice shoes',
    picture: './images/example_pic.jpg',
  },
  {
    name: 'Shoes',
    description: 'These are really nice shoes',
    picture: './images/example_pic.jpg',
  },
  {
    name: 'Shoes',
    description: 'These are really nice shoes',
    picture: './images/example_pic.jpg',
  },
  {
    name: 'Shoes',
    description: 'These are really nice shoes',
    picture: './images/example_pic.jpg',
  },
  {
    name: 'Shoes',
    description: 'These are really nice shoes',
    picture: './images/example_pic.jpg',
  },
  {
    name: 'Shoes',
    description: 'These are really nice shoes',
    picture: './images/example_pic.jpg',
  },
  {
    name: 'Shoes',
    description: 'These are really nice shoes',
    picture: './images/example_pic.jpg',
  },
  {
    name: 'Shoes',
    description: 'These are really nice shoes',
    picture: './images/example_pic.jpg',
  },
  {
    name: 'Shoes',
    description: 'These are really nice shoes',
    picture: './images/example_pic.jpg',
  },
  {
    name: 'Shoes',
    description: 'These are really nice shoes',
    picture: './images/example_pic.jpg',
  },
  {
    name: 'Shoes',
    description: 'These are really nice shoes',
    picture: './images/example_pic.jpg',
  },
  {
    name: 'Shoes',
    description: 'These are really nice shoes',
    picture: './images/example_pic.jpg',
  },
  {
    name: 'Shoes',
    description: 'These are really nice shoes',
    picture: './images/example_pic.jpg',
  },
  {
    name: 'Shoes',
    description: 'These are really nice shoes',
    picture: './images/example_pic.jpg',
  },
  {
    name: 'Shoes',
    description: 'These are really nice shoes',
    picture: './images/example_pic.jpg',
  },
  {
    name: 'Shoes',
    description: 'These are really nice shoes',
    picture: './images/example_pic.jpg',
  },
  {
    name: 'Shoes',
    description: 'These are really nice shoes',
    picture: './images/example_pic.jpg',
  },
  {
    name: 'Shoes',
    description: 'These are really nice shoes',
    picture: './images/example_pic.jpg',
  },
  {
    name: 'Shoes',
    description: 'These are really nice shoes',
    picture: './images/example_pic.jpg',
  },
  {
    name: 'Shoes',
    description: 'These are really nice shoes',
    picture: './images/example_pic.jpg',
  },
  {
    name: 'Shoes',
    description: 'These are really nice shoes',
    picture: './images/example_pic.jpg',
  },
  {
    name: 'Shoes',
    description: 'These are really nice shoes',
    picture: './images/example_pic.jpg',
  },
];
// seedScript function

const seedScript = async () => {
  try {
    console.log('syncing db');
    await db.sync({ force: true });
    console.log('db synced');
    // Creating the rows
    const createdProducts = await Product.bulkCreate(products, {
      returning: true,
    });
  } catch (error) {
    console.log(error);
  } finally {
    console.log('shutting db connection down');
    db.close();
    console.log('db closed');
  }
};

seedScript();
