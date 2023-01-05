import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    bodyBackground: {
        backgroundColor: '#EFEFEF',
        overflow: 'hidden',
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        paddingLeft: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#EFEFEF',
    },
    bodyContainer: {
        padding: 15,
        paddingLeft: 20,
        position: 'absolute',
        bottom: 0,
        // backgroundColor: "#000",
        width: '100%'
    },
});

export default styles;