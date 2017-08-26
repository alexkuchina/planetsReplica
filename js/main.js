var planets = [
		{
			name: "mercury",
			picture: "img/mercury.png",
			info: "<ul> <li>Mercury does not have any moons or rings.</li> <li>Your weight on Mercury would be 38% of your weight on Earth.</li> <li>A day on the surface of Mercury lasts 176 Earth days.</li><li>A year on Mercury takes 88 Earth days.</li> <li>Mercury has a diameter of 4,879 km, making it the smallest planet.</li> <li>It’s not known who discovered Mercury.</li> <ul>"
		},
		
		{
			name: "venus",
			picture: "img/venus.png",
			info: "<ul> <li>Venus does not have any moons or rings.</li><li>Venus is nearly as big as the Earth with a diameter of 12,104 km.</li><li>Venus is thought to be made up of a central iron core, rocky mantle and silicate crust.</li><li>A day on the surface of Venus (solar day) would appear to take 117 Earth days.</li><li>A year on Venus takes 225 Earth days.</li><li>The surface temperature on Venus can reach 471 °C.</li></ul>"
		},

		{
			name: "earth",
			picture: "img/earth.png",
			info: "<ul><li>The Earth’s rotation is gradually slowing.</li><li>The Earth was once believed to be the centre of the universe.</li><li>Earth has a powerful magnetic field.</li><li>There is only one natural satellite of the planet Earth.</li><li>Earth is the only planet not named after a god.</li><li>The Earth is the densest planet in the Solar System.</li></ul>"
		},

		{
			name: "mars",
			picture: "img/mars.png",
			info: "<ul><li>Mars and Earth have approximately the same landmass.</li><li>Mars is home to the tallest mountain in the solar system.</li><li>Only 18 missions to Mars have been successful.</li><li>Mars has the largest dust storms in the solar system.</li><li>On Mars the Sun appears about half the size as it does on Earth.</li><li>Pieces of Mars have fallen to Earth.</li><li>Mars takes its name from the Roman god of war.</li><li>There are signs of liquid water on Mars.</li><li>One day Mars will have a ring.</li></ul>"
		},

		{
			name: "jupiter",
			picture: "img/jupiter.png",
			info: "<ul><li>Jupiter is the fourth brightest object in the solar system.</li><li>The ancient Babylonians were the first to record their sightings of Jupiter.</li><li>Jupiter has the shortest day of all the planets.</li><li>Jupiter orbits the Sun once every 11.8 Earth years.</li><li>Jupiter has unique cloud features.</li><li>The Great Red Spot is a huge storm on Jupiter.</li><li>Jupiter’s interior is made of rock, metal, and hydrogen compounds.</li><li>Jupiter’s moon Ganymede is the largest moon in the solar system.</li><li>Jupiter has a thin ring system.</li><li>Eight spacecraft have visited Jupiter.</li></ul>"
		},

		{
			name: "saturn",
			picture: "img/saturn.png",
			info: "<ul><li>Saturn can be seen with the naked eye.</li><li>Saturn was known to the ancients, including the Babylonians and Far Eastern observers.</li><li>Saturn is the flattest planet.</li><li>Saturn orbits the Sun once every 29.4 Earth years.</li><li>Saturn’s upper atmosphere is divided into bands of clouds.</li><li>Saturn has oval-shaped storms similar to Jupiter’s.</li><li>Saturn is made mostly of hydrogen.</li><li>Saturn has the most extensive rings in the solar system.</li><li>Saturn has 150 moons and smaller moonlets.</li><li>Titan is a moon with complex and dense nitrogen-rich atmosphere.</li><li>Four spacecraft have visited Saturn.</li></ul>"
		},

		{
			name: "uranus",
			picture: "img/uranus.png",
			info: "<ul><li>Uranus was officially discovered by Sir William Herschel in 1781.</li><li>Uranus turns on its axis once every 17 hours, 14 minutes.</li><li>Uranus makes one trip around the Sun every 84 Earth years.</li><li>Uranus is often referred to as an “ice giant” planet.</li><li>Uranus hits the coldest temperatures of any planet.</li><li>Uranus has two sets of very thin dark coloured rings.</li><li>Uranus’ moons are named after characters created by William Shakespeare and Alexander Pope.</li><li>Only one spacecraft has flown by Uranus.</li></ul>"
		},

		{
			name: "neptune",
			picture: "img/neptune.png",
			info: "<ul><li>Neptune was not known to the ancients.</li><li>Neptune spins on its axis very rapidly.</li><li>Neptune is the smallest of the ice giants.</li><li>The atmosphere of Neptune is made of hydrogen and helium, with some methane.</li><li>Neptune has a very active climate</li><li>Neptune has a very thin collection of rings.</li><li>Neptune has 14 moons.</li><li>Only one spacecraft has flown by Neptune.</li></ul>"
		},

		{
			name: "sun",
			picture: "img/sun.png",
			info: "<ul><li>At its centre the Sun reaches temperatures of 15 million °C.</li><li>The Sun is all the colours mixed together, this appears white to our eyes.</li><li>The Sun is mostly composed of hydrogen (70%) and Helium (28%).</li><li>The Sun is a main-sequence G2V star (or Yellow Dwarf).</li><li>The Sun is 4.6 billion years old.</li><li>The Sun is 109 times wider than the Earth and 330,000 times as massive.</li></ul>"
		},

		{
			name: "pluto",
			picture: "img/pluto.png",
			info: "<ul><li>Pluto is named after the Greek god of the underworld.</li><li>Pluto was reclassified from a planet to a dwarf planet in 2006.</li><li>Pluto was discovered on February 18th, 1930 by the Lowell Observatory.</li><li>Pluto has five known moons.</li><li>Pluto is the largest dwarf planet.</li><li>Pluto is one third water.</li><li>Pluto is smaller than a number of moons.</li><li>Pluto has a eccentric and inclined orbit.</li><li>Pluto has been visited by one spacecraft.</li><li>Pluto’s location was predicted by Percival Lowell in 1915.</li><li>Pluto sometimes has an atmosphere.</li></ul>"
		},

		{
			name: "moon",
			picture: "img/moon.png",
			info: "<ul><li>The dark side of the moon is a myth.</li><li>The rise and fall of the tides on Earth is caused by the Moon.</li><li>The Moon is drifting away from the Earth.</li><li>A person would weigh much less on the Moon.</li><li>The Moon has only been walked on by 12 people; all American males.</li><li>The Moon has no atmosphere.</li><li>The Moon has quakes.</li><li>The first spacecraft to reach the Moon was Luna 1 in 1959.</li><li>The Moon is the fifth largest natural satellite in the Solar System.</li><li>The Moon will be visited by man in the near future.</li><li>During the 1950’s the USA considered detonating a nuclear bomb on the Moon.</li></ul>"
		}

];

