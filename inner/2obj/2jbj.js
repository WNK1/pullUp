////а массивах мы можем перезаписывать данные по их индексу
////пример
//const firstMassiv = [(a = 1), (b = 2), (v = 3), 4, 5];
//console.log(firstMassiv[firstMassiv.length - 1]);

//перезапишем данные по индексу
//firstMassiv[0] = 15;
//console.log(firstMassiv[0]); // переписали значение по индексу

const input = document.getElementById("title");
const createBtn = document.getElementById("create");
const elementList = document.getElementById("list");

/*const preloadMas = [
  "досмотреть полный курс по js",
  "самостоятельно отпрактиковаться",
];*/

//elementList.innerHTML = ``; //innerHTML в данном случае будет использовать некоректно так как он будет перезаписывать
//элемент каждый раз
//нужно использовать метод под названием

// Функция для отображения списка
/*function render() {
  //elementList.insertAdjacentHTML("beforeend", getNotesDownload(preloadMas[0]));
  //elementList.insertAdjacentHTML("beforeend", getNotesDownload(preloadMas[1]));
  //опять же что бы оптимизировать код и по несколько раз не выводить функции выше мы обратмся к циклам

  /* for (
    let i = 0;
    i < preloadMas.length;
    i++ //пока i будет меньше чем длимна массива i будет увеличиваться
  )
    //то есть у нас будет перебор среди значений массива
    elementList.insertAdjacentHTML(
      "beforeend",
      getNotesDownload(preloadMas[i])
    );
}*/
// Вызываем render() для отображения предзагруженных данных
//render();*/

//так же можно использовать и другой цикл for ... of более современный со сзначения note - замента из preloadMAs
/* for (let note of preloadMas) {
    elementList.insertAdjacentHTML("beforeend", getNotesDownload(note)); //то есть вычисляются все значения и переснотяться в константу note
    //которую мы определили
  }
}
render();*/

// Функция генерации HTML для заметки
// function getNotesDownload(shablon) {
//   return `
//     <li class="list-group-item d-flex justify-content-between align-items-center">
//       <span>${shablon}</span>
//       <span>
//         <span class="btn btn-small btn-success">&check;</span>
//         <span class="btn btn-small btn-danger">&times;</span>
//       </span>
//     </li>
//   `;
// }

// Обработчик клика по кнопке "Создать"
// createBtn.onclick = function () {
//   if (input.value.trim().length === 0) {
//     return; // Не добавляем пустые заметки //trim уберает пробелы до и после какой то строки послания - каких либо словосочетаний
//   }

//   elementList.insertAdjacentHTML("beforeend", getNotesDownload(input.value));
//   input.value = ""; // Очищаем поле ввода
// };

//=================================== Объекты - теория
//повторим что объекты могут состоять из различных данных как и массивы
//то есть в них может быть
const newObj = {
  myName: "Nik", //обычные переменные
  myLastName: "Kudryavtsev",
  "list Crypto Actives": [
    (first = "meme"),
    (second = "tia"),
    (threed = "retardio"),
  ],
  //массивы , функции и еще многое другое
};
//что бы например вывести значение какой то константы из объекта просто пропишем его через точку
console.log(newObj.myName);
//можем через = переназначать
newObj.myName = "GG";
console.log(newObj.myName);

//переделываем верхнюю часть кода в объекты и их синтаксис

const preloadMas = [
  {
    contents: "досмотреть полный курс по js",
    completed: false,
  },
  {
    contents: "самостоятельно отпрактиковаться",
    completed: true,
  },
];

//переносим метод - функцию render которую уже писали и адаптируем под объекты и инфу содержающиюся в бъектах
function render() {
  for (let note of preloadMas) {
    elementList.insertAdjacentHTML("beforeend", getNotesPreDownload(note)); //есть один минус что нельзя определить сколько
    // переменных в нашем случае будут сразу же предзагружаться
  }
}
render();

function getNotesPreDownload(note) {
  return `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span class="${note.completed ? "text-decoration-line-through" : ""}">${
    note.contents
  }
      </span>
      <span>
        <span class="btn btn-small btn-success">&check;</span>
        <span class="btn btn-small btn-danger">&times;</span>
      </span>
    </li>
  `;
}

createBtn.onclick = function () {
  if (input.value.trim().length === 0) {
    return; // Не добавляем пустые заметки //trim уберает пробелы до и после какой то строки послания - каких либо словосочетаний
  }
  const objValue = {
    contents: input.value,
    completed: false,
  };
  elementList.insertAdjacentHTML("beforeend", getNotesPreDownload(objValue));
  input.value = ""; // Очищаем поле ввода
};

//========================= last time примерно 2:20
