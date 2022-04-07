
const products = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      imageSrc: '/asset/1.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: '/asset/4.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: '/asset/5.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 5,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: '/asset/11.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 5,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: '/asset/14.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
    // More products...
  ]


  const products1 = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      imageSrc: '/asset/2.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: '/asset/3.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: '/asset/6.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 5,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: '/asset/7.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 5,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: '/asset/9.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 5,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: '/asset/15.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
    // More products...
  ]

  const products2 = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      imageSrc: '/asset/8.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: '/asset/10.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: '/asset/12.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 5,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: '/asset/13.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
    // More products...
  ]

  const callouts = [
    {
      name: 'Delivery',
      description: 'Deliver at your home',
      icon: <MdDeliveryDining size={50} className="text-white" />,
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      name: 'Pickup',
      description: 'Reserve as your menu',
    icon: <GiCardPickup size={50}  className="text-white"/>,
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
      name: 'Dine-in',
      description: 'Enjoy as your dine-in menu',
      icon: <ImSpoonKnife size={50} className="text-white" />,
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
  ]

  import { ImSpoonKnife } from 'react-icons/im'
  import { GiCardPickup } from 'react-icons/gi'
  import { MdDeliveryDining } from 'react-icons/md'
  import Image from 'next/image'
  
  export default function Order() {
    return (
        
        <div className="bg-white  mt-10 sm:mt-5 dark:bg-gray-900">

            <div className="bg-gray-100 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                    {/* <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">Order Page</h2> */}

                    <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                        {callouts.map((callout) => (
                        <div key={callout.name} className="group relative">
                            {callout.icon}
                            
                            <h3 className="mt-6 text-md text-orange-500 font-semibold">
                            <a href={callout.href}>
                                <span className="absolute inset-0" />
                                {callout.name}
                            </a>
                            </h3>
                            <p className="text-base font-semibold text-white">{callout.description}</p>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>
                </div>

        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight  text-gray-900 dark:text-white">All day breakfast</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    layout='fill'
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-white font-medium">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-orange-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-orange-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">Specials</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products1.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    layout='fill'
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-white font-medium">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-orange-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-orange-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">Specials</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products2.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    layout='fill'
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-white font-medium">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-orange-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-orange-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  