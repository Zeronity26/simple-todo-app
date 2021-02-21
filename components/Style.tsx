import {StyleSheet} from 'react-native'

const Style = StyleSheet.create({
  container:{
    flex:1,
    width: '100%'
  },
  content:{
    flex:1,
    width: '100%',
    marginTop:20,
  },
  imageBackground:{
    flex: 1,
    resizeMode:'cover'
  },
  header:{
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'green',
  },
  headerText:{
    fontSize:35,
    textAlign:'center'
  },
  taskContainer:{
    borderRadius:15,
    borderWidth:1,
    borderColor:'#bbb',
    borderStyle:'solid',
    marginBottom:20,
    marginLeft:20,
    marginRight:20,
    fontSize:25,
    width:'40%',
    backgroundColor:'orange',
  },
  taskHeader:{
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'flex-end',
    flexDirection:'row',
  },
  taskBody:{
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  taskFont:{
    color:'black',
    fontSize: 16,
  },
  modifyIcon:{
    marginRight:10,
  },
  addIcon:{
    position: 'absolute', 
    alignSelf: 'center',
    bottom:20,
  },
  modalContainer:{
    backgroundColor:"#000000aa",
    flex:1
  },
  modalBody:{
    backgroundColor:"white",
    margin:50,
    borderRadius:10
  },
  modalHeader:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor:'#0480be',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  modalHeaderFont:{
    fontSize:20,
    color:'white',
  },
  modalContent:{
    paddingHorizontal: 12,
    paddingVertical: 12,
  }
})

export default Style;