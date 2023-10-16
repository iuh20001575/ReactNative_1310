import { Image, Pressable, View } from 'react-native';
import Text from '../../components/text';
import styles from './styles';

export default function Screen01() {
    return (
        <View style={styles.container}>
            <Image
                resizeMode='contain'
                style={styles.image}
                source={require('../../../assets/vs_blue.png')}
            />
            <View style={styles.body}>
                <Text style={styles.title}>
                    Điện Thoại Vsmart Joy 3 - Hàng chính hãng
                </Text>
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
                    <Text style={styles.reviewCount}>(Xem 828 đánh giá)</Text>
                </View>
                <View style={styles.price}>
                    <Text style={styles.newPrice}>1.790.000 đ</Text>
                    <Text style={styles.oldPrice}>1.790.000 đ</Text>
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
                <Pressable style={styles.pickColorBtn}>
                    <Text style={styles.pickColorBtnText}>4 MÀU-CHỌN MÀU</Text>
                    <Image
                        style={styles.pickColorBtnIcon}
                        source={require('../../../assets/rightIcon.png')}
                    />
                </Pressable>
                <View style={styles.footer}>
                    <Pressable style={styles.buyBtn}>
                        <Text style={styles.buyBtnText}>CHỌN MUA</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
