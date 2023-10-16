import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    boxShadow: {
        elevation: 4,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
    },
    container: {
        flex: 1,
    },
    image: {
        flex: 3,
        width: 'auto',
        marginHorizontal: 30,
    },
    body: {
        flex: 2,
        paddingHorizontal: 22,
    },
    title: {
        color: '#000',
        fontSize: 15,
        lineHeight: 17,
    },
    review: {
        flexDirection: 'row',
        gap: 23,
        marginTop: 9,
        alignItems: 'center',
    },
    rating: {
        flexDirection: 'row',
    },
    startImage: {
        width: 23,
        height: 25,
    },
    reviewCount: {
        color: '#000',
        fontSize: 15,
        lineHeight: 17,
    },
    price: {
        flexDirection: 'row',
        gap: 44,
        marginTop: 13,
        alignItems: 'center',
    },
    newPrice: {
        color: '#000',
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 21,
    },
    oldPrice: {
        color: 'rgba(0, 0, 0, 0.58)',
        fontSize: 15,
        fontWeight: '700',
        lineHeight: 18,
        textDecorationLine: 'line-through',
    },
    desc: {
        marginTop: 13,
        flexDirection: 'row',
        gap: 8,
    },
    descText: {
        color: '#fa0000',
        fontSize: 12,
        fontWeight: '700',
        lineHeight: 14,
    },
    helpBtn: {
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    helpIcon: {
        width: 20,
        height: 20,
    },
    pickColorBtn: {
        marginTop: 16,
        position: 'relative',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.46)',
    },
    pickColorBtnText: {
        padding: 8,
        color: '#000',
        fontSize: 15,
        lineHeight: 17,
        textAlign: 'center',
    },
    pickColorBtnIcon: {
        position: 'absolute',
        width: 11,
        height: 14,
        right: 20,
    },
    footer: {
        marginTop: 20,
        flex: 1,
        justifyContent: 'flex-end',
    },
    buyBtn: {
        marginBottom: 13,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#CA1536',
        backgroundColor: '#EE0A0A',
        paddingTop: 12,
        paddingBottom: 9,
        paddingHorizontal: 20,
    },
    buyBtnText: {
        color: '#F9F2F2',
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 23,
        textAlign: 'center',
    },
});

export default styles;
