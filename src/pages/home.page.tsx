/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import {connect} from 'react-redux';

const Home = ({count, increment, decrement, morefive}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{paddingBottom: 200}}>{count}</Text>
        <Button title="Aumentar" onPress={increment} />
        <Button title="Diminuir" onPress={decrement} />
        <Button title="+ 5" onPress={morefive} />
      </View>
    </SafeAreaView>
  );
};

const mapProps = state => {
  return {
    count: state,
  };
};

const mapDispatch = dispatch => {
  return {
    increment: () => dispatch({type: 'counter/increment'}),
    decrement: () => dispatch({type: 'counter/decrement'}),
    morefive: () => dispatch({type: 'counter/morefive'}),
  };
};

export default connect(mapProps, mapDispatch)(Home);
