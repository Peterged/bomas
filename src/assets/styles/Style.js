import { StyleSheet } from "react-native";

export const Color = {
    lightBlue: "#3DA5FF",
    blue: "#0080EF",
    red: "#FF0000",
    yellow: "#FFD600",
    black: "#000",
    white: "#FFF"
}
const Style = StyleSheet.create({
    container: {
        flex: 1
    },
    primary: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        backgroundColor: Color.lightBlue,
        color: Color.white,
        fontSize: 32
    },
    primaryFocus: {
        backgroundColor: Color.blue
    }
})



export default Style;
