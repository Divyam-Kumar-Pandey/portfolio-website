'use client';

import CountUp from 'react-countup';

const stats = [
    {
        count: 8,
        title: "Months of Working Experience"
    },
    {
        count: 10,
        title: "Self Projects"
    },
    {
        count: 500,
        title: "Cups of Coffee"
    }
]

const Stats = () => {
  return (
    <section className='pt-4 pb-12 xl:py-0'>
        <div className='container mx-auto'>
            <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none'>
                {stats.map((stat, index) => (
                    <div key={index} className='flex-1 flex items-center justify-center gap-4 xl:justify-start'>
                        <CountUp end={stat.count} duration={5} delay={2} className='text-4xl xl:text-6xl font-extrabold' />
                        <span className={`max-w-[100px] leading-snug text-white/80`}>{stat.title}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Stats