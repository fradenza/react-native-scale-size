import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  Platform
} from 'react-native';
import {
  Cell,
  Section,
  TableView
} from 'react-native-tableview-simple';
import { scaleWidth, scaleHeight, scaleSize, scaleFont } from "../utils/Size.utils"

const navBar = {
  ...Platform.select({
    ios: {
      height: 64
    },
    android: {
      height: 54
    }
  }),
};

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Demo',
  };

  _onCellPressed = (size, draw) => {
    const { navigate } = this.props.navigation;
    navigate('Canvas', { size, draw });
  };

  _renderCell = (props) => {
    return <Cell
      cellContentView={
        <TouchableOpacity
          style={{ alignItems: 'center', flexDirection: 'row', flex: 1, paddingVertical: 10 }}
          onPress={() => this._onCellPressed(props.size, props.draw)}
        >
          <Text
            allowFontScaling
            numberOfLines={1}
            style={{ flex: 1, fontSize: 12 }}
          >
            {props.title}
          </Text>
        </TouchableOpacity>
      }
    />
  };

  render() {
    const width = 187.5;
    const height = 300;
    const fontSize = 22;

    return (
      <TableView>
        <Section header="Rectangle - 50% of Screen Size">
          {this._renderCell({
            title: "W:" + width + " | H:" + height,
            draw: 'shape',
            size: { width, height }
          })}
          {this._renderCell({
            title: "W:scaleWidth(" + width + ") | H:scaleHeight(" + height +")",
            draw: 'shape',
            size: { width: scaleWidth(width), height: scaleHeight(height) }
          })}
        </Section>
        <Section header="Square">
          {this._renderCell({
            title: "W:" + width + " | H:" + width,
            draw: 'shape',
            size: { width, height: width }
          })}
          {this._renderCell({
            title: "W:scaleSize(" + width + ") | H:scaleSize(" + width + ") - CORRECT",
            draw: 'shape',
            size: { width: scaleSize(width), height: scaleSize(width) }
          })}
          {this._renderCell({
            title: "W:scaleWidth(" + width + ") | H:scaleHeight(" + width +") - INCORRECT!!",
            draw: 'shape',
            size: { width: scaleWidth(width), height: scaleHeight(width) }
          })}
        </Section>
        <Section header="Font Size">
          {this._renderCell({
            title: "fontSize: " + fontSize,
            draw: 'font',
            size: { fontSize }
          })}
          {this._renderCell({
            title: "fontSize: scaleFont(" + fontSize + ")",
            draw: 'font',
            size: { fontSize: scaleFont(fontSize) }
          })}
        </Section>
      </TableView>
    );
  }
}