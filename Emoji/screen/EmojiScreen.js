import { Text, View, Image, TouchableOpacity  } from 'react-native'
import React, { Component } from 'react'
import styles from './styles/StyleEmoji'
const emojiData=[
   require('../asset/images/angry.png'), 
   require('../asset/images/care.png'),
   require('../asset/images/haha.png'),
   require('../asset/images/like.png'),
   require('../asset/images/love.png'),
   require('../asset/images/sad.png'),
]

export default class EmojiScreen extends Component {
    state ={
        emojiSelected: null 
    }
    // onPressicon = (data) =>{
    //   this.setState({emojiSelected: data})
    // }
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.container__text}>Bạn đang cảm thấy thế nào?</Text>
          <Image style={styles.container__image} source={this.state.emojiSelected}/>
          <View style={styles.container_head}>
            {
              emojiData.map((data,index)=>(
                <TouchableOpacity 
                key={index}
                onPress={ () => this.setState({emojiSelected: data})}
                //onPress={ () =>this.onPressicon(data)}
                >
                  <Image style={styles.container_head__image} source={data}/>
                  </TouchableOpacity>
              ))
            } 
          </View>
          
      </View>
    )
  }
}