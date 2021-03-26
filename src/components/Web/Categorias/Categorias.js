import React from 'react';
import { Menu,Divider } from 'antd';
import { SmileTwoTone, FilterTwoTone, CheckCircleTwoTone,PlusCircleTwoTone } from '@ant-design/icons';

import './Categorias.scss';

export default function Categorias() {
    return (
        <div className='categorias'>
             <Divider plain>Categorias</Divider>
            <Menu>
                
                <Menu.Item icon={<CheckCircleTwoTone  twoToneColor="#eb2f96"/>}>
                    Categoria 1
                </Menu.Item>
                <Menu.Item icon={<SmileTwoTone twoToneColor="#eb2f96" />}>
                    Categoria 2
                </Menu.Item>
                <Menu.Item icon={<PlusCircleTwoTone twoToneColor="#eb2f96"/>}>
                    Categoria 3
                </Menu.Item>
                <Menu.Item icon={<FilterTwoTone twoToneColor="#eb2f96"/>}>
                    Categoria 4
                </Menu.Item>
                
            </Menu>
            <Divider plain>Los más vistos</Divider>

            <div>
                <p>codigo...</p>
                <br/>
                <br/>
                <br/>
                <p>codigo...</p>
                <br/>
                <br/>
                <br/>
                <p>codigo...</p>
                <br/>
                <br/>
                <br/>
            </div>
        </div>
           
        
    )
}
