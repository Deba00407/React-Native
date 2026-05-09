import {Text, View, TextInput, StyleSheet, Pressable, Image} from 'react-native'
import {useState} from "react";

export default function MiddleFormSection() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        alert('Sign in button pressed');
        setEmail('');
        setPassword('');
    }

    return (
        <View>

            <View>
                <Text>Enter email address</Text>
                <TextInput
                    keyboardType={'email-address'}
                    placeholder={'johndoe13@example.com'}
                    style={style.input}
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View>
                <Text>Enter password</Text>
                <TextInput
                    secureTextEntry={true}
                    placeholder={'**********'}
                    style={style.input}
                    value={password}
                    onChangeText={setPassword}
                />
            </View>

            <Pressable
                style={style.button}
                onPress={handleSignIn}
                hitSlop={{
                    top: 10, bottom: 10, left: 20, right: 20
                }}
            >
                <Text style={style.pressableInnerText}>Sign In</Text>
            </Pressable>

        </View>
    )
}

const style = StyleSheet.create({
    input: {
        backgroundColor: '#fff',
        minWidth: '80%',
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#d1d5db',
        borderRadius: 12,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#111827',
        marginVertical: 10,
    },

    button: {
        backgroundColor: '#67C090',
        height: 55,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },

    pressableInnerText: {
        color: '#fff',
        fontSize: 20
    }
})