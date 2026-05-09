import {Text, View, StyleSheet, Image, Pressable} from 'react-native'

export default function BottomSection() {

    const handlePress = () => {
        alert('Sorry, this feature is not available yet.')
    }

    return (
        <View style={style.parent_container}>
            <View>
                <View style={style.inner_container}>
                    <Pressable style={style.icon_container} onPress={handlePress}>
                        <Image
                            source={require('@/assets/images/my-icons/facebook-icon.png')}
                            style={style.icon}
                        />
                    </Pressable>

                    <Pressable style={style.icon_container} onPress={handlePress}>
                        <Image
                            source={require('@/assets/images/my-icons/google-icon.png')}
                            style={style.icon}
                        />
                    </Pressable>

                    <Pressable style={style.icon_container} onPress={handlePress}>
                        <Image
                            source={require('@/assets/images/my-icons/instagram-icon.png')}
                            style={style.icon}
                        />
                    </Pressable>
                </View>
            </View>

            <View style={{
                marginTop: 10,
                flexDirection: 'column',
                alignItems: 'center',
                gap: 8
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 5
                }}>
                    <Text>Don't have an account?</Text>

                    <Pressable onPress={handlePress}>
                        {({ pressed }) => (
                            <Text
                                style={{
                                    color: pressed ? '#000' : '#67C090'
                                }}
                            >
                                Sign Up
                            </Text>
                        )}
                    </Pressable>
                </View>

                <Pressable onPress={handlePress}>
                    {({ pressed }) => (
                        <Text
                            style={{
                                color: pressed ? '#000' : '#67C090'
                            }}
                        >
                            Forgot your password?
                        </Text>
                    )}
                </Pressable>

            </View>
        </View>
    )
}

const style = StyleSheet.create({
    parent_container: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10
    },

    inner_container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },

    icon_container: {
        height: 50,
        width: 50,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#000',
        borderRadius: 15
    },

    icon: {
        height: 25,
        width: 25,
    }
})