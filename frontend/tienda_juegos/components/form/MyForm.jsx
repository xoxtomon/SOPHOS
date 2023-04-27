import React from 'react';
import { Typography } from '@mui/material';
import Add from './Add';
import Delete from './Delete';
import Edit from './Edit';
import Search from './Search';

const actionOption = {
    'Search': 0,
    'Add': 1,
    'Edit': 2,
    'Delete': 3
}
const tabOption = {
    0: 'Cliente',
    1: 'Juego',
    2: 'Alquiler',
    3: 'Precio'
}
const form = {
    // Cliente
    '00': <Search tabOption={0} />,
    '01': <Add tabOption={0} />,
    '02': <Edit tabOption={0} />,
    '03': <Delete tabOption={0} />,
    //  Juego
    '10': <Search tabOption={1} />,
    '11': <Add tabOption={1} />,
    '12': <Edit tabOption={1} />,
    '13': <Delete tabOption={1} />,
    //  Alquiler
    '20': <Search tabOption={2} />,
    '21': <Add tabOption={2} />,
    '22': <Edit tabOption={2} />,
    '23': <Delete tabOption={2} />,
    //  Precio
    '30': <Search tabOption={3} />,
    '31': <Add tabOption={3} />,
    '32': <Edit tabOption={3} />,
    '33': <Delete tabOption={3} />,
}

export default function MyForm(props) {
    let { tabType, optionType } = props;
    let option = `${tabType}${actionOption[optionType]}`;
    return (
        <div>
            <Typography variant="h5">
                {optionType} {tabOption[tabType]}
            </Typography>
            {form[option]}
        </div>
    )
}