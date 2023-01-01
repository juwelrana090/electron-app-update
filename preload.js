// window.addEventListener('DOMContentLoaded', () => {
//     const replaceText = (selector, text) => {
//         const element = document.getElementById(selector)
//         if (element) element.innerText = text
//     }

//     for (const type of ['chrome', 'node', 'electron']) {
//         replaceText(`${type}-version`, process.versions[type])
//     }
// })

const { contexBridge } = require("electron");


contexBridge.exposeInMainWorld("context1"), {
    myAPI: {
        message: "this a electron app"
    }
}
