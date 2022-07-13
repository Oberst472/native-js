import './style.css'
import {formTemplate, headFormTemplate, tableItemTemplate} from './templates'
import users from './users'

class Table {
    constructor() {
        this.head = document.querySelector('.table__head')
        this.content = document.querySelector('.table__content')
        this.item = tableItemTemplate
        this.headForm = headFormTemplate
        this.form = formTemplate
        this._items = users
        this.newArr = []
    }

    set items(items) {
        this._items = items
        this.createTableItem()
        this._items.length ?
            this.content.classList.remove('hide') :
            this.content.classList.add('hide')
    }

    get items() {
        return this._items
    }

    clearItems = () => {
        this.content.innerHTML = ''
    }

    createTextNode = (index, item) => {
        const el = document.createElement('div')
        el.innerHTML = this.item(index, {...item})
        this.addTextNodeListeners(el, index)
        this.content.appendChild(el)
    }

    createFormNode = (index, item) => {
        const el = document.createElement('div')
        el.innerHTML = this.form(index, {...item})
        this.addFormNodeListeners(el, index, item)
        this.content.appendChild(el)
    }

    createTableItem = () => {
        this.clearItems()
        this.newArr = this.items
        this._items.forEach((item, index) => item.isForm ?
            this.createFormNode(index, item) :
            this.createTextNode(index, item))
    }

    addFormNodeListeners = (el, index, item) => {
        const form = el.querySelector('[data-name=js-form]')
        const inpName = el.querySelector('[data-name=js-inp-n]')
        const inpPhone = el.querySelector('[data-name=js-inp-p]')
        const saveBtn = el.querySelector('[data-name=js-btn-s]')
        const backBtn = el.querySelector('[data-name=js-btn-b]')

        form.addEventListener('submit', e => this.saveForm({e, index, saveBtn, inpName, inpPhone}))
        backBtn.addEventListener('click', () => this.hideForm(index))

        inpName.addEventListener('input', () => this.changeErrorClass(inpName, false))
        inpPhone.addEventListener('input', () => this.changeErrorClass(inpPhone, false))

        inpName.value = item.name
        inpPhone.value = item.phone
    }

    addHeadFormNodeListeners = (el) => {
        const form = el.querySelector('[data-name=js-head-form]')
        const inpName = el.querySelector('[data-name=js-head-inp-n]')
        const inpPhone = el.querySelector('[data-name=js-head-inp-p]')
        const sendBtn = el.querySelector('[data-name=js-head-btn]')

        form.addEventListener('submit', e => this.addItem(e, sendBtn, inpName, inpPhone))

        inpName.addEventListener('input', () => this.changeErrorClass(inpName, false))
        inpPhone.addEventListener('input', () => this.changeErrorClass(inpPhone, false))


    }

    addTextNodeListeners = (el, index) => {
        const showFormBtn = el.querySelector('[data-name=js-btn-ch]')
        const deleteItemBtn = el.querySelector('[data-name=js-btn-del]')

        showFormBtn.addEventListener('click', () => this.showForm(index))
        deleteItemBtn.addEventListener('click', () => this.deleteItem(index))
    }

    addItem = async (e, saveBtn, inpName, inpPhone) => {
        e.preventDefault()
        const isValid = this.checkForm(inpName, inpPhone)
        if (!isValid) return

        this.changeLoadingClass(saveBtn, true)
        await new Promise(res => setTimeout(res, 1000))

        this.newArr.push({name: inpName.value, phone: inpPhone.value, isForm: false})
        this.items = this.newArr
        inpName.value = ''
        inpPhone.value = ''
        this.changeLoadingClass(saveBtn, false)
    }

    deleteItem = (index) => {
        this.newArr.splice(index, 1)
        this.items = this.newArr
    }

    showForm = (index) => {
        this.newArr[index].isForm = true
        this.items = this.newArr
    }

    hideForm = (index) => {
        this.newArr[index].isForm = false
        this.items = this.newArr
    }

    saveForm = async ({e, index, saveBtn, inpName, inpPhone}) => {
        const info = {name: inpName.value, phone: inpPhone.value, id: Date.now()}
        e.preventDefault()
        const isValid = this.checkForm(inpName, inpPhone)
        if (!isValid) return

        this.changeLoadingClass(saveBtn, true)
        await new Promise(res => setTimeout(res, 1000))

        this.newArr[index] = {isForm: false, ...info}
        this.items = this.newArr
    }

    checkForm = (inpName, inpPhone) => {
        const reg = new RegExp('^[\\+ ]?[0-9-]+$')
        if (!inpName.value) {
            this.changeErrorClass(inpName, true)
            return false
        }
        if (!inpPhone.value) {
            this.changeErrorClass(inpPhone, true)
            return false
        }
        if (!reg.test(inpPhone.value)) {
            this.changeErrorClass(inpPhone, true)
            return false
        }
        return true
    }

    changeErrorClass = (el, val) => {
        val ? el.classList.add('input--error') :
            el.classList.remove('input--error')
    }

    changeLoadingClass = (el, val) => {
        val ? el.classList.add('btn--loading') :
            el.classList.remove('btn--loading')
    }

    createHeadForm = () => {
        const el = document.createElement('div')
        el.innerHTML = this.headForm()
        this.addHeadFormNodeListeners(el)
        this.head.appendChild(el)
    }
}

const table = new Table()
table.createTableItem()
table.createHeadForm()
