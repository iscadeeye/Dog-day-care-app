
let dataModel = [
  { name: 'Teddy', breed: 'Akita', age: 5, likesTreats: true },
  { name: 'Milo', breed: 'Auggies', age: 3, likesTreats: true },
  { name: 'Max', breed: 'akbash', age: 4, likesTreats: false }
]

function onSubmitDog (event) {
  event.preventDefault()

  let nameInput = document.querySelector('#name_input')
  let breedInput = document.querySelector('#breed_input')
  let ageInput = document.querySelector('#age_input')
  let treatsCheckbox = document.querySelector('#treats_input')

  let name = nameInput.value
  let breed = breedInput.value
  let age = ageInput.value
  let likesTreats = treatsCheckbox.checked

  if (name === '' || breed === '' || age === '') {
    // If any of these text boxes are empty...
    alert('Please fill out all of the fields!')
    return // Exit the function early if the above condition is true.
  }

  let dog = {
    name,
    breed,
    age,
    likesTreats
  }
  dataModel.push(dog)

  renderDogList()

  

  // The following lines reset the form, so that it is ready for information
  // on a new dog:
  nameInput.value = ''
  breedInput.value = ''
  ageInput.value = ''
  treatsCheckbox.checked = false
}

// when this function is run, it is meant to keep the dog list which the user
// sees on the page in sync with the data model containing all
// dog objects.

function renderDogList () {
  let list = document.querySelector('#dog_list')
  list.innerHTML = '' // First, CLEAR the whole list.

  if (dataModel.length === 0) {
    let li = document.createElement('li')
    li.innerHTML = 'No Dogs!'
    list.append(li)

    return //exit the function early this the above is true
  }
  for (let index = 0; index < dataModel.length; index += 1) {
    let dog = dataModel[index]
    let li = document.createElement('li')
    let sendHomeButton = document.createElement('button')
    sendHomeButton.innerText = 'Send home'
    sendHomeButton.classList = 'remove-button'

    sendHomeButton.onclick = function () {
      removeDog(dog)
    }

    // If there are no dogs, then render "No Dogs!" Otherwise, render all
    // of the dogs in your data model.

    if (dataModel[index].likesTreats === true) {
      li.innerHTML = `${dataModel[index].name}! A ${dataModel[index].age} year old ${dataModel[index].breed}, which likes treats  `
      li.appendChild(sendHomeButton), list.append(li)
    } else {
      li.innerHTML = `${dataModel[index].name}! A ${dataModel[index].age} year old ${dataModel[index].breed}, which may not like treates`
      li.appendChild(sendHomeButton), list.append(li)
    }
  }
}

//send home function
function removeDog (dog) {
  let dogIndex = dataModel.indexOf(dog)
  dataModel.splice(dogIndex, 1)
  renderDogList()
}

// Run the onSubmitDog function when the button is clicked.
let button = document.querySelector('#submit_button')
button.addEventListener('click', onSubmitDog)

// This function call will take place when the page loads, in order
// to render the dog list for the very first time.
renderDogList()

