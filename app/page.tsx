import SearchBar from '@/components/Searchbar'
import Hero from '@/components/hero/Hero'
import { AppSections } from '@/types'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id={AppSections.CarCatalogue}>
        <div className='flex flex-col items-start justify-start gap-y-2.5 text-black-100'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>
      </div>

      <div className='mt-12 w-full flex-between flex-wrap gap-5'>
        <SearchBar />
      </div>
    </main>
  )
}
