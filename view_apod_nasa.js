class View
{
    
    mostra(data){

        let pictureTitle= document.querySelector('#picture_title')
        pictureTitle.textContent = data.getTitle()
        
        let explanationp = document.querySelector('#explanation')
        explanationp.textContent = data.getExplanation()
        
        let picture = document.querySelector('#picture')
        picture.src = data.getImage()
        
        let dateChose = document.querySelector('#date_chose')
        dateChose.textContent = data.getDate()
        
        
        
    }
}