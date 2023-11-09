import { createApp } from 'vue'
import app from './components/app.vue'
import ElementUI from 'element-plus'
import 'element-plus/dist/index.css' //导入ElementPlus的CSS样式
joinContent(app)
injectJsInsert()
createApp(app).use(ElementUI).mount('#content')

function joinContent (element) {
	console.log("element",element)
	const div = document.createElement('div')
	div.id = 'joinContentApp'
	document.body.appendChild(div)
	console.log(div)
	createApp(element).mount('#joinContentApp')
}

//引入inject文件
function injectJsInsert () {
	document.addEventListener('readystatechange', () => {
		const injectPath = 'js/inject.js'
		const script = document.createElement('script')
		script.setAttribute('type', 'text/javascript')
		script.src = chrome.runtime.getURL(injectPath)
		document.body.appendChild(script)
	})
}

// createApp(app).use(ElementUI)