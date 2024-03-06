function fruits(type, weightInGram, ppKilo){
    weightInKilo = weightInGram / 1000;
    price = ppKilo * weightInKilo;
    console.log(`I need $${price.toFixed(2)} to buy ${weightInKilo.toFixed(2)} kilograms ${type}.`);
}


fruits('orange',2500,1.80)