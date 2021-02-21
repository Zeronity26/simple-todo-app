import React, { useState } from "react";
import {Modal, Text, View,TextInput,Button} from "react-native";
import Style from "./Style";
import IonIcon from 'react-native-vector-icons/Ionicons';

export default function TaskModal({visible,onCloseModal,onSubmitTask}) {
  const [description,setDescription] = useState('');

  const onChangeDescription = (description:string) =>{
    setDescription(description);
  };
  return (
    <Modal 
        transparent={true}
        visible={visible}>
        <View style={Style.modalContainer}>
            <View style={Style.modalBody}>
                <View style={Style.modalHeader}>
                  <Text style={Style.modalHeaderFont}>Add Todo Task</Text>
                  <IonIcon name="close-sharp"
                      color='white'
                      onPress={()=>onCloseModal()}
                      size={25} />
                </View>
                <View style={Style.modalContent}>
                <TextInput
                  placeholder='Please Input New Todo Task'
                  onChangeText={onChangeDescription}
                  multiline={true}
                />
                <Button disabled={description==''} onPress={()=> {
                  onSubmitTask(description),
                  onCloseModal()
                  }} title="Add Task" color="#841584"/>
                </View>
            </View>
        </View>
    </Modal>
  );
};
