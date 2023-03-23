import React from 'react'
import { BannerHeader } from '../../components/BannerHeader/BannerHeader'
import headerPrivacyPolicy from '../../assets/img/header-politicas-privacidad.png'
import { Stack } from 'react-bootstrap'
import { useWindowSize } from '../../hooks/useWindowSize'

const PrivacyPolicy = () => {
  const { width } = useWindowSize()

  return (
    <div>
      <BannerHeader
        lineaPrincipal='Politica Privacidad'
        image={headerPrivacyPolicy}
      />
      <Stack
        style={{
          margin: width > 1440 ? '96px 323px 104px 323px' : '64px 24px',
        }}
      >
        <h2 style={{ color: '#2F3394', marginBottom: '40px' }}>
          Estas son nuestras politicas de privacidad
        </h2>
        <p>
          Estos términos y condiciones generales de uso y política de privacidad
          (en adelante y en conjunto los “
          <strong>TERMINOS Y CONDICIONES</strong>”) constituyen el acuerdo que
          regirá el uso, alcance y vigencia del sitio del Expreso Malargüe S.A.,
          disponible en el sitio web{' '}
          <a href='https://expresomalargue.com.ar/'>
            https://expresomalargue.com.ar/
          </a>{' '}
          (en adelante, el <strong>“PORTAL</strong>” o{' '}
          <strong>PÁGINA WEB</strong>”), de titularidad de Expreso Malargüe S.A
          (en adelante, <strong>LA COMPAÑIA</strong>”). Para utilizar los
          contenidos de la <strong>PÁGINA WEB</strong> y en particular ejercer
          sus funciones como usuario registrado, Usted deberá en carácter de
          usuario aceptar plena, voluntaria y expresamente estos Términos y
          Condiciones.
          <br />
          <br />
          El uso de los servicios del <strong>PORTAL</strong> debe efectuarse de
          conformidad con los presentes <strong>TERMINOS Y CONDICIONES</strong>.
          En consecuencia, quien acceda o utilice el <strong>PORTAL</strong>,
          sus servicios o contenido (en adelante, el USUARIO), debe leer atenta
          y previamente los <strong>TERMINOS Y CONDICIONES</strong> cada vez que
          se proponga utilizar nuestros servicios y, en su caso, aceptarlos. El
          acceso y uso del <strong>PORTAL</strong> es voluntario y gratuito.{' '}
          <br />
          <br />
          <strong>EL USUARIO</strong> se considerará como USUARIO registrado
          cuando complete sus datos en el formulario cargado al efecto en la{' '}
          <strong>PÁGINA WEB</strong> y acepte los presentes{' '}
          <strong>TERMINOS Y CONDICIONES</strong> y el tratamiento de datos
          personales. <br />
          <br />
          En cualquier caso, para revestir la condición de USUARIO, en cualquier
          variante, el mismo deberá tener 18 años o más. Las personas menores de
          edad, a partir de los 13 años, sólo podrán utilizar su cuenta con
          autorización del representante legal, quien responderá por todas las
          acciones y obligaciones que se deriven de la utilización de esa cuenta
          y quien deberá velar por el uso responsable y adecuado de ella en
          atención a la madurez del menor de edad que autorice. Asimismo, la
          persona que desee operar en representación de una empresa deberá
          contar con facultades suficientes para contratar a nombre de ella.{' '}
          <br />
          <br />
          El ingreso a nuestra <strong>PÁGINA WEB</strong> constituye el
          consentimiento del <strong>USUARIO</strong>
          para utilizar la misma, sus servicios y contenidos sin contravenir la
          legislación vigente, la buena fe, la moral, buenas costumbres y el
          orden público. La violación de estos{' '}
          <strong>TERMINOS Y CONDICIONES</strong> o de cualquiera de las
          condiciones particulares de uso de la <strong>PÁGINA WEB</strong>, o
          la comisión de actos por parte del <strong>USUARIO</strong> que a
          criterio de <strong>LA COMPAÑÍA</strong> constituyan conductas
          abusivas, lesivas o ilícitas, generará el derecho a <strong>LA COMPAÑÍA</strong> a
          denegar de manera inmediata el acceso a la <strong>PÁGINA WEB</strong>{' '}
          y/o a bloquear la cuenta y por consecuente la prestación del servicio
          al USUARIO en falta. <br />
          <br />
          Queda terminantemente prohibido todo uso de la{' '}
          <strong>PÁGINA WEB</strong> con fines ilícitos que perjudiquen o
          puedan dañar la utilización y normal funcionamiento del mismo., dando
          el mismo el derecho a <strong>LA COMPAÑÍA</strong> para ejercer las
          acciones legales necesarias a fin de reparar los daños de carácter
          patrimoniales como extra patrimoniales producidos tanto a <strong>LA COMPAÑÍA</strong>
          como a terceros. <br />
          <br />
          El remitente presta declaración jurada dejando expresa constancia que
          no se despachan encomiendas perecederas, productos corrosivos,
          tóxicos, radioactivos, inflamables y/o explosivos, ninguna clase de
          animal, con o sin vida, plantas sin importar su condición, como así
          tampoco ningún bien o producto que esté prohibido comercializar dentro
          del territorio de la República Argentina o que que por su naturaleza,
          forma o acondicionamiento puedan dañar al personal, u otros envíos o
          al equipamiento postal, no pudiendo responsabilizar a{' '}
          <strong>LA COMPAÑÍA</strong> por el secuestro o estado de las mismas.
          En esa línea, no se podrán transportar En caso de obrar en
          contravención a estas pautas o de falsear la declaración requerida, la
          acción del contratante no habilita la posibilidad de reclamo alguno
          sea judicial o extrajudicial. La declaración jurada contiene asimismo
          el valor declarado por <strong>EL USUARIO </strong>
          del paquete y/o bulto a despachar. Pasados los 30 días de la fecha de
          envío sin que haya sido retirada la encomienda, la misma se
          considerara abandonada en los términos dispuestos por el Código Civil
          y Comercial de la Nación. <br />
          <br />
          Se deja expresa constancia que <strong>LA COMPAÑÍA</strong> transporta
          bultos cerrados desconociendo el contenido, quedando el mismo en la
          esfera de responsabilidad del remitente, el cual debe declarar el
          valor real de lo encomendado. La empresa solo será responsable para
          los casos de pérdida total de la encomienda, para cuyo caso la misma
          responderá hasta saldar el valor declarado por el remitente al momento
          de realizar el despacho de la encomienda., no siendo exigible un valor
          mayor al declarado por la aplicación de ningún tipo de tasa de interés
          y/o actualización. <br />
          <br />
          La empresa no será responsable por la pérdida o rotura de los objetos
          de valor como alhajas, documentos, dinero y otros valores similares,
          ni bienes frágiles, como artículos electrónicos, vidrio, cristalería,
          espejos y/o azulejos, siendo la presente enumeración meramente
          enunciativa y no taxativa. <br />
          <br />
          Cualquier reclamo deberá realizarse con anterioridad a retirarse del
          mostrador o bien en el momento en el cual se retire el personal que
          transportó la mercadería hasta el domicilio entendiendo que la
          encomienda fue retirada y/o recibida conforme si el destinatario firma
          la orden de retiro de conformidad y no realiza reclamo alguno al
          momento del retiro de la sucursal o bien del personal que transportó
          la mercadería hasta el domicilio. <br />
          <br />
          Para el caso de que surgieran controversias, las partes renuncia a
          cualquier otro fuero o jurisdicción que pudiera corresponderles y
          aceptan someter la controversia a la jurisdicción de los tribunales
          ordinarios de la Ciudad Autónoma de Buenos Aires, por sobre cualquier
          otro que pudiera corresponder. <br />
          <br />A través de la <strong>PÁGINA WEB</strong>, los{' '}
          <strong>USUARIOS</strong> tendrán acceso a diversos servicios, que
          podrán ampliarse, modificarse o eliminarse de acuerdo a lo que{' '}
          <strong>LA COMPAÑÍA</strong> establezca. Se detallan a continuación
          algunos de los productos y/o servicios disponibles en el{' '}
          <strong>PORTAL</strong>: Información institucional, información y
          participación en promociones vigentes, asesoramiento on-line,
          información sobre productos y servicios, orden de pedido on-line,
          retiro en sucursales. Se deja expresa constancia que esta lista de
          servicios reviste carácter enumerativo y no taxativo, pudiendo surgir
          nuevos productos y/o servicios.
          <br />
          <br />
          <strong>LA COMPAÑÍA</strong> podrá, en cualquier momento, sin previo
          aviso y a su exclusivo criterio, modificar o eliminar el contenido,
          estructura, diseños, servicios y condiciones de acceso o de uso de la{' '}
          <strong>PÁGINA WEB</strong>, sin necesidad de previo consentimiento de
          los <strong>USUARIOS</strong>. Dichos cambios tendrán vigencia a
          partir del momento en que sean publicados en la
          <strong>PÁGINA WEB</strong>, o desde el momento en que{' '}
          <strong>LA COMPAÑÍA</strong> lo indique expresamente a través de sus
          canales de comunicación. Al hacer uso del
          <strong>PÁGINA WEB</strong>, en forma posterior a cualquiera de las
          modificaciones indicadas precedentemente, dicho uso implicará la
          aceptación por parte del <strong>USUARIO</strong> de los nuevos
          términos y condiciones comerciales establecidos. Siempre que las
          condiciones de prestación de nuestros servicios sean modificadas, se
          requerirá al USUARIO registrado que, previo a utilizar nuestros
          servicios en tal carácter, lea detenidamente los nuevos{' '}
          <strong>TERMINOS Y CONDICIONES</strong> y los acepte. En caso de no
          aceptación de la modificación de los{' '}
          <strong>TERMINOS Y CONDICIONES</strong>, su operación en la
          <strong>PÁGINA WEB</strong> podrá verse restringida o resultar nula.
          Asimismo, para los
          <strong> USUARIOS</strong> que incumplan los{' '}
          <strong>TERMINOS Y CONDICIONES</strong> previamente aceptados,
          <strong>LA COMPAÑÍA</strong> podrá en cualquier momento y sin previa
          notificación dar de baja el usuario o restringir su uso de la{' '}
          <strong>PÁGINA WEB</strong>.
          <br />
          <br />
          El USUARIO que requiera acceder a servicios que demanden solicitud
          previa de registración, lo hará a través de un formulario en línea (el
          “FORMULARIO DE REGISTRO”), que deberá completar y enviar, donde se le
          solicitarán su tipo y número de documento, fecha de nacimiento,
          nombre, apellido, dirección de e-mail, teléfono, ocupación, domicilio
          completo de entrega y domicilio alternativo (en adelante, “DATOS
          PERSONALES”). Para un correcto funcionamiento de los servicios
          prestados a través del
          <strong> PORTAL</strong>, es necesario y a cargo de los{' '}
          <strong>USUARIOS</strong> que mantengan sus DATOS PERSONALES
          actualizados. Si el usuario no cumpliera esta obligación, exime de
          responsabilidad a <strong>LA COMPAÑÍA</strong> por errores en la
          entrega de la mercadería.
          <br />
          <br />
          En el mismo acto en que el USUARIO se registre, se le solicitará que
          elija un nombre de USUARIO y una clave que le permitirá acceder en el
          futuro al <strong>PORTAL</strong> y a otros servicios a él asociados
          como, por ejemplo, la suscripción al newsletter de ofertas y
          promociones. En la elección del nombre y de la clave de USUARIO, no
          podrá valerse de ninguna denominación que altere la moral y buenas
          costumbres o término alguno que infrinja las normas vigentes o los
          derechos de terceros. En tal caso, <strong> LA COMPAÑIA</strong> les
          solicitará que modifique o ingrese una nueva clave y/o nombre de
          USUARIO.
          <br />
          <br />
          Al registrase, <strong>EL USUARIO</strong> deberá brindar información
          veraz, completa y precisa. <strong>EL USUARIO</strong> será el único
          responsable por la información proporcionada y por la actividad que
          desarrolle en la <strong>PÁGINA WEB</strong> y deberá mantener seguro
          el acceso a la mismo. <strong>LA COMPAÑÍA</strong> podrá solicitar
          algún comprobante o dato adicional a efectos de corroborar la
          veracidad de los DATOS PERSONALES de los <strong>USUARIOS</strong> de
          la <strong>PÁGINA WEB</strong> podrá suspender a aquellos{' '}
          <strong>USUARIOS</strong> cuyos datos no hayan podido ser confirmados.
          En ningún caso un USUARIO podrá usar la cuenta de un tercero.{' '}
          <strong>EL USUARIO</strong> que utilice una cuenta ajena será el único
          y exclusivo responsable por los daños y perjuicios que ello ocasione.
          <br />
          <br />
          El USUARIO es el único responsable de la elección y uso de su nombre
          de usuario y clave, pudiendo en cualquier momento cambiarlos, siempre
          a condición de que respete lo señalado anteriormente. En caso de
          olvido, podrá recuperar su contraseña mediante el mecanismo previsto
          en el acceso previsto a ese efecto. En este caso,{' '}
          <strong>LA COMPAÑÍA</strong> enviará al correo electrónico informado
          en el formulario de registro el nombre de usuario y clave elegidos
          oportunamente en el momento de la registración.
          <br />
          <br />
          Es responsabilidad del <strong>USUARIO</strong> comunicar a{' '}
          <strong>LA COMPAÑÍA</strong> a la mayor brevedad el robo de la clave,
          como cualquier riesgo de acceso por parte de un tercero. En
          consecuencia, <strong>EL USUARIO</strong> se obliga a mantener en
          secreto, con carácter de información confidencial y reservada, su
          nombre de USUARIO y claves de acceso, siendo responsable de cualquier
          daño y perjuicio de toda naturaleza derivada del mal uso realizado por
          sí o por terceros, tanto contra el mismo USUARIO como los que pueda
          sufrir <strong>LA COMPAÑÍA</strong> como consecuencia de ello.
          <br />
          <br />
          La omisión o la inexactitud de cualquier de los DATOS PERSONALES
          solicitados en el FORMULARIO DE REGISTRO podrá impedir su registración
          y, en consecuencia, el acceso a los servicios del{' '}
          <strong>PORTAL</strong> que requieren previa registración.
          <br />
          <br />
          El USUARIO acepta y consiente libre y expresamente que los DATOS
          PERSONALES facilitados en uso de total discernimiento a{' '}
          <strong>LA COMPAÑÍA</strong>, sean objeto de tratamiento e
          incorporados en un archivo de datos que quedará bajo la
          responsabilidad de <strong>LA COMPAÑÍA</strong>, con domicilio en
          Avenida José Ignacio Garmendia 4805, Ciudad Autónoma de Buenos Aires,
          con el objetivo de brindar adecuadamente los servicios que se ofrecen
          a través del <strong> PORTAL</strong>. <br />
          <br />
          En particular, se informa que <strong>LA COMPAÑÍA</strong> podrá
          recopilar los siguientes datos personales: Datos de identificación
          personal: nombre y apellido, DNI, Nro. de CUIL. Datos de contacto:
          teléfono fijo y/o móvil, domicilio, código postal, correo electrónico,
          Datos impositivos y de financiación: Categoría de IVA e IIBB, si
          correspondiere, Número de tarjetas de crédito y/o débito, nombre de
          bancos y cualquier medio de pago asociado que EL CLIENTE quiera
          utilizar. La lista efectuada se realiza a modo ejemplificativo y de
          ningún modo podrá interpretarse como taxativa. La{' '}
          <strong>PÁGINA WEB</strong> utiliza una tecnología de identificación
          basada en “COOKIES”, la que resulta necesaria para utilizar los
          servicios y contenidos que brinda el <strong>PORTAL</strong>. Las
          “COOKIES” son pequeños ficheros de texto que son enviados vía Internet
          a su navegador y que quedan almacenados en el disco duro de su
          computadora, lo que permite reconocer las máquinas que acceden a la{' '}
          <strong>PÁGINA WEB</strong>. En ningún caso esos elementos servirán
          para identificar a una persona determinada, ya que su uso será
          meramente técnico; sin embargo, son útiles para ofrecer un mejor
          servicio a los <strong>USUARIOS</strong> y permitir la realización de
          contenidos avanzados. El USUARIO al aceptar los{' '}
          <strong>TERMINOS Y CONDICIONES</strong> aceptara indefectiblemente el
          uso de COOKIES a fin de que <strong>LA COMPAÑÍA</strong> brinde un
          mejor servicio. <br />
          <br />
          Para cuando <strong>EL USUARIO</strong> utilice el servicio de retiro
          en sucursal el horario en el que se podrá retirar el despacho es de 10
          a 16hs. El horario es meramente estimativo y el mismo podrá variar
          dependiendo la sucursal de retiro, corriendo por parte del{' '}
          <strong>usuario</strong> la responsabilidad de informarse sobre el
          horario de cada sucursal. <br />
          <br />
          La disponibilidad del producto o bulto despachada por obvias razones
          NO es inmediata. El USUARIO debe aguardar la confirmación de que el
          envió llego a la sucursal de destino, siendo dicha confirmación
          realizada por correo electrónico o telefónicamente.
          <br />
          <br />
          Una vez recibida dicha notificación, <strong>EL USUARIO</strong> puede
          presentarse en la sucursal a fin de retirar lo recibido. El tiempo
          previsto para el retiro de la encomiendo de la sucursal es de treinta
          (30) días corridos.
          <br />
          <br />
          Para los casos que el bulto y/o producto y/o encomienda tenga como
          destino final un domicilio particular se entregará a pie de camión
          (vereda), el ingreso de la mercadería al domicilio SIEMPRE correrá a
          cuenta del cliente.
          <br />
          <br />
          Sólo el titular de la tarjeta de crédito con la que se efectuó la
          compra podrá retirar el pedido, presentando su DNI y la tarjeta
          correspondiente.
          <br />
          <br />
          <strong> LA COMPAÑIA</strong> tiene a disposición del{' '}
          <strong>USUARIO</strong> un servicio de asesoramiento on line mediante
          el cual <strong>EL USUARIO</strong>, previa registración, podrá
          obtener información acerca de sus envíos o recibir ayuda en caso de
          tener inconvenientes o dudas que surjan de la prestación del servicio.
          LA COMPAÑIA no es responsable por la imposibilidad del{' '}
          <strong>USUARIO</strong> de establecer contacto con la{' '}
          <strong>PÁGINA WEB</strong> con el Chat, por problemas de conexión o
          saturación de atención por parte de <strong> LA COMPAÑIA</strong> ni
          por cualquier otro inconveniente que impida que{' '}
          <strong>EL USUARIO</strong> se conecte. LA COMPAÑIA no garantiza la
          disponibilidad y continuidad del funcionamiento del Chat existiendo
          otros canales de atención al cliente a los cuales EL USUARIO puede
          recurrir, quedando eximida de toda responsabilidad por los daños de
          cualquier naturaleza que puedan presentarse, por la falta de
          disponibilidad y continuidad de funcionamiento del Chat. <br />
          <br />
          Todos los contenidos de esta <strong>PÁGINA WEB</strong>, incluidos,
          pero no limitado a todos los textos (notas, informes, comentarios),
          gráficos, marcas, logos, iconos, imágenes, fotografías, software,
          hardware, archivos de cualquier tipo y cualquier otra información
          disponible en el <strong>PORTAL</strong> son de propiedad exclusiva de
          EXPRESO MALARGÜE S.A. o de terceras personas que la han autorizado a
          su publicación y/o utilización. Los mismos están protegidos por las
          leyes de propiedad intelectual y de derecho de autor. En consecuencia,
          cualquier retransmisión, reproducción, alteración, publicación o
          utilización de cualquier material precedentemente mencionado, por
          cualquier medio y, de cualquier forma, se encuentra estrictamente
          prohibido EXPRESO MALARGÜE S.A no concede ninguna licencia o
          autorización de uso de ninguna clase sobre sus derechos de propiedad
          intelectual o sobre cualquier otra propiedad o derecho relacionado con
          el <strong>PÁGINA WEB</strong>, los servicios o los contenidos del
          mismo. <br />
          <br />
          El uso del <strong>PÁGINA WEB</strong> realizará bajo exclusiva
          responsabilidad del USUARIO. <strong> LA COMPAÑIA</strong> no asume
          ningún tipo de responsabilidad que se derive de cualquier daño o
          perjuicio de cualquier naturaleza que se pudieran originar al USUARIO
          como consecuencia del acceso y utilización de la{' '}
          <strong>PÁGINA WEB</strong>, incluyendo los relacionados con:
          <br />
          <br />
          <ul style={{ listStyle: 'none' }}>
            <li>
              1) La falta de disponibilidad, continuidad, acceso y efectivo
              funcionamiento del <strong>PORTAL</strong>o sus servicios.
            </li>
            <li>
              2) La falta de licitud, calidad, fiabilidad, utilidad y
              disponibilidad de servicios prestados por terceros y puestos a
              disposición de los <strong>USUARIOS</strong> en la{' '}
              <strong>PÁGINA WEB</strong>.
            </li>
            <li>
              3) Daños ocasionados por virus, programas maliciosos, o lesivos en
              los contenidos y/o cualquier otro agente que pueda llegar a
              infectar o a afectar de cualquier modo el sistema de computación
              utilizado por El USUARIO.
            </li>
            <li>
              4) La recepción, obtención, almacenamiento, difusión o transmisión
              por parte de los <strong>USUARIOS</strong> de los contenidos.
            </li>
            <li>
              5) El uso ilícito, negligente, fraudulento, contrario a estas
              condiciones generales de uso, a la buena fe o al orden público por
              parte de los <strong>USUARIOS</strong>.
            </li>
            <li>
              6) El incumplimiento por parte de terceros de sus obligaciones o
              compromisos en relación con los servicios prestados a los{' '}
              <strong>USUARIOS</strong> a través de la{' '}
              <strong>PÁGINA WEB</strong>.
            </li>
          </ul>
          <br />
          La enumeración precedente posee carácter enunciativo y en ningún caso
          exclusivo ni excluyente.
          <br />
          <br />
          El USUARIO debe responder por los daños y perjuicios de toda
          naturaleza que <strong> LA COMPAÑIA</strong> pudiera sufrir como
          consecuencia del incumplimiento de cualquiera de las obligaciones a
          las que queda sometido por estos
          <strong>TERMINOS Y CONDICIONES</strong>. En caso de que{' '}
          <strong> LA COMPAÑIA</strong> tuviera que afrontar sanción, multa,
          condena o indemnización de cualquier tipo que hubiere provocado{' '}
          <strong>EL USUARIO</strong> por el incumplimiento de cualquiera de los
          puntos establecidos en las presentes condiciones generales de uso,{' '}
          <strong>EL USUARIO</strong>
          debe rembolsar la cantidad que se hubiere abonado por tal motivo en un
          plazo de treinta días de recibida la notificación que se lo indique.
          <br />
          <br />
          <strong style={{ textDecoration: 'underline' }}>
            Queda terminantemente prohibido:
          </strong>
          <br />
          <ul>
            <li>
              Intentar infringir los sistemas de autenticación, verificación de
              identidad y seguridad del servidor; esto incluye y no se limita a
              tratar de acceder a datos del <strong>USUARIO</strong>, intentar
              ingresar al servidor o cuentas sin contar con la expresa
              autorización para hacerlo.
            </li>
            <li>
              Intentar generar interrupciones en las comunicaciones de Internet,
              sobrecargar un servicio y/o efectuar ataques informáticos.
            </li>
            <li>
              Efectuar cualquier tipo de monitoreo que implique la
              interceptación de información destinada y no destinada a los{' '}
              <strong>USUARIOS</strong>. Utilizar cualquier programa destinado a
              interferir en el normal uso del <strong>PÁGINA WEB</strong>.
            </li>
          </ul>
          Sanciones <br />
          <br />
          En caso de que la
          <strong>EL USUARIO</strong> incumpliera una ley o los Términos y
          Condiciones, podremos advertir, suspender, restringir o inhabilitar
          temporal o definitivamente su cuenta, sin perjuicio de otras sanciones
          que se pudieran establecer. Responsabilidad{' '}
          <strong>LA COMPAÑÍA</strong> será responsable por cualquier defecto en
          la prestación de su servicio, en la medida en que le sea imputable y
          con el alcance previsto en las leyes vigentes. <br />
          <br />
          Tarifas
          <br />
          <br />
          EXPRESO MALARGÜE podrá cobrar por sus servicios y{' '}
          <strong>EL USUARIO</strong> se compromete a abonarlos a tiempo. En ese
          sentido, se deja expresa constancia que <strong>EL USUARIO</strong>{' '}
          podrá modificar o eliminar las tarifas en cualquier momento con el
          debido preaviso establecido en estos Términos y Condiciones. De la
          misma manera, se podrá modificar las tarifas temporalmente por
          promociones en favor de las Personas Usuarias. De esa manera, la mora
          en el pago de la factura se producirá de forma automática, por el mero
          transcurso del tiempo, sin necesidad de intimación judicial o
          prejudicial alguna. En ese sentido, se devengará una tasa de interés
          de dos veces la tasa activa del Banco de la Nación Argentina desde el
          primer día de mora y hasta la fecha de la efectivización del pago.
          <br />
          <br />
          Para conocer el detalle de las tarifas de cada servicio,{' '}
          <strong>EL USUARIO</strong>
          deberá consultar los términos y condiciones correspondientes. En todos
          los casos se emitirá la factura de conformidad con los datos fiscales
          que las personas tengan cargados en su cuenta.
          <br />
          <br />
            Propiedad Intelectual
          <br />
          <br />
          <strong>LA COMPAÑÍA</strong> es propietaria de todos los derechos de
          propiedad intelectual sobre sus sitios, todo su contenido, servicios,
          productos, marcas, nombres comerciales, logos, diseños, imágenes,
          frases publicitarias, derechos de autor, dominios, programas de
          computación, códigos, desarrollos, software, bases de datos,
          información, tecnología, patentes y modelos de utilidad, diseños y
          modelos industriales, secretos comerciales, entre otros (“Propiedad
          Intelectual”) y se encuentran protegidos por leyes nacionales e
          internacionales.
          <br />
          <br />
          Aunque <strong>LA COMPAÑÍA</strong> otorga permiso para usar sus
          productos y servicios conforme a lo previsto en los Términos y
          Condiciones, esto no implica una autorización para usar su Propiedad
          Intelectual, excepto consentimiento previo y expreso de EXPRESO
          MALARGÜE y/o sus sociedades vinculadas. En cualquier caso, los{' '}
          <strong>usuarios</strong> vendedores que usen dichos productos y
          servicios no podrán utilizar la Propiedad Intelectual de EXPRESO
          MALARGÜE de una manera que cause confusión en el público y deberán
          llevar a cabo su actividad comercial bajo una marca o nombre comercial
          propio y distintivo, que no resulte confundible con la marca EXPRESO
          MALARGÜE y su familia de marcas protegidas.
          <br />
          <br />
          Está prohibido usar nuestros productos o servicios para fines
          ilegales, realizar cualquier tipo de ingeniería inversa u obras
          derivadas, utilizar herramientas de búsqueda o de extracción de datos
          y contenidos de nuestra plataforma para su reutilización y/o crear
          bases de datos propias que incluyan en todo o en parte nuestro
          contenido sin nuestra expresa autorización. Está también prohibido el
          uso indebido, sin autorización y/o contrario a la normativa vigente
          y/o que genere confusión o implique uso denigratorio y/o que le cause
          perjuicio, daños o pérdidas a <strong>LA COMPAÑÍA</strong> y/o a sus
          sociedades relacionadas. La utilización de los productos y servicios
          de <strong>LA COMPAÑÍA</strong> tampoco implica la autorización para
          usar propiedad intelectual de terceros que pueda estar involucrada,
          cuyo uso quedará bajo exclusiva responsabilidad del usuario. <br />
          <br />
          En caso que una Persona Usuaria o cualquier publicación infrinja la
          Propiedad Intelectual de EXPRESO MALARGÜE o de terceros, EXPRESO
          MALARGÜE podrá remover dicha publicación total o parcialmente),
          sancionar al usuario conforme a lo previsto en estos Términos y
          Condiciones y ejercer las acciones extrajudiciales y/o judiciales
          correspondientes.
          <br />
          <br />
          Indemnidad
          <br />
          <br />
          <strong>EL USUARIO</strong> mantendrá indemne a{' '}
          <strong>LA COMPAÑÍA</strong> y sus sociedades relacionadas, así como a
          quienes la dirigen, suceden, administran, representan y/o trabajan en
          ellas, por cualquier reclamo administrativo o judicial iniciado por
          otras Personas Usuarias, terceros o por cualquier Organismo,
          relacionado con sus actividades en el Ecosistema MELI.
          <br />
          <br />
          En virtud de esa responsabilidad, podrán realizar compensaciones,
          retenciones u otras medidas necesarias para la reparación de pérdidas,
          daños y perjuicios, cualquiera sea su naturaleza.
          <br />
          <br />
          La <strong>PÁGINA WEB</strong> es controlada y llega a usted por{' '}
          <strong> LA COMPAÑIA</strong> desde sus instalaciones en la República
          Argentina. <strong> LA COMPAÑIA</strong> se abstiene de manifestar que
          el <strong>PÁGINA WEB</strong> es apropiada para ser accedida desde
          otros lugares, como así también que se encuentre disponible en
          aquéllos. Los
          <strong>USUARIOS</strong> que accedan a la <strong>PÁGINA WEB</strong>{' '}
          o hagan uso de ésta desde otras jurisdicciones lo hacen por su propia
          voluntad y asumen la responsabilidad de respetar la legislación
          argentina y en caso que ésta así lo establezca, de no acceder a la{' '}
          <strong>PÁGINA WEB</strong>.
          <br />
          <br />
          Toda notificación u otra comunicación que deba efectuar{' '}
          <strong> LA COMPAÑIA</strong> al USUARIO sobre cualquier tema referido
          a la relación vigente entre el USUARIO y <strong> LA COMPAÑIA</strong>{' '}
          como titular del <strong>PORTAL</strong>, podrá realizarse a través
          del correo electrónico o bien por carta documento dirigida al
          domicilio que <strong>EL USUARIO</strong> haya informado
          oportunamente. En todo momento <strong>EL USUARIO</strong>
          podrá comunicarse con <strong> LA COMPAÑIA</strong> por medio de
          correo electrónico a info@expresomalargue.com.ar. 
          <br /><br />
          La prestación del
          servicio tiene una duración indefinida. No obstante, ello,{' '}
          <strong> LA COMPAÑIA</strong> se encuentra plenamente facultada para
          dar por terminada, suspender, o interrumpir, cuando lo considere
          necesario, la prestación del servicio de la PÁGINA WEB y de cualquiera
          de sus restantes servicios. A su vez, el USUARIO podrá dar de baja su
          registración en cualquier momento y sin expresión de causa.
          <br />
          <br />
          Para el caso de que surgieran controversias las partes pactan los
          tribunales ordinarios de la Ciudad Autónoma de Buenos Aires, por sobre
          cualquier otro que pudiera corresponder.
        </p>
      </Stack>
    </div>
  )
}

export default PrivacyPolicy
