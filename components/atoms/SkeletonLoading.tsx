import React, { useEffect, useRef, useState } from 'react';
import { Animated, RegisteredStyle, StyleProp, View, ViewStyle } from 'react-native';

export default function SkeletonLoading({ style, color = "#e0e0e0", children, isLoading = false }: { style: StyleProp<ViewStyle>, color?: string, children: React.ReactNode, isLoading: boolean }) {
    const opacity = useRef(new Animated.Value(0.3)).current;
    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true,
                }),
                Animated.timing(opacity, {
                    toValue: 0.3,
                    duration: 800,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, [opacity]);
    return <>
        {isLoading ?  <Animated.View
            style={[
                {
                    backgroundColor: color,
                    borderRadius: 10,
                    opacity: opacity
                },
                style,
            ]}
        />: children}
    </>
};