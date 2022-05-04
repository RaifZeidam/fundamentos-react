import './App';
import React from 'react';

import Primeiro from './components/Basicos/Primeiro';
import ComParametro from './components/Basicos/ComParametro';
import ComFilhos from './components/Basicos/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from './components/Basicos/Repeticao';
import Condicional from './components/Basicos/Condicional';
import CondicionalComIf from './components/Basicos/CondicionalComIf';

export default (props) => (
    <div className="App">
        <Card titulo="#05 - Condicional v2">
            <CondicionalComIf numero={10}></CondicionalComIf>
        </Card>
        <Card titulo="#05 - Condicional v1">
            <Condicional numero={11}></Condicional>
        </Card>
        <Card titulo="#04 - Repetição">
            <Repeticao></Repeticao>
        </Card>
        <Card titulo="#03 - Componente Com Filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#02 - Componente Com Parametro">
            <ComParametro titulo="Esse é o título"
                subtitulo="Esse é o subtítulo" />
        </Card>
        <Card titulo="#01 - Primeiro Componente">
            <Primeiro />
        </Card>
    </div>
);