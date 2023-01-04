// const Product = require('../models/products');

// //Xử lý logic cho các endpoint
// const getProduct = async (req, res) => { //Lấy tất cả dữ liệu từ bảng
//     try {
//       const product = await Product.findAll();
//       return res.status(200).json({
//         product: product
//       });
//     } catch (error) {
//       return res.status(500).json({
//         message: 'Đã xảy ra lỗi trong quá trình lấy dữ liệu',
//       });
//     }
//   };
  
//   const createProduct = async (req, res) => { //Tạo dữ liệu mới cho bảng
//     try {
//       const { name, price, expiration_date } = req.body;
//       const newProduct = await Product.create({
//         name: name,
//         price: price,
//         expiration_date: expiration_date
//       });
//       return res.status(201).json({
//         message: 'Tạo mới thành công.',
//         product: newProduct
//       });
//     } catch (error) {
//       return res.status(500).json({
//         message: 'Đã xảy ra lỗi trong quá trình tạo mới.'
//       });
//     }
//   };
  
//   const updateProduct = async (req, res) => { //Cập nhật dữ liệu có trong bảng
//     try {
//       const { id } = req.params;
//       const { name, price, expiration_date } = req.body;
//       await Product.update({
//         name: name,
//         price: price,
//         expiration_date: expiration_date
//       }, {
//         where: { id: id }
//       });
//       return res.status(200).json({
//         message: 'Cập nhật khách hàng thành công.'
//       });
//     } catch (error) {
//       return res.status(500).json({
//         message: 'Đã xảy ra lỗi trong quá trình cập nhật khách hàng.'
//       });
//     }
//   };
  
//   const deleteProduct = async (req, res) => { //Xoá bảng
//     try {
//       const { id } = req.params;
//       await Product.destroy({
//         where: { id: id }
//       });
//       return res.status(200).json({
//         message: 'Xóa khách hàng thành công.'
//       });
//     } catch (error) {
//         return res.status(500).json({
//           message: 'Đã xảy ra lỗi trong quá trình xoá khách hàng.'
//         });
//     }
//   };

//   module.exports = {
//     getProduct,
//     createProduct,
//     updateProduct,
//     deleteProduct,
//     };