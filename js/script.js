// fuctions
const valid = (input, pattern) => {
    const valid = pattern.test(input.val())
    auditDisabled()
    valid ? input.removeClass("error") : input.removeClass("filled")
    valid ? input.addClass("filled") : input.addClass("error")
    valid ? input.next().slideUp(200) : input.next().slideDown(200)
    !valid ? input.next().next().slideUp(200) : input.next().next().slideDown(200)
    return valid ? true : false
}

const disabledSubmit = () => {
    initializeTheForm(valid)
}

const auditDisabled = () => {
    let disabledBtn = true
    inputs.forEach(el => {  
        const valid = el.pattern.test(el.element.val())
        if (!valid) disabledBtn = false
    })
    formBtnSubmit.attr("disabled", disabledBtn ? false : true)
}

const inputBlur = (input, pattern) => {
    input.on('blur', () => valid(input, pattern))
}

const initializeTheForm = (callback) => {
    inputs.forEach(el => {
        callback(el.element, el.pattern)
    })
}

const submit = () => {
    formBtnSubmit.on('click', function (event) {
        event.preventDefault()
        disabledSubmit()
        // 
        // 
        // submit 
    })
}

// create variables

const formName = $('#form-name')
const formPhone = $('#form-phone')
const formDesc = $('#form-desc')
const formCheck = $('#form-check')
const checkImg = $('#check-img')
const formBtnSubmit = $('#form-btn-submit')
const inputs = [
    {
        element: formName,
        pattern: new RegExp(/[a-zA-Z]{6}/)
    },
    {
        element: formPhone,
        pattern: new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)
    },
    {
        element: formDesc,
        pattern: new RegExp(/[0-9a-zA-Z]{6}/)
    }]

// call functions once

initializeTheForm(inputBlur)
submit()

formPhone.on("focus", (event) => {
    formPhone.attr('placeholder', !event.target.value ? "+380 (XX) XXX XX XX" : "Telefon*");
})

formCheck.on("change", (event) => {
    checkImg.attr("src", event.target.checked ? "/images/Checked=True, Disabled=True.svg" : "/images/Checked=False, Disabled=True.svg");
})