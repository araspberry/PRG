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
    name: 'Ashley Brown',
    title: 'Realtor®',
    image: 'https://pullumregroup.s3.us-east-1.amazonaws.com/Ashley+Brown.jpg',
  },
  {
    id: '2',
    name: 'Bart Pullum',
    title: 'Realtor®',
    image: 'https://pullumregroup.s3.us-east-1.amazonaws.com/Bart+Pullum.png',
  },
  {
    id: '3',
    name: 'Bill Crawfords',
    title: 'Realtor®',
    image: 'https://pullumregroup.s3.us-east-1.amazonaws.com/Bill+Crawfords.jpg',
  },
  {
    id: '4',
    name: 'Chaester Gamble',
    title: 'Realtor®',
    image: 'https://pullumregroup.s3.us-east-1.amazonaws.com/Chaester+Gamble.png',
  },
  {
    id: '5',
    name: 'David Wood',
    title: 'Realtor®',
    image: 'https://pullumregroup.s3.us-east-1.amazonaws.com/David+Wood.png',
  },
  {
    id: '6',
    name: 'Frank Oatman',
    title: 'Realtor®',
    image: 'https://pullumregroup.s3.us-east-1.amazonaws.com/Frank+Oatman.jpg',
  },
  {
    id: '7',
    name: 'Pat Ynesta',
    title: 'Realtor®',
    image: 'https://pullumregroup.s3.us-east-1.amazonaws.com/Pat+Ynesta.png',
  },
  {
    id: '8',
    name: 'Phil Price',
    title: 'Realtor®',
    image: 'https://pullumregroup.s3.us-east-1.amazonaws.com/Phil+Price.jpg',
  },
  {
    id: '9',
    name: 'Samantha Smith',
    title: 'Realtor®',
    image: 'https://pullumregroup.s3.us-east-1.amazonaws.com/Samantha+Smith.jpg',
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
