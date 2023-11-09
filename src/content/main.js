import { createApp } from 'vue'
import app from './components/app.vue'

joinContent(app)
// injectJsInsert()

function joinContent (element) {
	const div = document.createElement('div')
	div.id = 'joinContentApp'
	document.body.appendChild(div)
	console.log(div)
	createApp(element).mount('#joinContentApp')
}

//引入inject文件
// function injectJsInsert () {
// 	document.addEventListener('readystatechange', () => {
// 		const injectPath = 'js/inject.js'
// 		const script = document.createElement('script')

// 		script.setAttribute('type', 'text/javascript')
// 		script.src = chrome.extension.getURL(injectPath)
// 		document.body.appendChild(script)
// 	})
// }