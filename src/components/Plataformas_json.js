import ImagePlataforma1 from '../../src/assets/img/background-card6.jpg';
import ImagePlataforma2 from '../../src/assets/img/background-card2.jpg';
import ImagePlataforma3 from '../../src/assets/img/background-card3.jpg';
import ImagePlataforma4 from '../../src/assets/img/background-card4.jpg';
import ImagePlataforma5 from '../../src/assets/img/background-card5.jpg';
//import ImagePlataforma6 from '../../src/assets/img/background-card6.jpg';

const uriBase = "http://scienceportal-dev.linea.gov.br/";

export default (
    [{
            "id": 1,
            "uriImage": ImagePlataforma1,
            "title": "Dashboard",
            "description": "Lorem ipsum arcu felis dictum adipiscing vitae cras. ",
            "uri": `${uriBase}dashboard/`,
            "icon": 'border-all'
        },
        {
            "id": 2,
            "uriImage": ImagePlataforma2,
            "title": "Monitor",
            "description": "Lorem ipsum arcu felis dictum adipiscing vitae cras. ",
            "uri": `${uriBase}monitor/`,
            "icon": 'television'
        },
        {
            "id": 3,
            "uriImage": ImagePlataforma3,
            "title": "Science Products",
            "description": "Lorem ipsum arcu felis dictum adipiscing vitae cras. ",
            "uri": `${uriBase}science-products/`,
            "icon": 'flask'
        },
        {
            "id": 4,
            "uriImage": ImagePlataforma4,
            "title": "User Interfaces",
            "description": "Lorem ipsum arcu felis dictum adipiscing vitae cras. ",
            "uri": `${uriBase}user-interface/`,
            "icon": 'users'
        },
        {
            "id": 5,
            "uriImage": ImagePlataforma5,
            "title": "My Workspace",
            "description": "Lorem ipsum arcu felis dictum adipiscing vitae cras. ",
            "uri": `${uriBase}my-workspace/`,
            "icon": 'server'
        }
    ]
)