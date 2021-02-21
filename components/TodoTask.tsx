import React, { useState } from 'react';
import {View,Text,TextInput} from 'react-native';
import Style from './Style';

import IonIcon from 'react-native-vector-icons/Ionicons';

export default function TodoTask({task,onRemoveTask,onModifyMode,onCompleteModify}){
    const [description,setDescription] = useState(task.description);

    const onChangeDescription = (description:string) =>{
        setDescription(description);
    };

    return(
        <View style={Style.taskContainer}>
            <View style={Style.taskHeader}>
                { task.mode =='view' && 
                        <>
                        <IonIcon style={Style.modifyIcon} name="create-outline"
                            onPress={() => onModifyMode(task.key)}
                            size={18} />
                        <IonIcon name="trash-bin"
                            onPress={() => onRemoveTask(task.key)}
                            size={18} />
                        </> }
                { task.mode =='modify' && <IonIcon name="checkmark"
                        onPress={() => onCompleteModify(task.key,description)}
                        size={18} />
                }
            </View>
            <View style={Style.taskBody}>
                <TextInput editable={task.mode =='modify'} onChangeText={onChangeDescription}
                style={Style.taskFont} value={description} multiline={true}/>
            </View>
        </View>
      
        
    );
}