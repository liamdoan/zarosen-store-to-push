import Bg1 from '../images/bg1.png';
import Bg2 from '../images/bg2.jpg';
import BgBoots1 from '../images/bg3-1.jpg';
import BgBoots2 from '../images/bg3-2.jpg';
import BgBoots3 from '../images/bg3-3.jpg';
import ImgDress from '../images/img-dress.jpg';
import ImgBoots from '../images/img-boots.jpg';
import ImgJacket from '../images/img-jacket.jpg';
import Blog1 from '../images/blog1.jpg';
import Blog2 from '../images/blog2.jpg';
import Blog3 from '../images/blog3.jpg';
import Blog4 from '../images/blog4.jpg';
import Blog5 from '../images/blog5.jpg';
import Blog6 from '../images/blog6.jpg';
import Blog7 from '../images/blog7.jpg';

export const sliderItems = [
    {
        id: 1,
        img: Bg1,
        subTitle: 'Empire Collection',
        title: 'Everyone desires',
        desc: 'Discount 30% for new arrivals',
        background: 'gray',
        align: 'start',
        position: '79% 0',
        backgroundLayer: `linear-gradient( 
            to right, 
            rgba(0,0,0,0.15), 
            rgba(0,0,0,0.15), 
            rgba(0,0,0,0), 
            rgba(0,0,0,0) )`,
        borderLeft: '4px solid #CBBA9C',
        fontSize: 'clamp(2rem, 5vw, 8rem)',
        infoLayer: 'rgba(0,0,0,0.3)',
        visibilityInlineBtn: 'hidden',
        categorySlide: 'men',
    },
    {
        id: 2,
        img: Bg2,
        subTitle: 'Embrace the inner beauty',
        title: 'Live in style',
        desc: 'Discount 40% for new arrivals',
        background: 'purple',
        align: 'end',
        position: '11% 0',
        backgroundLayer: `linear-gradient( 
            to right, 
            rgba(0,0,0,0), 
            rgba(0,0,0,0), 
            rgba(0,0,0,0.15), 
            rgba(0,0,0,0.15) )`,
        borderRight: '4px solid #CBBA9C',
        fontSize: 'clamp(2rem, 5vw, 8rem)',
        infoLayer: 'rgba(0,0,0,0.3)',
        visibilityInlineBtn: 'hidden',
        categorySlide: 'women',
    },
    {
        id: 3,
        img2: BgBoots1,
        backgroundLayer2: `rgba(0,0,0,0.35)`,
        img3: BgBoots2,
        backgroundLayer3: `rgba(0,0,0,0)`,
        img4: BgBoots3,
        backgroundLayer4: `rgba(0,0,0,0.35)`,
        inlineTitle: 'Step Up Your Boots Game',
        inlineDesc: 'Discount 50% for new arrivals',
        align: 'start',
        position2: '60% 25%',
        position3: '60% 80%',
        position4: '20% 100%',
        inlineFontSize: 'clamp(2rem, 2.5vw, 8rem)',
        visibility: 'hidden',
        visibilityInlineBtn: 'visible',
        inlineCategory: 'boots',
    },
];

export const categories = [
    {
        id: 1,
        img: ImgJacket,
        title: 'Jacket',
        category: 'jacket',
    },
    {
        id: 2,
        img: ImgDress,
        title: 'Dress',
        category: 'dress',
    },
    {
        id: 3,
        img: ImgBoots,
        title: 'Boots',
        category: 'boots',
    },
];

export const blogs = [
    {
        id: 1,
        img: Blog1,
        date: 'June 18, 2021',
        title: 'What would be a perfect gift?',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laborum magnam consequatur quisquam perferendis inventore unde, quo consectetur cum architecto beatae iusto provident. Distinctio, dolore aliquid itaque nemo ab officia.',
    },
    {
        id: 2,
        img: Blog2,
        date: 'June 18, 2021',
        title: 'Helsinki Fashion Week: The path for Eco-Conscious fashion',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus nihil cupiditate reprehenderit repellendus voluptate earum voluptates enim quidem odit consequuntur.',
    },
    {
        id: 3,
        img: Blog3,
        date: 'June 18, 2021',
        title: 'From men to gentlemen, what is the journey?',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae numquam a temporibus.',
    },
    {
        id: 4,
        img: Blog4,
        date: 'June 18, 2021',
        title: 'What coats to wear for this cold season?',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quisquam, quos deserunt numquam a.',
    },
    {
        id: 5,
        img: Blog5,
        date: 'June 18, 2021',
        title: '10 small changes that could make big differences',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quisquam, quos deserunt numquam a temporibus, um dolor sit amet consectetur ',
    },
    {
        id: 6,
        img: Blog6,
        date: 'June 18, 2021',
        title: 'Summer is about to be ready, how about you?',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quisquam, quos deserunt numquam a temporibus.',
    },
    {
        id: 7,
        img: Blog7,
        date: 'June 18, 2021',
        title: 'Stay classy, too easy!',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quisquam, quos deserunt numquam a temporibus.',
    },
];
