import './style.css'
import './a.scss'
import './b.less'
import './c.styl'
import img1 from './asset/1.png'

const div = document.getElementById('app')
const myImg = document.createElement('img')
myImg.src = img1
div.appendChild(myImg)

const btn = document.createElement('button')
btn.innerText = 'click'
div.appendChild(btn)
btn.onclick = () => {
    import('./lazy.js').then(module => {
        console.log(module.default)
    })
}

export default 'xxx'