data[0] = {
  "type": "flight-offer",
  "id": "1",
  "source": "GDS",
  "instantTicketingRequired": false,
  "nonHomogeneous": false,
  "oneWay": false,
  "lastTicketingDate": "2019-08-07",
  "numberOfBookableSeats": 9,
  "itineraries": [
    {
      "duration": "PT1H25M",
      "segments": [
        {
          "departure": {
            "iataCode": "MAD",
            "terminal": "2",
            "at": "2020-01-01T07:30:00"
          },
          "arrival": {
            "iataCode": "BCN",
            "terminal": "1",
            "at": "2020-01-01T08:55:00"
          },
          "carrierCode": "UX",
          "number": "7701",
          "aircraft": {
            "code": "332"
          },
          "operating": {
            "carrierCode": "UX"
          },
          "duration": "PT1H25M",
          "id": "19",
          "numberOfStops": 0,
          "blacklistedInEU": false
        }
      ]
    },
    {
      "duration": "PT1H20M",
      "segments": [
        {
          "departure": {
            "iataCode": "BCN",
            "terminal": "1",
            "at": "2020-01-05T06:55:00"
          },
          "arrival": {
            "iataCode": "MAD",
            "terminal": "2",
            "at": "2020-01-05T08:15:00"
          },
          "carrierCode": "UX",
          "number": "7704",
          "aircraft": {
            "code": "73H"
          },
          "operating": {
            "carrierCode": "UX"
          },
          "duration": "PT1H20M",
          "id": "29",
          "numberOfStops": 0,
          "blacklistedInEU": false
        }
      ]
    }
  ],
  "price": {
    "currency": "EUR",
    "total": "81.79",
    "base": "40.00",
    "fees": [
      {
        "amount": "0.00",
        "type": "SUPPLIER"
      },
      {
        "amount": "0.00",
        "type": "TICKETING"
      }
    ],
    "additionalServices": [
      {
        "amount": "60.00",
        "type": "CHECKED_BAGS"
      }
    ]
  },
  "pricingOptions": {
    "fareType": [
      "PUBLISHED"
    ],
    "includedCheckedBagsOnly": false
  },
  "validatingAirlineCodes": [
    "UX"
  ],
  "travelerPricings": [
    {
      "travelerId": "1",
      "fareOption": "STANDARD",
      "travelerType": "ADULT",
      "price": {
        "currency": "EUR",
        "total": "81.79",
        "base": "40.00"
      },
      "fareDetailsBySegment": [
        {
          "segmentId": "19",
          "cabin": "ECONOMY",
          "fareBasis": "NDYY5L",
          "brandedFare": "LITE",
          "class": "N",
          "includedCheckedBags": {
            "quantity": 0
          }
        },
        {
          "segmentId": "29",
          "cabin": "ECONOMY",
          "fareBasis": "ZD1Y5L",
          "brandedFare": "LITE",
          "class": "Z",
          "includedCheckedBags": {
            "quantity": 0
          }
        }
      ]
    }
  ]
}
