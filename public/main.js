var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var thumbDown = document.getElementsByClassName("fa-thumbs-down");
var trash = document.getElementsByClassName("fa-trash-o");

const editBtn = document.getElementsByClassName('editBtn');
const editSubmitBtns = document.querySelectorAll('.editSubmitBtn')


// console.log(editSubmitBtns)

Array.from(editBtn).forEach(element => {
  element.addEventListener('click', () => {
    const budget = element.closest('.message')
    const editForm = budget.querySelector('.editForm')
    editForm.style.display = editForm.style.display === 'none' ? 'block' : 'none'
  })
})

Array.from(editSubmitBtns).forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault()
    const budgets = button.closest('.message')

    console.log(budgets)
    const originalName = budgets.querySelector('.originalCategory').innerText
    const originalAmount = budgets.querySelector('.originalAmount').innerText

    const newName = budgets.querySelector('.newName').value
    const newAmount = budgets.querySelector('.newAmount').value

    // console.log(originalName, originalAmount)
    console.dir(newAmount)

    fetch('newChange', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'originalName': originalName,
        'newTitle': newName,
        'originalAmount': originalAmount,
        'newAmount': newAmount
      })
    }).then(response => {
      if (response.ok) return response.json()
    }).then(data => {
      console.log(data)
      window.location.reload(true)
    }).catch(error => {console.error(error)})

  })
})

Array.from(thumbUp).forEach(function (element) {
  element.addEventListener('click', function () {
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const msg = this.parentNode.parentNode.childNodes[3].innerText
    const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
    fetch('messages', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'name': name,
        'msg': msg,
        'amount': amount,
        'thumbUp': thumbUp
      })
    })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        window.location.reload(true)
      })
  });
});

Array.from(thumbDown).forEach(function (element) {
  element.addEventListener('click', function () {
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const msg = this.parentNode.parentNode.childNodes[3].innerText
    const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
    console.log('hey')
    fetch('messages', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'name': name,
        'msg': msg,
        'thumbDown': thumbDown
      })
    })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        window.location.reload(true)
      })
  });
});

Array.from(trash).forEach(function (element) {
  element.addEventListener('click', function () {

    const name = this.parentNode.parentNode.childNodes[1].innerText
    const amount = this.parentNode.parentNode.childNodes[3].innerText
    console.log('hi')
    fetch('messages', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': name,
        'amount': amount
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});
