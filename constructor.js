/*1*/ function Calculator(a,b) {
         Calculator.prototype.add= function(a, b) {
             return a + b;
         }
        
         Calculator.prototype.subtract= function(a, b) {
             return a - b;
         } 
        
         Calculator.prototype.multiply=function(a, b) {
             return a * b;
         }
        
         Calculator.prototype.divide=function (a, b) {
           if (b === 0) {
             throw new Error("Cannot divide by zero");
            }
             return a / b;
          }

         }

         const calculator = new Calculator();
         console.log(calculator.add(10, 5));
         console.log(calculator.subtract(10, 5));
         console.log(calculator.multiply(10, 5));
         console.log(calculator.divide(10, 5));
        
        
        /*2*/ 
         class Person {
           constructor(name, age) {
             this.name = name;
             this.age = age;
         } 
        
        compareAge(other) {
         if (this.age > other.age) {
             return `${other.name} is younger than me.`;
         } 
          else if (this.age < other.age) {
             return `${other.name} is older than me.`;
        } 
          else {
             return `${other.name} is the same age as me.`;
          }
         }
        }
        
        const p1 = new Person("Samuel", 24);
        const p2 = new Person("Joel", 36);
        const p3 = new Person("Lily", 24);
        
         console.log(p1.compareAge(p2));
         console.log(p2.compareAge(p1));
         console.log(p1.compareAge(p3));
        
         /*3*/
            function Person(name, age) {
         let person= Object.create(Person.prototype);
          person.name=name;
          person.age=age;
          person.stomach=[];
                  return person;
         }
          Person.prototype.eat=function (someFood) {
             this.stomach.push(someFood);}
        Person.prototype.poop=function () {
             if (this.stomach.length>10){
                 this.stomach=[];
             }
         }
          Person.prototype.toString=function (){
                 return `${this.name}, ${this.age}`
         }
          const person1 = Person("Alice", 30);
         person1.eat("apple");
         person1.eat("banana");
         console.log(person1.stomach);
         person1.poop();
         console.log(person1.stomach);
         console.log(person1.toString());
        
        
        /*4*/
          function Car(model, milesPerGallon) {
             let car = Object.create(Car.prototype);
             car.model = model;
             car.milesPerGallon = milesPerGallon;
             car.tank = 0;
             car.odometer = 0;
        
                  return car;
         }
         Car.prototype.fill = function(gallons) {
              this.tank += gallons;
         }
        
         Car.prototype.distance = function(distance) {
             const fuelNeed = distance / this.milesPerGallon;
        
         if (fuelNeed > this.tank) {
            const miles = this.tank * this.milesPerGallon;
             this.odometer += miles;
             this.tank = 0;
                 return `I ran out of fuel at ${this.odometer} miles!`;
         }
          else {
             this.odometer += distance;
              this.tank -= fuelNeed;
                  return `Drove ${this.odometer} miles, still have ${this.tank} gallons of fuel left`;
          }
         }
         const car = new Car('Toyota', 25);
        
        car.fill(10);
        console.log(car.distance(2000));
        
        /*5*/ 
         function Person(name, age) {
             this.name = name;
             this.age = age;
        }
        function Baby(name, age) {
              Person.call(this, name, age);
         }
        
             Baby.prototype = Object.create(Person.prototype);
              Baby.prototype.constructor = Baby;
        
         Baby.prototype.play = function(toy) {
                 return `Playing with ${toy}`;
        };
        
        const baby = new Baby("Charlie", 3);
        console.log(baby.name);
        console.log(baby.play("legos"));
        
        /*6*/
         function Song(title, artist) {
              this.title = title;
              this.artist = artist;
              this.isPlaying = false;
         }
        
        Song.prototype.play = function() {
             this.isPlaying = true;
                 return `${this.title} started to play`;
         };
        
        Song.prototype.stop = function() {
              this.isPlaying = false;
                 return `${this.title} stopped playing`;
        };
        
        function Playlist() {
           this.songs = [];
           this.currIndex = 0;
         }
        
        Playlist.prototype.add = function(song) {
             this.songs.push(song);
         };
        
        Playlist.prototype.play = function() {
             const currentSong = this.songs[this.currIndex];
                 return currentSong.play();
         };
        
        Playlist.prototype.stop = function() {
             const currentSong = this.songs[this.currIndex];
                 return currentSong.stop();
         };
        
        Playlist.prototype.next = function() {
             const currentSong = this.songs[this.currIndex];
             currentSong.stop(); // Stop the current song
        
             this.currIndex = (this.currIndex + 1) % this.songs.length;
             const nextSong = this.songs[this.currIndex];
             nextSong.play();
                 return `${currentSong.title} stopped, ${nextSong.title} started`;
         };
        
        
        const playlist = new Playlist();
        const heyJude = new Song("Hey Jude", "The Beatles");
        const jaded = new Song("Jaded", "Aerosmith");
        
        playlist.add(heyJude);
        playlist.add(jaded);
         
        console.log(playlist.play());
        console.log(playlist.next()); 
        console.log(playlist.next()); 
        console.log(playlist.stop()); 
        console.log(playlist.play()); 
        
        
        