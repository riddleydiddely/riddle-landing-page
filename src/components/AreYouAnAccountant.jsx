import Image from 'next/image'

import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'
import backgroundImage from '@/images/background-call-to-action.jpg'

const content = [
  {
    title: "Are you an Ecommerce Merchant?",
    body: "We understand that your setup might be a bit more complicated. Don’t worry, we understand.",
    cta: "Lets talk"
  },
  {
    title: "Are you a Marketplace?",
    body: "High volume often means more complexity. We’re building something special with you in mind",
    cta: "Get notified"
  },
  {
    title: "Are you an Accounting Firm?",
    body: "If you’re an accountant managing a portfolio of clients, we are coming up with a dedicated platform for you and your colleagues soon.",
    cta: "Drop us a note"
  }
]

export function AreYouAnAccountant() {
  return (
    <section id='whoareyou'>

    <div className='bg-auto '>
       <Image
        className="absolute -z-20 h-full w-full object-cover"
        src={backgroundImage}
        height={1000}
        alt=""
        unoptimized
      />
        <Container className={"z-auto py-20 "}>
          <div className=" md:text-center mb-10">
            <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl ">
              Not all needs are the same.
            </h2>
            <p className="mt-4 text-lg tracking-tight text-white">
              {"It's ok, we are here for you."}
            </p>
          </div>
          <div >
            <div className="grid gap-x-8 gap-y-5 my-10
                      sm:grid-cols-2
                      md:grid-cols-2
                      lg:grid-cols-2
                      xl:grid-cols-2 ">
              {content.map((item, key) => (
                <div key={key} class="flex flex-col gap-6 rounded-3xl p-8 ring-1  sm:p-10 lg:flex-row lg:items-center lg:gap-8 bg-white shadow-2xl">
                  <div className="lg:min-w-0 lg:flex-1">
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-black">{item.title}</h3>
                    <div className="mt-2 text-sm leading-5 text-gray-600">{item.body}
                    </div>
                  </div>
                  <div>
                  <a href="https://tally.so#tally-open=w4BXjX&tally-emoji-text=👋&tally-emoji-animation=wave">
                  
                    <div className="inline-block rounded-lg shadow-md bg-blue-50 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-blue-700 hover:bg-blue-100 cursor-pointer">
                    {item.cta}
                      <span aria-hidden="true"> →</span>
                    </div>
                  </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
    </div>
    </section>
  )
}
