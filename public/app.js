var app = function() {

// parent container
	var cat = document.createElement('ul');
	cat.classList.add('cat');

// create the first child
	var name = document.createElement('li');
// edit the text to appear as required
	name.innerText = "Name: Missy";

// create the second child
	var faveFood = document.createElement('li');
// edit the text to appear as required
	faveFood.innerText = "Favourite food: Felix Goody Bags - Mixed Grill flavour";

// create the third child (bullet point for image)
	var photoBullet = document.createElement('li');

// create the child from this with the image
	var photo = document.createElement('img');
	photo.src = './missy.jpg';
	photo.style.width = "500px";

// append the name to the cat
	cat.appendChild(name);

// append the faveFood to the cat
	cat.appendChild(faveFood);

// append the photoBullet to the cat
	cat.appendChild(photoBullet);

// append the photo to the photoBullet
	photoBullet.appendChild(photo);

// append the cat to the cats section
	var cats = document.querySelector('#cats');
	cats.appendChild(cat);
};

window.onload = app;
