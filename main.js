let country;
let hotels;
let hotelValue;
let roomPrice;
let inputDate;
let arrivedDate;
let clientHostel;

let authFlag = false;

let findHotels = {
    'egypt_one': 1,
    'egypt_two': 2,
    'thailand_one': 3,
    'thailand_two': 4,
    'turkey_one': 5,
    'turkey_two': 6,
}

const egypt_one = {
    "1": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Занято', 12],
    "2": [1, 2, 3, 4, 5, "Занято", 6, 7, 8, 'Занято', 10, 'Занято', 12],
    "3": ["Занято", 2, 3, 4, 5, 6, "Занято", 8, "Занято", "Занято"],
    '4': [1, "Занято", 3, "Занято", "Занято", "Занято", 7, 8, 9, 10, 11, 12],
    '5': [1, 2, 3, "Занято", 4, 5, 6, 7, 8, 9, 10, 11, 12],
    '6': [1, "Занято", 3, "Занято", 5, "Занято", 7, 8, 9, 10, 11, 12],
    '7': ["Занято", 2, 3, 4, "Занято", 6, 7, 8, "Занято", 10, 11, 12],
    '8': ["Занято", "Занято", "Занято", 4, 5, 6, 7, 8, 9, 10, 11, 12],
    '9': ["Занято", 2, 3, 4, "Занято", 6, "Занято", 8, 9, 10, 11, 12],
    '10': ["Занято", 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,],
    '11': ["Занято", "Занято", "Занято", 4, 5, 6, 7, "Занято", 8, 9, 10, 11, 12,],
    '12': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,],
};

