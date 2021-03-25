const Order = require('../models/Order');
const { sendSms } = require('../utils/twilio');

module.exports = class OrderDelete {
  static async deleteItem({id}) {
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      `Your order has been updated`
    );

    const order = await Order.deleteItem(id);

    return order;
  }
};