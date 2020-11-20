var controller = new Controller()

function mudaData(){
    let date = new Date()
    let day = date.getDate()
    let year = date.getFullYear()
    let month = date.getMonth()
    
    return `${year}-${month+1}-${day}` 
    
}
controller.dashboard(mudaData())

document.querySelector('#submit').addEventListener('click',()=>{
   
    let date = document.querySelector('#calendar')
    let dateString = date.value
    
    controller.pick_date(dateString)
})
