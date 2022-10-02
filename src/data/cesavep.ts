export interface Info {
  color: string;
  items: string[];
};

interface CESAVEPType {
  maiz: Info,
  frijol: Info,
  maizYfrijol: Info,
};

export const CESAVEP: CESAVEPType = {
  maiz: {
    color: '#ffea00',
    items: [
      'SAN JUAN HUILULCO',
      'ALTEPEXI',
      'ZINACATEPEC',
      'SAN GABRIEL CHILAC',
      'SANTIGO MIAHUATLÁN',
      'SAN JOSE MIHUATÁN',
      'CUAYUCATEPEC',
      'TLACOTEPEC DE BENITO JUÁREZ',
      'TLALTEPANGO CHICAHUAXTLA XOCHINANACATLAN ',
      'LA PAHUA',
      'LOS NARANJOS',
      'LA NUEVA SABANA',
      'AMELUCA',
      'PANTEPEC',
      'NUEVO CABELLAL',
      'SAN JOSE',
      'EL ENCINAL',
      'SAN AGUSTIN TLAXCO',
      'SAN JUAN TEPULCO',
      'SANTA ISABEL TEPETZALA',
      'TLACAMILCO',
      'AYOTOXCO DE GUERRERO',
      'RANCHO NUEVO',
      'MANUEL AVILA CAMACHO (LA CIMA)',
      'EL CHACAL',
      'POZA VERDE',
      'TENAMPULCO',
    ],
  },
  frijol: {
    color: '#5ed63a',
    items: [
      'SAN JUAN HUILULCO',
      'SAN CARLOS',
      'SAN NICOLAS BUENOS AIRES',
      'GUADALUPE SARABIA',
      'ITZOTENO',
    ],
  },
  ['maiz y frijol']: {
    color: '#d0f76d',
    items: [
      'AXOCOPAN',
      'SAN JERONIMO COYULA',
      'CACALOXUCHITL',
      'SAN JUAN BAUTISTA',
      'TEZONTEOPAN DE BONILLA',
      'TLAPETLAHUAYA',
      'AHUATLAN',
      'RANCHO NUEVO MI CHAPITA',
      'SAN FRANCISCO EL ASTILLERO',
      'SANTA MARIA XOYATLA',
      'SAN PEDRO TEYUCA',
      'TEPEOJUMA',
      'TLAPANALA',
      'SANTO DOMINGO AYOTLICHA',
      'SANTA CATARINA COATEPEC',
      'TEPAPAYECA',
      'SAN LUIS CHALMA',
      'ATZITZIHUACAN',
      'SAN JUAN TEJUPA',
      'SAN MIGUEL AGUACOMULICAN',
      'SAN LUIS TEMALACAYUCA',
      'CUATRO RAYAS',
      'ALMOLONGA - EL PROGRESO',
      'SAN MATEO ZOYAMAZALCO',
      'Acatzingo',
      'Cuautinchan',
      'Genral felipe angeles',
      'Palmar de bravo',
      'Tecamachalco',
      'Tepeaca',
      'Quecholac',
      'SANTA MARIA IXTIYUCAN',
    ]
  }

}