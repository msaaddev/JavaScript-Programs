var num = 111,
	rem,
	index = 0,
	sum = 0;

while (num !== 0) {
	rem = num % 10;
	sum = sum + rem * Math.pow(2, index);
	index++;
	num = (num - rem) / 10;
}

console.log(sum);
