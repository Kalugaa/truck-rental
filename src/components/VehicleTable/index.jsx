import React from 'react';
import { H3, Hr, Table, TableData, Tr } from './VehicleTable.styled';


export const VehicleTable = ({ items }) => {
    const { length, width, height, tank, consumption } = items

    let { form } = items

    switch (form) {
        case 'panelTruck':
            form = 'Panel Truck';
            break;
        case 'alcove':
            form = 'Alcove';
            break;
        case 'fullyIntegrated':
            form = 'Fully Integrated';
            break;
        default:
            form = '';
            break;
    }

    return (<div>
        <H3>Vehicle details</H3>
        <Hr />
        <Table>
            <thead>
                <Tr>
                    <TableData>Form</TableData>
                    <TableData>{form}</TableData>
                </Tr>
            </thead>
            <tbody>
                <Tr>
                    <TableData>Length</TableData>
                    <TableData>{length}</TableData>
                </Tr>
                <Tr>
                    <TableData>Width</TableData>
                    <TableData>{width}</TableData>
                </Tr>
                <Tr>
                    <TableData>Height</TableData>
                    <TableData>{height}</TableData>
                </Tr>
                <Tr>
                    <TableData>Tank</TableData>
                    <TableData>{tank}</TableData>
                </Tr>
            </tbody>
            <tfoot>
                <Tr>
                    <TableData>Consumption</TableData>
                    <TableData>{consumption}</TableData>
                </Tr>
            </tfoot>

        </Table >
    </div>
    );
};
