import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { carbonStyles } from '../styles';

const cs = StyleSheet.create(carbonStyles);

const styles = StyleSheet.create({
  default: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    paddingVertical: 8,
    paddingRight: 6,
  },
});

export default function ToolbarLeft(props) {
  return (
    <View {...props} style={[styles.default, props.style]}>
      {props.children}
    </View>
  );
}

ToolbarLeft.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  color: PropTypes.number,
  footer: PropTypes.bool,
  header: PropTypes.bool,
  style: PropTypes.any,
};
ToolbarLeft.defaultProps = {};