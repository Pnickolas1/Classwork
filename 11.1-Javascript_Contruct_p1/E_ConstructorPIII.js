
function DigitalPal(hungry, sleepy, bored,age){
	this.hungry = false;
	this.sleepy = false;
	this.bored	= true;
	this.age = 0;

// FIRST METHOD
	this.feed = function(){
		if(hungry == true){
			console.log('that was yummy')
			this.hungry = false;
			this.sleepy = true;
		} else {
			console.log('no thanks, I\'m full')
		}
	}

	this.sleep = function(){
		if(sleepy == true){
			console.log('Zzzzzz');
			this.sleepy = false;
			this.bored = true;
			this.increaseAge = function(){
				this.age += 1;
			}
		}else{
			console.log('No way im not tired');
		}
	}

	this.play = function(){
		if(bored == true){
			console.log('yay!, let\'s play');
			this.bored = false;
		}else{
			console.log('not right now, Later?')
		}

	}



} //ENDS DIGIPAL


var peter = new DigitalPal(false,true,true,29);


peter.feed();
peter.sleep();