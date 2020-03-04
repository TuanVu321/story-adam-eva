function Apple() {
    this.weight = 10;
    this.getWeight = function () {
        return this.weight;
    };
    this.decreaseWeight = function () {
        return this.weight--;
    }
}

function Human(name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
    this.getName = function () {
        return this.name;
    };
    this.getGender = function () {
        return this.gender;
    };
    this.getWeight = function () {
        return this.weight;
    };
    this.eatApple = function (apple) {
        if (apple.getWeight() > 0) {
            this.weight++;
            apple.decreaseWeight()
        } else {
            alert('het tao');
        }

    };
    this.say = function () {
        document.getElementById('talk').innerHTML+='Hi iam ' + this.name + ' My gender: ' + this.gender + ' My weight: ' + this.weight+'<br>';
    }
}

let apple = new Apple();
let adam = new Human('adam', 'male', 50);
let eva = new Human('eva', 'fimale', 30);


adam.eatApple(apple);
eva.eatApple(apple);
adam.say();
eva.say();
