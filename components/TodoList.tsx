import React, { useState } from 'react';
import {View,FlatList,ImageBackground} from 'react-native';
import Style from './Style';
import TodoTask from './TodoTask'
import moment from 'moment';
import IonIcon from 'react-native-vector-icons/Ionicons';
import TaskModal from './TaskModal';

export default function TodoList(){
    const [todoTask,setTodoTask] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const onSubmitTodoTask = (text:string) =>{
        const newTask ={
            key:`TASK${moment().format('YYYYMMDDhhmmsssss')}`,
            description:text,
            mode:'view',
        }
        setTodoTask(prevTodoTask => [...prevTodoTask, newTask]);
    };

    const onRemoveTodoTask = (key:string)=>{
        setTodoTask((prevTodo) => prevTodo.filter(task => task.key != key))
    };

    const onModifyMode = (key:string) =>{
        let newTodoTask = [...todoTask]
        const task = newTodoTask.find(task => task.key == key);
        if(task){
            task.mode = 'modify';
            setTodoTask(newTodoTask);
        }
    };

    const onCompleteModify = (key:string,description:string) =>{
        let newTodoTask = [...todoTask]
        const task = newTodoTask.find(task => task.key == key);
        if(task){
            task.mode = 'view';
            task.description = description;
            setTodoTask(newTodoTask);
        }
    };

    const onCloseModal = () =>{
        setModalVisible(false)
    };


    return(
        <ImageBackground style={Style.imageBackground} source={require('../assets/img/background.jpg')}>
            <View style={Style.content}>
                <TaskModal visible={modalVisible} onCloseModal={onCloseModal} onSubmitTask={onSubmitTodoTask}/>
                <FlatList
                    scrollEnabled={true}
                    numColumns={2}
                    data={todoTask}
                    renderItem={({item})=>(
                        <TodoTask task={item} onRemoveTask={onRemoveTodoTask} onModifyMode={onModifyMode} onCompleteModify={onCompleteModify}/>
                    )} />
                    <IonIcon  style={Style.addIcon} name="add-circle-outline"
                        color='#879ceb'
                        size={60} 
                        onPress={()=>setModalVisible(true)}/>
            </View>
        </ImageBackground>
    );
}