import {Text, View, Image, StyleSheet} from 'react-native'

export default function TopSection() {
    return (
        <View style={style.container}>
            <Image
                source={require('@/assets/images/my-icons/app-icon2.png')}
                style={style.image}
            />
            <Text style={{fontSize: 30, fontWeight: '500'}}>Sign In</Text>
            <Text style={{fontSize: 18, fontWeight: '400'}}>May the source be with you</Text>
        </View>
    )
}

const style = StyleSheet.create({
    image: {
        height: 65,
        width: 65,
        borderRadius: 100
    },

    container:{
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10
    }
})