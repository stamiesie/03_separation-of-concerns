const Order = require('../models/Order');
const { sendSms } = require('../utils/twilio');

module.exports = class OrderUpdate {
  static async update({ quantity },{id}) {
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      `Your order has been updated ${quantity}`
    );

    const order = await Order.update(quantity, id);

    return order;
  }
};