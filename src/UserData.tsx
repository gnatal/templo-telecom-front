import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const UserData = () => {

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000').then(res => {
            setUserData(res.data)
            console.log(res.data)
        })
    }, [])

    return (
        <View >
            { userData.map(user => (
                <View key={user.nome}> 
                    <Text>{user.nome}</Text>
                    <Text>{user.nascimento}</Text>
                    <Text>{user.endereco}</Text>
                    <Text>{user.cep}</Text>
                    <Text>{user.cidade}</Text>
                    <Text>{user.estado}</Text>
                </View>
             ))}
        </View>
    )
}
