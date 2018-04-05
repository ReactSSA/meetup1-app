import React from 'react';
import {
    Platform,
    TouchableNativeFeedback,
    TouchableOpacity
} from 'react-native';

const Button = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

export default Button;
