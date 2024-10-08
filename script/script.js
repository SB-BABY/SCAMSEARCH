const cardWrapper = document.querySelector(".content__films-list")
const searchInput = document.getElementById("search-input")
const searchBtn = document.getElementById("search-btn")

const films = [

    {
        id: 0,
        title: 'Хакер',
        subtitle: "Арчи линукс",
        category: 'Linux Ban',
        rating: 8.9,
        link: "/item.html",
        img: "./image/CONTENT__FILM/1.jpg"
    },

    {
        id: 1,
        title: 'Хакер 111',
        subtitle: "Арчи линукс",
        category: 'Linux Ban',
        rating: 8.9,
        link: "/item.html",
        img: "./image/CONTENT__FILM/2.jpg"
    },

    {
        id: 2,
        title: 'Хакер 222 ',
        subtitle: "Арчи линукс",
        category: 'Linux Ban',
        rating: 8.9,
        link: "/item.html",
        img: "./image/CONTENT__FILM/3.jpg"
    },

    {
        id: 3,
        title: 'Хакер333',
        subtitle: "Арчи линукс",
        category: 'Linux Ban',
        rating: 8.9,
        link: "/item.html",
        img: "./image/CONTENT__FILM/4.jpg"
    },

]

// функция для отрисовки нашего массива в carWrapper
const render = (array) => {
    //затираем все что есть у нас 
    cardWrapper.innerHTML = ''

    array.forEach((item) => {
        cardWrapper.insertAdjacentHTML('beforeend', `
                <a href="${item.link}" class="content__films-item">
                    <img src="${item.img}" alt="обложка" class="content__films-img" width="100%">

                    <div class="content__films-item-title">
                        <h5>${item.title}</h5>
                        <span>${item.subtitle}</span>
                    </div>

                    <div class="content__films-category">
                        <p>${item.category}</p>
                        <p>Ban</p>
                    </div>

                    <p class="content__films-descr">
                        Дистрибутив Arch Linux любят за его настраиваемость: в процессе установки ты можешь выбрать все компоненты на свой вкус и получить ровно такую систему, какая тебе нужна.
                    </p>

                    <p class="content__films-rating">
                    ${item.rating}
                    </p>
                </a>
            `)
    })

}

searchBtn.addEventListener('click', ()=> {
    render(films.filter((item)=> item.title.includes(searchInput.value)))
        //includfe -> проверяет нахождение в элементе title того или иного элемента
    
})

render(films)