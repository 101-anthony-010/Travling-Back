const catchAsync = require("../utils/catchAsync");

const { ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const { storage } = require("../utils/firebase");

const Product = require("../models/product.model");

exports.createProduct = catchAsync(async (req, res, next) => {
  const { continent, title, city, price, days } = req.body;

  const imgRef = ref(storage, `products/${Date.now()}-${req.file.originalname}`)
  const imgUploaded = await uploadBytes(imgRef, req.file.buffer); 

  const product = await Product.create({
    continent,
    title,
    city,
    imgURL: imgUploaded.metadata.fullPath,
    price,
    days
  })

  res.status(200).json({
    status: "Success",
    message: "Product created successfully",
    product
  })
});

exports.findAllProducts = catchAsync(async (req, res, next) => {
  const products = await Product.findAll({
    where: {
      status: "enabled",
    }
  })

  const productsPromises = products.map(async (product) => {
    const imgRef = ref(storage, product.imgURL)
    const url = await getDownloadURL(imgRef)

    product.imgURL = url
    return product
  })

  const productsResolved = await Promise.all(productsPromises)

  res.status(200).json({
    status: "Success",
    message: "Finds products successfully",
    productsResolved
  })
});