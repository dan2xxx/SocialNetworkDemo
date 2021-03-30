// import dialogReducer from "./dialog-reducer"
// import profileReducer from "./profile-reducer"

// const store = {

//   _state : {

//     userData: {

//       0: {
//         id: 0, name: 'React', avatarUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrwDI9Dpinf2UH6ULsDPHZuVkerZ2B_YYTLA&usqp=CAU'
//       },

//       1: {
//         id: 1, name: 'Dan', avatarUrl:'http://vertex-art.ru/wp-content/uploads/historic_.jpg'
//       },
//       2: {
//         id: 2, name: 'Masha', avatarUrl:'https://ae01.alicdn.com/kf/HTB1sIR8e8WD3KVjSZKPq6yp7FXaa/Diy.jpg_Q90.jpg_.webp'
//       },
//       3: {
//         id: 3, name: 'Dima', avatarUrl:'http://ufatime.ru/media/ft/9a/26/9a26c589-8671-4c1c-a585-feba26e50790/marshal_zhukov_280415.jpg__430x322_q85_crop_subsampling-2_upscale.jpg'
//       },
//       4: {
//         id: 4, name: 'Andrew', avatarUrl:'https://cdn61.zvuk.com/pic?type=release&id=5776025&size=500x500&ext=jpg'
//       }
//     },

//     profilePage: {
//       postsData : [
//         {id:0, name:'React', text:"Hello, it's my first post", likeCount: 12},
//         {id:0, name:'React', text:"I'm going to become react developer", likeCount: 20},
//         {id:2, name:'Masha', text:"lol", likeCount: 10}
//       ],

//     postInput: {
//         value: ''
//       },
//     },

//     messagesPage: {
//       dialogsData : [
//         {id: 1, name: 'Dan'},
//         {id: 2, name: 'Masha'},
//         {id: 3, name: 'Dima'},
//         {id: 4, name: 'Andrew'}
//       ],

//       messagesData : [
//         [{id: 1, text:'hi', },
//         {id: 0, text:'hello'},
//         {id: 1, text:'how are u?'},
//         {id: 0, text:'im ok, thanks!'}],

//         [{id: 2, text:'yo'},
//         {id: 2, text:'whats up man?'},
//         {id: 2, text:'cool, gonna coding'},
//         {id: 2, text:'keep going bro :)'}]
//       ],

//       messageInput: {
//         value: ''
//       },
//     }

//   },

//   _callSub () {
//     console.log('change state')
//   },

//   //apply callback funс to callSub
//   subscribe (observer) {
//     this._callSub = observer
//   },

//   getState() {
//     return this._state
//   },

//   dispatch(action) {

//     this._state.messagesPage = dialogReducer(this._state.messagesPage, action)
//     this._state.profilePage = profileReducer(this._state.profilePage, action)

//     this._callSub()

//   }
// }

// export default store
