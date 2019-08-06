const mongoose = require('mongoose')
const Places = require('../models/Places.model')

const dbName = 'VisualTrip'
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true })

const places = [


  {
    name: 'Tallinn',
    url: 'https://res.cloudinary.com/ousmane11/image/upload/v1565073265/tommi-selander-4-bfQAAlELM-unsplash_xqkpcl.jpg',
    lat: 59.4372155,
    lon: 24.7453688,
    category: 'ciudad',
    localization: 'Tallin, Estonia',
    airport: 'TLL'
  },
  {
    name: 'Seychelles',
    url:
      'https://res.cloudinary.com/ousmane11/image/upload/v1565073264/Seychelles_ian-badenhorst-SuT2MhkdyBQ-unsplash_bjyjwh.jpg',
    lat: -4.6574977,
    lon: 55.4540146,
    category: 'playa',
    localization: 'Islas Seychelles',
    airport: 'SEZ'
  },
  {
    name: 'Jökulsárlón,Islandia',
    url: 'https://res.cloudinary.com/ebg-ester/image/upload/v1565082685/2.J%C3%B6kuls%C3%A1rl%C3%B3n.jpg',
    lat: 64.077664,
    lon: -16.231425,
    category: 'naturaleza',
    localization: 'Islandia',
    airport: 'KEF'
  },
  {
    name: 'Vancouver',
    url:
      'https://res.cloudinary.com/ousmane11/image/upload/v1565073263/Hadden_Park_Canada_deb-rousseau-5tCXFBXAom4-unsplash_w6kske.jpg',
    lat: 49.3414,
    lon: -123.12900000000002,
    category: 'ciudad',
    localization: 'Vancouver, Canadá',
    airport: 'YVR'
  },
  {
    name: 'San Fermines Pamplona',
    url:
      'https://res.cloudinary.com/ousmane11/image/upload/v1565073264/san-fermin-pamplona-navarra-0D7Wtqhe-AQ-unsplash_h25wnh.jpg',
    lat: 42.8185,
    lon: -1.6442600000000311,
    category: 'cultural',
    localization: 'Pamplona, España',
    airport: 'PNA'
  },
  {
    name: 'Maldivas',
    url: 'https://res.cloudinary.com/ousmane11/image/upload/v1565073265/Maldivas_love-maldives-5dXZJ-2ubMk-unsplash_zw4ou6.jpg',
    lat: 4.7064352,
    lon: 73.3287853,
    category: 'playa',
    localization: 'Islas Maldivas',
    airport: 'MLE'
  },
  {
    name: 'Agra India',
    url:
      'https://res.cloudinary.com/ousmane11/image/upload/v1565073263/Agra_India_ibrahim-rifath-Y6tBl0pTe-g-unsplash_vrsy8s.jpg',
    lat: 27.1752554,
    lon: 78.0098161,
    category: 'cultural',
    localization: 'Agra, India',
    airport: 'AGR'
  },
  {
    name: 'Chicago',
    url: 'https://res.cloudinary.com/ousmane11/image/upload/v1565073263/Chicago_US_max-bender-s4I1xpX_ny8-unsplash_smldlk.jpg',
    lat: 41.8755616,
    lon: -87.6244212,
    category: 'ciudad',
    localization: 'Chicago, EEUU',
    airport: 'ORB'
  },
  {
    name: 'Honolulu US',
    url: 'https://res.cloudinary.com/dalvmqu1q/image/upload/v1564993626/poke_hawaii_cgehar.jpg',
    lat: 21.318611,
    lon: -157.9225,
    category: 'gastronomia',
    localization: 'Honolulu, Hawai',
    airport: 'HNL'
  },
  {
    name: 'Konya Turkia',
    url: 'https://res.cloudinary.com/ousmane11/image/upload/v1565073264/hulki-okan-tabak-WevJJ3GxfnI-unsplash_md3eel.jpg',
    lat: 37.8719963,
    lon: 32.4844015,
    category: 'cultural',
    localization: 'Konya, Turquía',
    airport: 'KYA'
  },
  {
    name: 'Athens GR',
    url: 'https://res.cloudinary.com/dalvmqu1q/image/upload/v1564993626/Tzatziki_louis_hansel_griega_gkj6j0.jpg',
    lat: 37.979444,
    lon: 23.716111,
    category: 'gastronomia',
    localization: 'Atenas, Grecia',
    airport: 'ATH'
  },
  {
    name: 'Morocco',
    url: 'https://res.cloudinary.com/ousmane11/image/upload/v1565073264/Morocco_toa-heftiba-pcbSQTQr2-I-unsplash_uzcegd.jpg',
    lat: 31.0451,
    lon: -7.13103000000001,
    category: 'cultural',
    localization: 'Marruecos',
    airport: 'RAK'
  },
  {
    name: 'Huaraz, Perú',
    url: 'https://res.cloudinary.com/ebg-ester/image/upload/v1565082684/webmad0719/VisualTrip/Huaraz.jpg',
    lat: -9.362255,
    lon: -77.362237,
    category: 'naturaleza',
    localization: 'Huaraz, Perú',
    airport: 'LIM'
  },
  {
    name: 'Auckland NZ',
    url:
      'https://res.cloudinary.com/ousmane11/image/upload/v1565073263/Auckland_New_Zealand_dan-freeman-hIKVSVKH7No-unsplash_rk09uz.jpg',
    lat: -36.853904,
    lon: 174.763805,
    category: 'ciudad',
    localization: 'Auckland, Nueva Zelanda',
    airport: 'AKL'
  },
  {
    name: 'Rosario AR',
    url: 'https://res.cloudinary.com/dalvmqu1q/image/upload/v1565083800/asado_argentino_u8prsk.jpg',
    lat: -32.903611,
    lon: -60.784444,
    category: 'gastronomia',
    localization: 'Rosario, Argentina',
    airport: 'ROS'
  },
  {
    name: 'Dakar',
    url: 'https://res.cloudinary.com/ousmane11/image/upload/v1565073263/Dakar_Senegal_aliunix-NI265AcvQZs-unsplash_ryyod4.jpg',
    lat: 14.693425,
    lon: -17.447938,
    category: 'playa',
    localization: 'Dakar, Senegal',
    airport: 'DRK'
  },
  {
    name: 'Fuzhou',
    url: 'https://res.cloudinary.com/ousmane11/image/upload/v1565073263/Fuzhou_China_gundam-YxJVijPhzfg-unsplash_lstcke.jpg',
    lat: 26.0774954,
    lon: 119.2918215,
    category: 'ciudad',
    localization: 'Fuzhou, China',
    airport: 'FOC'
  },
  {
    name: 'Granada Nicaragua',
    url: 'https://res.cloudinary.com/ousmane11/image/upload/v1565073265/tyler-donaghy-U65zwzp3V9k-unsplash_v1xzhu.jpg',
    lat: 11.9347,
    lon: -85.9588,
    category: 'cultural',
    localization: 'Granada, Nicaragua',
    airport: 'MGA'
  },
  {
    name: 'White Poket, Arizona',
    url: 'https://res.cloudinary.com/ebg-ester/image/upload/v1565082660/webmad0719/VisualTrip/White%20Poket.jpg',
    lat: 36.955821,
    lon: -111.904084,
    category: 'naturaleza',
    localization: 'Arizona, EEUU',
    airport: 'PHX'
  },
  {
    name: 'Redang- Island',
    url:
      'https://res.cloudinary.com/ousmane11/image/upload/v1565073264/Redang_Island_Kuala_Terengganu_Malaysia_www-journeytoplaces-com-423lumJ9s7c-unsplash_j2tyj0.jpg',
    lat: 5.78185,
    lon: 103.01099999999997,
    category: 'playa',
    localization: 'Isla Redang, Malasia',
    airport: 'RBN'
  },
  {
    name: 'Bangkok TH',
    url: 'https://res.cloudinary.com/dalvmqu1q/image/upload/v1564993626/pad_thai_tailandesa_auhnfz.jpg',
    lat: 13.75,
    lon: 100.516667,
    category: 'gastronomia',
    localization: 'Bangkok, Tailandia',
    airport: 'BKK'
  },
  {
    name: 'Mgarr, Malta',
    url: 'https://res.cloudinary.com/ebg-ester/image/upload/v1565082641/webmad0719/VisualTrip/Mgarr.jpg',
    lat: 35.923932,
    lon: 14.343845,
    category: 'naturaleza',
    localization: 'Malta',
    airport: 'MLA'
  },
  {
    name: 'Barron Falls, Australia',
    url: 'https://res.cloudinary.com/ebg-ester/image/upload/v1565082685/webmad0719/VisualTrip/Barron%20Falls.jpg',
    lat: -16.832645,
    lon: 145.643732,
    category: 'naturaleza',
    localization: 'Australia',
    airport: 'CNS'
  },
  {
    name: 'Tokyo JP',
    url: 'https://res.cloudinary.com/dalvmqu1q/image/upload/v1564993626/sushi_japonesa_q9fwzo.jpg',
    lat: 35.7649,
    lon: 140.38845,
    category: 'gastronomia',
    localization: 'Tokio, Japón',
    airport: 'HND'
  },
  {
    name: 'Mallorca cala des moro',
    url:
      'https://res.cloudinary.com/ousmane11/image/upload/v1565073264/Mallorca_Cala_des_Moro%CC%81_reiseuhu-aue3vSw8DQQ-unsplash_vxqu9e.jpg',
    lat: 39.504776,
    lon: 3.301722,
    category: 'playa',
    localization: 'Mallorca, España',
    airport: 'PMI'
  }
]

Places.create(places, err => {
  if (err) {
    throw err
  }
  console.log(`Created, ${places.length} places`)
  mongoose.connection.close()
})
