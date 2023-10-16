import React, { useMemo } from 'react';
import { Text } from 'react-native';
import { useRobotoFonts } from '../../hooks';

export default function TextCustomize({ style = [], children, ...props }) {
    const font = useRobotoFonts();
    const styles = useMemo(() => {
        const styles = Array.isArray(style) ? style : [style];

        styles.push(font);

        return styles;
    }, [font, style]);

    return (
        <Text style={styles} {...props}>
            {children}
        </Text>
    );
}
