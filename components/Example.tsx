import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import RBSheet, { RBSheetProps } from "react-native-raw-bottom-sheet";

interface BottomSheetProps extends RBSheetProps {};

const Example: React.FC<BottomSheetProps> = () => {
  const sheetRef = useRef<RBSheet>(null);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={() => sheetRef.current!.open()}>
        <Text>Open Bottom Sheet</Text>
      </TouchableOpacity>
      <RBSheet
        ref={sheetRef}
        height={300}
        duration={250}
        customStyles={{
          container: {
            justifyContent: "center",
            alignItems: "center"
          }
        }}
      >
        <View style={{ backgroundColor: "white", padding: 20 }}>
          <Text>This is the content of the bottom sheet!</Text>
        </View>
      </RBSheet>
    </View>
  );
};

export default Example;
