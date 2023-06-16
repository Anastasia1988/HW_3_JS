let name = prompt(" Как вас зовут?"," ");
function uName() {
    let mas = "Привет, " + name;
    alert(mas);
}
uName();


let age = prompt("Сколько вам лет?", "");
function uAge() {
    if (age < 7){
        alert(" Хорошие познания для такого возраста!");
    } else if (age >= 7 && age < 18){
        alert("Самое время уситься!");
    } else if (age >= 18 && age < 25){
        alert("То время, когда на сон хватает одного часа!");
    } else if( age >= 25 && age < 35){
        alert("Можно всё! Но своя квартира важнее!");
    } else {
        alert("Когда есть квартира и хочется всё! Но у тебя уже своя семья! А всё, а надо было раньше!)))");
    }
}
uAge();