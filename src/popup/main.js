import { createApp } from 'vue'
import app from './components/app.vue'
import ElementUI from 'element-plus'
import 'element-plus/dist/index.css' //导入ElementPlus的CSS样式
createApp(app).use(ElementUI).mount('#app')