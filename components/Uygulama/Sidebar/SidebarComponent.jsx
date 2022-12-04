import React from 'react';
import { Sidenav, Nav, Toggle, Dropdown, IconButton } from 'rsuite';
import { data } from '../../../assets/data';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import PlusIcon from '@rsuite/icons/Plus';


import { useDispatch } from 'react-redux';
import {
    changeMakam,
    changeAltMakam,
    changeName,
    changeAdress,
    changeAltust,
    changeTc,
    changeCountry,
    changePhone,
    changeText,
    changeDate

} from "../../../store/dilekceSlice";

const renderIconButton = (props, ref) => {
    return (
        <IconButton {...props} ref={ref} icon={<PlusIcon />} color="blue" appearance="primary">
            Ornek
        </IconButton>
    );
};

const SidebarComponent = () => {
    const dispatch = useDispatch();
    const listItems = data.map((d, i) =>
        <div key={i}>

            <Dropdown.Item
                onClick={() => {


                    dispatch(changeText(data[i].text));
                    dispatch(changeMakam(data[i].makam));
                    dispatch(changeAltMakam(data[i].altMakam));
                    dispatch(changeTc(data[i].tc));
                }
                }

                content={d.makam}> {d.title}</Dropdown.Item>
            <br />
        </div>


    );

    return (
        <div className='sidebar' >


            <Dropdown renderToggle={renderIconButton} placement="leftStart">
                {listItems}
            </Dropdown>
        </div >
    );
};

export default SidebarComponent