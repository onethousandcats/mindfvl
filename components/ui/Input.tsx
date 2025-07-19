import { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Portal } from "react-native-portalize";

type TextBoxProps = {
  label: string;
  onChange: (val: string) => void;
};

type LabelProps = TextBoxProps & {
  options: string[];
};

const SCREEN_HEIGHT = Dimensions.get("window").height;

export const TextBox: React.FC<TextBoxProps> = ({ label, onChange }) => {
  return (
    <View style={styles.textBox}>
      <Text>{label}</Text>
      <TextInput style={styles.textBoxInput} onChangeText={onChange} />
    </View>
  );
};

export const Select: React.FC<LabelProps> = ({ label, options, onChange }) => {
  const [selected, setSelected] = useState(options[0]);
  const [sheetVisible, setSheetVisible] = useState(false);
  const slideAnimation = useRef(new Animated.Value(SCREEN_HEIGHT)).current;

  const showSheet = () => {
    console.log("test");
    setSheetVisible(true);
    Animated.timing(slideAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const hideSheet = () => {
    setSheetVisible(false);
    Animated.timing(slideAnimation, {
      toValue: SCREEN_HEIGHT,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setSheetVisible(false);
    });
  };

  const handleSelect = (option: string) => {
    setSelected(option);
    onChange?.(option);
    hideSheet();
  };

  return (
    <View style={styles.root}>
      <View style={styles.textBox}>
        <Text>{label}</Text>
        <TouchableOpacity style={{ zIndex: 100 }} onPress={showSheet}>
          <TextInput
            editable={false}
            value={selected}
            style={styles.textBoxInput}
            onPress={showSheet}
          />
        </TouchableOpacity>
      </View>
      <Portal>
        {sheetVisible && (
          <TouchableWithoutFeedback onPress={hideSheet}>
            <View style={styles.backdrop} />
          </TouchableWithoutFeedback>
        )}

        <Animated.View
          style={[
            styles.bottomSheet,
            { transform: [{ translateY: slideAnimation }] },
          ]}
        >
          <ScrollView style={styles.optionScrollable}>
            {options.map((option) => (
              <TouchableOpacity
                key={option}
                onPress={() => handleSelect(option)}
                style={styles.option}
              >
                <Text style={styles.textOption}>{option}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Animated.View>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  textBox: {
    flex: 1,
    gap: 10,
    width: "100%",
    marginBottom: 26,
  },
  textBoxInput: {
    borderWidth: 2,
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    zIndex: 50,
  },
  bottomSheet: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    paddingBottom: 80,
    paddingTop: 20,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 100,
    zIndex: 100,
    maxHeight: 300,
  },
  optionScrollable: {
    width: "100%",
  },
  option: {
    padding: 16,
    width: "100%",
  },
  textOption: {
    fontSize: 18,
    textAlign: "center",
  },
  root: {
    flex: 1,
    position: "relative",
  },
});
