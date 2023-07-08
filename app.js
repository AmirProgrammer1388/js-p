$(document).ready(function () {
    $('.btn-save').click(function () {
        let inp_work = $('.inp-work').val()
        var items = document.querySelector('#item')
        let item = document.createElement('li')
        item.innerHTML = `
        <li class="alert alert-light mt-2 w-auto row alert-dismissible justify-content-center">
              <span class="content"> ${inp_work} </span>
              <div class=""><button class="btn btn-close" data-bs-dismiss="alert"></button></div>
        </li>
        `;
        items.appendChild(item)


        var data = getLocalData("item")

        if (data) {
            updateLocalData("item", [...data, { caption: inp_work }])
        } else {
            updateLocalData("item", [{ caption: inp_work }])
        }
        function getLocalData(key) {
            return JSON.parse(localStorage.getItem(key))
        }
        function updateLocalData(key, data) {
            localStorage.setItem(key, JSON.stringify(data))
        }
        function renderHandler(todosArt) {

        }

        



    })
})
Window.onload = function () {
    Object.values(data).forEach(function (todo) {
        let item = document.createElement('li')
        item.innerHTML = `
        <li class="alert alert-light mt-2 w-auto row alert-dismissible justify-content-center">
      <span class="content"> ${todo.caption} </span>
      <div class=""><button class="btn btn-close" data-bs-dismiss="alert"></button></div>
        </li>
        `;
        items.appendChild(item)
    })
}