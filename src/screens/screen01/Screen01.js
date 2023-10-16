import { Image, Pressable, View } from 'react-native';
import Text from '../../components/text';
import Wrapper from '../../components/wrapper';
import styles from './styles';

const product = {
    name: 'Điện Thoại Vsmart Joy 3 - Hàng chính hãng',
    reviewCount: 828,
    price: '1.790.000',
    oldPrice: '1.790.000',
    image: [],
    supplier: 'Tiki Tradding',
    colors: [
        {
            name: 'bạc',
            color: 'rgba(197, 241, 251, 1)',
            image: require('../../../assets/vs_silver.png'),
        },
        {
            name: 'đỏ',
            color: 'rgba(243, 13, 13, 1)',
            image: require('../../../assets/vs_red.png'),
        },
        {
            name: 'đen',
            color: 'rgba(0, 0, 0, 1)',
            image: require('../../../assets/vs_black.png'),
        },
        {
            name: 'xanh',
            color: 'rgba(35, 72, 150, 1)',
            image: require('../../../assets/vs_blue.png'),
        },
    ],
};

export default function Screen01({ navigation, route }) {
    const indexImage = route.params?.indexImage;

    const handleSelectColors = () =>
        navigation.navigate('screen_02', { indexImage, product });

    return (
        <Wrapper style={styles.container}>
            <Image
                resizeMode='contain'
                style={styles.image}
                source={
                    product.colors[indexImage || product.colors.length - 1]
                        .image
                }
            />
            <View style={styles.body}>
                <Text style={styles.title}>{product.name}</Text>
                <View style={styles.review}>
                    <View style={styles.rating}>
                        {new Array(5).fill(null).map((item, index) => (
                            <Image
                                key={index}
                                style={styles.startImage}
                                source={require('../../../assets/star.png')}
                            />
                        ))}
                    </View>
                    <Text style={styles.reviewCount}>
                        (Xem {product.reviewCount} đánh giá)
                    </Text>
                </View>
                <View style={styles.price}>
                    <Text style={styles.newPrice}>{product.price} đ</Text>
                    <Text style={styles.oldPrice}>{product.oldPrice} đ</Text>
                </View>
                <View style={styles.desc}>
                    <Text style={styles.descText}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                    <Pressable style={styles.helpBtn}>
                        <Image
                            style={styles.helpIcon}
                            source={require('../../../assets/help.png')}
                        />
                    </Pressable>
                </View>
                <Pressable
                    style={[styles.pickColorBtn, styles.boxShadow]}
                    onPress={handleSelectColors}
                >
                    <Text style={styles.pickColorBtnText}>
                        {product.colors.length} MÀU-CHỌN MÀU
                    </Text>
                    <Image
                        style={styles.pickColorBtnIcon}
                        source={require('../../../assets/rightIcon.png')}
                    />
                </Pressable>
                <View style={styles.footer}>
                    <Pressable style={[styles.buyBtn, styles.boxShadow]}>
                        <Text style={styles.buyBtnText}>CHỌN MUA</Text>
                    </Pressable>
                </View>
            </View>
        </Wrapper>
    );
}
