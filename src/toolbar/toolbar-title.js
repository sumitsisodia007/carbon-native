import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, Platform } from 'react-native';
import { carbonStyles } from '../styles';

const cs = StyleSheet.create(carbonStyles);

const styles = StyleSheet.create({
  default: {
    ...Platform.select({
      ios: {
        fontSize: 17,
      },
      android: {
        fontSize: 20,
      },
    }),
    fontWeight: '600',
  },
});

export default function ToolbarTitle(props) {
  const color = props.color ? props.color : null;

  return (
    <Text {...props} style={[styles.default, color && cs[color]]}>
      {props.children}
    </Text>
  );
}

ToolbarTitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  color: PropTypes.string,
  footer: PropTypes.bool,
  header: PropTypes.bool,
  style: PropTypes.any,
};
ToolbarTitle.defaultProps = {};