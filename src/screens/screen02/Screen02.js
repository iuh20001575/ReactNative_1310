import { Image, Pressable, View } from 'react-native';
import TextCustomize from '../../components/text';
import styles from './styles';

export default function Screen02() {
    return (
        <View style={styles.container}>
            <View style={styles.information}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/vs_black.png')}
                />
                <TextCustomize style={styles.text}>
                    Điện Thoại Vsmart Joy 3 Hàng chính hãng
                </TextCustomize>
            </View>
            <View style={styles.colorPicker}>
                <TextCustomize style={styles.colorPickerText}>
                    Chọn một màu bên dưới:
                </TextCustomize>
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
                        <TextCustomize style={styles.btnText}>
                            XONG
                        </TextCustomize>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
