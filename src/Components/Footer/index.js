import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  Linking,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

function Footer() {
  const [email, updateEmail] = useState('');
  const [message, updateMessage] = useState('');
  const [emailBorder, updateEmailBorder] = useState(0);
  const [messageBorder, updateMessageBorder] = useState(0);

  return (
    <View style={styles.container}>
      <View style={[styles.col, styles.left]}>
        <Text style={[styles.text, styles.heading]}>
          Any queries or feedbacks?
        </Text>
        <TextInput
          style={[
            styles.description,
            styles.formField,
            styles.formEmail,
            { borderWidth: emailBorder }
          ]}
          placeholder='Your email address'
          onChangeText={(text) => updateEmail(text)}
          value={email}
        />
        <TextInput
          style={[
            styles.description,
            styles.formField,
            styles.formMessage,
            { borderWidth: messageBorder }
          ]}
          multiline={true}
          placeholder='Your queries or feedbacks'
          onChangeText={(text) => updateMessage(text)}
          value={message}
        />
        <TouchableHighlight style={styles.formButton} onPress={submitForm}>
          <Text style={[styles.description, styles.text]}>Submit</Text>
        </TouchableHighlight>
      </View>
      <View style={[styles.col, styles.center]}>
        <Text style={[styles.text, styles.heading]}>Follow us here</Text>
        <View style={styles.socialContainer}>
          <TouchableHighlight
            onPress={() =>
              Linking.openURL('https://www.linkedin.com/company/anitab-org/')
            }
          >
            <Image
              style={[styles.socialImage]}
              source={require('./../../assets/linkedin-logo.png')}
            />
          </TouchableHighlight>
          <TouchableHighlight onPress={null}>
            <Image
              style={[styles.socialImage]}
              source={require('./../../assets/linkedin-logo.png')}
            />
          </TouchableHighlight>
          <TouchableHighlight onPress={null}>
            <Image
              style={[styles.socialImage]}
              source={require('./../../assets/linkedin-logo.png')}
            />
          </TouchableHighlight>
        </View>
      </View>
      <View style={[styles.col, styles.right]}>
        <Text style={[styles.text, styles.heading]}>Contact Us</Text>
        <Text style={[styles.text, styles.description]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum
          at neque a pharetra. Cras ornare placerat imperdiet. Aliquam erat
          volutpat. Cras rhoncus massa et molestie rutrum. Vivamus sit amet arcu
          et felis auctor auctor. Fusce nec augue nec lacus imperdiet viverra.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Ut ac leo risus. Aliquam a eleifend est, sit
          amet tempor nisi. Donec scelerisque elit ac lorem interdum sodales.
          Fusce at est id sem porttitor aliquam quis quis nibh. Morbi lobortis
          neque lectus, in rhoncus magna viverra ut.{' '}
        </Text>
      </View>
    </View>
  );

  function submitForm() {
    const emailRegex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    let error = 0;

    if (!email || !emailRegex.test(email)) {
      updateEmailBorder(2);
      error = 1;
    } else {
      updateEmailBorder(0);
    }

    if (!message) {
      updateMessageBorder(2);
      error = 1;
    } else {
      updateMessageBorder(0);
    }

    if (!error) {
      updateEmail('');
      updateMessage('');
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#101820',
    width: '100%',
    padding: 16,
    paddingTop: 24
  },
  col: { alignItems: 'center' },
  left: { width: 579 },
  center: { width: 245 },
  right: {
    width: 573,
    textAlign: 'center'
  },
  text: { color: '#FFFFFF' },
  heading: {
    fontSize: '1.4em',
    fontWeight: 500,
    paddingBottom: 22
  },
  description: {
    fontSize: '1em',
    fontWeight: 300
  },
  formField: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderRadius: 8,
    padding: 4,
    borderColor: 'red'
  },
  formEmail: { height: 38 },
  formMessage: {
    height: 161,
    marginVertical: 8
  },
  formButton: {
    width: 183,
    height: 47,
    borderRadius: 500,
    backgroundColor: '#54BCEB',
    alignItems: 'center',
    justifyContent: 'center'
  },
  socialContainer: { flexDirection: 'row' },
  socialImage: {
    height: 32,
    width: 32,
    borderRadius: '50%',
    marginHorizontal: 16
  }
});

export default Footer;