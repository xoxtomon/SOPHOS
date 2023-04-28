import React from 'react';
import { Typography } from '@mui/material';
import Add from './Add';
import Delete from './Delete';
import Edit from './Edit';
import Search from './Search';

const TABS = [
    {
        label: 'Cliente',
        options: ['Search', 'Add', 'Edit', 'Delete'],
        components: [Search, Add, Edit, Delete],
    },
    {
        label: 'Juego',
        options: ['Search', 'Add', 'Edit', 'Delete'],
        components: [Search, Add, Edit, Delete],
    },
    {
        label: 'Alquiler',
        options: ['Search', 'Add', 'Edit', 'Delete'],
        components: [Search, Add, Edit, Delete],
    },
    {
        label: 'Precio',
        options: ['Search', 'Add', 'Edit', 'Delete'],
        components: [Search, Add, Edit, Delete],
    },
];

export default function MyForm(props) {
    const { tabType, optionType } = props;
    const tabIndex = parseInt(tabType, 10);
    const optionIndex = TABS[tabIndex].options.indexOf(optionType);

    if (optionIndex < 0) {
        return null;
    }

    const FormComponent = TABS[tabIndex].components[optionIndex];

    return (
        <div>
            <Typography variant="h5">
                {optionType} {TABS[tabIndex].label}
            </Typography>
            <FormComponent tabOption={tabIndex} />
        </div>
    );
}
