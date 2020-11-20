class Controller
{  
    dashboard(date){
        
        let chooseDate = new UserModel()
        chooseDate.get_api(date)
        
        let view = new View()
        view.mostra(chooseDate)
    }
    pick_date(date){
        
        let chooseDate = new UserModel()
        chooseDate.get_api(date)
        
        let view = new View()
        view.mostra(chooseDate)
    }
    
}