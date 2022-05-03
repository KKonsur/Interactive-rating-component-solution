const ratingScore = document.querySelectorAll('.ratingBox__ratingScore')
const submitScore = document.querySelector('.ratingBox__submitButton')
let resultValue
let isChecked = false

ratingScore.forEach(element => {
    element.addEventListener('click', e => {
        isChecked = true
        ratingScore.forEach(element => element.classList.remove('ratingBox__ratingScore--active'))
        element.classList.add('ratingBox__ratingScore--active')
        resultValue = e.target.textContent
    })
})

submitScore.addEventListener('click', () => {
    if (isChecked) {
        document.querySelector('.thankYouState').classList.add('thankYouState--active')
        document.querySelector('.ratingBox').remove()
        document.querySelector('.thankYouState__resultValue').textContent = resultValue
    } else {
        alert('Please rate us :)')
    }
})


