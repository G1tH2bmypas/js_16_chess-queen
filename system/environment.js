const getRandomInt = (min, max, exclude = []) => {
	const randomInt = Math.floor(min + Math.random() * (max + 1 - min));

	if (exclude.includes(randomInt)) {
		return getRandomInt(min, max, exclude);
	} else {
		return randomInt;
	}
};

module.exports = {
	getRandomInt
};