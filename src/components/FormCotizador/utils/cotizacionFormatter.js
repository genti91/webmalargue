export const calculateBultoMetrics = (bulto) => {
  // Convert all values to numbers
  const height = Number(bulto.height) / 100; // Convert cm to m
  const width = Number(bulto.width) / 100;
  const length = Number(bulto.length) / 100;
  const weight = Number(bulto.weight);
  const quantity = Number(bulto.quantity);

  // Calculate cubic meters for one bulto
  const metrosCubicosPorBulto = height * width * length;
  
  // Calculate total metrics
  const metrosCubicos = metrosCubicosPorBulto * quantity;
  const kilosReales = weight * quantity;
  const bultos = quantity;

  return {
    metrosCubicos,
    kilosReales,
    bultos
  };
};

export const formatCotizacionData = (form, bultos) => {
  // Calculate total metrics from all bultos
  const totalMetrics = bultos.reduce((acc, bulto) => {
    const metrics = calculateBultoMetrics(bulto);
    return {
      metrosCubicos: acc.metrosCubicos + metrics.metrosCubicos,
      kilosReales: acc.kilosReales + metrics.kilosReales,
      bultos: acc.bultos + metrics.bultos
    };
  }, { metrosCubicos: 0, kilosReales: 0, bultos: 0 });

  // Calculate kilosAforados using the same logic as tableGenerator
  const kilosAforados = (totalMetrics.metrosCubicos || 0) * 350 > totalMetrics.kilosReales 
    ? (totalMetrics.metrosCubicos || 0) * 350 
    : totalMetrics.kilosReales;

  return {
    tarifa: Number(form.tarifa),
    cpOrigen: Number(form.originCP),
    cpDestino: Number(form.destinyCP),
    idCpDestino: form?.idDestiny,
    idCpOrigen: form?.idOrigin,
    sucursalCanalizadora: form?.sucursal,
    kilosReales: Number(totalMetrics.kilosReales),
    metrosCubicos: Number(totalMetrics.metrosCubicos),
    bultosTotal: Number(totalMetrics.bultos),
    kilosAforados: Number(kilosAforados),
    valorDeclarado: Number(form.valorDeclarado),
    // Additional data needed for the prospecto and lead
    localidadOrigen: form.origin,
    localidadDestino: form.destiny,
    emailNotificacion: form.email,
    provinciaOrigen: form.originOption?.value,
    provinciaDestino: form.destinyOption?.value,
    descripcionBultos: form.message,
    arrayBultos: bultos.map(bulto => ({
      cantidadBultos: bulto.quantity,
      peso: bulto.weight,
      alto: bulto.height,
      ancho: bulto.width,
      largo: bulto.length
    })),
  };
};