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

const note = [
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
  // for (let note of preloadMas) {
  //   elementList.insertAdjacentHTML("beforeend", getNotesPreDownload(note)); //есть один минус что нельзя определить сколько
  //   // переменных в нашем случае будут сразу же предзагружаться
  // }
  elementList.innerHTML = ""; //просто очищаем шаблон каждый раз когда добавляем новый элемент
  for (i = 0; i < note.length; i++) {
    elementList.insertAdjacentHTML(
      "beforeend",
      getNotesPreDownload(note[i], i)
    );
  }
}
render();

function getNotesPreDownload(note, index) {
  return `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span class="${note.completed ? "text-decoration-line-through" : ""}">${
    note.contents
  }
      </span>
      <span>
        <span class="btn btn-small btn-${
          note.completed ? "warning" : "success" //тут мы так же проверяем чему равно действие true/false
          // и меняем цвет кнопки в зависимости от значения
        }" data-index="${index}" data-type="toggle"  >&check;</span> 
        <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
      </span>
    </li>
  `;
}
elementList.onclick = function (event) {
  //здесь мы делаем делегировани события на кнопки и так же узнаем индекс
  //на какой именно элемент был клик ,
  //================   console.log(event.target.dataset); !!!!! //то есть сначала обрабатывается тарген эвента , на что он навешен какой индекс ему принадлежит , dataset - выводит объект со всеми данными дата атрибутов и с
  // помощью них мы уже можем определить какой индекс и какая именно кнопка добавить / удалить ?

  //но нам так же нужно выводить в консоль все данные дата атрибутов только тогда когда нам известен индекс и на что было нажато
  // и должны исользовать проверку что бы не было undefinded

  if (event.target.dataset.index) {
    const type = event.target.dataset.type;
    const index = parseInt(event.target.dataset.index);
    if (type == "toggle") {
      note[index].completed = !note[index].completed;
    } else if (type == "remove") {
      note.splice(index, 1); //если тип remove то что бы удалить данную заметку используем метод сплайс
      // где 1 указываем элемент - какой индекс у элемента и сколько элементов надо уалить
    }
    render();
  }
};
createBtn.onclick = function () {
  if (input.value.trim().length === 0) {
    return; // Не добавляем пустые заметки //trim уберает пробелы до и после какой то строки послания - каких либо словосочетаний
  }
  const newNotes = {
    contents: input.value,
    completed: false,
  };
  note.push(newNotes);
  render();
  input.value = ""; // Очищаем поле ввода
};
