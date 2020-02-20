import ImagePlataforma from '../../src/assets/img/linea.png';

const uriBase = "http://scienceportal-dev.linea.gov.br/";

export default (
    [{
            "id": 1,
            "uriImage": ImagePlataforma,
            "title": "DES Science Portal Dashboard",
            //"description": "Lorem ipsum arcu felis dictum adipiscing vitae cras, morbi viverra semper ultrices sed non, et fermentum luctus risus gravida condimentum. ",
            "uri": `${uriBase}dashboard/`
        },
        {
            "id": 2,
            "uriImage": ImagePlataforma,
            "title": "Portal Monitor",
            //"description": "A Amazon Web Services oferece serviços de computação em nuvem confiáveis, escaláveis e acessíveis. ",
            "uri": `${uriBase}monitor/`
        },
        {
            "id": 3,
            "uriImage": ImagePlataforma,
            "title": "Science Products",
            //"description": "Google Cloud Platform é uma suíte de computação em nuvem oferecida pelo Google. ",
            "uri": `${uriBase}science-products/`
        },
        {
            "id": 4,
            "uriImage": ImagePlataforma,
            "title": "Portal User Interfaces",
            //"description": "Google Cloud Platform é uma suíte de computação em nuvem oferecida pelo Google. ",
            "uri": `${uriBase}user-interface/`
        },
        {
            "id": 5,
            "uriImage": ImagePlataforma,
            "title": "Portal My Workspace",
            //"description": "Lorem ipsum arcu felis dictum adipiscing vitae cras, morbi viverra semper ultrices sed non, et fermentum luctus risus gravida condimentum, Lorem ipsum arcu felis dictum adipiscing vitae cras, morbi viverra semper ultrices sed non, et fermentum luctus risus gravida condimentum. ",
            "uri": `${uriBase}my-workspace/`
        }
    ]
)