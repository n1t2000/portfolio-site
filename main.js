// Получаем ссылки на элементы HTML
const chatBox = document.getElementById("chat-box");
const inputBox = document.getElementById("input-box");

// Массив с книгами и их изображениями
const books = [
  {
    title: "Ер төстік",
    imageUrl: "/photos/book1.jpeg",
  },
  {
    title: "Абай жолы 2 ТОМ",
    imageUrl: "/photos/book2.jpeg",
  },
  {
    title: "Менің атым Қожа",
    imageUrl: "/photos/book3.jpeg",
  },
  {
    title: "Ұшқан ұя",
    imageUrl: "/photos/book4.jpeg",
  },
  {
    title: "Көксерек",
    imageUrl: "/photos/book5.jpeg",
  },
  {
    title: "Шалқан",
    imageUrl: "/photos/book6.jpeg",
  },
  {
    title: "Құлагер",
    imageUrl: "/photos/book7.jpeg",
  },
  {
    title: "Махаббат қызық мол жжылдар",
    imageUrl: "/photos/book8.jpeg",
  },
  {
    title: "Гауһартас",
    imageUrl: "/photos/book9.jpeg",
  },
];

// Флаг для отслеживания выбора книги
let bookSelectionState = false;

// Обрабатываем ввод текста
inputBox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const userMessage = inputBox.value.trim();
    if (userMessage) {
      displayMessage(userMessage, "user");
      inputBox.value = "";
      handleBotResponse(userMessage);
    }
  }
});

// Отображаем сообщение в чате
function displayMessage(message, sender) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", sender);
  messageElement.innerText = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight; // Автопрокрутка до конца
}

// Отображаем изображение в чате
function displayImage(imageSrc, sender) {
  if (imageSrc) {
    const imageElement = document.createElement("img");
    imageElement.src = imageSrc; // Указываем URL изображения

    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.appendChild(imageElement);

    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Автопрокрутка до конца
  } else {
    displayMessage("Изображение не найдено.", "bot");
  }
}

// Обрабатываем ответы бота
function handleBotResponse(userMessage) {
  if (!bookSelectionState) {
    // Если введено "hello", выводим список книг
    if (userMessage.toLowerCase() === "сәлем") {
      displayMessage(
        "Сәлем! Менің сенің көмекшің кітап-бот боламын. Мендегі 9 кітап:",
        "bot"
      );
      listBooks();
      bookSelectionState = true; // Ожидаем выбора книги
    } else {
      displayMessage("Введите 'сәлем', чтобы начать.", "bot");
    }
  } else {
    // Обработка выбора книги
    const selectedBook = parseInt(userMessage);
    if (selectedBook > 0 && selectedBook <= books.length) {
      const book = books[selectedBook - 1]; // Получаем объект книги
      if (book && book.imageUrl) {
        displayMessage(`Вы выбрали ${book.title}`, "bot");
        displayImage(book.imageUrl, "bot"); // Показываем изображение книги
        displayMessage(
          "Егер басқа кітапты таңдағың келсе қайтадан сәлем сөзін жаз"
        );
      } else {
        displayMessage("Ошибка: изображение не найдено для этой книги.", "bot");
      }
      bookSelectionState = false; // Сбрасываем состояние
    } else {
      displayMessage("Некорректный выбор. Выберите номер книги.", "bot");
    }
  }
}

// Выводим список книг
function listBooks() {
  books.forEach((book, index) => {
    displayMessage(`${index + 1}. ${book.title}`, "bot");
  });
}

const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementsByClassName("close")[0];

// Открываем окно при нажатии на кнопку
openModalBtn.onclick = function () {
  modal.style.display = "block";
};

// Закрываем окно при нажатии на крестик
closeModalBtn.onclick = function () {
  modal.style.display = "none";
};

// Закрываем окно при клике вне окна
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    } else {
      change.target.classList.remove("element-show");
    }
  });
}

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let contentb1 = document.querySelectorAll(".content-b1");
let contenthead = document.querySelectorAll(".content-head");
let maincont = document.querySelectorAll(".main-text-cont");
let mainph = document.querySelectorAll(".main-ph-cont");

let cardb121 = document.querySelectorAll(".card-b12-1");
let cardb122 = document.querySelectorAll(".card-b12-2");

for (let elm of contentb1) {
  observer.observe(elm);
}
for (let elm of contenthead) {
  observer.observe(elm);
}

for (let elm of maincont) {
  observer.observe(elm);
}
for (let elm of mainph) {
  observer.observe(elm);
}
for (let elm of cardb121) {
  observer.observe(elm);
}
for (let elm of cardb122) {
  observer.observe(elm);
}

const menu = document.querySelector("#menu");
const btn = document.querySelector("#btn_burger");
const btnImg = document.querySelector("#burgerImg");

menu.addEventListener("click", function () {
  console.log("asdfa");

  if (menu.classList.toggle("open")) {
    btnImg.src = "photos/close.png";
  } else {
    btnImg.src = "photos/open.png";
  }
});
