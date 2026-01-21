import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
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
            backgroundColor: 'white',
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

    if (!mail || !name || !mensaje || !tipoProyecto) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor complete todos los campos requeridos',
        icon: 'error',
      });
      return;
    }

    Swal.fire({
      title: 'Enviando mensaje...',
      text: 'Por favor espere',
      didOpen: () => {
        Swal.showLoading();
      },
    });

    emailjs
      .sendForm(
        'service_7n0jgza',
        'template_0hgb95f',
        e.target,
        '-ldtu1SG8fWB3AJ1j'
      )
      .then((response) => {
        console.log('Estado:', response.status);
        console.log('Mensaje:', response.text);
        Swal.fire({
          title: '¡Mensaje enviado!',
          text: 'Gracias por contactarnos.',
          icon: 'success',
        }).then(() => {
          e.target.reset();
          setTipoProyecto('');
        });
      })
      .catch((err) => {
        console.error('Error completo:', err);
        Swal.fire({
          title: 'Error al enviar',
          text: 'Por favor intente nuevamente más tarde.',
          icon: 'error',
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
  const [tipoProyecto, setTipoProyecto] = useState('');

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
            En Megabass te acompañamos en cada etapa de tu proyecto. Si tenés alguna consulta o querés contarnos tu idea para desarrollarla juntos, te invitamos a completar el formulario. Nuestro equipo se pondrá en contacto con vos a la brevedad.
            </p>
            <p className="texto">
            También podés escribirnos directamente a nuestro correo: {' '}
              <b className="negrita">info@megabass.com.ar</b>
            </p>
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
                name="nombre"
                label="Nombre y apellido"
                fullWidth
                variant="outlined"
                sx={{ backgroundColor: '#fff', borderRadius: '4px' }}
                onChange={(e) => setName(e.target.value)}
                onBlur={validateName}
                error={errorName}
                helperText={leyendaName}
              />

              <TextField
                label="Correo electrónico"
                name="mail"
                variant="outlined"
                fullWidth
                type="email"
                sx={{ backgroundColor: '#fff', borderRadius: '8px' }}
                onChange={(e) => setMail(e.target.value)}
                onBlur={validateMail}
                error={errorMail}
                helperText={leyendaMail}
              />

              <TextField
                label="Teléfono"
                name="tel"
                type="number"
                fullWidth
                variant="outlined"
                sx={{ backgroundColor: '#fff', borderRadius: '8px' }}
                onChange={(e) => setTelefono(e.target.value)}
              />

              {/* NUEVO CAMPO */}
              <TextField
                select
                label="Tipo de proyecto"
                name="tipoproyecto"
                fullWidth
                variant="outlined"
                sx={{ backgroundColor: '#fff', borderRadius: '8px' }}
                value={tipoProyecto}
                onChange={(e) => setTipoProyecto(e.target.value)}
              >
                <MenuItem value="Vivienda en Seco">Vivienda en Seco</MenuItem>
                <MenuItem value="Vivienda Tradicional">
                  Vivienda Tradicional
                </MenuItem>
                <MenuItem value="Oficina/Edificio">
                  Oficina / Edificio
                </MenuItem>
                <MenuItem value="Industrial">Industrial</MenuItem>
                <MenuItem value="Diseño">Diseño</MenuItem>
                <MenuItem value="Otro">Otro</MenuItem>
              </TextField>

              <TextField
                label="Mensaje"
                name="msg"
                multiline
                fullWidth
                rows={4}
                sx={{ backgroundColor: '#fff', borderRadius: '8px' }}
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
