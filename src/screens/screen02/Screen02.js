import { Image, Pressable, View } from 'react-native';
import styles from './styles';
import { Text } from 'react-native';

export default function Screen02() {
    return (
        <View style={styles.container}>
            <View style={styles.information}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/vs_black.png')}
                />
                <Text style={styles.text}>
                    Điện Thoại Vsmart Joy 3 Hàng chính hãng
                </Text>
            </View>
            <View style={styles.colorPicker}>
                <Text style={styles.colorPickerText}>
                    Chọn một màu bên dưới:
                </Text>
                <View style={[styles.groupColor]}>
                    <Pressable
                        style={[
                            styles.colorBtn,
                            {
                                backgroundColor: '#C5F1FB',
                            },
                        ]}
                    ></Pressable>
                    <Pressable
                        style={[
                            styles.colorBtn,
                            {
                                backgroundColor: '#C5F1FB',
                            },
                        ]}
                    ></Pressable>
                    <Pressable
                        style={[
                            styles.colorBtn,
                            {
                                backgroundColor: '#C5F1FB',
                            },
                        ]}
                    ></Pressable>
                    <Pressable
                        style={[
                            styles.colorBtn,
                            {
                                backgroundColor: '#C5F1FB',
                            },
                        ]}
                    ></Pressable>
                </View>
                <View style={styles.footer}>
                    <Pressable style={styles.btn}>
                        <Text style={styles.btnText}>XONG</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
