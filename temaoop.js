class Cars {
    constructor(brand, model, color, km) {
        this.brand = brand;
        this.model = model;
        this.km = km;

    }
    get properties () {
        return `Cars[brand = ${this.brand}, model = ${this.model}, color = ${this.color}, km = ${this.km}]`
    }
}

function Car (brand, model, color, km) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.km = km;
}

const myCar = new Cars ("Honda", "type-r", "black", 0);

console.log(myCar.properties)


class RaceCar extends Cars {
   constructor(brand, model,) {
    super(brand, model, color, km);
   }
    participaLaCampionat(pozitiaInCampionat) {
        if (pozitiaInCampionat > 0) {
            return `Am castigat locul ${pozitiaInCampionat}`
        }else{
            return `Nu am castigat niciun premiu`
        };
    }

    show() {
        return this.properties
    }

}

function cars () {
    const m1 = new RaceCar ("Mitsubishi", "LancerEvo", "white", 10);
    console.log(m1.show())
    console.log(m1.participaLaCampionat(2));

    const m2 = new RaceCar("Honda", "type-r", "black", 5);
    console.log(m2.show())
    console.log(m2.participaLaCampionat(0))
    
}

cars()