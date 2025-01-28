//что бы получить колекцию форм нам нужно воспользоваться методом .forms - данный метод является единственно правельным так как он динамический 
//что бы форма была видима html и js нужно обособить ее в тег   <form>...<form/>  в html
const allForms = document.forms[0] //тут мы обращаемся к конкретной форме 
console.log(allForms)

//так же можем искать форму по имени тогда в input должен быть обозначен атрибут name --
//const allForms = document.forms.name
//console.log(allForms)

//что бы получить элементы формы - все что в ней содержится , получаем все это таким способом :
const elemForms = document.forms.bur; //получам коллекцию форм под определенным названием
console.log(elemForms.elements) //получаем коллекцию элементов в данной форме 

//получаем конкретный элемент формы при обращению и поиск про тегу name в инпуте 
const konkretElem = elemForms.elements.who;
console.log(konkretElem);

//что бы получить родительский объект - всю форму то делаем следущее 
//вписывем например константу и обращаемся наприму. к форме 
console.log(konkretElem.form);  //спросить почему значение неопределенно ??????????????????????????????????????????????????????????????????????????????????



//alert('yo bro , whats up ahahaaha')


"use strict" //строка включает строгий режим работы кода js и ошибочные функции кода js будет исправлять , но этот метод нужен не всегда , и если это строчку прописать 
// то ее нужно прописывать обязательно в начале файла иначе строка может просто не сработать 













//создаем объект  
const objects = {
    age: 35, 
    wOrM: "men",
    work: 'stanford',
}

console.log(objects)
//теперь добавляем новое значение в объект а так же удалим возраст 
console.log(objects.wOrM) //так мы нашли значение свойства worm 
//теперь добавим новое свойство 
objects.dateWrite ='28 january'; //создаем новое свойство в объекте // точно таким же методом можем перезаписать значение 
delete objects.age //удаляем свойсво из объекта 


//еслим свойство состоит из 2 и более слов указываем его в ковычкай 'date Write': ...
//так же для свойств который состоят из 2 и более слов 
// что бы найти их значение просто указание через точку. не сработает  
// надо указать [] скобки и все будет ок)

// console.log(objects['like happy'])


console.log(objects)

//для имен свойсти нет ограничений они могут быть зарезервироваными словами for , let , return и тд 

//Также существует специальный оператор "in" для проверки существования свойства в объекте.
console.log('wOrM' in objects) //будет выводить true / false
////////////////////


//   МЕТОД ПЕРЕБОРА КЛЮЧЕЙ ОБЪЕКТА FOR ... IN 
const forIn = {
    name: "John",
    age: 30,
    isAdmin: true, 
}

for ( let key in forIn){
    console.log(key) //выводится ключи - названия свойств
    console.log(forIn[key]) // значения ключей 
}
//так же как и в этом примере в любом циле FOR мы можем ключи записывать - назначать в отдельную переменную 





//что бы нам дублировать объект и так скажем в новом объекте совершать новые действия не влияя на старые свойства используем метод OBJECT.ASSIGN

const NewForIn = Object.assign({},forIn) //происходитполное дублирование в новый объект всех свойств которые естьв forIn объекте 
console.log(NewForIn)

//так же мы можем обеденить сразу несколько объектов так же применяя object.assign
//Object.assign(forIn,objects) //данные объекты обединяются  в один массив и записываются в данном случае в forIn 


const massiv = [
    gadzisha = 555,
    function(){
        return gadzisha - 30 
    },
    objectse = '2 wow',

]

//вычиляем длинну массива 
console.log(massiv.length)


//выясняем последний элемент массива - его значение методом .at()
console.log(massiv.at(-1)); 

//чтобы создать новый массив применяем метод slice 
const NewMassiv =  massiv.slice(0,2)
console.log(NewMassiv)


//метод concat служит методом некого объединения массивов , так же с помощью него можно объединять массивы с объектами но только 
//при помощи специального свойства .isConcatSpreadable 
//иначе у нас в новом объединеном массиве за место значений объектов будут просто тип данных [object,object]

let gift = [
    [1,2,3],
    oloff = 10,
    ()=>10-5,
    
    
]

/*let ter={
    15:'second',
    [Symbol.isConcatSpreadable]:true,

}

console.log(gift.concat(ter)) почему ничего не меняется ??? */



//Перебор: forEach
//Метод arr.forEach позволяет запускать функцию для каждого элемента массива.
//например сейчас выведем каждый элемент массиыва 

const forInSec = [
    'John',
    'isAdmin', 
    'brokenS',
]

forInSec.forEach((Item,index,array) => {
    console.log(`в массиве данных ${array} содержится свойства ${Item} под ндексами ${index}`)
});


//что бы сравнивать строки лучше всего использовать метод .localeCompare(b -или же второе значение )
const masCon =[
    'Russia',
    'Usa',
    "Ukraine",
    'Britan',
    'Bangladesh',
    'Barbados' , 
    'Belarus' , 
    'Bhutan', 
    'Afghanistan' ,
    'Albania' ,
    'Algeria', 
    'Andorra' ,
    'Armenia',
     ,'Central African Republic' 
     ,'Chile' ,
     'China' ,
     'Burundi',
     'Cabo Verde' 
     ,'Cambodia' 
]

console.log(masCon.sort((a,b)=>a.localeCompare(b)))