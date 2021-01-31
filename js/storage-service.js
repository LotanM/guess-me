'use strict'

function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
    console.log(localStorage);

}

function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
}