var press = document.getElementById('planetName');
press.addEventListener('keypress', function enterKey(e) {
	if(e.keyCode == 13) {
		findPlanet();
		e.preventDefault();
	};
}, false);


//function runs when user clicks the button
function findPlanet() {
	//confirms that the element exists and what value user sumbits
	var input = document.getElementById('planetName').value
	console.log(input);

	for(var i = 0; i < planets.length; i++) {
		console.log(planets[i].name)

		if(input.toLowerCase() == planets[i].name) {
			var name = document.getElementById('name');
			var hint = document.getElementById('hint');
			name.textContent = planets[i].name;
			hint.textContent = "(click on the planet)";
			var image = document.getElementById('planetLook');
			image.src = planets[i].picture;
			image.className = 'animation';
			return

			//runs if "if" statemnt doesn't
		} else {
			document.getElementById('name').innerHTML = "Planet not found";
			var image = document.getElementById('planetLook');
			image.src = "";
			var info = document.getElementById('info');
			info.innerHTML = "";

		};

	};

};
//function that runs  when user click on the planet - info about planet shows
function clickImage(){

	for(var i = 0; i < planets.length; i++) {
		console.log(planets[i].name)

	var input = document.getElementById('planetName').value
	console.log(input);

		if(input.toLowerCase() == planets[i].name){
		var hint = document.getElementById('hint');
		hint.textContent = "";
		var info = document.getElementById('info');
			info.innerHTML = planets[i].info;
			// document.getElementById('planetLook').style.width = '400px';


		};
	};
};












