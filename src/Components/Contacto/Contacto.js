import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './contacto.css';

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderBottom: '2px solid #FF0000',
              borderRight: '2px solid #FF0000',
            },
            '&:hover fieldset': {
              borderBottom: '2px solid #FF0000',
              borderRight: '2px solid #FF0000',
            },
            '&.Mui-focused fieldset': {
              borderBottom: '4px solid #FF0000',
              borderRight: '4px solid #FF0000',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#aaaa',
          borderWidth: '1px',
        },
          },
          '& .MuiInputLabel-root': {
            color: '#000',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#FF0000',
            backgroundColor: 'white'
          },
          '& .MuiInputLabel-root.Mui-shrink': {
            color: '#FF0000',
          },
          '& .MuiOutlinedInput-input': {
            color: '#000',
          },
        },
      },
    },
  },
});

function Contacto() {
  const sendEmail = (e) => {
    e.preventDefault();
    // Agregar validación de campos antes de enviar
    if (!mail || !name || !mensaje) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor complete todos los campos requeridos',
        icon: 'error'
      });
      return;
    }
    Swal.fire({
      title: 'Enviando mensaje...',
      text: 'Por favor espere',
      didOpen: () => {
        Swal.showLoading()
      }
    });
    emailjs.sendForm(
      'service_avyk5aff',
      'template_ayu8a6b6',
      e.target,
      'kGJMjsQGEXz5laSJ2'
    )
    .then((response) => {
      console.log('Estado:', response.status);
      console.log('Mensaje:', response.text);
      Swal.fire({
        title: '¡Mensaje enviado!',
        text: 'Gracias por contactarnos.',
        icon: 'success'
      }).then(() => {
        e.target.reset();
      });
    })
    .catch((err) => {
      console.error('Error completo:', err);
      Swal.fire({
        title: 'Error al enviar',
        text: 'Por favor intente nuevamente más tarde.',
        icon: 'error'
      });
    });
  };

  const [name, setName] = useState('');
  const [leyendaName, setLeyendaName] = useState('');
  const [errorName, setErrorName] = useState(false);
  const [mail, setMail] = useState('');
  const [leyendaMail, setLeyendaMail] = useState('');
  const [errorMail, setErrorMail] = useState(false);
  const re = /\S+@\S+\.+\S+/;
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');

  const validateName = () => {
    if (name.length > 45) {
      setErrorName(true);
      setLeyendaName('Ingrese un nombre válido');
    } else {
      setErrorName(false);
      setLeyendaName('');
    }
  };

  const validateMail = () => {
    if (!re.test(mail)) {
      setErrorMail(true);
      setLeyendaMail('Ingrese un correo electrónico válido');
    } else {
      setErrorMail(false);
      setLeyendaMail('');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <section className="contacto" id="contacto">
        <div className="containerTexto">
          <div>
            <h4 className="titulo">Contacto</h4>
            <p className="texto">
              En Megasteel, estamos aquí para ayudarte. Si tienes alguna
              consulta o necesitas más información sobre nuestros servicios,
              no dudes en completar el formulario. Nuestro equipo se pondrá
              en contacto contigo lo antes posible.
            </p>
            <p className='texto'>También podés contactarnos directamente a nuestro correo: <b className='negrita'>info@megasteel.com.ar</b></p>
          </div>
        </div>
        <div className="containerBox">
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1 },
            }}
            noValidate
            autoComplete="off"
            id="formulario"
            onSubmit={sendEmail}
            className="box"
          >
            <div>
              <TextField
                id="outlined-basic"
                name="nombre"
                label="Nombre"
                fullWidth
                variant="outlined"
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '4px',
                }}
                onChange={(e) => setName(e.target.value)}
                onBlur={validateName}
                error={errorName}
                helperText={leyendaName}
              />
              <TextField
                id="outlined-required"
                label="Correo electrónico"
                name="mail"
                variant="outlined"
                fullWidth
                type="email"
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                }}
                onChange={(e) => setMail(e.target.value)}
                onBlur={validateMail}
                error={errorMail}
                helperText={leyendaMail}
              />
              <TextField
                id="outlined-basic"
                label="Teléfono"
                name="tel"
                type="number"
                fullWidth
                variant="outlined"
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                }}
                onChange={(e) => setTelefono(e.target.value)}
              />

              


              <TextField
                id="outlined-multiline-static"
                label="Mensaje"
                name="msg"
                multiline
                fullWidth
                rows={4}
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                }}
                onChange={(e) => setMensaje(e.target.value)}
              />
              <Button
                variant="contained"
                size="lg"
                className="boton"
                type="submit"
              >
                Enviar mensaje
              </Button>
            </div>
          </Box>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default Contacto;