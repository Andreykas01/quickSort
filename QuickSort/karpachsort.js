var lengthArr = +(prompt("Сколько будет элементов в массиве?")),
	arr = [];

for (var i = 0; i < lengthArr; i++){
	arr.push(prompt("Введите значение"));
}

function karpachsort() {
	for (var u = 0; u < arr.length - 1; u++) {
		var min = arr[u]
		for (var y = u + 1; y < arr.length; y++) {
			if (arr[y] < min) {
				min = arr[u];
				var swap = arr[u];
				arr[u] = arr[y];
				arr[y] = swap;
			}
		}
	}
}
karpachsort();
console.log(arr);