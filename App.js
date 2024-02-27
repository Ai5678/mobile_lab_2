/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {
    SafeAreaView, View} from 'react-native';
import TaskList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function App() {
    return (
        <SafeAreaView>
            <View>
              <TaskList/>
              <ToDoForm/>
            </View>
           
        </SafeAreaView>
    );
}



export default App;