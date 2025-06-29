class CreditCardStrategy{
    pay(amount) {
        console.log(`Paying ${amount} with credit card`);
    }
}

class PaypalStrategy{
    pay(amount) {
        console.log(`Paying ${amount} with paypal`);
    }
}

class CryptoStrategy {
    pay(amount) {
        console.log(`Paying ${amount} with cryptocurrency 🪙`);
    }
}

class PaymentProcessor{
    constructor(strategy){
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    pay(amount) {
        this.strategy.pay(amount);
    }
}

const processor = new PaymentProcessor(new CreditCardStrategy());
processor.pay(100); // Paying 100 with credit card 💳

processor.setStrategy(new PaypalStrategy());
processor.pay(50); // Paying 50 with PayPal 💻

processor.setStrategy(new CryptoStrategy());
processor.pay(200); // Paying 200 with cryptocurrency 🪙
