var app = function() {

	var catsArray = [
		{name: "Jerry", faveFood: "toes", photo: './jerry.jpg'},
		{name: "Missy", faveFood: "Felix Goody Bags - Mixed Grill flavour", photo: './missy.jpg'},
		{name: "Henry", faveFood: "mince", photo: './henry.jpg'},
		{name: "Koukla", faveFood: "biscuits", photo: './koukla.jpg'},
	];

	for(cat of catsArray){
		addCat(cat.name, cat.faveFood, cat.photo);
	};
};

// parent container
	var createCat = function(){
	var cat = document.createElement('ul');
	cat.classList.add('cat');
	return cat;
}

// create the first child
	var createName = function(name){
	var name = document.createElement('li');
	name.innerText = "Name: " + name;
	return name;
}

// create the second child
	var createFaveFood = function(faveFood){
	var faveFood = document.createElement('li');
	faveFood.innerText = "Favourite food: " + faveFood;
	return faveFood;
}

// create the third child (bullet point for image)
	var createPhotoBullet = function(photoBullet){
	var photoBullet = document.createElement('li');
	return photoBullet;
}

// create the child from this with the image
	var createPhoto = function(photo){
	var photo = document.createElement('img');
	photo.src = photo;
	photo.style.width = "500px";
	return photo;
}

var appendElements = function(photo, photoBullet, faveFood, name, cat, cats){
	photoBullet.appendChild(photo);
	faveFood.appendChild(photoBullet);
	name.appendChild(faveFood);
	cat.appendChild(name);
	cats.appendChild(cat);
}

// add a cat
var addCat = function(name, faveFood, photo){
	var cat = createCat();
	var name = createName(name);
	var faveFood = createFaveFood(faveFood);
	var photoBullet = createPhotoBullet(photoBullet);
	var photo = createPhoto(photo);
	var cats = document.querySelector('#cats');
	appendElements(photo, photoBullet, faveFood, name, cat, cats);
};

window.onload = app;
