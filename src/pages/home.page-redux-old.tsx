/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import {connect, useDispatch} from 'react-redux';

type Props = {
  count: string;
  increment: () => void;
  decrement: () => void;
  morefive: () => void;
};

const HomeOldRedux = ({count, increment, decrement, morefive}: Props) => {
  const dispatch = useDispatch();

  const incrementWithDispatch = () => dispatch({type: 'counter/increment'});

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{paddingBottom: 200}}>{count}</Text>
        <Button title="Aumentar com Dispatch" onPress={incrementWithDispatch} />

        <Button title="Aumentar sem Dispatch" onPress={increment} />

        <Button title="Diminuir" onPress={decrement} />
        <Button title="+ 5" onPress={morefive} />
      </View>
    </SafeAreaView>
  );
};

const mapProps = (state: string) => {
  return {
    count: state,
  };
};

const mapDispatch = (dispatch: ({type}: {type: string}) => void) => {
  return {
    increment: () => dispatch({type: 'counter/increment'}),
    decrement: () => dispatch({type: 'counter/decrement'}),
    morefive: () => dispatch({type: 'counter/morefive'}),
  };
};

export default connect(mapProps, mapDispatch)(HomeOldRedux);
