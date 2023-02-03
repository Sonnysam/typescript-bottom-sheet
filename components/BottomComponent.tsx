import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useRef, useState } from "react";
import tw from "twrnc";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

export default function BottomComponent() {
  const sheetRef = useRef<BottomSheet>(null);
  const [isOpen, setIsOpen] = useState(true);

  const snapPoints = ["25%", "50%", "75%"];
  

  return (
    <>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        onClose={() => setIsOpen(false)}
      >
        <BottomSheetView>
          <Text>BottomSheetView</Text>
        </BottomSheetView>
      </BottomSheet>
    </>
  );
}

const styles = StyleSheet.create({});
