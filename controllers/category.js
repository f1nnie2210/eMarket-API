// const Category = require('../models/category');

// //Xử lý logic cho các endpoint
// const getCategory = async (req, res) => { //Lấy tất cả dữ liệu từ bảng
//     try {
//       const category = await Category.findAll();
//       return res.status(200).json({
//         category: category
//       });
//     } catch (error) {
//       return res.status(500).json({
//         message: 'Đã xảy ra lỗi trong quá trình lấy dữ liệu',
//       });
//     }
//   };
  
//   const createCategory = async (req, res) => { //Tạo dữ liệu mới cho bảng
//     try {
//       const { name, description } = req.body;
//       const newCategory = await Category.create({
//         name: name,
//         description: description,
//       });
//       return res.status(201).json({
//         message: 'Tạo mới thành công.',
//         category: newCategory
//       });
//     } catch (error) {
//       return res.status(500).json({
//         message: 'Đã xảy ra lỗi trong quá trình tạo mới.'
//       });
//     }
//   };
  
//   const updateCategory = async (req, res) => { //Cập nhật dữ liệu có trong bảng
//     try {
//       const { id } = req.params;
//       const { name, description } = req.body;
//       await Category.update({
//         name: name,
//         description: description
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
  
//   const deleteCategory = async (req, res) => { //Xoá bảng
//     try {
//       const { id } = req.params;
//       await Category.destroy({
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
//     getCategory,
//     createCategory,
//     updateCategory,
//     deleteCategory,
//     };