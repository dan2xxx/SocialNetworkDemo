let initialState = {
    dialogsData : [
      { id: 1, name: 'Dan'},
      {id: 2, name: 'Masha'},
      {id: 3, name: 'Dima'}
     
    ],
    
    messagesData : 
      [{id: 1, text:'hi', },
      {id: 0, text:'hello'},
      {id: 1, text:'how are u?'},
      {id: 0, text:'im ok, thanks!'}]
         
    ,

        
    messageInput: {
      value: ''
    },
  }


const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SEND-MESSAGE' :
            if (action.text.length > 0) {
              console.log(action.text)
              let newMessage = {
                id:0, 
                text: action.text,                        
                
              }
                     
              
              return { 
                ...state,
                messagesData: [...state.messagesData, newMessage]  
                
              }
            } else {
              return state
            }
                                   
            
        
            

        default: 
            return state
        
      }


}


export const sendMessageActionCreator = (text) => ({type: 'SEND-MESSAGE', text})


export default dialogReducer