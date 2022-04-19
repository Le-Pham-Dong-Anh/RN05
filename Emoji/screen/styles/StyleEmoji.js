import {StyleSheet} from 'react-native'

export default styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    container_head:{        
        flexDirection: 'row'
    },
    container__text:{
        fontWeight: '500',
        fontSize: 20,
        marginBottom:20,
    },
    container__image:{
        height: 170,
        width:170,
    },
    container_head__image:{
        height:35,
        width:35,
        margin:10
    },
})