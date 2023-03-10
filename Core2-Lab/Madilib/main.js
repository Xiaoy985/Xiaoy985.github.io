let verbArray = ['sneezed', 'hiccuped', 'coughed', 'snorted', 'farted']
let verbCounter = 0
let nounArray = ['elbow', 'ear', 'foot', 'chin', 'belly button']
let nounCounter = 0
let activityArray = ['swimming', 'singing', 'jogging','dancing','meditating']
let activityCounter = 0

let verbSpan = document.getElementById('verbSpan')
let nounSpan = document.getElementById('nounSpan')
let activity = document.getElementById('activityDiv')


verbSpan.addEventListener('click', ()=>{

    verbSpan.innerHTML = verbArray[verbCounter]
    // ++是指在原有的基础上+1
    verbCounter++

    // 当variables(点击的次数）超过设定的值的个数（nounArray）时，归零重新开始算
    if(verbCounter > verbArray.length -1){
        verbCounter =0
    }

})

nounSpan.addEventListener('click', ()=>{

    nounSpan.innerHTML = nounArray[nounCounter]
    // ++是指在原有的基础上+1
    nounCounter++

    // 当variables(点击的次数）超过设定的值的个数（nounArray）时，归零重新开始算
    if(nounCounter > nounArray.length -1){
        nounCounter =0
    }

})

activity.addEventListener('click', ()=>{

    activity.innerHTML = activityArray[activityCounter]
    // ++是指在原有的基础上+1
    activityCounter++

    // 当variables(点击的次数）超过设定的值的个数（nounArray）时，归零重新开始算
    if(activityCounter > activityArray.length -1){
        activityCounter =0
    }

})