import YellowBox from '../../assets/img/yl-material.png';
import DarkGreyBox from '../../assets/img/dgy-material.png';
import MedGreyBox from '../../assets/img/mgy-material.png';
import LightGreyBox from '../../assets/img/lgy-material.png';
import BlueBox from '../../assets/img/bl-material.png';
import LightGreenBox from '../../assets/img/lgn-material.png';
import OrangeBox from '../../assets/img/og-material.png';

import YellowGlass from '../../assets/img/ylgl-material.png';
import BlurGlass from '../../assets/img/bugl-material.png';
import ClearGlass from '../../assets/img/cgl-material.png';
import BlackGlass from '../../assets/img/bkgl-material.png';
import BlueGlass from '../../assets/img/blgl-material.png';
import NeoGlass from '../../assets/img/neo-material.png';
import OrangeGlass from '../../assets/img/oggl-material.png';

import ClearStandOff from '../../assets/img/clear-standoff.png';
import BlackStandOff from '../../assets/img/black-standoff.png';
import GoldStandOff from '../../assets/img/gold-standoff.png';
import SilverStandOff from '../../assets/img/silver-standoff.png';
import WhiteStandOff from '../../assets/img/white-standoff.png';

import BlackLaminate from '../../assets/img/black-laminate.png';
import GreyLaminate from '../../assets/img/grey-laminate.png';
import CharcoalLaminate from '../../assets/img/charcoal-laminate.png';

const materialData = {
    transparent: [

        {
            image: ClearGlass,
            text: 'Clear'
        },

        {
            image: BlurGlass,
            text: 'Frosted'
        },

        {
            image: YellowGlass,
            text: 'Transparent Yellow'
        },

        {
            image: OrangeGlass,
            text: 'Transparent Orange'
        },

        {
            image: NeoGlass,
            text: 'Transparent Green'
        },

        {
            image: BlueGlass,
            text: 'Transparent Blue'
        },

        {
            image: BlackGlass,
            text: 'Transparent Grey'
        },
    ],
    opaque: [
        {
            image: YellowBox,
            text: 'Yellow'
        },

        {
            image: OrangeBox,
            text: 'Orange'
        },

        {
            image: LightGreenBox,
            text: 'Green'
        },

        {
            image: DarkGreyBox,
            text: 'Black'
        },

        {
            image: LightGreyBox,
            text: 'White'
        },

        {
            image: BlueBox,
            text: 'Blue'
        },

        {
            image: MedGreyBox,
            text: 'Grey'
        },
    ],
    standoff: [
        {
            image: BlackStandOff,
            text: 'Black StandOff',
        },
        {
            image: SilverStandOff,
            text: 'Silver StandOff',
        },
        {
            image: GoldStandOff,
            text: 'Gold StandOff',
        },
        {
            image: WhiteStandOff,
            text: 'White StandOff',
        },
        {
            image: ClearStandOff,
            text: 'Clear StandOff',
        },
    ],
    laminate: [
        {
            image: BlackLaminate,
            text: 'Black'
        },
        {
            image: LightGreyBox,
            text: 'White'
        },
        {
            image: GreyLaminate,
            text: 'Grey'
        },
        {
            image: CharcoalLaminate,
            text: 'Charcoal'
        },
    ],
}

export default materialData;