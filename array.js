//1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
console.log('Task 1');
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concatedArr = arr1.concat(arr2);
console.log(concatedArr);

//2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
console.log('Task 2');
const arr3 = [1, 2, 3];
const reversedArr = arr3.reverse();
console.log(reversedArr);

//3.  Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
console.log('Task 3');
const arr4 = [1, 2, 3];
const pushedArr = arr4.push(4,5,6);
console.log(arr4);

//4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
console.log('Task 4');
const arr5 = [1, 2, 3];
const unshiftedArr = arr5.unshift(4, 5, 6);
console.log(arr5);

//5.  Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.
console.log('Task 5');
const arr6 = ['js', 'css', 'jq'];
console.log(arr6.shift());

// 6.  Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент и удалите его .
console.log('Task 6');
console.log(arr6.pop());

//7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
console.log('Task 7');
const arr7 = [1, 2, 3, 4, 5];
const slicedStartArr = arr7.slice(0, 3);
console.log(slicedStartArr);

//8.  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
console.log('Task 8');
const slicedEndArr = arr7.slice(-2);
console.log(slicedEndArr);

//9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
console.log('Task 9');
const arr8 = [1, 2, 3, 4, 5];
const splicedArr1 = arr8.splice(1, 2);
console.log(arr8);

//10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
console.log('Task 10');
const arr9 = [1, 2, 3, 4, 5];
const splicedArr2 = arr9.splice(1, 3);
console.log(splicedArr2);

//11.  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
console.log('Task 11');
const arr10 = [1, 2, 3, 4, 5];
arr10.splice(3, 0, 'a', 'b', 'c');
console.log(arr10);

//12. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
console.log('Task 12');
const arr11 = [1, 2, 3, 4, 5];
arr11.splice(1, 0, 'a', 'b', );
arr11.splice(-1, 0, 'c');
arr11.splice(arr11.length, 0, 'e')
console.log(arr11);

//13.  Дан массив [3, 4, 1, 12, 7]. Отсортируйте его.
console.log('Task 13');
const arr12 = [3, 4, 1, 12, 7];
const sortedArr = arr12.sort(function(a, b){
  return a-b;
});
console.log(sortedArr);

//14. Дан массив со следующими объектами внутри:  					
// {firstName: ‘Test’, lastName: ’Testovich’, age: 42, gender: ‘male’,}, 			{firstName: ‘User’, lastName: ’Userovich’, age: 12, gender: ‘male’,},		{firstName: ‘Test`ya’, lastName: ’Testovna’, age: 16, gender: ‘female’,},		{firstName: ‘Logina’, lastName: ’Consol`evna’, age: 42, gender: ‘female’,} 		Для каждого элемента выведите сообщение в консоль типа “Пользователь (имя) (фамилия) является (пол) и ему сейчас (возраст) лет”
console.log('Task 14');
const objArr1 = [
  {firstName: 'Test', lastName: 'Testovich', age: 42, gender: 'male',}, 			{firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male',},		{firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female',},		{firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female',} 
]
objArr1.forEach (function(element) {
 console.log(`Пользователь ${element.firstName} ${element.lastName} является ${element.gender} и ему сейчас ${element.age} лет`)
})

//15. Дан массив со следующими объектами внутри:  					
// {firstName: ‘Test’, lastName: ’Testovich’, age: 42, gender: ‘male’,}, 			{firstName: ‘User’, lastName: ’Userovich’, age: 12, gender: ‘male’,},		{firstName: ‘Test`ya’, lastName: ’Testovna’, age: 16, gender: ‘female’,},		{firstName: ‘Logina’, lastName: ’Consol`evna’, age: 42, gender: ‘female’,}		Создайте новый массив на основании старого массива, добавив каждому пользователю в новом массиве свойство telephoneNumber которое может быть или строкой или числом (на ваше усмотрение).
console.log('Task 15')
const newObj1 = objArr1.map(function(element, index) {
  const obj = {
    firstName: element.firstName,
    lastName: element.lastName,
    age: element.age,
    gender: element.gender,
    telephoneNumber: 3800000000 + index,
  };
  return obj;
})
console.log(newObj1);
console.log(objArr1);

//16. Дан массив со следующими объектами внутри:
// {firstName: ‘Test’, lastName: ’Testovich’, age: 27, gender: ‘male’,}, 			{firstName: ‘User’, lastName: ’Userovich’, age: 12, gender: ‘male’,},		{firstName: ‘Test`ya’, lastName: ’Testovna’, age: 16, gender: ‘female’,},		{firstName: ‘Logina’, lastName: ’Consol`evna’, age: 42, gender: ‘female’,},		{firstName: ‘Undefined’, lastName: ’Undefinovich’, age: 99},			
// {firstName: ‘Null’, lastName: ’Nullovich’, gender: ‘male’}				
// Создайте новый массив на основании старого массива, в котором будут только те совершеннолетние пользователи, у которых будет определенный пол.
console.log('Task 16')
const objArr2 = [
  {firstName: 'Test', lastName: 'Testovich', age: 27, gender: 'male',},
  {firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male',},		{firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female',},		{firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female',},		{firstName: 'Undefined', lastName: 'Undefinovich', age: 99},			
  {firstName: 'Null', lastName: 'Nullovich', gender: 'male',},
]
const filteredArr = objArr2.filter(function(element)
{return element.gender === 'male' && element.age >= 18;
})

console.log(filteredArr);

//17. Дан следующий массив [1,2,3, [10,20,30, [100,200,300, [1000, 2000, 3000]]]]. Создайте новый массив на основании старого массива, в котором не будет вложенных массивов.
console.log('Task 17')
const arr13 = [1,2,3, [10,20,30, [100,200,300, [1000, 2000, 3000]]]];
const flatedArr= arr13.flat(Infinity);
console.log(flatedArr);