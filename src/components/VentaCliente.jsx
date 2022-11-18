import React from 'react';
import Llamar from './Llamar';

class VentaCliente extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contenido: [
        {
          titulo: 'CENTRO DE ATENCIÓN AL CLIENTE',
          alt: 'Atencion al Cliente',
          hrefTel: 'tel:08005559998',
          tel: '0800 555 9998',
          horario: 'Lunes a Viernes de 9 a 20 hs.',
          facebook: 'www.facebook.com/GaliciaSeguros',
        },
        {
          titulo: 'CENTRO DE VENTA TELEFÓNICA',
          alt: 'Venta Telefonica',
          hrefTel: 'tel:08005559797',
          tel: '0800 555 9797',
          horario: 'Lunes a Viernes de 9 a 20 hs.',
        },
        {
          titulo: 'SOLICITA EL SERVICIO',
          alt: 'Solicita Servicio',
          hrefTel: 'tel:08005552272',
          tel: '0800 555 CASA (2272)',
          horario: 'Llamá las 24hs, los 365 días del año y solicitá el servicio que necesitás.',
        },
      ],
    };
  }

  render() {
    const { es } = this.props;
    const { device } = this.props;
    const { contenido } = this.state;
    const { titulo } = contenido[es];
    const { alt } = contenido[es];
    const { hrefTel } = contenido[es];
    const { tel } = contenido[es];
    const { horario } = contenido[es];
    return (
      <div className={device === 'mobile' && es === '1' ? 'p-1 my-5 lg:mb-0 lg:mt-0' : 'contacto__burbuja-parent p-1 mb-5 lg:mb-0'}>
        <div className='pl-3'>
          <h6 className='contacto__burbuja-titulo montserrat-b lg:text-sm'>{titulo}</h6>
        </div>
        <Llamar alt={alt} hrefTel={hrefTel} tel={tel} horario={horario} es={es} />
      </div>
    );
  }
}

export default VentaCliente;
