import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Account from '../screens/Account/Accounts'

const Stack = createStackNavigator()

export default function AccountStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Cuenta'
                component={Account}
                options={{tittle:'Mi Cuenta'}}
            />
        </Stack.Navigator>
    )
}