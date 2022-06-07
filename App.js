import React from 'react';
import {
    View, 
    Image, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar, 
    Text, 
    Pressable,
    Linking
} from 'react-native'; 

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/92997000?s=400&u=d3b6ef52f304fc8e26cd239751d0dc2f275d6303&v=4';

const urlToMyGithub = 'https://github.com/Danpam12';

const App = () => {
 
  const handlePressGoToGithub = async () => {
      console.log('Verificando link');
    const res = await Linking.canOpenURL(urlToMyGithub);
    if(res) {
        console.log('Link aprovado');
        console.log('Abrindo link....');
        await Linking.openURL(urlToMyGithub);
    }
};    
return (
<SafeAreaView style={style.container}>
    <StatusBar backgroundColor={colorGithub} barStyle="light-content"/>
    <View style={style.content}>
       <Image  
       accessibilityLabel="Pamela na sala com fundo branco"  
       style ={style.avatar} 
       source={{uri: imageProfileGithub }}
       />
       <Text 
          accessibilityLabel= "Nome: pamela moura"
          style={[style.defaultText, style.name]}>Pamela Moura
       </Text>
       <Text 
          accessibilityLabel= "Nickname: dampan12"
          style={[style.defaultText, style.nickname]}>Danpam12
       </Text>
       <Text 
          accessibilityLabel= "Descrição: Estudante de Tecnologia em Sistemas para Internet - IFPE"
          style={[style.defaultText, style.description]}>Estudante de Tecnologia em Sistemas para Internet - IFPE
       </Text>

       <Pressable onPress={handlePressGoToGithub}>
       <View style={style.button}>
           <Text 
           style={[style.defaultText, 
           style.textButton]}>Open in Github</Text>
       </View>
       </Pressable>
    </View>
</SafeAreaView>
);
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex:1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    content: {
      alignItems: 'center',
      padding: 20,

    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText: {
        color: colorFontGithub,
    },
    name:{
        marginTop: 20,
        fontWeight: 'bold',
        fontSize:24,
    },
    nickname:{
        fontSize: 18,
        color: colorDarkFontGithub,
    },
    description: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    button: {
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
    },

});