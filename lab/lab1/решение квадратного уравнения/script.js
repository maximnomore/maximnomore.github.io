let a = prompt("Решение квадратного уравнения: введите a"),
    b = prompt("Решение квадратного уравнения: введите b"),
    c = prompt("Решение квадратного уравнения: введите c"),
    d, 
    x1,
    x2;

while (a == ""){
	a = prompt("Решение квадратного уравнения: введите a");
}

while (b == ""){
	b = prompt("Решение квадратного уравнения: введите b");
}

while (c == ""){
	c = prompt("Решение квадратного уравнения: введите c");
}

d = b*b - 4*a*c;

alert("Корень из дискрименанта: "+Math.sqrt(d));

if (d>0){
x1 = (-b+Math.sqrt(d))/(2*a);
x2 = (-b-Math.sqrt(d))/(2*a);
alert("x1: "+x1+"        x2: "+x2);
} else if (d == 0) {
	x1 = (-b/(2*a));
	alert("x: "+x1);
} else if (d < 0){
	alert("Решений нет");
}

console.log("html");