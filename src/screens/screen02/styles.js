import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    textBold: {
        fontWeight: '700',
    },
    textMedium: {
        fontSize: 15,
        lineHeight: 17,
    },
    textLarge: {
        fontSize: 18,
        lineHeight: 21,
    },
    container: {
        flex: 1,
    },
    information: {
        paddingHorizontal: 4,
        flexDirection: 'row',
        paddingBottom: 17,
        gap: 6,
    },
    image: {
        width: 112,
        height: 132,
    },
    info: {
        gap: 9,
        marginTop: 17,
        flex: 1,
    },
    colorPicker: {
        paddingVertical: 10,
        paddingHorizontal: 17,
        flex: 7,
        gap: 10,
        backgroundColor: '#C4C4C4',
    },
    colorPickerText: {
        color: '#000',
        fontSize: 18,
        lineHeight: 21,
    },
    groupColor: {
        marginTop: 13,
        gap: 13,
        justifyContent: 'center',
        alignItems: 'center',
    },
    colorBtn: {
        width: 85,
        height: 80,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 4,
        elevation: 4,
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    btn: {
        paddingTop: 12,
        paddingBottom: 9,
        paddingHorizontal: 20,
        backgroundColor: 'rgba(25, 82, 226, 0.58)',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#CA1536',
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: {
            height: 4,
            width: 0,
        },
        shadowRadius: 4,
        elevation: 10,
    },
    btnText: {
        color: '#F9F2F2',
        fontSize: 20,
        fontWeight: 700,
        lineHeight: 23,
        textAlign: 'center',
    },
});

export default styles;
