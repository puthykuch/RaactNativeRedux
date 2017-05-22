import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  ScrollView,
  TextInput,
  Image,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

class Home extends Component {
  
  searchPressed() {
    this.props.fetchRecipes('bacon,cucumber,banana'); 
  }
  
  render() {
    return <View style={{ marginTop: 20 }}>
      <View>
        <TouchableHighlight onPress={ () => { this.searchPressed() } }>
          <Text> Fetch Recipes </Text>
        </TouchableHighlight>
      </View>
      <ScrollView>
         
      </ScrollView>
    </View>
  }
}

function mapStateToProps(state) {
  return {
    searchedRecipes: state.searchedRecipes
  }
}

export default connect(mapStateToProps)(Home);