import React, { useMemo } from 'react';
import { Platform, SafeAreaView, StatusBar } from 'react-native';

const Wrapper = ({ style, children, ...props }) => {
    const styles = useMemo(() => {
        const styles = Array.isArray(style) ? style : [style];

        styles.push({
            marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        });

        return styles;
    }, [style]);

    return (
        <SafeAreaView style={styles} {...props}>
            {children}
        </SafeAreaView>
    );
};

export default Wrapper;
