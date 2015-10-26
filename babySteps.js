var sum = 0;
//console.log(process.argv.length);
for(var i = 2; i < process.argv.length; i++) {
	//console.log(process.argv[i]);
	sum+= +process.argv[i];
}
console.log(sum);