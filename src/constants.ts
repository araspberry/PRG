export interface Agent {
  id: string;
  name: string;
  title: string;
  image: string;
  phone?: string;
  email?: string;
}

export const AGENTS: Agent[] = [
  {
    id: '1',
    name: 'Dana Pullum',
    title: 'Broker / Owner',
    image: '/input_file_0.png',
  },
  {
    id: '2',
    name: 'Gene Pullum',
    title: 'Broker / Owner',
    image: '/input_file_1.png',
  },
  {
    id: '3',
    name: 'Chris Pullum',
    title: 'Realtor®',
    image: '/input_file_2.png',
  },
  {
    id: '4',
    name: 'Teresa Pullum',
    title: 'Realtor®',
    image: '/input_file_6.png',
  },
  {
    id: '5',
    name: 'Kimberly Pullum',
    title: 'Realtor®',
    image: '/input_file_8.png',
  },
  {
    id: '6',
    name: 'Team Member',
    title: 'Luxury Specialist',
    image: '/input_file_3.png',
  },
  {
    id: '7',
    name: 'Team Member',
    title: 'Property Advisor',
    image: '/input_file_4.png',
  },
  {
    id: '8',
    name: 'Team Member',
    title: 'Market Expert',
    image: '/input_file_5.png',
  },
  {
    id: '9',
    name: 'Team Member',
    title: 'Senior Associate',
    image: '/input_file_7.png',
  },
  {
    id: '10',
    name: 'Team Member',
    title: 'Property Specialist',
    image: '/input_file_10.png',
  },
];

export const SERVICE_AREAS = [
  'Navarre & Gulf Breeze',
  'Destin',
  'Fort Walton Beach',
  'Niceville',
  'N. Santa Rosa County',
  'N. Santa Rosa Beach',
  'Miramar Beach',
];

export const IDX_LINKS: Record<string, string> = {
  'Navarre & Gulf Breeze': '//link.flexmls.com/12eko9oqi62k,15',
  'Destin': '//link.flexmls.com/12fm8vkxrf7a,15',
  'Fort Walton Beach': '//link.flexmls.com/12fm8vnpca7o,15',
  'Niceville': '//link.flexmls.com/12fm8vuejkkr,15',
  'N. Santa Rosa County': '//link.flexmls.com/12fm8w4aggem,15',
  'N. Santa Rosa Beach': '//link.flexmls.com/12fm8violsrm,15',
  'Miramar Beach': '//link.flexmls.com/12fm8w7ey3rp,15',
};

export const RENTALS_LINK = '//link.flexmls.com/1apv5r7mvpb5,15';
