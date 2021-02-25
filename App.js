import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import Odoo from './node_modules/odoo-xmlrpc/lib/index';
var Odoo = require ('./node_modules/odoo-xmlrpc/lib/index');
//var Odoo = require('odoo-xmlrpc');
var odoo = new Odoo({
  url: 'https://siit.itsa.edu.mx',
  port: '',
  db: 'itsa900',
  username: 'javier@itsa.edu.mx',
  password: 'jcl0622'
});

// siit_registar_alumno()

// [nombre, apellidoM, apM, correo,password,curp,email]

export default function App() {

  odoo.connect(function (err) {
    if (err) { return console.log(err); }
    console.log('Connected to Odoo server. user esta conectado:');
    var inParams = [];
    inParams.push('');
    inParams.push('15020385');
    var params = [];
    params.push(inParams);
    odoo.execute_kw('itsa.escolares.alumnos', 'siit_getalumno', params, function (err2, value2) {
        if (err2) { return console.log(err2); }
        console.log('Result: ', value2);
        console.log('Result:',value2.state);
        console.log('Result:',value2.carrera);
        console.log('Result:',value2.result);
        console.log('Result:',value2.ncontrol);
        console.log('Result:',value2.nombre);

    });
  });

  odoo.connect(function (err) {
    if (err) { return console.log(err); }
    console.log('Connected to Odoo server. user esta conectado:');
    var inParams = [];
    inParams.push('');
    inParams.push('15020357');
    var params = [];
    params.push(inParams);
    odoo.execute_kw('itsa.escolares.alumnos', 'siit_getalumno', params, function (err2, value2) {
        if (err2) { return console.log(err2); }
        console.log('Result: ', value2);
    });
  });

  odoo.connect(function (err) {
    if (err) { return console.log(err); }
    console.log('Connected to Odoo server. user esta conectado:');
    var inParams = [];
    inParams.push('');
    inParams.push('15020392');
    var params = [];
    params.push(inParams);
    odoo.execute_kw('itsa.escolares.alumnos', 'siit_getalumno', params, function (err2, value2) {
        if (err2) { return console.log(err2); }
        console.log('Result: ', value2);
    });
  });


  
  
//   odoo.connect(function (err) {
//     if (err) { return console.log(err); }
//     console.log('Connected to Odoo server.');
//     var inParams = [];
//     inParams.push('read');
//     inParams.push('15020357'); //raise_exception
//     var params = [];
//     params.push(inParams);
//     odoo.execute_kw('itsa.escolares.alumnos', 'siit_getalumno', params, function (err, value) {
//         if (err) { return console.log(err); }
//         console.log('Result: ', value);
//     });
// });
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on fasdfyour app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
