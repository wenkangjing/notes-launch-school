//------------------------------------------------------------------
// Step 1. Build a Factory Function for Invoices
//
// To be able to process multiple invoices, we'll need to have a factory method that we can use to create invoices. The requirements for this factory function are the following:
// it returns an invoice object, with phone and internet properties, and a total method
// the default value for the phone service is 3000, and the internet service is 5500 (in cents, of course!)
// the function takes an object argument with attributes to override the default values

function createInvoice(services) {
  services = services || {};
  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    payments: [],
    addPayment: function(payment) {
      payment = payment || {};
      this.payments.push(payment);
    },
    addPayments: function(payments) {
      payments = payments || [];
      payments.forEach(function(element) {
        this.addPayment(element);
      }, this);
    },
    total: function() {
      return this.phone + this.internet;
    },
    paymentTotal: function() {
      var paymentTotal = 0;
      for(var i = 0; i < this.payments.length; i++) {
        paymentTotal += this.payments[i].total();
      };

      return paymentTotal;
    },    
    amountDue: function() {
      return this.total() - this.paymentTotal();
    },
  };
}

function invoiceTotal(invoices) {
  var total = 0;
  for (var i = 0; i < invoices.length; i++) {
    total += invoices[i].total();
  }

  return total;
}

var invoices = [];
invoices.push(createInvoice());

invoices.push(createInvoice({
 internet: 6500
}));

invoices.push(createInvoice({
 phone: 2000
}));

invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));

console.log(invoiceTotal(invoices));             // 31000

//------------------------------------------------------------------
// Step 2. Build a Factory Function for Payments
// Now let's build a factory function to create payments:
// the function can take an object argument in one of the 3 forms:
// payment for one service, such as, {internet: 1000}, {phone: 1000}
// payment for both services, such as, {internet: 2000, phone: 1000}
// payment with just an amount property, such as {amount: 2000}.
// the function returns an object that has paid services, and a total method that returns the payment total. If the amount property is not present, this should return the sum of phone and internet services; if the amount property is present, just return the value of that property.


function createPayment(services) {
  services = services || {};
  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,
    total: function() {
      return this.amount || (this.phone + this.internet);;
    }
  };
}

function paymentTotal(payments) {
  var total = 0;
  for (var i = 0; i < payments.length; i++) {
    total += payments[i].total();
  }

  return total;
}

var payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500
}));

payments.push(createPayment({
  phone: 2000
}));

payments.push(createPayment({
  phone: 1000, internet: 4500
}));

payments.push(createPayment({
  amount: 10000
}));

console.log(paymentTotal(payments));      // 24000


//------------------------------------------------------------------
// Step 3. Allow Invoices to Take Payments
// Update your createInvoice function to make it possible to add payment(s) to invoices. Use the code below as a guideline:


var invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

var payment1 = createPayment({
  amount: 2000,
});

var payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

var payment3 = createPayment({
  phone: 1000
});

invoice.addPayment(payment1)
invoice.addPayments([payment2, payment3]);
var due = invoice.amountDue();       // this should return 0
console.log(due);