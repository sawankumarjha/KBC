

let ques = document.getElementById('ques');
let opt1 = document.getElementById('opt1');
let opt2 = document.getElementById('opt2');
let opt3 = document.getElementById('opt3');
let opt4 = document.getElementById('opt4');
var ans;
var i = 0;
var amount = 0;
var arr = [];


opt1.addEventListener('click', () => {
    if (j <= 10) {
        if (ans == opt1.innerText) {
            opt1.innerHTML = "Correct";
            amount += 500;
            setTimeout(() => {
                generateRandom();
            }, 1000);

        } else {
            wrong();

        }
    }
    else {
        wrong();
    }
});
opt2.addEventListener('click', () => {
    if (ans == opt2.innerText) {
        opt2.innerHTML = "Correct";
        amount += 500;
        setTimeout(() => {
            generateRandom();
        }, 1000);
    } else {
        wrong();
    }

});
opt3.addEventListener('click', () => {

    if (ans == opt3.innerText) {
        opt3.innerHTML = "Correct";
        amount += 500;
        setTimeout(() => {
            generateRandom();
        }, 1000);
    } else {
        wrong();
    }

});
opt4.addEventListener('click', () => {
    if (ans == opt4.innerText) {
        opt4.innerHTML = "Correct";
        amount += 500;
        setTimeout(() => {
            generateRandom();
        }, 1000);
    } else {
        wrong();
    }


});


