////а массивах мы можем перезаписывать данные по их индексу
////пример
//const firstMassiv = [(a = 1), (b = 2), (v = 3), 4, 5];
//console.log(firstMassiv[firstMassiv.length - 1]);

//перезапишем данные по индексу
//firstMassiv[0] = 15;
//console.log(firstMassiv[0]); // переписали значение по индексу

const input = document.getElementById("title");
const createBtn = document.getElementById("create"); //получаем все нужные элементы по id
const elementList = document.getElementById("list");

const preloadMas = [
  "досмотреть полный курс по js",
  "самостоятельно отпрактиковаться",
];

function getNotesDownload() {
  elementList.insertAdjacentHTML(
    /*1 это куда , 2 это что */ "beforeend",
    ` 
    <ul class="list-group list-group-flush" id="list">
    <li
        class="list-group-item d-flex justify-content-between align-items-center"
        >
            <span>${preloadMas[0]}</span>
            <span>
            <span class="btn btn-small btn-success">&check;</span>
            <span class="btn btn-small btn-danger">&times;</span>
            </span>
        </li>
        </ul>
    </div> `
  );
}
getNotesDownload();

createBtn.onclick = function () {
  if (input.value.length === 0) {
    return undefined; //в данном случае будет возвращаться undefinded и строка не запишется
  }
  //elementList.innerHTML = ``; //innerHTML в данном случае будет использовать некоректно так как он будет перезаписывать
  //элемент каждый раз
  //нужно использовать метод под названием

  elementList.insertAdjacentHTML(
    /*1 это куда , 2 это что */ "beforeend",
    getNotesDownload(input)
  );
  input.value = ""; //в данном случае мы говорим что как только мы добавили новую заметку с помощью
  //insertAdjacentHTML наша строка - ее значение станет пустой
};
