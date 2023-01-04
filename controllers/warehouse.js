// const Warehouse = require('../models/warehouse');

// //Xử lý logic cho các endpoint
// const getWarehouse = async (req, res) => { //Lấy tất cả dữ liệu từ bảng
//     try {
//       const warehouse = await Warehouse.findAll();
//       return res.status(200).json({
//         warehouse: warehouse
//       });
//     } catch (error) {
//       return res.status(500).json({
//         message: 'Đã xảy ra lỗi trong quá trình lấy dữ liệu',
//       });
//     }
//   };
  
//   const createWarehouse = async (req, res) => { //Tạo dữ liệu mới cho bảng
//     try {
//       const { name, location } = req.body;
//       const newWarehouse = await Warehouse.create({
//         name: name,
//         location: location,
//       });
//       return res.status(201).json({
//         message: 'Tạo mới thành công.',
//         warehouse: newWarehouse
//       });
//     } catch (error) {
//       return res.status(500).json({
//         message: 'Đã xảy ra lỗi trong quá trình tạo mới.'
//       });
//     }
//   };
  
//   const updateWarehouse = async (req, res) => { //Cập nhật dữ liệu có trong bảng
//     try {
//       const { id } = req.params;
//       const { name, location } = req.body;
//       await Warehouse.update({
//         name: name,
//         location: location
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
  
//   const deleteWarehouse = async (req, res) => { //Xoá bảng
//     try {
//       const { id } = req.params;
//       await Warehouse.destroy({
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
//     getWarehouse,
//     createWarehouse,
//     updateWarehouse,
//     deleteWarehouse,
//     };