const thailand_one = {
    "1": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Занято', 12, 13, 14, "Занято", 16, 17, 18],
    "2": [1, 2, 3, 4, 5, "Занято", 6, 7, 8, 'Занято', 10, 'Занято', 12, "Занято", 14, 15, 16, 17, 18],
    "3": ["Занято", 2, 3, 4, 5, 6, "Занято", 8, "Занято", "Занято", 11, 12, 13, 14, 15, 16, 17, 18],
    '4': [1, "Занято", 3, "Занято", "Занято", "Занято", 7, 8, 9, 10, 11, 12, 13, 14, "Занято", 16, 17, 18],
    '5': [1, 2, 3, "Занято", 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    '6': [1, "Занято", 3, "Занято", 5, "Занято", 7, 8, 9, 10, 11, 12, 13, "Занято", "Занято", 16, 17, 18],
    '7': ["Занято", 2, 3, 4, "Занято", 6, 7, 8, "Занято", 10, 11, 12, 13, 14, 15, 16, 17, 18],
    '8': ["Занято", "Занято", "Занято", 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, "Занято", "Занято", "Занято"],
    '9': ["Занято", 2, 3, 4, "Занято", 6, "Занято", 8, 9, 10, 11, 12, 13, 14, 15, "Занято", 17, 18],
    '10': ["Занято", 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "Занято", 14, 15, 16, 17, "Занято", 18],
    '11': ["Занято", "Занято", "Занято", 4, 5, 6, 7, "Занято", 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    '12': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    '13': ["Занято", "Занято", "Занято", 4, 5, 6, 7, "Занято", 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    '14': ["Занято", "Занято", "Занято", 4, 5, 6, 7, "Занято", 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    '15': [1, 2, 3, 4, 5, "Занято", 6, 7, 8, 'Занято', 10, 'Занято', 12, "Занято", 14, 15, 16, 17, 18],
};

const turkey_one = {
    "1": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Занято', 12],
    "2": [1, 2, 3, 4, 5, "Занято", 6, 7, 8, 'Занято', 10, 'Занято', 12],
    "3": ["Занято", 2, 3, 4, 5, 6, "Занято", 8, "Занято", "Занято"],
    '4': [1, "Занято", 3, "Занято", "Занято", "Занято", 7, 8, 9, 10, 11, 12],
    '5': [1, 2, 3, "Занято", 4, 5, 6, 7, 8, 9, 10, 11, 12],
}

const egypt_two = {
    "1": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Занято', 12, 13, 14, "Занято", 16, 17],
    "2": [1, 2, 3, 4, 5, "Занято", 6, 7, 8, 'Занято', 10, 'Занято', 12, "Занято", 14, 15, 16, 17],
    "3": ["Занято", 2, 3, 4, 5, 6, "Занято", 8, "Занято", "Занято", 11, 12, 13, 14, 15, 16, 17],
    '4': [1, "Занято", 3, "Занято", "Занято", "Занято", 7, 8, 9, 10, 11, 12, 13, 14, "Занято", 16, 17],
    '5': [1, 2, 3, "Занято", 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    '6': [1, "Занято", 3, "Занято", 5, "Занято", 7, 8, 9, 10, 11, 12, 13, "Занято", "Занято", 16, 17],
};

const thailand_two = {
    "1": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Занято', 12, 13, 14, "Занято", 16, 17, 18, 19, 20],
    "2": [1, 2, 3, 4, 5, "Занято", 6, 7, 8, 'Занято', 10, 'Занято', 12, "Занято", 14, 15, 16, 17, 18, "Занято", 20],
    "3": ["Занято", 2, 3, 4, 5, 6, "Занято", 8, "Занято", "Занято", 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    '4': [1, "Занято", 3, "Занято", "Занято", "Занято", 7, 8, 9, 10, 11, 12, 13, 14, "Занято", 16, 17, 18, 19, 20],
    '5': [1, 2, 3, "Занято", 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    '6': [1, "Занято", 3, "Занято", 5, "Занято", 7, 8, 9, 10, 11, 12, 13, "Занято", "Занято", 16, 17, 18, "Занято", 20],
    '7': ["Занято", 2, 3, 4, "Занято", 6, 7, 8, "Занято", 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    '8': ["Занято", "Занято", "Занято", 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, "Занято", "Занято", "Занято", 19, 20],
    '9': ["Занято", 2, 3, 4, "Занято", 6, "Занято", 8, 9, 10, 11, 12, 13, 14, 15, "Занято", 17, 18, 19, 20],
    '10': ["Занято", 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "Занято", 14, 15, 16, 17, "Занято", 18, 19, 20],
    '11': ["Занято", "Занято", "Занято", 4, 5, 6, 7, "Занято", 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, "Занято"],
    '12': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
};

const turkey_two = {
    "1": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,],
    "2": [1, 2, 3, 4, 5, "Занято", 6, 7, 8, 'Занято', 10],
    "3": ["Занято", 2, 3, 4, 5, 6, "Занято", 8, "Занято", "Занято"],
    '4': [1, "Занято", 3, "Занято", "Занято", "Занято", 7, 8, 9, 10],
    '5': [1, 2, 3, "Занято", 4, 5, 6, 7, 8, 9, 10],
    '6': [1, "Занято", 3, "Занято", 5, "Занято", 7, 8, 9, 10,],
    '7': ["Занято", 2, 3, 4, "Занято", 6, 7, 8, "Занято", 10,],
    '8': ["Занято", "Занято", "Занято", 4, 5, 6, 7, 8, 9, 10],
    '9': ["Занято", 2, 3, 4, "Занято", 6, "Занято", 8, 9, 10],
    '10': ["Занято", 2, 3, 4, 5, 6, 7, 8, 9, 10],
};


function openCity(evt, cityName) {
    console.log(evt);
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";

}

document.getElementById('save_data').onclick = function () {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const patronymic = document.getElementById('patronymic').value;
    const passport = document.getElementById('passport').value;
    const ufms = document.getElementById('ufms').value;
    const client_registration = document.getElementById('client_registration').value;
    const phone_number = document.getElementById('phone_number').value;

    if (name === '' || surname === '' || patronymic === '' || passport === '' || ufms === '' || client_registration === '' || phone_number === '') {
        alert('Не все поля заполнены, пожалуйста проверьте корректность ввода данных')
    } else {
        document.getElementById('choose_country-flag').style.display = 'block';
        alert('Данные успешно сохранены, переходите к выбору страны')
    }
}

document.getElementById('auth_exit').onclick = function () {
    alert('Вход из системы выполнен')
    document.getElementById('administrator').innerHTML = ''
    var element = document.getElementById('auth_exit');
    element.style.display = "none";
    document.getElementById('client_form-flag').style.display = 'none';
    document.getElementById('choose_country-flag').style.display = 'none';
    document.getElementById('choose_hostel-flag').style.display = 'none';
    document.getElementById('choose_room-flag').style.display = 'none';

    document.getElementById('Client_form').style.display = 'none';
    document.getElementById('Choose_country').style.display = 'none';
    document.getElementById('Choose_hostel').style.display = 'none';
    document.getElementById('Choose_room').style.display = 'none';
    window.location.reload();
}

document.getElementById('auth_enter').onclick = function () {
    const password = document.getElementById('password').value;

    if (password === '') {
        alert('Введите пароль');
    } else if (password !== 'usatu') {
        alert('Введен неверный пароль');
    } else {
        authFlag = true;
        const administrator = document.getElementById('select_administrator').value
        document.getElementById('administrator').innerHTML = `${administrator}`

        var element = document.getElementById('auth_exit');
        element.style.display = "block";

        const authForm = document.getElementById('id01');
        authForm.style.display = 'none'

        document.getElementById('client_form-flag').style.display = 'block';
        alert("Вход в систему выполнен");
    }
}

document.getElementById('first_checkbox').onclick = function () {
    country = 1;
    showHotels();
    document.getElementById('choose_hostel-flag').style.display = 'block';
    document.getElementById('second_checkbox').checked = false;
    document.getElementById('third_checkbox').checked = false;
    document.getElementById('hotel_checkbox').checked = false;
    document.getElementById('hotel_checkbox_two').checked = false;
}

document.getElementById('second_checkbox').onclick = function () {
    country = 2;
    document.getElementById('choose_hostel-flag').style.display = 'block';
    showHotels()
    document.getElementById('first_checkbox').checked = false;
    document.getElementById('third_checkbox').checked = false;
    document.getElementById('hotel_checkbox').checked = false;
    document.getElementById('hotel_checkbox_two').checked = false;
}

document.getElementById('third_checkbox').onclick = function () {
    country = 3;
    document.getElementById('choose_hostel-flag').style.display = 'block';
    showHotels();
    document.getElementById('first_checkbox').checked = false;
    document.getElementById('second_checkbox').checked = false;
    document.getElementById('hotel_checkbox').checked = false;
    document.getElementById('hotel_checkbox_two').checked = false;
}

const showHotels = () => {

    if (country === 1) {
        document.getElementById('hostel_name').innerHTML = 'Albatros Citadel Resort';
        document.getElementById('hostel_price').innerHTML = '3000руб./сутки';
        document.getElementById('hostel_description').innerHTML = "Альбатрос Цитадель Резорт роскошный архитектурный ансамбль, построенный из природных коралловых камней, выточенных вручную в близлежащих скалах, несомненно является подлинным достижением архитектуры."
        document.getElementById('sub_name').innerHTML = 'Albatros Citadel Resort';
        document.getElementById('hostel_photo').style.backgroundImage = "url('https://media-cdn.tripadvisor.com/media/photo-s/14/6e/be/af/main-facade.jpg')"
        document.getElementById('hotel_checkbox').value = 'egypt_one'

        document.getElementById('hostel_name_two').innerHTML = 'Concorde El Salam Hotel';
        document.getElementById('hostel_price_two').innerHTML = '2500руб./сутки';
        document.getElementById('hostel_description_two').innerHTML = " Отель находится в курортном центре Шарм Эль Шейх, в 4 км от аэропорта и в 20 км от центра города, в районе White Knight Beach. Отель построен в европейском стиле на берегу моря."
        document.getElementById('sub_name_two').innerHTML = 'Concorde El Salam Hotel'
        document.getElementById('hostel_photo_two').style.backgroundImage = "url('https://tophotels.ru/icache/hotel_photos/12/7/5470/2376901_1140x820.jpg')"
        document.getElementById('hotel_checkbox_two').value = 'egypt_two'


    }

    if (country === 2) {
        document.getElementById('hostel_name').innerHTML = 'EcoLoft Hotel';
        document.getElementById('hostel_price').innerHTML = '2200руб./сутки';
        document.getElementById('hostel_description').innerHTML = "EcoLoft Hotel — это отличный выбор для тех, кто приехал в Пхукет. Это хорошее сочетание цены и качества, комфорта и удобства, услуг, призванных сделать пребывание здесь очень приятным."
        document.getElementById('sub_name').innerHTML = 'EcoLoft Hotel';
        document.getElementById('hostel_photo').style.backgroundImage = "url('https://media-cdn.tripadvisor.com/media/photo-m/1280/14/80/56/2d/city-view-from-ecoloft.jpg')"
        document.getElementById('hotel_checkbox').value = 'thailand_one'

        document.getElementById('hostel_name_two').innerHTML = 'Royal Phuket City Hotel';
        document.getElementById('hostel_price_two').innerHTML = '2700руб./сутки';
        document.getElementById('hostel_description_two').innerHTML = "Роял Пхукет Сити Отель — прекрасный выбор для тех, кто хочет восстановить силы. Это место хорошо известно своей близостью к отличным ресторанам и достопримечательностям."
        document.getElementById('sub_name_two').innerHTML = 'Royal Phuket City Hotel'
        document.getElementById('hostel_photo_two').style.backgroundImage = "url('https://cf.bstatic.com/images/hotel/max500/276/276273318.jpg')"
        document.getElementById('hotel_checkbox_two').value = 'thailand_two'

    }

    if (country === 3) {
        document.getElementById('hostel_name').innerHTML = 'Side Resort Hotel';
        document.getElementById('hostel_price').innerHTML = '3000руб./сутки';
        document.getElementById('hostel_description').innerHTML = " Сиде Резорт Отель — прекрасный выбор для тех, кто хочет восстановить силы. Это место хорошо известно своей семейной атмосферой и близостью к отличным ресторанам и достопримечательностям."
        document.getElementById('sub_name').innerHTML = 'Side Resort Hotel';
        document.getElementById('hostel_photo').style.backgroundImage = "url('https://s01.cdn-pegast.net/get/3a/a0/d3/b3a906b9ec908252969da935e396305447186b742ed0f167440c5d8fce/5e5f5854ca1b7.jpg')"
        document.getElementById('hotel_checkbox').value = 'turkey_one'

        document.getElementById('hostel_name_two').innerHTML = 'Asteria Kremlin Palace';
        document.getElementById('hostel_price_two').innerHTML = '5000руб./сутки';
        document.getElementById('hostel_description_two').innerHTML = "Добро пожаловать в Уорлд Оф Вандерс Кремлин Палас, прекрасный вариант для размещения подобных вам путешественников. У гостей есть доступ к обслуживанию номеров и услугам консьержа во время пребывания в Kremlin Hotel Antalya."
        document.getElementById('sub_name_two').innerHTML = 'Asteria Kremlin Palace'
        document.getElementById('hostel_photo_two').style.backgroundImage = "url('https://cf.bstatic.com/images/hotel/max1024x768/155/15595910.jpg')"
        document.getElementById('hotel_checkbox_two').value = 'turkey_two'

    }
}

document.getElementById('hotel_checkbox').onclick = function () {
    document.getElementById('choose_room-flag').style.display = 'block';
    roomPrice = 0;
    if (document.getElementById('hotel_checkbox').value === 'egypt_one') {
        generateEgyptOneRooms(egypt_one);
        hotels = egypt_one;
        hotelValue = 'egypt_one'
        clientHostel = 'Albatros Citadel Resort';
    }

    if (document.getElementById('hotel_checkbox').value === 'thailand_one') {
        generateEgyptOneRooms(thailand_one);
        hotels = thailand_one;
        hotelValue = 'thailand_one'
        clientHostel = 'EcoLoft Hotel'
    }

    if (document.getElementById('hotel_checkbox').value === 'turkey_one') {
        generateEgyptOneRooms(turkey_one);
        hotels = turkey_one;
        hotelValue = 'turkey_one'
        clientHostel = 'Side Resort Hotel'
    }

    document.getElementById('hotel_checkbox_two').checked = false;
}

document.getElementById('hotel_checkbox_two').onclick = function () {
    document.getElementById('choose_room-flag').style.display = 'block';
    roomPrice = 0;
    if (document.getElementById('hotel_checkbox_two').value === 'egypt_two') {
        generateEgyptOneRooms(egypt_two);
        hotels = egypt_two;
        hotelValue = 'egypt_two';
        clientHostel = 'Concorde El Salam Hotel';
    }

    if (document.getElementById('hotel_checkbox_two').value === 'thailand_two') {
        generateEgyptOneRooms(thailand_two);
        hotels = thailand_two;
        hotelValue = 'thailand_two'
        clientHostel = 'Royal Phuket City Hotel'
    }

    if (document.getElementById('hotel_checkbox_two').value === 'turkey_two') {
        generateEgyptOneRooms(turkey_two);
        hotels = turkey_two;
        hotelValue = 'turkey_two'
        clientHostel = 'Asteria Kremlin Palace'
    }

    document.getElementById('hotel_checkbox').checked = false;
}

const generateEgyptOneRooms = (country) => {
    var select = document.getElementById("rooms");

    var i, L = select.options.length - 1;
    for (i = L; i >= 0; i--) {
        select.remove(i);
    }

    for (index in country) {
        select.options[select.options.length] = new Option(index);
    }

    var selectValue = document.getElementById("rooms").value;
    var selectRoom = document.getElementById("rooms_number");

    for (index in country[selectValue]) {
        selectRoom.options[selectRoom.options.length] = new Option(country[selectValue][index]);
    }
}

document.getElementById('rooms').onclick = function () {
    var selectValue = document.getElementById("rooms").value;
    var select = document.getElementById("rooms_number");

    var i, L = select.options.length - 1;
    for (i = L; i >= 0; i--) {
        select.remove(i);
    }

    for (index in hotels[selectValue]) {
        select.options[select.options.length] = new Option(hotels[selectValue][index]);
    }
}

document.getElementById('rooms_number').onclick = function () {
    var roomValue = document.getElementById('rooms_number').value;
    console.log(roomValue);
    if (hotels === egypt_one) {
        if (roomValue === 'Занято') {
            document.getElementById('room_price').innerHTML = `Данный номер занят`;
        } else {
            if (roomValue < 6) {
                document.getElementById('room_price').innerHTML = `Стоимость данного номера за сутки: ${3000}руб.`;
                roomPrice = 3000;
            } else {
                document.getElementById('room_price').innerHTML = `Стоимость данного номера за сутки: ${3800}руб.`;
                roomPrice = 3800;
            }
        }
    }

    if (hotels === egypt_two) {
        if (roomValue === 'Занято') {
            document.getElementById('room_price').innerHTML = `Данный номер занят`;
        } else {
            if (roomValue < 8) {
                document.getElementById('room_price').innerHTML = `Стоимость данного номера за сутки: ${2500}руб.`;
                roomPrice = 2500
            } else {
                document.getElementById('room_price').innerHTML = `Стоимость данного номера за сутки: ${3200}руб.`;
                roomPrice = 3200
            }
        }
    }

    if (hotels === thailand_one) {
        if (roomValue === 'Занято') {
            document.getElementById('room_price').innerHTML = `Данный номер занят`;
        } else {
            if (roomValue < 11) {
                document.getElementById('room_price').innerHTML = `Стоимость данного номера за сутки: ${2200}руб.`;
                roomPrice = 2200
            } else {
                document.getElementById('room_price').innerHTML = `Стоимость данного номера за сутки: ${3500}руб.`;
                roomPrice = 3500
            }
        }
    }

    if (hotels === thailand_two) {
        if (roomValue === 'Занято') {
            document.getElementById('room_price').innerHTML = `Данный номер занят`;
        } else {
            if (roomValue < 14) {
                document.getElementById('room_price').innerHTML = `Стоимость данного номера за сутки: ${2700}руб.`;
                roomPrice = 2700
            } else {
                document.getElementById('room_price').innerHTML = `Стоимость данного номера за сутки: ${4200}руб.`;
                roomPrice = 4200
            }
        }
    }

    if (hotels === thailand_two) {
        if (roomValue === 'Занято') {
            document.getElementById('room_price').innerHTML = `Данный номер занят`;
        } else {
            if (roomValue < 14) {
                document.getElementById('room_price').innerHTML = `Стоимость данного номера за сутки: ${2700}руб.`;
                roomPrice = 2700
            } else {
                document.getElementById('room_price').innerHTML = `Стоимость данного номера за сутки: ${4200}руб.`;
                roomPrice = 4200
            }
        }
    }

    if (hotels === turkey_one) {
        if (roomValue === 'Занято') {
            document.getElementById('room_price').innerHTML = `Данный номер занят`;
        } else {
            if (roomValue < 5) {
                document.getElementById('room_price').innerHTML = `Стоимость данного номера за сутки: ${3000}руб.`;
                roomPrice = 3000
            } else {
                document.getElementById('room_price').innerHTML = `Стоимость данного номера за сутки: ${4800}руб.`;
                roomPrice = 4800
            }
        }
    }

    if (hotels === turkey_two) {
        if (roomValue === 'Занято') {
            document.getElementById('room_price').innerHTML = `Данный номер занят`;
        } else {
            if (roomValue < 6) {
                document.getElementById('room_price').innerHTML = `Стоимость данного номера за сутки: ${5000}руб.`;
                roomPrice = 5000
            } else {
                document.getElementById('room_price').innerHTML = `Стоимость данного номера за сутки: ${7500}руб.`;
                roomPrice = 7500
            }
        }
    }
}

document.getElementById("date_start").addEventListener("change", function () {
    inputDate = this.value;
});


document.getElementById('save_button').onclick = function () {
    const clientName = document.getElementById('name').value;
    const clientSurname = document.getElementById('surname').value
    const clientPatronymic = document.getElementById('patronymic').value
    let tourDay;

    let newDate = new Date(inputDate);


    const selectRoom = document.getElementById("rooms");
    const selectRoomNumber = document.getElementById("rooms_number")
    const dateValue = document.getElementById('date_start').valueAsDate;

    const dateDay = dateValue.getDate();
    const dateMonth = dateValue.getMonth() + 1;
    const dateYear = dateValue.getYear() == "121" ? 1 : 2;

    let countryValue = country;
    let hotelValues = findHotels[hotelValue];
    let resultRoomValue = selectRoom.value;
    let resultRoomNumber = selectRoomNumber.value;
    const selectPeriod = document.getElementById('select_period').value;
    if (selectPeriod == 1) {
        roomPrice = roomPrice * 7
        tourDay = 7
        newDate.setDate(newDate.getDate() + parseInt(7));
    } else if (selectPeriod == 2) {
        roomPrice = roomPrice * 14
        tourDay = 14
        newDate.setDate(newDate.getDate() + parseInt(14));
    } else if (selectPeriod == 3) {
        roomPrice = roomPrice * 28;
        tourDay = 28
        newDate.setDate(newDate.getDate() + parseInt(28));
    }

    var dd = String(newDate.getDate()).padStart(2, '0');
    var mm = String(newDate.getMonth() + 1).padStart(2, '0');
    var yyyy = newDate.getFullYear();

    arrivedDate = yyyy + '-' + mm + '-' + dd;

    document.getElementById('classificator').innerHTML = `Номер брони: ${countryValue}.${hotelValues}.${resultRoomValue}.${resultRoomNumber}.${dateDay}.${dateMonth}.${dateYear}.${selectPeriod}`
    document.getElementById('client_title').innerHTML = 'Информация о клиенте'
    document.getElementById('client_name').innerHTML = `${clientSurname} ${clientName} ${clientPatronymic}`
    document.getElementById('tour_day').innerHTML = `${tourDay} дней`
    document.getElementById('total_price').innerHTML = `${roomPrice}`
    document.getElementById('client_start_date').innerHTML = `Дата начала поездки: ${inputDate}`
    document.getElementById('client_date_arrived').innerHTML = `Дата окончания поездки: ${arrivedDate}`
    document.getElementById('client_hostel').innerHTML = `Отель: ${clientHostel}`
    document.getElementById('client_date_hostel').innerHTML = ``
    document.getElementById('client_room').innerHTML = `${resultRoomValue} этаж, ${resultRoomNumber} номер`

    const element = document.getElementById("invoice");
    if (resultRoomNumber === 'Занято') {
        alert('К сожалению, данный номер занят')
    } else {
        html2pdf()
            .from(element)
            .save();
    }

}

