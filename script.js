let array = [];

let userLength = prompt("Задайте длину массива: ");

// Валидация userLength

while (
  !Number.isInteger(Number(userLength)) ||
  isNaN(userLength) ||
  userLength === null ||
  userLength.trim() === ""
) {
  userLength = prompt("Ошибка. Задайте длину массива: ");
}

// Добавление элементов в array

for (let i = 1; i <= userLength; i++) {
  array.push(prompt("Добавьте элемент в массив: "));

  console.log(array);

  if (null) {
    array.push(prompt("Ошибка. Добавьте элемент в массив: "));
  }
}

// Сортировка элементов

array.sort();
console.log(`Отсортированный массив: ${array}`);

// Удаление элементов со 2-о по 4-й

if (array.length >= 3) {
  array.splice(1, 3);
  console.log(`Массив после удаления элементов 2-4: ${array}`);
}
