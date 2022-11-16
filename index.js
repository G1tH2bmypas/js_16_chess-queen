function queen(x1, y1, x2, y2) {
	return x1 === x2 || y2 === y1 || Math.abs(y2 - y1) === Math.abs(x2 - x1);
}

module.exports = queen;
