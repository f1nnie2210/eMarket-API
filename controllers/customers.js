// const Customer = require('../models/customers');

// const getCustomers = async (req, res) => {
//     try {
//       const customers = await Customer.findAll();
//       return res.status(200).json({
//         customers: customers
//       });
//     } catch (error) {
//       return res.status(500).json({
//         message: 'Đã xảy ra lỗi trong quá trình lấy dữ liệu khách hàng:',
//       });
//     }
//   };
  
//   const createCustomer = async (req, res) => {
//     try {
//       const { name, address, phone, email } = req.body;
//       const newCustomer = await Customer.create({
//         name: name,
//         address: address,
//         phone: phone,
//         email: email
//       });
//       return res.status(201).json({
//         message: 'Tạo khách hàng mới thành công.',
//         customer: newCustomer
//       });
//     } catch (error) {
//       return res.status(500).json({
//         message: 'Đã xảy ra lỗi trong quá trình tạo khách hàng mới.'
//       });
//     }
//   };
  
//   const updateCustomer = async (req, res) => {
//     try {
//       const { id } = req.params;
//       const { name, address, phone, email } = req.body;
//       await Customer.update({
//         name: name,
//         address: address,
//         phone: phone,
//         email: email
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
  
//   const deleteCustomer = async (req, res) => {
//     try {
//       const { id } = req.params;
//       await Customer.destroy({
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
//     getCustomers,
//     createCustomer,
//     updateCustomer,
//     deleteCustomer
//     };