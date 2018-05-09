//       render() {
//         const { hasCameraPermission } = this.state;
//         if (hasCameraPermission === null) {
//           return <View />;
//         } else if (hasCameraPermission === false) {
//           return <Text>No access to camera</Text>;
//           } else {
//             return (
//               <View style={{ flex: 1}}>
//                 <Camera
//                   style={{ flex: 1 }}
//                   type={this.state.type}
//                   ref={(ref) => {
//                      this.camera = ref;
//                       }}>
//                   <Header style={{position:'absolute', backgroundColor:'white', left:0, top:0, right:0, zIndex:100}}>
//                     <View style={{flexDirection: 'row', flex:1, justifyContent: 'center', backgroundColor:'transparent' }}>
//                       <View>
//                         <Text style = {{fontWeight: 'bold', fontSize: 18, color:'black', paddingTop:15}}>Photo</Text>
//                       </View>
//                     </View>
//                     </Header>
//                     <View
//                       style={{
//                         flex: 3,
//                         backgroundColor: 'transparent',
//                         flexDirection: 'row',
//                         justifyContent: 'space-around'
//                       }}>
//                       <TouchableOpacity
//                             style={{
//                               flex: 0.1,
//                               alignSelf: 'flex-end',
//                               alignItems: 'center',
//                             }}
//                             onPress={() =>
//                               this.props.navigation.navigate('HomeTab')}>
//                             <Icon
//                               name="ios-arrow-round-back"
//                               style={{ fontSize:40, marginBottom: 15, color: 'white' }}/>
//                       </TouchableOpacity>
//                       <TouchableOpacity
//                             style={{
//                               flex: 0.1,
//                               alignSelf: 'flex-end',
//                               alignItems: 'center',
//                             }}
//                             onPress={() => {
//                               this.takePicture.bind(this)} }>
//                             <Icon
//                               name="camera"
//                               style={{ fontSize:40, marginBottom: 15, color: 'white' }}/>
//                       </TouchableOpacity>
//                       <TouchableOpacity
//                             style={{
//                               flex: 0.1,
//                               alignSelf: 'flex-end',
//                               alignItems: 'center',
//                             }}
//                             onPress={() => {
//                               this.setState({
//                                 type: this.state.type === Camera.Constants.Type.back
//                                 ? Camera.Constants.Type.front
//                                 : Camera.Constants.Type.back,
//                               });
//                             }}>
//                             <Icon
//                               name="ios-reverse-camera"
//                               style={{ fontSize:40, marginBottom: 15, color: 'white' }}/>
//                           </TouchableOpacity>
//                     </View>
//                   </Camera>
//                 </View>
//               );
//             }
//           }
//
// }
//
// export default AddMediaTab;
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
