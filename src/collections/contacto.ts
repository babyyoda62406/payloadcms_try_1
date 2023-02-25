import { CollectionConfig } from 'payload/types';


const Contacto: CollectionConfig = {
  slug: 'Contacto',
  admin: {
    useAsTitle: 'nombre',
  },
  fields: [
    {
      name: 'nombre',
      type: 'text',
    },
    {
      name: 'numero',
      type: 'text',
    },
  ],
}

export default Contacto;