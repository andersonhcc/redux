/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  increment,
  decrement,
  morefive,
  incrementAumount,
} from '../store/counter-slice';
import {useAppSelector} from '../hooks';

const HomeWithTolkit = () => {
  //   const count = useSelector(state => state.counter.value);
  const count = useAppSelector(state => state.counter.value);

  console.log(count);

  const dispatch = useDispatch();

  function handleOnIncrement() {
    dispatch(increment());
  }

  function handleOnDecrement() {
    dispatch(decrement());
  }

  function handleOnMoreFive() {
    dispatch(morefive());
  }

  function handleOnMoreAmount() {
    dispatch(incrementAumount(100));
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{paddingBottom: 200}}>{count} tollkit</Text>
        <Button title="Aumentar com Dispatch" onPress={handleOnIncrement} />

        <Button title="Diminuir dispatch" onPress={handleOnDecrement} />

        <Button title="+ 5" onPress={handleOnMoreFive} />

        <Button title="Amount +" onPress={handleOnMoreAmount} />
      </View>
    </SafeAreaView>
  );
};

export default HomeWithTolkit;
