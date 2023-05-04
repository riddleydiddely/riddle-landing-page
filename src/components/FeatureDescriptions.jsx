
import { ChatBubbleOvalLeftEllipsisIcon, HeartIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import { AiOutlineHourglass, AiOutlineFastForward, AiOutlineExport, AiOutlineDatabase } from "react-icons/ai";



const features = [
  {
    name: 'Move Faster, Reduce Stress',
    description:
      'Riddle takes away the tedious work so you can focus on what matters most.',
    icon: <AiOutlineFastForward className='text-white text-2xl' />,
  },
  {
    name: 'Onboard in minutes, not months',
    description: 'No more developer support and expensive consultant hires. Integrate your techstack with Riddle and get started',
    icon: <AiOutlineHourglass className='text-white text-2xl' />,
  },
  {
    name: 'Connect',
    description:
      'Integrate your Order Management System, Payment Gateways and Bank Accounts, so we can pull all of the transaction data and do the dirty work for you',
    icon: <AiOutlineDatabase className='text-white text-2xl' />,
  },
  {
    name: 'Export',
    description:
      'We know teams work in different ways. We can push the data into your ERP/Accounting System or to a spreadsheet if you’d like.',
    icon: <AiOutlineExport className='text-white text-2xl' />,
  },
]

export default function FeatureDescriptions() {
  return (
    <section
    id='howitworks'>

    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Stay on top of your financial operations
          </h2>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                    {/* <feature.icon className="h-6 w-6 text-white" aria-hidden="true" /> */}
                    {feature.icon}
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </section>
  )
}
