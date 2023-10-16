import { useState } from 'react';
import { Image, Pressable, View } from 'react-native';
import TextCustomize from '../../components/text';
import Wrapper from '../../components/wrapper';
import styles from './styles';

export default function Screen02({ navigation, route }) {
    const { indexImage, product } = route.params;
    const [colorSelected, setColorSelected] = useState(indexImage);

    const handleSelectedColor = (color) => {
        setColorSelected(color);
    };

    const handleBack = () => {
        navigation.navigate('screen_01', { indexImage: colorSelected });
    };

    return (
        <Wrapper style={styles.container}>
            <View style={styles.information}>
                <Image
                    resizeMode='contain'
                    style={styles.image}
                    source={
                        product.colors[
                            colorSelected ?? product.colors.length - 1
                        ].image
                    }
                />
                <View style={styles.info}>
                    <TextCustomize style={[styles.textMedium]}>
                        {product.name}
                    </TextCustomize>
                    {Number.isInteger(colorSelected) && (
                        <>
                            <TextCustomize style={[styles.textMedium]}>
                                Màu:{' '}
                                <TextCustomize style={[styles.textBold]}>
                                    {product.colors[colorSelected].name}
                                </TextCustomize>
                            </TextCustomize>
                            <TextCustomize style={[styles.textMedium]}>
                                Cung cấp bởi{' '}
                                <TextCustomize style={[styles.textBold]}>
                                    {product.supplier}
                                </TextCustomize>
                            </TextCustomize>
                            <TextCustomize
                                style={[styles.textLarge, styles.textBold]}
                            >
                                {product.price + ''} đ
                            </TextCustomize>
                        </>
                    )}
                </View>
            </View>
            <View style={styles.colorPicker}>
                <TextCustomize style={styles.colorPickerText}>
                    Chọn một màu bên dưới:
                </TextCustomize>
                <View style={[styles.groupColor]}>
                    {product.colors.map((color, index) => (
                        <Pressable
                            key={index}
                            style={[
                                styles.colorBtn,
                                {
                                    backgroundColor: color.color,
                                },
                            ]}
                            onPress={() => handleSelectedColor(index)}
                        />
                    ))}
                </View>
                <View style={styles.footer}>
                    <Pressable onPress={handleBack} style={styles.btn}>
                        <TextCustomize style={styles.btnText}>
                            XONG
                        </TextCustomize>
                    </Pressable>
                </View>
            </View>
        </Wrapper>
    );
}
