import { IProduct } from "../models/prod";
export const products: IProduct[]=[
    {
        name: 'Sensor 1',
        model: 'PC1212',
        type: 'Pressure',
        range: '0-16',
        unit: 'bar',
        location: 'Room1'
    },
    {
        name: 'Sensor 2',
        model: 'EH-567',
        type: 'Voltage',
        range: '-25-25',
        unit: 'voltage',
        location: 'Room1'
    },
    {
        name: 'Sensor 3',
        model: 'TER-21',
        type: 'Temperature',
        range: '-70-50',
        unit: '*C',
        location: 'Room2'
    },
]