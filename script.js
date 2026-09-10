import { db } from "./firebase.js"
import {
    doc, getDoc, collection
} from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js'
import {
    getAuth, signInAnonymously
} from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js'

const wtb = collection(db, "WhatToBring")
const dad = doc(wtb, "dad")
const auth = getAuth()

const login = document.getElementById("login")
const main = document.getElementById("main")
const loginInput = document.getElementById("passwd")

async function loginSubmit(event) {
    if (event.key === "Enter") {
        const passwd = loginInput.value
        try {
            await signInAnonymously(auth)
        } catch (err) {
            console.error("匿名登入失敗:", err)
            alert("登入系統發生錯誤，請稍後再試")
            return
        }

        const docSnap = await getDoc(dad)
        if (!docSnap.exists()) {
            console.log("dad is not exist!")
            return
        }
        const data = docSnap.data()
        const hashpasswd = await hashPassword(passwd)
        if (data.passwd === hashpasswd) {
            main.removeChild(login)
            const bring = document.createElement("div")
            bring.id = "bring"
            loginInput.removeEventListener("keydown", loginSubmit)
            main.appendChild(bring)
        } else {
            alert("Wrong Password")
        }
    }
}

async function hashPassword(passwd) {
    const encoder = new TextEncoder()
    const data = encoder.encode(passwd)                          // 字串轉成 bytes
    const hashBuffer = await crypto.subtle.digest('SHA-256', data) // 算雜湊
    const hashArray = Array.from(new Uint8Array(hashBuffer))       // 轉成 byte 陣列
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('') // 轉成十六進位字串
}

loginInput.addEventListener("keydown", loginSubmit)