function wrong() {
    ques.remove()
    opt1.remove();
    opt2.remove();
    opt3.remove();
    opt4.remove();
    let j1 = document.getElementById('jumbo');
    j1.innerHTML = `<h1 class="text-center my-5 text-light">Wrong Answer Please try again Later!</h1>>`
}
function set(q, o1, o2, o3, o4, ansr) {
    ans = ansr
    ques.innerHTML = q;
    opt1.innerHTML = o1;
    opt2.innerHTML = o2;
    opt3.innerHTML = o3;
    opt4.innerHTML = o4;
}
//Generate Random Number
function generateRandom() {
    if (i < 15) {
        let randomNumber = 1 + Math.floor(Math.random() * 20);
        arr.forEach(element => {
            if (element == i) {
                let randomNumber = 1 + Math.floor(Math.random() * 20);
            }
        });




        if (randomNumber == 1) {
            set("Who Developed Java Language ?", "Denish Ritchie", "James Gosling", "Guido Van Rossum", "Brendam Eich", "James Gosling");
            arr.push(randomNumber);
        }
        else if (randomNumber == 2) {
            set("Which Language is 100% Object Oriented?", "Java", "Python", "C language", "C++", "Python");
            arr.push(randomNumber);
        }
        else if (randomNumber == 3) {
            set("Who Developed C++?", "Bejarne Stroustrup", "James Gosling", "Guido Van Rossum", "Brendam Eich", "Bejarne Stroustrup");
            arr.push(randomNumber);
        }
        else if (randomNumber == 4) {
            set("Who Developed Java Language ?", "Denish Ritchie", "James Gosling", "Guido Van Rossum", "Brendam Eich", "James Gosling");
            arr.push(randomNumber);
        }
        else if (randomNumber == 5) {
            set("Who Developed Python Language ?", "Denish Ritchie", "James Gosling", "Guido Van Rossum", "Brendam Eich", "Guido Van Rossum");
            arr.push(randomNumber);
        }
        else if (randomNumber == 6) {
            set("Who Developed C Language ?", "Denish Ritchie", "James Gosling", "Guido Van Rossum", "Brendam Eich", "Denish Ritchie");
            arr.push(randomNumber);
        }
        else if (randomNumber == 7) {
            set("Who Developed Javascript Language ?", "Denish Ritchie", "James Gosling", "Guido Van Rossum", "Brendam Eich", "Brendam Eich");
            arr.push(randomNumber);
        }
        else if (randomNumber == 8) {
            set("Who won IPL 2018?", "Chennai Superkings", "Rajasthan Royals", "Pune Warriors", "Mumbai Indians", "Chennai Superkings");
            arr.push(randomNumber);
        }
        else if (randomNumber == 9) {
            set("Who won IPL 2019?", "Chennai Superkings", "Rajasthan Royals", "Pune Warriors", "Mumbai Indians", "Mumbai Indians");
            arr.push(randomNumber);
        }
        else if (randomNumber == 10) {
            set("Why Java is not 100% Object Oriented?", "Primitive Datatypes", "variables", "Identifiers", "Keywords", "Primitive Datatypes");
            arr.push(randomNumber);
        }
        else if (randomNumber == 11) {
            set("which is not a feature of Java?", "Pointer", "Object Oriented", "Architectural Neutral", "Platform Independent", "Pointer");
            arr.push(randomNumber);
        }
        else if (randomNumber == 12) {
            set("In Java class is a ?", "Physical entity", "Logical entity", "Identifer", "Datatypes", "Logical entity");
            arr.push(randomNumber);
        }
        else if (randomNumber == 13) {
            set("In Java object is a ?", "Physical entity", "Logical entity", "Identifer", "Datatypes", "Physical entity");
            arr.push(randomNumber);
        }
        else if (randomNumber == 14) {
            set("When the IPL started?", "2008", "2009", "2007", "2006", "2007");
            arr.push(randomNumber);
        }
        else if (randomNumber == 15) {
            set("Who has hit most sixes in all the IPL tournaments?", "Rohit Sharma", "Suresh Raina", "Chris Gayle", "AB de Villiers", "Chris Gayle");
            arr.push(randomNumber);
        }
        else if (randomNumber == 16) {
            set("Who has taken most catches in The IPL history so far ?", "Suresh Raina", "Rohit Sharma", "Dwayne Bravo", "AB de Villiers", "Suresh Raina");
            arr.push(randomNumber);
        }
        else if (randomNumber == 17) {
            set("Who has taken mosts number of wickets in The IPL history so far ?", "Suresh Raina", "Ravindra Jadeja", "Lasith Malinga", "Zaheer Khan", "Lasith Malinga");
            arr.push(randomNumber);
        }
        else if (randomNumber == 18) {
            set("What is int in Programming language?", "Keyword", "identifiers", "Variable", "value", "Keyword");
            arr.push(randomNumber);
        }
        else if (randomNumber == 19) {
            set("What is String in java?", "Keyword", "class", "object", "Datatype", "class");
            arr.push(randomNumber);
        }
        else if (randomNumber == 20) {
            set("Which is not a concept of OOPs?", "Abstraction", "Polymorphism", "Encapsulation", "Pointer", "Pointer");
            arr.push(randomNumber);
        }
        j = 0;
        i++;
    }
    else {
        console.log("End of the questios")
        // ques.innerHTML = "";
        // opt1.innerHTML = "";
        // opt2.innerHTML = "";
        // opt3.innerHTML = "";
        // opt4.innerHTML = "";
        ques.remove()
        opt1.remove();
        opt2.remove();
        opt3.remove();
        opt4.remove();
        let j1 = document.getElementById('jumbo');
        j1.innerHTML = `<h1 class="text-center my-5 text-light">Your Winning Amount : ${amount}</h1>>`
    }


}
var j = 1;
setInterval(() => {
    var date = new Date();
    date.setSeconds(j++);
    if (date.getSeconds() < 10) {
        document.getElementById('time').innerHTML = date.getSeconds();
    } else {
        document.getElementById('time').innerHTML = date.getSeconds();
        ques.remove()
        opt1.remove();
        opt2.remove();
        opt3.remove();
        opt4.remove();
        document.getElementById('time').innerHTML = "";
        let j1 = document.getElementById('jumbo');
        j1.innerHTML = `<h1 class="text-center my-5 text-light">Time is Up</h1>>`
        


    }

}, 1000);



generateRandom();
    // set the inner html