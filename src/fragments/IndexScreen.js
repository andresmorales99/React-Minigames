import React from 'react';
import { StyleSheet , Text , View , TouchableHighlight} from 'react-native';

export default class IndexScreen extends React.Component {
    render(){
        return(
            <View style={{ flex:1, justifyContent:'space-evenly', backgroundColor: 'lightblue' }}>
                <View style={{flex:1, flexDirection:'column', justifyContent:'space-around', }}>
                    <Text style={{fontWeight:'bold', textAlign:'center',fontSize:40,color:'green'}}>Welcome to Quiz</Text>
                    
                    <View style={{flexDirection:'column',justifyContent:'center'}}>
                        <Text style={{fontWeight:'bold', textAlign:'center',fontSize:20,color:'black',paddingBottom:20,marginHorizontal:30}}>
                            App made by
                            Pedro Mas Navarro,
                            Fernando Heredero López and
                            Enrique Salinas Martín
                        </Text>

                        <Text style={{ textAlign:'center',fontSize:20,color:'black',}}>
                        iWEB 2020    
                        </Text>
                        
                    </View>
                    
                </View>
                <TouchableHighlight style={{flex:2, marginHorizontal:30, positionY:'center'}} onPress={() => this.props.navigation.navigate('GameScreen')} >
                    <Text style={styles.button}>Play</Text>
                </TouchableHighlight>
               
            </View>            
        );
    }
}
const styles = StyleSheet.create({
button: {
    
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
    fontSize: 25,
    textAlign: 'center',
    padding: 10
    },
});