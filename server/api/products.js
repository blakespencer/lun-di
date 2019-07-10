const router = require('express').Router();
const {
  Product,
  ProductType,
  Catagory,
  Brand,
  Sku,
  Size,
  Color,
} = require('../db/models');
module.exports = router;

router.get('/test', async (req, res, next) => {
  try {
    const products = await Product.findAll({
      where: { valueSequence: 0 },
      include: [
        {
          model: Product,
          as: 'Sisters',
          include: {
            model: Sku,
          },
        },
        {
          model: Sku,
        },
      ],
    });
    res.json(products);
  } catch (err) {
    next(err);
  }
});

router.get('/:ProductTypeName', async (req, res, next) => {
  try {
    const productTypeName = req.params.ProductTypeName.toLowerCase();
    const productTypeId = await ProductType.findOne({
      where: { name: productTypeName },
      attributes: ['id'],
    }).get('id');
    const products = await Product.findAll({
      where: { productTypeId, valueSequence: 0 },
      include: [
        {
          model: Product,
          as: 'Sisters',
          include: {
            model: Sku,
          },
        },
        {
          model: Sku,
          include: [
            {
              model: Color,
            },
            {
              model: Size,
            },
          ],
        },
        {
          model: Brand,
        },
      ],
      // order: [[Size, 'valueSequence', 'ASC']],
    });
    res.json(products);
  } catch (err) {
    console.log(err);
  }
});

// The old route

// router.get('/:ProductTypeName', async (req, res, next) => {
//   try {
//     const productTypeName = req.params.ProductTypeName.toLowerCase();
//     const productTypeId = await ProductType.findOne({
//       where: { name: productTypeName },
//       attributes: ['id'],
//     }).get('id');
//     const products = await Product.findAll({
//       where: { productTypeId },
//       include: [
//         {
//           model: ProductType,
//           attributes: ['name', 'id'],
//           include: [{ model: Catagory, attributes: ['name', 'id'] }],
//         },
//         {
//           model: Brand,
//           attributes: ['name', 'id'],
//         },
//         {
//           model: Sku,
//           include: [
//             {
//               model: Color,
//             },
//             {
//               model: Size,
//             },
//             {
//               model: Product,
//               as: 'Sisters',
//               include: {
//                 model: Sku,
//               },
//             },
//           ],
//         },
//         // {
//         //   model: Color,
//         // },
//         // {
//         //   model: Size,
//         // },
//       ],
//       // order: [[Size, 'valueSequence', 'ASC']],
//     });
//     res.json(products);
//   } catch (err) {
//     console.log(err);
//   }
// });

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    next(err);
  }
});
