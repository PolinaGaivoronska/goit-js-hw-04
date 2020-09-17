const account = {
    owner: 'Mango',
    balance: 24000,
    discount: 0.1,
    orders: ['order-1', 'order-2', 'order-3'],
    changeDiscount(value) {
      this.discount = value; // Write code in this line
    },
    showOrders() {
      return this.orders; // Write code in this line
    },
    addOrder(cost, order) {
      this.balance -= cost; // Write code in this line
      this.orders.push(order); // Write code in this line
    },
  };
  const copyAccount =  Object.assign({},account);
  copyAccount.orders = [...account.orders];

  console.log(account.discount);
  