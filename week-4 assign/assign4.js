var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for(var i=0;i < names.length;i++) {
	var fletter=names[i].charAt(0).toLowerCase();
	if(fletter==='j') {
		console.log("Good Bye " + names[i]);
		
	}
	else
		console.log("Hello " + names[i]);
		
}